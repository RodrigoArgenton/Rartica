import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Table } from "../ui/Table";

const exampleHistory = [
  { customer: "John Doe", status: "Nova venda registrada", value: "$100.00", time: "2h ago" },
  { customer: "Jane Smith", status: "Nova venda registrada", value: "$150.00", time: "1h ago" },
  { customer: "Maria Silva", status: "Pedido pronto", value: "$200.00", time: "30m ago" },
  { customer: "Carlos Lima", status: "Novo cliente cadastrado", value: "-", time: "Ontem" },
  { customer: "Ana Costa", status: "Nova venda registrada", value: "$80.00", time: "2 dias" },
  { customer: "Pedro Rocha", status: "Nova venda registrada", value: "$60.00", time: "3 dias" },
]

export default function Dashboard() {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Olá, Ótica Visão Clara</h1>
            <p className="text-gray-600">sábado, 21 de fevereiro de 2026</p>
          </div>
          <div>
            <Button variant="primary" className="mt-4">+ Nova Venda</Button>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4">
            <Card variant="customers" title="Total de vliente" value="248" />
            <Card variant="sales" title="Vendas do mês" value="R$ 18.450" />
            <Card variant="production" title="Pedidos em produção" value="12" />
            <Card variant="return" title="Próximos do retorno anual" value="23" />
          </div>
          <div>
            <Table history={exampleHistory} className="mt-10" />
          </div>
        </div>
      </div>
    </div>
  );
}