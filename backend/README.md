# Rartica Backend API

API REST usando Fastify, PostgreSQL, Zod, TypeScript e Docker.

## Tecnologias

- TypeScript - Tipagem estática
- Fastify - Framework web
- PostgreSQL - Banco de dados
- Zod - Validação de schemas
- Docker - Containerização

## Endpoints

### Health Check
```
GET /health
```

### Customers

**Listar todos**
```
GET /customers
```

**Buscar por ID**
```
GET /customers/:id
```

**Criar**
```
POST /customers
Content-Type: application/json

{
  "nome": "Maria Silva",
  "telefone": "(11) 98765-4321",
  "ultima_compra": "2026-02-22",
  "observacoes": "Cliente VIP"
}
```

**Atualizar**
```
PUT /customers/:id
Content-Type: application/json

{
  "nome": "Maria Silva",
  "telefone": "(11) 98765-4321",
  "ultima_compra": "2026-02-22",
  "observacoes": "Cliente VIP"
}
```

**Deletar**
```
DELETE /customers/:id
```

## Desenvolvimento

```bash
cd backend
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Produção com Docker

Na raiz do projeto:
```bash
docker-compose up -d
```

API disponível em: http://localhost:3001
