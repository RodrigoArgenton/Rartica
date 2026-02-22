import Fastify from 'fastify';
import postgres from 'postgres';
import { z } from 'zod';

const fastify = Fastify({
  logger: true
});

const sql = postgres({
  host: process.env.POSTGRES_HOST || 'postgres',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  database: process.env.POSTGRES_DB || 'rartica',
  username: process.env.POSTGRES_USER || 'rartica',
  password: process.env.POSTGRES_PASSWORD || 'rartica123',
});

await sql`
  CREATE TABLE IF NOT EXISTS customers (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    ultima_compra DATE,
    observacoes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  )
`;

const customerSchema = z.object({
  nome: z.string().min(1),
  telefone: z.string().min(1),
  ultima_compra: z.string().optional(),
  observacoes: z.string().optional(),
});

type CustomerInput = z.infer<typeof customerSchema>;

interface Customer extends CustomerInput {
  id: number;
  created_at: Date;
}

interface RouteParams {
  id: string;
}

fastify.get('/health', async () => {
  return { status: 'ok' };
});

fastify.get<{ Reply: Customer[] }>('/customers', async () => {
  const customers = await sql<Customer[]>`SELECT * FROM customers ORDER BY id DESC`;
  return customers;
});

fastify.get<{ Params: RouteParams; Reply: Customer | { error: string } }>('/customers/:id', async (request, reply) => {
  const { id } = request.params;
  const customer = await sql<Customer[]>`SELECT * FROM customers WHERE id = ${id}`;
  
  if (customer.length === 0) {
    reply.code(404);
    return { error: 'Customer not found' };
  }
  
  return customer[0];
});

fastify.post<{ Body: CustomerInput; Reply: Customer | { error: unknown } }>('/customers', async (request, reply) => {
  try {
    const data = customerSchema.parse(request.body);
    
    const [customer] = await sql<Customer[]>`
      INSERT INTO customers (nome, telefone, ultima_compra, observacoes)
      VALUES (${data.nome}, ${data.telefone}, ${data.ultima_compra || null}, ${data.observacoes || null})
      RETURNING *
    `;
    
    reply.code(201);
    return customer;
  } catch (error) {
    if (error instanceof z.ZodError) {
      reply.code(400);
      return { error: error.errors };
    }
    throw error;
  }
});

fastify.put<{ Params: RouteParams; Body: CustomerInput; Reply: Customer | { error: unknown } }>('/customers/:id', async (request, reply) => {
  try {
    const { id } = request.params;
    const data = customerSchema.parse(request.body);
    
    const [customer] = await sql<Customer[]>`
      UPDATE customers
      SET nome = ${data.nome},
          telefone = ${data.telefone},
          ultima_compra = ${data.ultima_compra || null},
          observacoes = ${data.observacoes || null}
      WHERE id = ${id}
      RETURNING *
    `;
    
    if (!customer) {
      reply.code(404);
      return { error: 'Customer not found' };
    }
    
    return customer;
  } catch (error) {
    if (error instanceof z.ZodError) {
      reply.code(400);
      return { error: error.errors };
    }
    throw error;
  }
});

fastify.delete<{ Params: RouteParams }>('/customers/:id', async (request, reply) => {
  const { id } = request.params;
  
  const result = await sql`DELETE FROM customers WHERE id = ${id} RETURNING id`;
  
  if (result.length === 0) {
    reply.code(404);
    return { error: 'Customer not found' };
  }
  
  reply.code(204);
});

const start = async () => {
  try {
    await fastify.listen({ 
      port: Number(process.env.PORT) || 3001,
      host: '0.0.0.0'
    });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
