import React from 'react';
import { Outlet } from 'react-router-dom';
import TopAppBar from './TopAppBar';
import Sidebar from './Sidebar';
import BottomNavBar from './BottomNavBar';
import AIAgentWidget from './AIAgentWidget';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-on-background font-body flex flex-col">
      <TopAppBar />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        <main className="flex-1 overflow-y-auto pb-24 lg:pb-0 h-[calc(100vh-72px)] relative">
          <Outlet />
        </main>
      </div>
      <BottomNavBar />
      <AIAgentWidget />
    </div>
  );
};

export default MainLayout;
