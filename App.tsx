import React, { useState } from 'react';
import Header from './components/Header';
import StockTicker from './components/StockTicker';
import InputPanel from './components/InputPanel';
import Results from './components/Results';
import Footer from './components/Footer';

export interface StockPrediction {
  symbol: string;
  name: string;
  probability: number;
}

function App() {
  const [predictions, setPredictions] = useState<StockPrediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const handlePredict = async (date: string, topN: number) => {
    setIsLoading(true);
    setHasResults(false);
    
    try {
  const response = await fetch(`http://127.0.0.1:8000/predict?date=${date}&top_n=${topN}`);
  const data = await response.json();

  if (data.top_stocks) {
    const formatted = data.top_stocks.map((item: any) => ({
      symbol: item.Name,
      name: `Stock: ${item.Name}`,
      probability: item.Up_Prob,
    }));

    setPredictions(formatted);
    setHasResults(true);
  } else {
    alert(data.error || "No predictions available for the selected date.");
  }
} catch (error) {
  console.error("❌ API error:", error);
  alert("Failed to fetch data from the backend.");
} finally {
  setIsLoading(false);
}

    
 
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white font-inter">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-400 rounded-full opacity-25 animate-bounce"></div>
      </div>
      
      <StockTicker />
      <Header />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <InputPanel onPredict={handlePredict} isLoading={isLoading} />
        
        {(hasResults || isLoading) && (
          <Results predictions={predictions} isLoading={isLoading} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;