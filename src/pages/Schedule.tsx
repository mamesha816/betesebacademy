import React from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, User, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '../constants';

export const Schedule: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-display font-bold"
        >
          Weekly <span className="text-gradient">Schedule</span>
        </motion.h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Stay on track with your academic journey. Here is your current class timetable.
        </p>
      </div>

      <div className="grid gap-6">
        {WEEKLY_SCHEDULE.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-brand-primary/40 transition-all group"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex flex-col items-center justify-center text-brand-primary border border-brand-primary/20">
                <Clock size={24} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-mono text-brand-primary">{item.time}</p>
                <h3 className="text-2xl font-display font-bold text-slate-200">{item.subject}</h3>
              </div>
            </div>

            <div className="grid grid-cols-2 md:flex items-center gap-8">
              <div className="flex items-center gap-3 text-slate-400">
                <User size={18} className="text-brand-secondary" />
                <div className="text-sm">
                  <p className="text-slate-500 uppercase text-[10px] font-bold tracking-wider">Instructor</p>
                  <p className="font-medium text-slate-300">{item.teacher}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={18} className="text-brand-accent" />
                <div className="text-sm">
                  <p className="text-slate-500 uppercase text-[10px] font-bold tracking-wider">Location</p>
                  <p className="font-medium text-slate-300">{item.room}</p>
                </div>
              </div>
            </div>

            <button className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all font-bold text-sm">
              View Materials
            </button>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass-card p-8 space-y-4 border-dashed border-white/10 text-center">
          <BookOpen className="mx-auto text-brand-primary w-8 h-8" />
          <h4 className="font-display font-bold text-lg">Curriculum</h4>
          <p className="text-sm text-slate-500">Download the full semester curriculum and learning objectives.</p>
        </div>
        <div className="glass-card p-8 space-y-4 border-dashed border-white/10 text-center">
          <CalendarIcon className="mx-auto text-brand-secondary w-8 h-8" />
          <h4 className="font-display font-bold text-lg">Exam Dates</h4>
          <p className="text-sm text-slate-500">View upcoming midterms and final examination schedules.</p>
        </div>
        <div className="glass-card p-8 space-y-4 border-dashed border-white/10 text-center">
          <User className="mx-auto text-brand-accent w-8 h-8" />
          <h4 className="font-display font-bold text-lg">Office Hours</h4>
          <p className="text-sm text-slate-500">Book a 1-on-1 session with your professors during office hours.</p>
        </div>
      </div>
    </div>
  );
};
