import React from 'react';
import { AlertCircle, ShieldAlert, Star, Send, HelpCircle, HeartPulse, Headset, ChevronRight } from 'lucide-react';

const Safety: React.FC = () => {
  return (
    <div className="pt-6 pb-32 lg:pb-12 px-4 md:px-8 max-w-screen-xl mx-auto flex flex-col gap-8 min-h-[calc(100vh-80px)]">
      {/* Header Area */}
      <header className="flex flex-col gap-2 pt-4">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none text-left">Safety & Support</h1>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl mt-2 text-left">Your well-being is our priority. Access immediate help or share your thoughts to improve the event experience.</p>
      </header>

      {/* Emergency Action Card */}
      <section className="w-full">
        <div className="bg-tertiary-container rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-[0px_16px_32px_rgba(218,52,51,0.15)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-tertiary rounded-full opacity-20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col gap-3 max-w-xl text-left">
            <div className="flex items-center gap-3 text-white">
              <AlertCircle size={32} />
              <h2 className="font-headline text-2xl font-bold">Immediate Assistance</h2>
            </div>
            <p className="text-white opacity-90 text-sm md:text-base font-medium">
              If you are experiencing a medical emergency or feel unsafe, dispatch our rapid response team immediately. Your location will be shared securely.
            </p>
          </div>
          <button className="relative z-10 w-full md:w-auto flex-shrink-0 bg-tertiary text-white font-headline font-bold text-lg px-8 py-5 rounded-2xl shadow-[0px_8px_24px_rgba(182,23,30,0.3)] hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-3 whitespace-nowrap group">
            <ShieldAlert className="group-hover:animate-pulse" />
            EMERGENCY HELP
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Feedback */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-8 shadow-[0px_12px_32px_rgba(25,28,29,0.06)] flex flex-col gap-6 h-full text-left">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface">Rate Your Recent Session</h3>
                <p className="text-sm text-on-surface-variant mt-1">Keynote: Future of Digital Interaction</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary">
                <Star size={24} />
              </div>
            </div>
            
            {/* 5 Star Rating */}
            <div className="flex gap-2 items-center justify-center py-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <button key={s} className={`text-surface-variant hover:text-secondary transition-colors active:scale-90 duration-150`}>
                  <Star size={40} className={s <= 4 ? "fill-secondary text-secondary" : ""} />
                </button>
              ))}
            </div>

            {/* Comment Box */}
            <div className="flex flex-col gap-2 mt-2">
              <label className="text-sm font-semibold text-on-surface" htmlFor="feedback">Additional Comments (Optional)</label>
              <textarea 
                className="w-full bg-surface-container-highest rounded-2xl p-4 text-sm text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-all duration-200 border-none ring-0 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest resize-none" 
                id="feedback" 
                placeholder="What stood out to you? Any areas for improvement?" 
                rows={4}
              ></textarea>
            </div>
            <button className="mt-auto w-full md:w-auto self-end bg-gradient-to-r from-primary to-primary-container text-white font-semibold px-6 py-3 rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all flex items-center justify-center gap-2">
              Submit Feedback
              <Send size={16} />
            </button>
          </div>
        </div>

        {/* Right Column: Quick Links */}
        <div className="lg:col-span-5 flex flex-col gap-4 text-left">
          <h3 className="font-headline text-lg font-bold text-on-surface mb-2 px-1">Quick Resources</h3>
          
          {[
            { icon: HelpCircle, title: 'Event FAQs', desc: 'Answers to common questions' },
            { icon: HeartPulse, title: 'First Aid Locations', desc: 'Interactive map of medical tents' },
            { icon: Headset, title: 'Contact Organizer', desc: 'Lost & found, general inquiries' }
          ].map((item, i) => (
            <button key={i} className="group bg-surface-container-lowest rounded-2xl p-5 shadow-[0px_4px_16px_rgba(25,28,29,0.03)] hover:shadow-[0px_12px_32px_rgba(25,28,29,0.06)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-5 w-full">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon size={24} />
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-semibold text-on-surface text-base">{item.title}</span>
                <span className="text-xs text-on-surface-variant">{item.desc}</span>
              </div>
              <ChevronRight size={20} className="text-surface-variant group-hover:text-primary transition-colors" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Safety;
