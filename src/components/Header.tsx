import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://www.tramontina.com.br/assets/template/img/logo.png" alt="Tramontina Logo" className="h-8 mr-4" />
          <h1 className="text-xl font-semibold">Performance Dashboard</h1>
        </div>
        <nav>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;