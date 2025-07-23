import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 py-8 border-t border-white/10 bg-black/10 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center mb-4 text-slate-400">
          <span>Built using FastAPI + ML | Designed with</span>
          <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
          <span></span>
        </div>
        
        <div className="flex items-center justify-center space-x-6">
          <a
            href="#"
            className="text-slate-500 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        <div className="mt-4 text-xs text-slate-600">
          © 2025 StockPred. Market predictions for educational purposes only.
        </div>
      </div>
    </footer>
  );
};

export default Footer;