import React from 'react';
import { Trophy, Star, Lock, Store, Users, Utensils, Search, User } from 'lucide-react';

const Leaderboard: React.FC = () => {
  return (
    <div className="flex-1 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Page Header */}
      <div className="max-w-2xl text-left">
        <h1 className="font-headline font-extrabold text-4xl lg:text-5xl text-on-surface tracking-tight leading-tight mb-2">Your Kinetic Journey</h1>
        <p className="font-body text-lg text-on-surface-variant">Engage with the event, unlock exclusive badges, and rise through the ranks.</p>
      </div>

      {/* Top Bento Section: Stats & Featured Mission */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Your Stats Hero Card */}
        <div className="lg:col-span-2 rounded-2xl p-8 relative overflow-hidden flex flex-col justify-between shadow-[0px_12px_32px_rgba(25,28,29,0.06)] bg-gradient-to-br from-secondary to-[#3a0099] text-white min-h-[320px] text-left">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={32} />
              <span className="font-headline font-bold text-lg tracking-wide uppercase opacity-90">Current Status</span>
            </div>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-headline font-extrabold text-[5rem] leading-none tracking-tighter">2,450</span>
              <span className="font-body text-xl opacity-80 font-medium">PTS</span>
            </div>
            <p className="font-body text-sm opacity-80 mb-8 max-w-md">You are currently in the top 15% of all attendees. Complete active missions to reach Elite tier.</p>
          </div>
          <div className="relative z-10">
            <h3 className="font-headline text-sm font-bold opacity-80 mb-3 tracking-wider uppercase">Badges Unlocked</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Star, label: 'Early Bird' },
                { icon: Search, label: 'Stall Explorer' }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
                  <badge.icon size={18} />
                  <span className="font-body text-sm font-semibold">{badge.label}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/5 border-dashed opacity-70">
                <Lock size={18} />
                <span className="font-body text-sm font-medium">Social Butterfly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Daily Mission */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] flex flex-col relative overflow-hidden border-t-4 border-primary text-left">
          <div className="absolute top-0 right-0 bg-primary text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-lg">Daily Special</div>
          <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
            <Star size={24} />
          </div>
          <h3 className="font-headline font-bold text-xl text-on-surface mb-2">Rate 2 Keynote Sessions</h3>
          <p className="font-body text-sm text-on-surface-variant mb-6 flex-1">Provide your feedback on the main stage presentations to help us improve next year.</p>
          <div className="mt-auto">
            <div className="flex justify-between text-sm font-bold mb-2">
              <span className="text-on-surface">Progress</span>
              <span className="text-primary">1 / 2</span>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden mb-4">
              <div className="h-full bg-primary w-1/2 rounded-full"></div>
            </div>
            <button className="w-full bg-surface-container-high hover:bg-primary hover:text-white text-primary font-bold py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2">
              Add Progress
              <span className="text-xs">+500 PTS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Available Missions & Leaderboard */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Available Missions */}
        <div className="xl:col-span-7 space-y-6 text-left">
          <div className="flex items-center justify-between">
            <h2 className="font-headline font-bold text-2xl text-on-surface tracking-tight">Available Missions</h2>
            <button className="text-primary font-bold text-sm hover:underline tracking-wide">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Store, title: 'Visit 3 Tech Stalls', desc: 'Scan QR codes at any 3 vendor booths.', points: '+300', color: 'secondary' },
              { icon: Users, title: 'Connect with a Peer', desc: 'Exchange contact info with another attendee.', points: '+150', color: 'primary' },
              { icon: Utensils, title: 'Grab Lunch', desc: 'Check in at the dining hall.', points: '+50', color: 'tertiary' },
              { icon: Lock, title: 'Mystery Evening Event', desc: 'Unlocks at 5:00 PM today.', points: '???', color: 'variant', locked: true }
            ].map((m, i) => (
              <div key={i} className={`rounded-xl p-5 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] transition-all duration-300 ${m.locked ? 'bg-surface-container-low opacity-70 border border-outline-variant/30' : 'bg-surface-container-lowest hover:-translate-y-1 cursor-pointer group'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${m.locked ? 'bg-surface-variant text-on-surface-variant' : `bg-${m.color}-fixed text-on-${m.color}-fixed-variant`}`}>
                    <m.icon size={20} />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${m.locked ? 'bg-surface-variant' : 'bg-secondary-container text-on-secondary-container'}`}>{m.points} PTS</span>
                </div>
                <div>
                  <h4 className={`font-headline font-bold text-on-surface mb-1 ${!m.locked && 'group-hover:text-primary transition-colors'}`}>{m.title}</h4>
                  <p className="font-body text-xs text-on-surface-variant">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard List */}
        <div className="xl:col-span-5 space-y-6 text-left">
          <div className="flex items-center justify-between">
            <h2 className="font-headline font-bold text-2xl text-on-surface tracking-tight">Top Attendees</h2>
            <div className="bg-surface-container-high rounded-lg p-1 flex">
              <button className="px-3 py-1 text-xs font-bold bg-white rounded shadow-sm text-on-surface">Global</button>
              <button className="px-3 py-1 text-xs font-bold text-on-surface-variant hover:text-on-surface">Friends</button>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-2 shadow-inner">
            {[
              { rank: 1, name: 'Marcus Chen', role: 'Tech Innovator', points: '5,200', color: '#FFD700', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
              { rank: 2, name: 'Sarah Jenkins', role: 'Design Lead', points: '4,850', color: '#C0C0C0', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
              { rank: 3, name: 'David Alaba', role: 'Developer', points: '4,100', color: '#CD7F32', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100' }
            ].map((p) => (
              <div key={p.rank} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm mb-2 relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: p.color }}></div>
                <div className="font-headline font-extrabold text-xl w-6 text-center" style={{ color: p.color }}>{p.rank}</div>
                <img src={p.img} alt={p.name} className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <h4 className="font-headline font-bold text-on-surface text-sm">{p.name}</h4>
                  <p className="font-body text-xs text-on-surface-variant">{p.role}</p>
                </div>
                <div className="text-right">
                  <span className="font-headline font-bold text-secondary text-lg">{p.points}</span>
                  <span className="font-body text-[10px] uppercase tracking-wider block text-on-surface-variant">PTS</span>
                </div>
              </div>
            ))}
            <div className="w-full flex justify-center py-2">
              <div className="w-1 h-1 bg-surface-variant rounded-full mx-1"></div>
              <div className="w-1 h-1 bg-surface-variant rounded-full mx-1"></div>
              <div className="w-1 h-1 bg-surface-variant rounded-full mx-1"></div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-primary-fixed/50 border border-primary/20 mt-2">
              <div className="font-headline font-bold text-sm w-6 text-center text-primary">42</div>
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary border-2 border-primary shadow-sm">
                <User size={20} />
              </div>
              <div className="flex-1">
                <h4 className="font-headline font-bold text-on-surface text-sm">You</h4>
                <p className="font-body text-xs text-primary font-medium">Climbing up!</p>
              </div>
              <div className="text-right">
                <span className="font-headline font-bold text-primary text-base">2,450</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
