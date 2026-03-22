import React from 'react';
import { motion } from 'motion/react';
import { Brain, Rocket, Target, Users, Zap } from 'lucide-react';

export const About: React.FC = () => {
  const stats = [
    { icon: Brain, label: 'Smart Learning', value: 'AI-Driven' },
    { icon: Rocket, label: 'Efficiency', value: '3x Faster' },
    { icon: Target, label: 'Accuracy', value: '99.9%' },
    { icon: Users, label: 'Active Students', value: '50k+' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-24">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-bold tracking-wider uppercase">
            Our Mission
          </div>
          <h1 className="text-6xl font-display font-bold leading-tight">
            Revolutionizing <span className="text-gradient">Beteseb Academy</span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Beteseb Academy was born from a simple idea: that technology should empower students, not overwhelm them. We use state-of-the-art AI to transform dense academic material into clear, manageable study kits.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="glass-card p-6 space-y-2">
                <stat.icon className="text-brand-primary w-6 h-6" />
                <p className="text-2xl font-display font-bold text-slate-200">{stat.value}</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-secondary/20 to-brand-accent/20 blur-3xl -z-10" />
          <img
            src="https://picsum.photos/seed/education/800/800"
            alt="Futuristic Education"
            className="rounded-3xl border border-white/10 shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -left-8 glass-card p-8 space-y-4 max-w-xs animate-glow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
                <Zap className="text-brand-primary" />
              </div>
              <p className="font-display font-bold text-lg">Instant Results</p>
            </div>
            <p className="text-sm text-slate-400">Our AI processes thousands of words in milliseconds to give you the perfect summary.</p>
          </div>
        </motion.div>
      </div>

      {/* Story Section */}
      <div className="glass-card p-12 text-center space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
        <h2 className="text-4xl font-display font-bold">The Beteseb Story</h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Founded in 2024, Beteseb Academy started as a research project at the intersection of Cognitive Science and Artificial Intelligence. Today, it's a global platform helping students from over 150 countries achieve their academic goals with less stress and more clarity.
        </p>
      </div>
    </div>
  );
};
