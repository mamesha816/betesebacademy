import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Info, LayoutDashboard, Zap, Menu, X, Calendar, Flag } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'About', icon: Info },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'events', label: 'Events', icon: Flag },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-card px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-[0_0_15px_rgba(0,242,255,0.5)]">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold text-gradient">BETESEB ACADEMY</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative px-2 py-1 transition-colors duration-300 flex items-center gap-2 ${
                activeTab === item.id ? 'text-brand-primary' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <item.icon size={16} />
              <span className="font-medium text-sm lg:text-base">{item.label}</span>
              {activeTab === item.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary shadow-[0_0_10px_#00f2ff]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-200" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 glass-card p-4 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsOpen(false);
              }}
              className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                activeTab === item.id ? 'bg-brand-primary/10 text-brand-primary' : 'text-slate-400'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};
