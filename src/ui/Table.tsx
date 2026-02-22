import { Button } from "./Button";

interface HistoryItem {
  customer: string;
  status: string;
  value: string;
  time: string;
}

interface Customer {
  id: number;
  nome: string;
  telefone: string;
  ultimaCompra: string;
  observacoes: string;
}

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "detailed";
  history?: HistoryItem[];
  customers?: Customer[];
  onEdit?: (customer: Customer) => void;
}


export function Table({
  variant = "default",
  history = [],
  customers = [],
  onEdit,
  className = "",
  ...props
}: TableProps) {
  const limitedHistory = history.slice(0, 5);

  if (variant === "detailed") {
    return (
      <div
        className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${className}`}
        {...props}
      >
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Nome
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Telefone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Última Compra
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Observações
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Ações
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{customer.nome}</td>
                <td className="px-6 py-4 text-gray-500">
                  {customer.telefone}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {customer.ultimaCompra}
                </td>
                <td className="px-6 py-4 text-gray-500">
                  {customer.observacoes}
                </td>
                <td className="px-6 py-4">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onEdit?.(customer)}
                  >
                    Editar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Variante default (atividade recente)
  return (
    <div
      className={`bg-white text-gray-800 rounded-xl shadow-sm p-4 w-full ${className}`}
      {...props}
    >
      <h2 className="text-xl font-semibold mb-4">
        Atividade Recente
      </h2>

      {limitedHistory.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-2 border-b border-gray-200 last:border-none"
        >
          <div>
            <p className="font-medium">{item.customer}</p>
            <p className="text-sm text-gray-500">{item.status}</p>
          </div>

          <div className="text-sm text-gray-500 text-right">
            <p>{item.value}</p>
            <p>{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}