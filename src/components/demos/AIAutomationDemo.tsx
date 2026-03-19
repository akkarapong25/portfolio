import { motion } from 'motion/react';
import { Bot, Cpu, Zap, MessageSquare, Database, Share2 } from 'lucide-react';

export default function AIAutomationDemo() {
  const steps = [
    { icon: MessageSquare, label: 'รับข้อมูล', color: 'text-blue-400' },
    { icon: Cpu, label: 'AI ประมวลผล', color: 'text-purple-400' },
    { icon: Database, label: 'บันทึกข้อมูล', color: 'text-emerald-400' },
    { icon: Share2, label: 'ส่งต่อระบบอื่น', color: 'text-orange-400' },
  ];

  return (
    <section className="py-24 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[32px] md:rounded-[40px] p-6 md:p-12 border border-white/10 overflow-hidden relative">
          {/* Background Glow */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[100px] -z-10" />
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] font-bold text-purple-400 mb-6 uppercase tracking-widest">
                นวัตกรรมล่าสุด
              </div>
              <h2 className="text-4xl font-bold mb-6">ความเชี่ยวชาญด้าน AI Automation</h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                ผมไม่ได้แค่เขียนโค้ด แต่ผมสร้าง "สมอง" ให้กับธุรกิจของคุณ ด้วยการรวมพลังของ AI เข้ากับระบบอัตโนมัติที่ทำงานได้จริง
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-sm font-medium">การประมวลผลภาษาธรรมชาติ (NLP)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-sm font-medium">ระบบอัตโนมัติข้ามแพลตฟอร์ม</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-sm font-medium">การวิเคราะห์ข้อมูลด้วย AI</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {/* Workflow Visualizer */}
              <div className="glass p-8 rounded-3xl border border-white/5 min-h-[300px] flex flex-col justify-center">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">กระบวนการทำงานอัตโนมัติ</h3>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                    <Zap size={12} />
                    ACTIVE NOW
                  </div>
                </div>

                <div className="relative flex justify-between items-start px-8">
                  {/* Connection Lines with SVG Flowing Effect */}
                  <div className="absolute top-8 left-0 w-full -z-10 flex items-center px-16">
                    <svg className="w-full h-1 overflow-visible">
                      {/* Base Line */}
                      <line 
                        x1="0" y1="50%" x2="100%" y2="50%" 
                        stroke="rgba(255,255,255,0.05)" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                      />
                      {/* Animated Flowing Line */}
                      <motion.line 
                        x1="0" y1="50%" x2="100%" y2="50%" 
                        stroke="url(#flowGradient)" 
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0 100%" }}
                        animate={{ 
                          strokeDasharray: ["20% 80%", "20% 80%"],
                          strokeDashoffset: ["100%", "-100%"]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                      />
                      <defs>
                        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="transparent" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      {/* Traveling Data Particle */}
                      <motion.circle
                        r="3"
                        fill="#a855f7"
                        filter="url(#glow)"
                        animate={{ 
                          cx: ["0%", "100%"],
                          opacity: [0, 1, 1, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        style={{ cy: "50%" }}
                      />
                    </svg>
                  </div>
                  
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex flex-col items-center gap-4 relative"
                    >
                      <div className={`w-16 h-16 rounded-2xl glass border border-white/10 flex items-center justify-center ${step.color} shadow-lg shadow-black/50 relative z-10`}>
                        <step.icon size={28} />
                        {/* Pulse Effect */}
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-current rounded-2xl -z-10 blur-sm"
                        />
                      </div>
                      <span className="text-xs font-bold text-white/60 uppercase tracking-wider">{step.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'ลดเวลาทำงาน', val: '85%', color: 'text-blue-400' },
                  { label: 'ความแม่นยำ', val: '99.9%', color: 'text-purple-400' },
                  { label: 'คืนทุนภายใน', val: '3 เดือน', color: 'text-emerald-400' },
                ].map(stat => (
                  <div key={stat.label} className="glass p-6 rounded-2xl border border-white/5">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">{stat.label}</div>
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
