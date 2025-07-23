import React, { useState } from 'react';
import { Calendar, Hash, Zap } from 'lucide-react';

interface InputPanelProps {
  onPredict: (date: string, topN: number) => void;
  isLoading: boolean;
}

const InputPanel: React.FC<InputPanelProps> = ({ onPredict, isLoading }) => {
  const [date, setDate] = useState('');
  const [topN, setTopN] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && topN > 0) {
      onPredict(date, topN);
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Date Input */}
            <div className="relative group">
              <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Select a Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                required
              />

            </div>

            {/* Top N Input */}
            <div className="relative group">
              <label className="block text-sm font-medium text-slate-300 mb-2 flex items-center">
                <Hash className="w-4 h-4 mr-2" />
                Top N Stocks
              </label>
              <input
                type="number"
                value={topN}
                onChange={(e) => setTopN(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                min="1"
                max="10"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white/10"
                required
              />
            </div>
          </div>

          {/* Predict Button */}
          <button
            type="submit"
            disabled={isLoading || !date}
            className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 disabled:from-slate-600 disabled:to-slate-600 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 disabled:cursor-not-allowed flex items-center justify-center group"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent mr-3"></div>
                Analyzing Market Data...
              </>
            ) : (
              <>
                <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Predict Top Stocks
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputPanel;