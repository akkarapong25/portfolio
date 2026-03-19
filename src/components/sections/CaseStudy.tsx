import { motion } from 'motion/react';
import { PROJECTS } from '../../constants';
import { CheckCircle2, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

export default function CaseStudy() {
  const featuredStudies = PROJECTS.filter(p => ['ai-chatbot', 'construction-stock'].includes(p.id));

  if (featuredStudies.length === 0) return null;

  return (
    <section id="case-study" className="py-24 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">เจาะลึก: เคสตัวอย่าง</h2>
          <p className="text-white/50">วิธีที่ผมแก้ปัญหาธุรกิจจริงด้วยเทคโนโลยี</p>
        </div>

        <div className="space-y-12">
          {featuredStudies.map((study, index) => (
            <div 
              key={study.id} 
              className={`glass rounded-[32px] md:rounded-[40px] overflow-hidden grid lg:grid-cols-2 ${index % 2 !== 0 ? 'lg:direction-rtl' : ''}`}
            >
              <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold text-purple-400 mb-8 uppercase tracking-widest">
                  เคสตัวอย่างที่ {index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-8">{study.title}</h3>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="mt-1 text-red-400"><AlertCircle size={24} /></div>
                    <div>
                      <h4 className="font-bold mb-2">ปัญหา</h4>
                      <p className="text-white/60 leading-relaxed">{study.caseStudy?.problem}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 text-blue-400"><Lightbulb size={24} /></div>
                    <div>
                      <h4 className="font-bold mb-2">แนวทางแก้ไข</h4>
                      <p className="text-white/60 leading-relaxed">{study.caseStudy?.solution}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="mt-1 text-emerald-400"><TrendingUp size={24} /></div>
                    <div>
                      <h4 className="font-bold mb-2">ผลลัพธ์</h4>
                      <p className="text-white/60 leading-relaxed">{study.caseStudy?.result}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/10">
                  <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">เทคโนโลยีที่ใช้</h4>
                  <div className="flex flex-wrap gap-3">
                    {study.tech.map(t => (
                      <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 p-12 lg:p-16 flex items-center justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative z-10 glass p-4 rounded-3xl glow-purple"
                >
                  <img 
                    src={study.images[0]} 
                    alt={study.title} 
                    className="rounded-2xl max-w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
                  <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
