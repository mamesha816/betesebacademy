import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  GraduationCap, 
  TrendingUp, 
  Clock, 
  Search,
  Phone,
  Mail,
  MoreVertical
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { EXAMPLE_STUDENTS, EXAMPLE_TEACHERS, PERFORMANCE_DATA } from '../constants';

export const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredStudents = EXAMPLE_STUDENTS.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    { label: 'Total Students', value: '1,284', icon: Users, color: 'text-blue-400' },
    { label: 'Avg. Score', value: '88%', icon: TrendingUp, color: 'text-emerald-400' },
    { label: 'Study Hours', value: '4,520', icon: Clock, color: 'text-brand-primary' },
    { label: 'Courses', value: '24', icon: GraduationCap, color: 'text-brand-secondary' },
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-display font-bold">Admin <span className="text-gradient">Dashboard</span></h1>
          <p className="text-slate-400">Overview of student performance and faculty contacts.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-900 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 w-64"
            />
          </div>
          <button className="p-2 glass-card hover:bg-white/10 transition-colors">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 flex items-center gap-4"
          >
            <div className={`w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-white/5`}>
              <stat.icon className={`${stat.color} w-6 h-6`} />
            </div>
            <div>
              <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">{stat.label}</p>
              <p className="text-2xl font-display font-bold text-slate-200">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-8 space-y-6"
        >
          <h3 className="text-xl font-display font-bold">Performance Trends</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_DATA}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f2ff" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#00f2ff" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#00f2ff' }}
                />
                <Area type="monotone" dataKey="score" stroke="#00f2ff" fillOpacity={1} fill="url(#colorScore)" strokeWidth={3} />
                <Area type="monotone" dataKey="avg" stroke="#7000ff" fill="transparent" strokeWidth={2} strokeDasharray="5 5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-8 space-y-6"
        >
          <h3 className="text-xl font-display font-bold">Student Score Distribution</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={EXAMPLE_STUDENTS.slice(0, 6)}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                />
                <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                  {EXAMPLE_STUDENTS.slice(0, 6).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.score > 90 ? '#00f2ff' : '#7000ff'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Tables Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Students Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 glass-card overflow-hidden"
        >
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h3 className="text-xl font-display font-bold">Student Database</h3>
            <span className="text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full font-bold">10 TOTAL</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="px-6 py-4 font-bold">Name</th>
                  <th className="px-6 py-4 font-bold">Grade</th>
                  <th className="px-6 py-4 font-bold">Score</th>
                  <th className="px-6 py-4 font-bold">Study Time</th>
                  <th className="px-6 py-4 font-bold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-[10px] font-bold">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="font-medium text-slate-200">{student.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-400">{student.grade}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-brand-primary" 
                            style={{ width: `${student.score}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-brand-primary">{student.score}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-400">{student.studyTime}h</td>
                    <td className="px-6 py-4 text-right">
                      <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                        student.score >= 90 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-brand-secondary/10 text-brand-secondary'
                      }`}>
                        {student.score >= 90 ? 'Excellent' : 'Good'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Teachers Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card overflow-hidden"
        >
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-display font-bold">Faculty Contacts</h3>
          </div>
          <div className="p-6 space-y-6">
            {EXAMPLE_TEACHERS.map((teacher) => (
              <div key={teacher.id} className="space-y-3 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-brand-primary/30 transition-all group">
                <div className="flex items-center justify-between">
                  <p className="font-display font-bold text-slate-200">{teacher.name}</p>
                  <span className="text-[10px] bg-brand-secondary/10 text-brand-secondary px-2 py-1 rounded-full font-bold uppercase">
                    {teacher.subject}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <Phone size={14} className="text-brand-primary" />
                    <span>{teacher.contact}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm">
                    <Mail size={14} className="text-brand-primary" />
                    <span>{teacher.name.toLowerCase().replace(' ', '.')}@lumina.edu</span>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full py-3 rounded-xl border border-dashed border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/30 transition-all text-sm font-medium">
              + Add New Faculty
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
