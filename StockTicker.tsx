import React from 'react';

const StockTicker: React.FC = () => {
  const stocks = [
    { symbol: 'AAPL', price: '$182.52', change: '+2.1%' },
    { symbol: 'MSFT', price: '$378.85', change: '+1.8%' },
    { symbol: 'GOOGL', price: '$142.56', change: '+0.9%' },
    { symbol: 'AMZN', price: '$155.89', change: '+1.4%' },
    { symbol: 'TSLA', price: '$248.42', change: '+3.2%' },
    { symbol: 'NVDA', price: '$875.28', change: '+2.7%' },
    { symbol: 'META', price: '$352.96', change: '+1.5%' },
    { symbol: 'NFLX', price: '$487.73', change: '+0.8%' }
  ];

  return (
    <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 overflow-hidden py-2">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...stocks, ...stocks].map((stock, index) => (
          <div key={index} className="flex items-center mx-8 text-sm">
            <span className="text-white font-semibold">{stock.symbol}</span>
            <span className="text-slate-300 mx-2">{stock.price}</span>
            <span className="text-green-400 font-medium">{stock.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;