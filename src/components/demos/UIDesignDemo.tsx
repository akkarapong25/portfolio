import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenTool, MousePointerClick, Users, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export default function UIDesignDemo() {
  const [phase, setPhase] = useState(0); // 0: Wireframe, 1: UI Design, 2: Interactive

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase((prev) => (prev + 1) % 3);
    }, 4000); // 4 seconds per phase
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[32px] md:rounded-[40px] p-6 md:p-12 border border-white/10 overflow-hidden relative">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[100px] -z-10" />
          
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Animation Container */}
            <div className="lg:col-span-2 order-2 lg:order-1 flex flex-col justify-center">
              <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 h-[450px] relative overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
                
                {/* Status Indicator */}
                <div className="absolute top-6 left-6 flex gap-2">
                  <div className={`h-1.5 rounded-full transition-all duration-500 ${phase >= 0 ? 'w-8 bg-rose-500' : 'w-4 bg-white/20'}`} />
                  <div className={`h-1.5 rounded-full transition-all duration-500 ${phase >= 1 ? 'w-8 bg-rose-500' : 'w-4 bg-white/20'}`} />
                  <div className={`h-1.5 rounded-full transition-all duration-500 ${phase >= 2 ? 'w-8 bg-rose-500' : 'w-4 bg-white/20'}`} />
                </div>
                <div className="absolute top-5 right-6 text-[10px] font-mono tracking-widest uppercase text-white/50">
                  {phase === 0 && 'STEP 1: Wireframing'}
                  {phase === 1 && 'STEP 2: Visual Design'}
                  {phase === 2 && 'STEP 3: Interaction & Feedback'}
                </div>

                {/* The "App" Mockup */}
                <motion.div 
                  className={`w-[260px] sm:w-[280px] h-[360px] sm:h-[380px] rounded-2xl border-2 flex flex-col overflow-hidden relative transition-all duration-700 bg-[#111]
                    ${phase === 0 ? 'border-dashed border-white/20' : 'border-solid border-white/10 shadow-2xl shadow-rose-500/10'}
                  `}
                >
                  {/* Header */}
                  <div className="h-16 border-b border-white/10 flex items-center px-4 gap-3 shrink-0">
                    <motion.div 
                      className={`w-8 h-8 rounded-full transition-all duration-700 flex items-center justify-center
                        ${phase === 0 ? 'bg-white/10' : 'bg-gradient-to-br from-rose-400 to-purple-500'}
                      `}
                    >
                      {phase > 0 && <span className="text-white text-xs font-bold">App</span>}
                    </motion.div>
                    <motion.div 
                      className={`h-4 rounded transition-all duration-700 
                        ${phase === 0 ? 'bg-white/10 w-24' : 'bg-transparent w-32'}
                      `}
                    >
                      {phase > 0 && <span className="text-white/90 text-sm font-bold">Discover</span>}
                    </motion.div>
                  </div>

                  {/* Body Content */}
                  <div className="flex-1 p-4 flex flex-col gap-4">
                    {/* Hero Image Block */}
                    <motion.div 
                      className={`w-full h-32 rounded-xl flex items-center justify-center transition-all duration-700 overflow-hidden relative shrink-0
                        ${phase === 0 ? 'bg-white/5 border border-white/10' : 'bg-white/5'}
                      `}
                    >
                      {phase === 0 && <ImageIcon className="text-white/20" />}
                      {phase > 0 && (
                        <motion.img 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                          className="w-full h-full object-cover"
                        />
                      )}
                    </motion.div>

                    {/* Text Blocks */}
                    <div className="space-y-2">
                      <motion.div className={`h-4 rounded-full transition-all duration-700 ${phase === 0 ? 'bg-white/10 w-3/4' : 'bg-white/20 w-3/4'}`} />
                      <motion.div className={`h-3 rounded-full transition-all duration-700 ${phase === 0 ? 'bg-white/5 w-1/2' : 'bg-white/10 w-1/2'}`} />
                    </div>

                    {/* Animated Button */}
                    <motion.button 
                      className={`w-full h-12 rounded-xl mt-auto flex items-center justify-center font-bold tracking-wider relative overflow-hidden transition-all duration-700
                        ${phase === 0 ? 'bg-white/5 text-white/20 border-2 border-dashed border-white/10' : 'bg-rose-500 text-white shadow-lg shadow-rose-500/20'}
                      `}
                    >
                      {phase === 0 ? 'BUTTON' : 'GET STARTED'}
                      
                      {/* Ripple effect on phase 2 */}
                      <AnimatePresence>
                        {phase === 2 && (
                          <motion.div 
                            initial={{ scale: 0, opacity: 0.8 }}
                            animate={{ scale: 4, opacity: 0 }}
                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                            className="absolute inset-0 bg-white/40 rounded-full"
                          />
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>

                  {/* Success Overlay on Phase 2 */}
                  <AnimatePresence>
                    {phase === 2 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: 0.8 }}
                        className="absolute inset-x-4 bottom-20 glass bg-emerald-500/20 border-emerald-500/30 p-3 rounded-xl flex items-center justify-center gap-2 backdrop-blur-md shadow-2xl"
                      >
                        <CheckCircle2 className="text-emerald-400 w-5 h-5 shrink-0" />
                        <span className="text-xs text-emerald-100 font-bold">Action Completed</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
                
                {/* Animated Cursor in Phase 2 */}
                <AnimatePresence>
                  {phase === 2 && (
                    <motion.div 
                      key="cursor"
                      initial={{ x: 100, y: 150, opacity: 0 }}
                      animate={{ 
                        x: [100, 0, 0], 
                        y: [150, 110, 110], // Coordinates matching the GET STARTED button 
                        opacity: [0, 1, 0],
                        scale: [1, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 3, 
                        times: [0, 0.3, 1],
                        repeat: Infinity 
                      }}
                      className="absolute z-10 drop-shadow-2xl pointer-events-none"
                    >
                      <MousePointerClick size={40} className="text-white -rotate-12" style={{ filter: 'drop-shadow(3px 5px 8px rgba(0,0,0,0.6))' }} />
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="inline-block px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-[10px] font-bold text-rose-400 mb-6 uppercase tracking-widest">
                UX / UI DESIGN
              </div>
              <h2 className="text-4xl font-bold mb-6">สร้างสรรค์ประสบการณ์ที่ผู้ใช้หลงรัก</h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                มากกว่าแค่ความสวยงาม แต่คือการวิเคราะห์และออกแบบ User Flow ให้ลื่นไหล เปลี่ยนความซับซ้อนให้กลายเป็นประสบการณ์ที่ง่ายและน่าประทับใจตั้งแต่สัมผัสแรก
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                    <PenTool size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">ออกแบบโครงสร้าง (Wireframing)</h4>
                    <p className="text-xs text-white/40">วางโครงสร้างและลำดับความสำคัญของข้อมูล</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <ImageIcon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">ความสวยงาม (Visual Design)</h4>
                    <p className="text-xs text-white/40">ใส่สีสัน อัตลักษณ์แบรนด์ และความพรีเมียม</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MousePointerClick size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">การโต้ตอบ (Interactions)</h4>
                    <p className="text-xs text-white/40">สร้าง Micro-interactions ที่ตอบสนองทันใจ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
