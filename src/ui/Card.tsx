import React from "react";
import {
  Users,
  ShoppingCart,
  Clock,
  Bell,
} from "lucide-react";

type CardVariant = "customers" | "sales" | "production" | "return";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant: CardVariant;
  title: string;
  value: string;
}
interface HistoryItem {
  customer: string;
  status: string;
  value: string;
  time: string;
}

interface CardHistoryProps extends React.HTMLAttributes<HTMLDivElement> {
  history: HistoryItem[];
}

const baseStyles = "rounded-xl shadow-sm p-6 flex flex-col max-w-lg gap-4";

const variantConfig: Record<CardVariant, {
  container: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
}> = {
  customers: {
    container: "bg-white text-gray-800",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    icon: <Users size={20} />,
  },
  sales: {
    container: "bg-white text-gray-800",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    icon: <ShoppingCart size={20} />,
  },
  production: {
    container: "bg-white text-gray-800",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    icon: <Clock size={20} />,
  },
  return: {
    container: "bg-white text-gray-800",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: <Bell size={20} />,
  },
};

const historyStyles =
  "bg-white text-gray-800 rounded-xl shadow-sm p-4 w-full"

export function Card({
  variant = "customers",
  title,
  value,
  className = "",
  ...props
}: CardProps) {
  const config = variantConfig[variant];

  return (
    <div
      className={`${baseStyles} ${config.container} ${className}`}
      {...props}
    >
      <div
        className={`p-3 rounded-lg w-min ${config.iconBg} ${config.iconColor}`}
      >
        {config.icon}
      </div>
      <div>
        <p className="text-3xl font-semibold">{value}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </div>

    </div>
  );
}

export function CardHistory({
  history,
  className = "",
  ...props
}: CardHistoryProps) {

  const limitedHistory = history.slice(0, 5);

  return (
    <div
      className={`${historyStyles} ${className}`}
      {...props}
    >
      <h2 className="text-xl font-semibold mb-4">
        Atividade Recente
      </h2>

      <div>
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
    </div>
  );
}