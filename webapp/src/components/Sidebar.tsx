import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Map as MapIcon, Calendar, Trophy, ShieldCheck, Settings, HelpCircle } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: MapIcon, label: 'Event Map', path: '/map' },
    { icon: Calendar, label: 'Schedule', path: '/schedule' },
    { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
    { icon: ShieldCheck, label: 'Safety & Feedback', path: '/safety' },
  ];

  return (
    <nav className="bg-surface-container-low dark:bg-zinc-950 h-[calc(100vh-72px)] w-64 hidden lg:flex flex-col py-8 pr-4 z-40 relative">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full border-2 border-surface-container-highest overflow-hidden">
            <img 
              alt="User profile" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100" 
            />
          </div>
          <div>
            <h2 className="font-body text-sm font-medium text-on-surface">Welcome, Attendee</h2>
            <p className="text-xs text-primary font-medium">Premium Access</p>
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-6 py-3 rounded-r-full transition-all duration-200 font-body text-sm font-medium
                ${isActive 
                  ? 'bg-white dark:bg-zinc-800 text-primary shadow-sm font-bold' 
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:translate-x-1'}
              `}
            >
              <item.icon size={20} />
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="px-6 mb-6">
        <button className="w-full py-3 rounded-lg bg-gradient-to-br from-primary to-primary-container text-white font-medium shadow-[0px_8px_16px_rgba(0,88,188,0.2)] hover:scale-[0.98] transition-transform">
          Live Highlights
        </button>
      </div>

      <ul className="flex flex-col gap-2 mt-auto border-t border-surface-variant/50 pt-4">
        <li>
          <button className="flex items-center gap-3 px-6 py-2 w-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-r-full hover:translate-x-1 transition-all duration-200 font-body text-sm font-medium text-left">
            <Settings size={20} />
            Settings
          </button>
        </li>
        <li>
          <button className="flex items-center gap-3 px-6 py-2 w-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-r-full hover:translate-x-1 transition-all duration-200 font-body text-sm font-medium text-left">
            <HelpCircle size={20} />
            Support
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
