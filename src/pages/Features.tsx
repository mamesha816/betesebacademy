import React from 'react';
import { motion } from 'motion/react';
import { Zap, Shield, Globe, Cpu, BarChart3, Clock } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instant Summarization',
      description: 'Convert hours of reading into minutes of understanding with our advanced NLP models.',
      color: 'text-brand-primary',
      bg: 'bg-brand-primary/10',
    },
    {
      icon: Cpu,
      title: 'AI Quiz Engine',
      description: 'Automatically generate challenging quizzes to test your knowledge retention.',
      color: 'text-brand-secondary',
      bg: 'bg-brand-secondary/10',
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track your progress over time with detailed charts and score histories.',
      color: 'text-brand-accent',
      bg: 'bg-brand-accent/10',
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your study notes are your own. We use enterprise-grade encryption for all data.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-400/10',
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Study in over 50 languages with seamless AI translation and analysis.',
      color: 'text-blue-400',
      bg: 'bg-blue-400/10',
    },
    {
      icon: Clock,
      title: '24/7 AI Tutor',
      description: 'Get help whenever you need it. Our AI is always awake and ready to assist.',
      color: 'text-amber-400',
      bg: 'bg-amber-400/10',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <div className="text-center space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-display font-bold"
        >
          Powerful <span className="text-gradient">Features</span>
        </motion.h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Everything you need to excel in your academic journey, powered by cutting-edge technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 space-y-6 group hover:border-brand-primary/50 transition-all duration-500"
          >
            <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
              <feature.icon className={`${feature.color} w-8 h-8`} />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-display font-bold text-slate-200">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Feature Demo */}
      <div className="glass-card p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-3xl -z-10" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-display font-bold">Smart Note Analysis</h2>
            <p className="text-lg text-slate-400">
              Our AI doesn't just summarize; it understands context. It identifies key entities, historical dates, and complex relationships within your text.
            </p>
            <ul className="space-y-4">
              {['Entity Recognition', 'Contextual Mapping', 'Sentiment Analysis'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <Zap size={14} className="text-brand-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             <div className="bg-slate-900 rounded-2xl p-6 border border-white/10 shadow-inner">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="space-y-4 font-mono text-xs text-brand-primary/80">
                  <p className="animate-pulse">{"// Initializing AI Analysis Engine..."}</p>
                  <p>{"const summary = await Beteseb.analyze(notes);"}</p>
                  <p className="text-slate-400">{"// Result: 3 key points identified"}</p>
                  <p>{"console.log(summary.keyPoints);"}</p>
                  <div className="p-3 bg-slate-950 rounded-lg border border-white/5 text-slate-300">
                    {"[ 'Quantum Entanglement', 'Bell\\'s Theorem', 'Non-locality' ]"}
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
