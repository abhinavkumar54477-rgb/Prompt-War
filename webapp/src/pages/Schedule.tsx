import React from 'react';
import { Plus, Calendar, Clock, MapPin, Sparkles, Heart, Gamepad2, Settings2, Music } from 'lucide-react';

const Schedule: React.FC = () => {
  return (
    <div className="p-6 max-w-screen-2xl mx-auto w-full flex-grow flex flex-col gap-8">
      {/* Page Header & Itinerary Toggle */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-4">
        <div className="max-w-2xl">
          <h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight leading-tight mb-2">Schedule & Discovery</h2>
          <p className="font-body text-on-surface-variant text-lg">Curate your journey. Discover insights.</p>
        </div>
        {/* Custom Tab Toggle */}
        <div className="bg-surface-container-high p-1 rounded-xl flex shadow-sm">
          <button className="px-6 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-headline font-bold shadow-sm transition-all text-sm">
            All Sessions
          </button>
          <button className="px-6 py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface font-headline font-medium transition-all text-sm flex items-center gap-2">
            <Calendar size={16} />
            My Itinerary
          </button>
        </div>
      </div>

      {/* Content Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Main Schedule Timeline */}
        <div className="xl:col-span-8 flex flex-col gap-8">
          {/* Filters Strip */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar">
            <span className="font-headline text-sm font-bold text-on-surface-variant whitespace-nowrap mr-2">Filters:</span>
            <button className="bg-secondary-fixed text-on-secondary-fixed-variant px-4 py-1.5 rounded-full font-body text-sm font-semibold flex items-center gap-1 whitespace-nowrap shadow-sm">
              <Sparkles size={14} /> AI
            </button>
            <button className="bg-primary-fixed text-on-primary-fixed px-4 py-1.5 rounded-full font-body text-sm font-semibold flex items-center gap-1 whitespace-nowrap shadow-sm">
              <Music size={14} /> Music
            </button>
            <button className="bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant px-4 py-1.5 rounded-full font-body text-sm font-medium flex items-center gap-1 whitespace-nowrap transition-colors">
              <Heart size={14} /> Health
            </button>
            <button className="bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant px-4 py-1.5 rounded-full font-body text-sm font-medium flex items-center gap-1 whitespace-nowrap transition-colors">
              <Gamepad2 size={14} /> Gaming
            </button>
            <button className="bg-surface-container-highest text-on-surface-variant hover:bg-surface-variant px-4 py-1.5 rounded-full font-body text-sm font-medium flex items-center gap-1 whitespace-nowrap transition-colors">
              <Settings2 size={14} /> More
            </button>
          </div>

          {/* Timeline Content */}
          <div className="flex flex-col gap-10">
            {/* Time Block: 09:00 AM */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-headline text-2xl font-extrabold text-on-surface">09:00 AM</h3>
                <div className="h-px bg-surface-variant flex-grow mt-2"></div>
              </div>
              <div className="flex flex-col gap-4 pl-4 md:pl-8 border-l-2 border-surface-variant/30">
                {/* Session Card 1 */}
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] group relative overflow-hidden transition-all hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-secondary-fixed text-on-secondary-fixed-variant text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Keynote</span>
                        <span className="bg-surface-container-high text-on-surface-variant text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                          <MapPin size={10} /> Hall A
                        </span>
                      </div>
                      <h4 className="font-headline text-xl font-bold text-on-surface mb-2 leading-tight">The Future of Generative Ecosystems</h4>
                      <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-2">An in-depth look at how interconnected AI models will shape the next decade of digital infrastructure and creative workflows.</p>
                      <div className="flex items-center gap-3 mt-auto">
                        <img 
                          alt="Speaker" 
                          className="w-10 h-10 rounded-full object-cover shadow-sm" 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
                        />
                        <div>
                          <p className="font-headline text-sm font-bold text-on-surface">Dr. Aris Thorne</p>
                          <p className="font-body text-xs text-on-surface-variant">Chief Scientist, Nexus AI</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col items-center justify-between md:justify-center border-t md:border-t-0 md:border-l border-surface-variant/40 pt-4 md:pt-0 md:pl-6 gap-4">
                      <div className="text-left md:text-center">
                        <p className="font-headline font-bold text-on-surface">60 Min</p>
                        <p className="font-body text-xs text-on-surface-variant">Duration</p>
                      </div>
                      <button className="bg-surface text-primary border border-primary/20 hover:bg-primary-fixed/50 px-4 py-2 rounded-lg font-headline text-sm font-bold transition-colors flex items-center gap-2 shadow-sm">
                        <Plus size={14} /> Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Block: 10:30 AM */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-headline text-2xl font-extrabold text-on-surface">10:30 AM</h3>
                <div className="h-px bg-surface-variant flex-grow mt-2"></div>
              </div>
              <div className="flex flex-col gap-4 pl-4 md:pl-8 border-l-2 border-surface-variant/30">
                {/* Session Card 2 */}
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] group relative overflow-hidden transition-all hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-primary-fixed text-on-primary-fixed text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Workshop</span>
                        <span className="bg-surface-container-high text-on-surface-variant text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                          <MapPin size={10} /> Room 302
                        </span>
                      </div>
                      <h4 className="font-headline text-xl font-bold text-on-surface mb-2 leading-tight">Interactive UX Patterns for Physical Space</h4>
                      <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-2">Learn how to design interfaces that bridge the gap between digital content and the physical world through sensor-driven interactions.</p>
                      <div className="flex items-center gap-3 mt-auto">
                        <img 
                          alt="Speaker" 
                          className="w-10 h-10 rounded-full object-cover shadow-sm" 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                        />
                        <div>
                          <p className="font-headline text-sm font-bold text-on-surface">Sarah Jenkins</p>
                          <p className="font-body text-xs text-on-surface-variant">Lead Designer, Kinetic Studio</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col items-center justify-between md:justify-center border-t md:border-t-0 md:border-l border-surface-variant/40 pt-4 md:pt-0 md:pl-6 gap-4">
                      <div className="text-left md:text-center">
                        <p className="font-headline font-bold text-on-surface">90 Min</p>
                        <p className="font-body text-xs text-on-surface-variant">Duration</p>
                      </div>
                      <button className="bg-surface text-primary border border-primary/20 hover:bg-primary-fixed/50 px-4 py-2 rounded-lg font-headline text-sm font-bold transition-colors flex items-center gap-2 shadow-sm">
                        <Plus size={14} /> Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Time Block: 06:00 PM */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <h3 className="font-headline text-2xl font-extrabold text-on-surface">06:00 PM</h3>
                <div className="h-px bg-surface-variant flex-grow mt-2"></div>
              </div>
              <div className="flex flex-col gap-4 pl-4 md:pl-8 border-l-2 border-surface-variant/30">
                {/* Concert Card */}
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] group relative overflow-hidden transition-all hover:-translate-y-1">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
                  <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-primary-fixed text-on-primary-fixed text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Performance</span>
                        <span className="bg-surface-container-high text-on-surface-variant text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                          <MapPin size={10} /> Main Stage
                        </span>
                      </div>
                      <h4 className="font-headline text-xl font-bold text-on-surface mb-2 leading-tight text-primary">Kinetic Beats: Live Concert</h4>
                      <p className="font-body text-on-surface-variant text-sm mb-4 line-clamp-2">An immersive audio-visual experience featuring top electronic artists. Let the rhythm guide your evening.</p>
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="flex -space-x-2">
                           <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1540575861501-7ad0582371f3?auto=format&fit=crop&q=80&w=100" alt="Artist" />
                           <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=100" alt="Artist" />
                        </div>
                        <div>
                          <p className="font-headline text-sm font-bold text-on-surface">Various Artists</p>
                          <p className="font-body text-xs text-on-surface-variant">Live DJ Set & Visuals</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col items-center justify-between md:justify-center border-t md:border-t-0 md:border-l border-surface-variant/40 pt-4 md:pt-0 md:pl-6 gap-4">
                      <div className="text-left md:text-center">
                        <p className="font-headline font-bold text-on-surface">120 Min</p>
                        <p className="font-body text-xs text-on-surface-variant">Duration</p>
                      </div>
                      <button className="bg-primary text-white hover:bg-primary-container px-4 py-2 rounded-lg font-headline text-sm font-bold transition-colors flex items-center gap-2 shadow-sm">
                        <Plus size={14} /> RSVP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Sidebar */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-low rounded-xl p-6 shadow-sm border border-surface-variant/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-xl font-bold text-on-surface">Recommended for You</h3>
              <Sparkles className="text-secondary" size={20} />
            </div>
            <div className="flex flex-col gap-4">
              {/* Discovery Card 1 */}
              <div className="bg-surface-container-lowest rounded-lg p-4 shadow-sm cursor-pointer hover:bg-surface-container-highest transition-colors flex gap-4 items-center border border-transparent hover:border-surface-variant/30">
                <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 relative">
                  <img 
                    alt="Gaming session" 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=150" 
                  />
                  <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay"></div>
                </div>
                <div className="flex-1">
                  <p className="font-body text-xs text-secondary font-bold mb-1">Based on 'Gaming'</p>
                  <h4 className="font-headline text-sm font-bold text-on-surface leading-snug">Indie Dev Post-Mortem</h4>
                  <p className="font-body text-xs text-on-surface-variant mt-1 flex items-center gap-1">
                    <Clock size={12} /> 11:30 AM
                  </p>
                </div>
              </div>

              {/* Discovery Card 2 */}
              <div className="bg-surface-container-lowest rounded-lg p-4 shadow-sm cursor-pointer hover:bg-surface-container-highest transition-colors flex gap-4 items-center border border-transparent hover:border-surface-variant/30">
                <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 relative">
                  <img 
                    alt="Health session" 
                    className="w-full h-full object-cover" 
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=150" 
                  />
                  <div className="absolute inset-0 bg-tertiary/20 mix-blend-overlay"></div>
                </div>
                <div className="flex-1">
                  <p className="font-body text-xs text-tertiary font-bold mb-1">Trending</p>
                  <h4 className="font-headline text-sm font-bold text-on-surface leading-snug">Mindfulness in Tech</h4>
                  <p className="font-body text-xs text-on-surface-variant mt-1 flex items-center gap-1">
                    <Clock size={12} /> 1:45 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
