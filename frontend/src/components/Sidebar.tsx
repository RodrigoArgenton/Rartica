import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <aside className="w-64 bg-white shadow-lg h-screen sticky top-0">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800">Rartica</h2>
      </div>
      
      <nav className="mt-6">
        <Link 
          to="/" 
          className={`flex items-center px-6 py-3 ${
            isActive('/') ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span>Dashboard</span>
        </Link>
                <Link 
          to="/clientes" 
          className={`flex items-center px-6 py-3 ${
            isActive('/clientes') ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span>Clientes</span>
        </Link>
        <Link 
          to="/vendas" 
          className={`flex items-center px-6 py-3 ${
            isActive('/vendas') ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span>Vendas</span>
        </Link>
        <Link 
          to="/receita" 
          className={`flex items-center px-6 py-3 ${
            isActive('/receita') ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span>Receita</span>
        </Link>
        <Link 
          to="/automacao" 
          className={`flex items-center px-6 py-3 ${
            isActive('/automacao') ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span>Automação</span>
        </Link>
                <Link 
          to="/producao" 
          className={`flex items-center px-6 py-3 ${
            isActive('/configuracao') ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          <span>Configuração</span>
        </Link>
      </nav>
    </aside>
  );
}
