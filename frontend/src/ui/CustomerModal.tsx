import { useState, useEffect } from "react";
import { Button } from "./Button";

export interface Customer {
  id: number;
  nome: string;
  telefone: string;
  ultimaCompra: string;
  observacoes: string;
}

interface CustomerModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (customer: Customer) => void;
  initialData?: Customer | null;
}

const emptyCustomer: Customer = {
  id: 0,
  nome: "",
  telefone: "",
  ultimaCompra: "",
  observacoes: "",
};

export function CustomerModal({
  open,
  onClose,
  onSubmit,
  initialData,
}: CustomerModalProps) {
  const isEditMode = !!initialData;

  const [formData, setFormData] = useState<Customer>(
    initialData || emptyCustomer
  );

  // Atualiza quando mudar cliente selecionado
  useEffect(() => {
    setFormData(initialData || emptyCustomer);
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const customerToSave = {
      ...formData,
      id: initialData?.id ?? Date.now(),
    };

    onSubmit(customerToSave);
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg shadow-xl max-w-125 w-full mx-4 p-6">
        <h2 className="text-xl font-semibold mb-6">
          {isEditMode ? "Editar Cliente" : "Novo Cliente"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nome
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.telefone}
              onChange={(e) =>
                setFormData({ ...formData, telefone: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Data Última Compra
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.ultimaCompra}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  ultimaCompra: e.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Observações
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={3}
              value={formData.observacoes}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  observacoes: e.target.value,
                })
              }
            />
          </div>

          <div className="flex gap-2 pt-4 justify-between">
            <div>
              <Button
                type="button"
                onClick={onClose}
              >
                Cancelar
              </Button>
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
              >
                {isEditMode ? "Atualizar" : "Salvar"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}