import React from 'react';
import { Brain, TrendingUp } from 'lucide-react';
import { StockPrediction } from '../App';

interface ResultsProps {
  predictions: StockPrediction[];
  isLoading: boolean;
}

const Results: React.FC<ResultsProps> = ({ predictions, isLoading }) => {
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-blue-500/20 rounded-full border border-blue-500/30">
            <Brain className="w-5 h-5 mr-2 text-blue-400 animate-pulse" />
            <span className="text-blue-300 font-medium">AI Model Processing...</span>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 animate-pulse">
              <div className="h-4 bg-white/20 rounded mb-3"></div>
              <div className="h-6 bg-white/30 rounded mb-2"></div>
              <div className="h-4 bg-white/20 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (predictions.length === 0) return null;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center px-6 py-3 bg-green-500/20 rounded-full border border-green-500/30 mb-4">
          <Brain className="w-5 h-5 mr-2 text-green-400" />
          <span className="text-green-300 font-medium">📊 Powered by AI Model</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">Top Performing Stocks</h2>
        <p className="text-slate-400">AI-predicted market leaders for your selected date</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {predictions.map((stock, index) => (
          <div
            key={stock.symbol}
            className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1 flex items-center">
                  {stock.symbol}
                  <TrendingUp className="w-4 h-4 ml-2 text-green-400 group-hover:animate-bounce" />
                </h3>
                <p className="text-slate-400 text-sm">{stock.name}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-400">
                  {Math.round(stock.probability * 100)}%
                </div>
                <div className="text-xs text-slate-500">Success Rate</div>
              </div>
            </div>
            
            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${stock.probability * 100}%`,
                  animationDelay: `${index * 200}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;