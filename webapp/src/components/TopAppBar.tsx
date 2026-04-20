import React from 'react';
import { Bell, ShieldAlert, QrCode, MapPin, ChevronDown } from 'lucide-react';

const TopAppBar: React.FC = () => {
  return (
    <header className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-[0px_12px_32px_rgba(25,28,29,0.06)] sticky top-0 z-50 flex justify-between items-center w-full px-6 py-4">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-extrabold text-primary dark:text-blue-500 tracking-tighter font-headline shrink-0">
          Kinetic Concierge
        </h1>
        
        {/* City Selector */}
        <div className="hidden md:flex items-center gap-2 pl-6 border-l border-surface-variant/40 hover:cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <MapPin size={16} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest leading-none">Your City</span>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-on-surface">Mumbai, IN</span>
              <ChevronDown size={14} className="text-primary group-hover:translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-primary hover:bg-surface-container-low transition-all duration-300 active:scale-95 p-2 rounded-full">
          <Bell size={24} />
        </button>
        <button className="text-primary hover:bg-surface-container-low transition-all duration-300 active:scale-95 p-2 rounded-full">
          <ShieldAlert size={24} />
        </button>
        <button className="text-primary hover:bg-surface-container-low transition-all duration-300 active:scale-95 p-2 rounded-full">
          <QrCode size={24} />
        </button>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest border border-outline-variant/30">
          <img 
            alt="Attendee profile" 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100" 
          />
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;
