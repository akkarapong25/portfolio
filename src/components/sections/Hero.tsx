import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-purple-400 mb-6">
            <Terminal size={14} />
            <span>พร้อมรับโปรเจกต์ใหม่</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            <span className="text-gradient">Full-Stack</span>
            <br />
            Development Services
          </h1>

          <p className="text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
            นักพัฒนา Full Stack ผู้เชี่ยวชาญการสร้างระบบธุรกิจครบวงจร,
            แดชบอร์ดวิเคราะห์ข้อมูล, และระบบตอบกลับอัตโนมัติ (AI Chatbots & Automation) 
            ที่ผสมผสานดีไซน์กับประสิทธิภาพ
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-full font-bold flex items-center gap-2 hover:bg-purple-500 hover:text-white transition-all group">
              ดูผลงานของผม
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
              จ้างงานผม
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
