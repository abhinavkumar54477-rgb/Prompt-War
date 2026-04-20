import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, CalendarDays, Trophy, Shield } from 'lucide-react';

const BottomNavBar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 lg:hidden rounded-t-[2rem] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-2xl shadow-[0_-8px_24px_rgba(0,0,0,0.05)] flex justify-around items-center px-4 pb-6 pt-3">
      <NavLink 
        to="/" 
        className={({ isActive }) => `
          flex flex-col items-center justify-center px-4 py-2 transition-all duration-150 font-body text-[10px] uppercase tracking-widest font-bold
          ${isActive ? 'text-primary scale-110 -translate-y-1' : 'text-zinc-400 dark:text-zinc-500'}
        `}
      >
        <Home size={24} className="mb-1" />
        Home
      </NavLink>
      
      <NavLink 
        to="/map" 
        className={({ isActive }) => `
          flex flex-col items-center justify-center rounded-2xl px-5 py-2 transition-all font-body text-[10px] uppercase tracking-widest font-bold
          ${isActive 
            ? 'bg-primary text-white scale-110 -translate-y-2 shadow-lg shadow-primary/30' 
            : 'text-zinc-400 dark:text-zinc-500'}
        `}
      >
        <Compass size={24} className="mb-1" />
        Map
      </NavLink>

      <NavLink 
        to="/schedule" 
        className={({ isActive }) => `
          flex flex-col items-center justify-center px-4 py-2 transition-all duration-150 font-body text-[10px] uppercase tracking-widest font-bold
          ${isActive ? 'text-primary scale-110 -translate-y-1' : 'text-zinc-400 dark:text-zinc-500'}
        `}
      >
        <CalendarDays size={24} className="mb-1" />
        Events
      </NavLink>

      <NavLink 
        to="/leaderboard" 
        className={({ isActive }) => `
          flex flex-col items-center justify-center px-4 py-2 transition-all duration-150 font-body text-[10px] uppercase tracking-widest font-bold
          ${isActive ? 'text-primary scale-110 -translate-y-1' : 'text-zinc-400 dark:text-zinc-500'}
        `}
      >
        <Trophy size={24} className="mb-1" />
        Rank
      </NavLink>

      <NavLink 
        to="/safety" 
        className={({ isActive }) => `
          flex flex-col items-center justify-center px-4 py-2 transition-all duration-150 font-body text-[10px] uppercase tracking-widest font-bold
          ${isActive ? 'text-primary scale-110 -translate-y-1' : 'text-zinc-400 dark:text-zinc-500'}
        `}
      >
        <Shield size={24} className="mb-1" />
        Safety
      </NavLink>
    </nav>
  );
};

export default BottomNavBar;
