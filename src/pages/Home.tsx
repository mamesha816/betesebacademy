import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Loader2, CheckCircle2, ListChecks, HelpCircle, Sparkles, Zap } from 'lucide-react';
import { generateStudyMaterials } from '../services/geminiService';
import { AIResponse } from '../types';

export const Home: React.FC = () => {
  const [notes, setNotes] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<AIResponse | null>(null);
  const [quizAnswers, setQuizAnswers] = React.useState<number[]>([]);
  const [showQuizResults, setShowQuizResults] = React.useState(false);

  const handleGenerate = async () => {
    if (!notes.trim()) return;
    setLoading(true);
    try {
      const res = await generateStudyMaterials(notes);
      setResult(res);
      setQuizAnswers(new Array(res.quiz.length).fill(-1));
      setShowQuizResults(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (qIdx: number, aIdx: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[qIdx] = aIdx;
    setQuizAnswers(newAnswers);
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
              Master Your <span className="text-gradient">Studies</span> at Beteseb Academy
            </h1>
            <p className="text-xl text-slate-400 max-w-lg">
              Paste your long study notes below and let Beteseb AI distill them into actionable summaries and interactive quizzes.
            </p>
          </div>

          <div className="glass-card p-6 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 blur-3xl -z-10" />
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Paste your study notes here (e.g., lecture transcripts, textbook chapters)..."
              className="w-full h-64 bg-slate-900/50 border border-white/10 rounded-xl p-4 text-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all resize-none font-mono text-sm"
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !notes.trim()}
              className="w-full py-4 rounded-xl font-display font-bold text-lg bg-gradient-to-r from-brand-primary to-brand-secondary text-white glow-button flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Processing with AI...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Generate Study Kit</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Output Section */}
        <div className="space-y-8">
          <AnimatePresence mode="wait">
            {!result && !loading && (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4 glass-card p-12 border-dashed border-white/5"
              >
                <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center border border-white/10">
                  <Sparkles className="text-brand-primary w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-300">Your Study Kit Awaits</h3>
                <p className="text-slate-500 max-w-xs">
                  Enter your notes on the left to see the AI magic happen here.
                </p>
              </motion.div>
            )}

            {loading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full min-h-[400px] flex flex-col items-center justify-center space-y-6"
              >
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-4 border-brand-primary/20 border-t-brand-primary animate-spin" />
                  <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-primary w-8 h-8 animate-pulse" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-display font-bold text-brand-primary">Analyzing Content</h3>
                  <p className="text-slate-500 animate-pulse">Extracting key concepts and generating quiz...</p>
                </div>
              </motion.div>
            )}

            {result && !loading && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                {/* Summary */}
                <div className="glass-card p-8 space-y-4">
                  <div className="flex items-center gap-3 text-brand-primary">
                    <CheckCircle2 size={24} />
                    <h3 className="text-2xl font-display font-bold">AI Summary</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-lg">
                    {result.summary}
                  </p>
                </div>

                {/* Key Points */}
                <div className="glass-card p-8 space-y-4">
                  <div className="flex items-center gap-3 text-brand-secondary">
                    <ListChecks size={24} />
                    <h3 className="text-2xl font-display font-bold">Key Takeaways</h3>
                  </div>
                  <ul className="space-y-3">
                    {result.keyPoints.map((point, i) => (
                      <motion.li
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i}
                        className="flex gap-3 text-slate-400"
                      >
                        <span className="text-brand-primary font-bold">•</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Quiz */}
                <div className="glass-card p-8 space-y-6">
                  <div className="flex items-center gap-3 text-brand-accent">
                    <HelpCircle size={24} />
                    <h3 className="text-2xl font-display font-bold">Quick Quiz</h3>
                  </div>
                  <div className="space-y-8">
                    {result.quiz.map((q, qIdx) => (
                      <div key={qIdx} className="space-y-4">
                        <p className="text-lg font-medium text-slate-200">{qIdx + 1}. {q.question}</p>
                        <div className="grid grid-cols-1 gap-3">
                          {q.options.map((opt, aIdx) => (
                            <button
                              key={aIdx}
                              onClick={() => handleAnswerSelect(qIdx, aIdx)}
                              className={`p-4 rounded-xl text-left transition-all border ${
                                quizAnswers[qIdx] === aIdx
                                  ? 'bg-brand-primary/20 border-brand-primary text-brand-primary'
                                  : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-white/20'
                              } ${
                                showQuizResults && aIdx === q.correctAnswer
                                  ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400'
                                  : showQuizResults && quizAnswers[qIdx] === aIdx && aIdx !== q.correctAnswer
                                  ? 'bg-rose-500/20 border-rose-500 text-rose-400'
                                  : ''
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  {!showQuizResults ? (
                    <button
                      onClick={() => setShowQuizResults(true)}
                      className="w-full py-4 rounded-xl font-display font-bold bg-brand-accent/20 text-brand-accent border border-brand-accent/30 hover:bg-brand-accent/30 transition-all"
                    >
                      Check Answers
                    </button>
                  ) : (
                    <div className="text-center p-4 glass-card border-brand-primary/20">
                      <p className="text-xl font-display font-bold text-brand-primary">
                        Score: {quizAnswers.filter((a, i) => a === result.quiz[i].correctAnswer).length} / {result.quiz.length}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
