import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ArrowRight, Tag } from 'lucide-react';
import { UPCOMING_EVENTS } from '../constants';

export const Events: React.FC = () => {
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case 'Academic':
        return 'text-brand-primary border-brand-primary/30 bg-brand-primary/10';
      case 'Social':
        return 'text-brand-secondary border-brand-secondary/30 bg-brand-secondary/10';
      case 'Sports':
        return 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10';
      case 'Holiday':
        return 'text-amber-400 border-amber-400/30 bg-amber-400/10';
      default:
        return 'text-slate-400 border-white/10 bg-white/5';
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display font-bold"
        >
          Academy <span className="text-gradient">Events</span>
        </motion.h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Join us for workshops, summits, and social gatherings at Beteseb Academy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {UPCOMING_EVENTS.map((event, i) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden group hover:border-brand-primary/50 transition-all duration-500"
          >
            <div className="h-48 relative overflow-hidden">
              <img 
                src={`https://picsum.photos/seed/${event.id}/600/400`} 
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-md border text-[10px] font-bold uppercase tracking-wider ${getCategoryStyles(event.category)}`}>
                {event.category}
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-brand-secondary text-sm font-bold">
                  <Calendar size={14} />
                  <span>{event.date}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-200 group-hover:text-brand-primary transition-colors">
                  {event.title}
                </h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                {event.description}
              </p>

              <div className="pt-6 border-t border-white/5 space-y-3">
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <Clock size={14} className="text-brand-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <MapPin size={14} className="text-brand-primary" />
                  <span>{event.location}</span>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-brand-primary/10 text-brand-primary border border-brand-primary/20 hover:bg-brand-primary hover:text-white transition-all font-bold flex items-center justify-center gap-2">
                Register Now
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="glass-card p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-secondary/10 blur-3xl -z-10" />
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 rounded-2xl bg-brand-secondary/20 flex items-center justify-center mx-auto">
            <Tag className="text-brand-secondary w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-display font-bold">Never Miss an Event</h2>
            <p className="text-slate-400">Subscribe to our weekly newsletter to stay updated on all academy happenings.</p>
          </div>
          <div className="flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-brand-secondary/50"
            />
            <button className="px-8 py-3 rounded-xl bg-brand-secondary text-white font-bold hover:shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
