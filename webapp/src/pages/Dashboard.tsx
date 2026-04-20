import React from 'react';
import { QrCode, Map as MapIcon, ShieldAlert, ArrowRight, MapPin, Trophy, ExternalLink, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 lg:p-8 space-y-12">
      {/* Hero / Quick Actions */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* QR Code Card */}
        <div className="lg:col-span-8 bg-surface-container-lowest rounded-[2rem] p-8 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed-dim rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-surface-container-low shrink-0">
            <div className="w-48 h-48 bg-surface-variant rounded-lg flex items-center justify-center">
              <QrCode size={64} className="text-outline-variant" />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed rounded-full text-on-primary-fixed text-xs font-bold uppercase tracking-wider w-fit self-center md:self-start">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Checked In
            </div>
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-on-surface">Your Digital Pass</h1>
            <p className="font-body text-on-surface-variant max-w-md">Scan this code at session entrances, vendor booths, and networking events to instantly connect and collect points.</p>
            <div className="mt-2 flex items-center gap-4 justify-center md:justify-start">
              <button className="text-primary font-bold hover:text-primary-container transition-colors flex items-center gap-1">
                Add to Wallet <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Action Cards */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6">
          <Link to="/map" className="flex-1 bg-gradient-to-br from-primary to-primary-container text-white rounded-[2rem] p-6 shadow-[0px_12px_32px_rgba(0,88,188,0.2)] flex flex-col justify-between hover:scale-[1.02] transition-transform text-left relative overflow-hidden group">
            <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
              <MapIcon size={120} />
            </div>
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm z-10">
              <MapIcon size={24} className="text-white" />
            </div>
            <div className="z-10">
              <h3 className="font-headline text-xl font-bold mb-1">Venue Map</h3>
              <p className="text-white/80 text-sm font-medium">Find stages, booths & amenities</p>
            </div>
          </Link>

          <Link to="/safety" className="flex-1 bg-tertiary-container text-white rounded-[2rem] p-6 shadow-[0px_12px_32px_rgba(218,52,51,0.2)] flex flex-col justify-between hover:scale-[1.02] transition-transform text-left relative overflow-hidden group">
            <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
              <ShieldAlert size={120} />
            </div>
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm z-10">
              <ShieldAlert size={24} />
            </div>
            <div className="z-10">
              <h3 className="font-headline text-xl font-bold mb-1 text-white">Safety & Help</h3>
              <p className="text-white/80 text-sm font-medium">Report issues or find medics</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Up Next Schedule */}
      <section>
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-on-surface">Up Next</h2>
          <Link to="/schedule" className="text-primary font-semibold text-sm hover:underline">View Full Schedule</Link>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x snap-mandatory">
          {[
            {
              type: 'Starting Soon',
              time: '10:00 AM - 11:30 AM',
              title: 'Keynote: The Future of Kinetic Interactions',
              desc: 'Join industry leaders as they discuss the upcoming trends in physical-digital hybrid spaces.',
              location: 'Main Stage A',
              speakers: [
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100'
              ],
              color: 'primary'
            },
            {
              type: 'Workshop',
              time: '12:00 PM - 1:30 PM',
              title: 'Building Accessible Event Spaces',
              desc: 'A hands-on workshop focused on inclusive design principles for large-scale gatherings.',
              location: 'Room 204',
              color: 'secondary'
            },
            {
              type: 'Networking',
              time: '2:00 PM - 3:00 PM',
              title: 'Coffee & Connections',
              desc: 'Grab a coffee and meet fellow attendees in the main atrium. Sponsored by TechCorp.',
              location: 'Main Atrium',
              color: 'surface-variant'
            }
          ].map((item, i) => (
            <div key={i} className={`snap-start shrink-0 w-[300px] md:w-[360px] bg-surface-container-lowest rounded-[2rem] p-6 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] border-t-4 border-${item.color} relative overflow-hidden flex flex-col`}>
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 bg-${item.color}-fixed text-on-${item.color}-fixed text-xs font-bold rounded-full uppercase tracking-wider`}>
                  {item.type}
                </span>
                <span className="text-on-surface-variant text-sm font-medium">{item.time}</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-2 leading-tight">{item.title}</h3>
              <p className="font-body text-on-surface-variant text-sm mb-6 line-clamp-2">{item.desc}</p>
              <div className="mt-auto flex items-center justify-between border-t border-surface-container-low pt-4">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className={`text-${item.color}`} />
                  <span className="text-sm font-medium text-on-surface">{item.location}</span>
                </div>
                {item.speakers ? (
                  <div className="flex -space-x-2">
                    {item.speakers.map((s, idx) => (
                      <img key={idx} src={s} alt="Speaker" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    ))}
                  </div>
                ) : (
                  <button className={`text-${item.color} font-bold text-sm hover:underline`}>Add to Plan</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Live Highlights */}
      <section>
        <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-tight text-on-surface mb-6">Live Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="md:col-span-2 lg:col-span-2 bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_12px_32px_rgba(25,28,29,0.06)] relative group cursor-pointer h-80">
            <img 
              src="https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=1200" 
              alt="Crowd at keynote" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8">
              <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 w-fit">Trending Now</span>
              <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">CEO Announce Revolutionary AI Assistant</h3>
              <p className="text-white/80 font-medium">Watch the replay of the opening keynote that has everyone talking.</p>
            </div>
          </div>

          <div className="bg-secondary-fixed rounded-[2rem] p-8 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
              <Trophy size={160} className="text-secondary" />
            </div>
            <h3 className="font-headline text-xl font-bold text-on-secondary-fixed mb-2">Leaderboard Update</h3>
            <p className="text-on-secondary-fixed-variant mb-6 text-sm font-medium">You are currently in top 10% of networkers! Visit 3 more booths to unlock the 'Connector' badge.</p>
            <button className="bg-secondary text-white py-3 px-6 rounded-xl font-bold shadow-sm hover:bg-secondary-container transition-colors w-fit">
              View Rankings
            </button>
          </div>
          
          <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_12px_32px_rgba(25,28,29,0.06)] group cursor-pointer flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500"></div>
              <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" alt="Concert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 z-20 flex scale-90 origin-left">
                 <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm text-primary">
                    <Music size={12} className="fill-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Live Performance</span>
                 </div>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Music & Arts</span>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2 leading-tight">Kinetic Beats: Mid-Event Concert</h3>
              <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-2">Prepare for an immersive audio-visual experience with top indie electronic artists on the main stage.</p>
              <span className="text-primary font-semibold text-sm mt-auto flex items-center gap-1">View Lineup <ArrowRight size={14} /></span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_12px_32px_rgba(25,28,29,0.06)] group cursor-pointer flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600" alt="Networking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">Sponsor Alert</span>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Visit the Innovation Hub</h3>
              <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-2">Free espresso and hands-on demos with the latest spatial computing headsets.</p>
              <span className="text-primary font-semibold text-sm mt-auto flex items-center gap-1">Read More <ExternalLink size={14} /></span>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-[0px_12px_32px_rgba(25,28,29,0.06)] group cursor-pointer flex flex-col">
            <div className="h-48 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600" alt="Food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-secondary text-xs font-bold uppercase tracking-wider mb-2">Logistics</span>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-2">Lunch is Served!</h3>
              <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-2">Head to the outdoor pavilion for a selection of local food trucks and catered options.</p>
              <span className="text-secondary font-semibold text-sm mt-auto flex items-center gap-1">View Menu <ArrowRight size={14} /></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
