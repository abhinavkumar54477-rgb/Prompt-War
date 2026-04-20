import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import EventMap from './pages/EventMap';
import Schedule from './pages/Schedule';
import Leaderboard from './pages/Leaderboard';
import Safety from './pages/Safety';

function App() {
  return (
    <BrowserRouter>   {/* ✅ FIXED */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="map" element={<EventMap />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="safety" element={<Safety />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;