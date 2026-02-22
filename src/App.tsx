import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/clientes" element={<Customer />} /> */}
            {/* <Route path="/vendas" element={<Sales />} /> */}
            {/* <Route path="/receita" element={<Recipe />} /> */}
            {/* <Route path="/automacao" element={<Automation />} /> */}
            {/* <Route path="/configuracao" element={<Config />} /> */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
