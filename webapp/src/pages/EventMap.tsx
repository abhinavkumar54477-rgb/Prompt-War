import React, { useState } from 'react';
import { Search, Utensils, Smartphone, Users, Bath, Navigation, Plus, Minus, Music, Disc as Stadium } from 'lucide-react';
import { motion } from 'framer-motion';

const EventMap: React.FC = () => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));

  return (
    <div className="relative w-full h-full bg-surface-container-low overflow-hidden cursor-grab active:cursor-grabbing">
      {/* Map Layer */}
      <motion.div 
        drag
        dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
        animate={{ scale: zoom }}
        className="absolute inset-0 w-[200%] h-[200%] origin-center"
        style={{ 
          backgroundImage: 'radial-gradient(var(--tw-colors-surface-container-highest) 1px, transparent 1px)', 
          backgroundSize: '40px 40px',
          left: '-50%',
          top: '-50%'
        }}
      >
        {/* Main Stage Zone */}
        <div className="absolute top-[30%] left-[40%] w-96 h-64 bg-surface-container-lowest rounded-[2rem] shadow-[0px_12px_32px_rgba(25,28,29,0.06)] border border-white/50 flex flex-col items-center justify-center">
          <div className="w-full h-32 bg-primary/10 rounded-t-[2rem] flex items-center justify-center relative overflow-hidden">
            <Stadium size={48} className="text-primary opacity-50 absolute bottom-[-10px] scale-150" />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-headline font-bold text-lg text-on-surface">Main Stage</h3>
            <p className="text-sm text-on-surface-variant font-body">Keynotes & Panels</p>
          </div>
          {/* Live Crowd Indicator */}
          <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-white rounded-full pl-2 pr-3 py-1 shadow-md">
            <div className="w-3 h-3 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(182,23,30,0.6)]"></div>
            <span className="text-xs font-bold text-tertiary font-body">Packed</span>
          </div>
        </div>

        {/* Music Stage Zone */}
        <div className="absolute top-[45%] right-[45%] w-80 h-56 bg-surface-container-lowest rounded-[2rem] shadow-[0px_12px_32px_rgba(25,28,29,0.06)] border border-white/50 flex flex-col items-center justify-center rotate-[-5deg]">
          <div className="w-full h-24 bg-secondary/10 rounded-t-[2rem] flex items-center justify-center relative overflow-hidden">
            <Music size={40} className="text-secondary opacity-50 absolute" />
          </div>
          <div className="p-4 text-center">
            <h3 className="font-headline font-bold text-lg text-on-surface">Music Stage</h3>
            <p className="text-sm text-on-surface-variant font-body">Live Concerts & DJ Sets</p>
          </div>
          <div className="absolute -top-3 -right-3 flex items-center gap-2 bg-white rounded-full pl-2 pr-3 py-1 shadow-md border border-surface-variant/20">
            <div className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
            <span className="text-xs font-bold text-[#065f46] font-body">Ready</span>
          </div>
        </div>

        {/* Food Court Zone */}
        <div className="absolute bottom-[35%] left-[30%] w-72 h-72 bg-surface-container-lowest rounded-full shadow-[0px_12px_32px_rgba(25,28,29,0.06)] flex flex-col items-center justify-center">
          <Utensils size={32} className="text-secondary mb-2" />
          <h3 className="font-headline font-bold text-lg text-on-surface">Food Court</h3>
          <p className="text-sm text-on-surface-variant font-body mt-1">Stalls 1-10</p>
          <div className="absolute bottom-8 flex items-center gap-2 bg-white rounded-full pl-2 pr-3 py-1 shadow-md border border-surface-variant/20">
            <div className="w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
            <span className="text-xs font-bold text-[#b45309] font-body">Busy</span>
          </div>
        </div>

        {/* Tech Hub */}
        <div className="absolute top-[25%] right-[30%] w-[400px] h-[300px] bg-surface-container-lowest rounded-xl shadow-[0px_12px_32px_rgba(25,28,29,0.06)] grid grid-cols-4 grid-rows-3 gap-2 p-4 rotate-3">
          <div className="col-span-4 flex justify-between items-center pb-2 border-b border-surface-container-highest">
            <h3 className="font-headline font-bold text-lg text-on-surface">Tech Hub</h3>
            <span className="text-xs font-medium text-primary bg-primary-fixed/50 px-2 py-1 rounded-md">Stalls 11-20</span>
          </div>
          {[11, 12, 13, 14, 15, 16, 17, 18].map((n) => (
            <div 
              key={n} 
              className={`rounded-lg flex items-center justify-center relative ${
                n === 12 ? 'bg-primary/10 border border-primary/20' : 
                n === 17 ? 'bg-secondary/10 border border-secondary/20' : 
                'bg-surface-container-low'
              }`}
            >
              <span className={`text-xs font-bold ${n === 12 ? 'text-primary' : n === 17 ? 'text-secondary' : 'text-on-surface-variant'}`}>{n}</span>
              {n === 12 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_6px_rgba(16,185,129,0.5)]"></div>
              )}
            </div>
          ))}
        </div>

        {/* User Location Pin */}
        <div className="absolute top-[50%] left-[50%] w-12 h-12 flex items-center justify-center -translate-x-6 -translate-y-6">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
          <div className="relative w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </motion.div>

      {/* Floating UI Overlays */}
      <div className="absolute top-6 left-6 w-80 max-w-[calc(100vw-3rem)] glass-panel rounded-[1.5rem] p-5 flex flex-col gap-4 z-10">
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
          <input 
            className="w-full bg-surface-container-highest text-on-surface font-body text-sm rounded-xl pl-12 pr-4 py-3 border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface-variant/70 shadow-inner outline-none" 
            placeholder="Search stalls, zones..." 
            type="text"
          />
        </div>
        <div>
          <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-3 font-body">Quick Filters</h4>
          <div className="flex flex-wrap gap-2">
            <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm flex items-center gap-1"><Utensils size={14}/> Food</button>
            <button className="bg-surface-container-high text-on-surface px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"><Smartphone size={14}/> Tech</button>
            <button className="bg-surface-container-high text-on-surface px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"><Users size={14}/> Workshop</button>
            <button className="bg-surface-container-high text-on-surface px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1"><Bath size={14}/> Restrooms</button>
          </div>
        </div>
        <div className="mt-2 pt-4 border-t border-surface-variant/40 flex justify-between items-center">
          <span className="text-xs font-medium text-on-surface-variant">Crowd Levels:</span>
          <div className="flex gap-3">
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#10b981]"></div><span className="text-[10px] text-on-surface">Low</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-[#f59e0b]"></div><span className="text-[10px] text-on-surface">Med</span></div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-tertiary"></div><span className="text-[10px] text-on-surface">High</span></div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-10">
        <button className="w-12 h-12 bg-surface-container-lowest text-primary rounded-xl shadow-[0px_12px_32px_rgba(25,28,29,0.06)] flex items-center justify-center hover:bg-surface-container-low transition-colors active:scale-90">
          <Navigation size={24} />
        </button>
        <div className="bg-surface-container-lowest rounded-xl shadow-[0px_12px_32px_rgba(25,28,29,0.06)] flex flex-col overflow-hidden">
          <button onClick={handleZoomIn} className="w-12 h-12 text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors flex items-center justify-center border-b border-surface-variant/30 active:bg-surface-variant">
            <Plus size={24} />
          </button>
          <button onClick={handleZoomOut} className="w-12 h-12 text-on-surface hover:bg-surface-container-low hover:text-primary transition-colors flex items-center justify-center active:bg-surface-variant">
            <Minus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventMap;
