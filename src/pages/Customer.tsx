import { Search } from "lucide-react";
import { Button } from "../ui/Button";
import { useMemo, useState } from "react";
import { Table } from "../ui/Table";
import { CustomerModal } from "../ui/CustomerModal";

interface Customer { 
  id: number; 
  nome: string; 
  telefone: string; 
  ultimaCompra: string; 
  observacoes: string; 
}

export default function Customer() {
  const [searchTerm, setSearchTerm] = useState("");
  const [customer, setCustomer] = useState<Customer[]>([
    {
      id: 1,
      nome: "Maria Silva",
      telefone: "(11) 98765-4321",
      ultimaCompra: "2026-01-15",
      observacoes: "Prefere armações leves",
    },
    {
      id: 2,
      nome: "João Santos",
      telefone: "(11) 97654-3210",
      ultimaCompra: "2026-02-10",
      observacoes: "Cliente VIP",
    },
    {
      id: 3,
      nome: "Ana Costa",
      telefone: "(11) 96543-2109",
      ultimaCompra: "2026-02-20",
      observacoes: "Alérgica a níquel",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] =
    useState<Customer | null>(null);

  const filteredCustomer = useMemo(() => {
    return customer.filter((customer) =>
      Object.values(customer).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [customer, searchTerm]);

  const handleNewCustomer = () => {
    setSelectedCustomer(null);
    setIsModalOpen(true);
  };

  const handleEditCustomer = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const handleSaveCustomer = (customer: Customer) => {
    setCustomer((prev) => {
      const exists = prev.find((c) => c.id === customer.id);

      if (exists) {
        return prev.map((c) =>
          c.id === customer.id ? customer : c
        );
      }

      return [...prev, customer];
    });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex flex-col gap-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold">Clientes</h1>
            <p className="text-gray-600">
              Gerencie seus clientes aqui
            </p>
          </div>

          <Button
            variant="primary"
            className="mt-4"
            onClick={handleNewCustomer}
          >
            + Novo Cliente
          </Button>
        </div>

        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        <Table
          variant="detailed"
          customers={filteredCustomer}
          onEdit={handleEditCustomer}
        />

        <CustomerModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSaveCustomer}
          initialData={selectedCustomer}
        />
      </div>
    </div>
  );
}