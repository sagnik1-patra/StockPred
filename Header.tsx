import React from 'react';
import { TrendingUp } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-12 relative">
      <div className="flex items-center justify-center mb-4">
        <TrendingUp className="w-8 h-8 text-green-400 mr-3" />
        <h1 className="text-5xl md:text-6xl font-space-grotesk font-bold bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
          StockPred
        </h1>
      </div>
      <p className="text-xl md:text-2xl text-slate-300 font-light tracking-wide">
        Predict Tomorrow's Market Today.
      </p>
      <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
    </header>
  );
};

export default Header;