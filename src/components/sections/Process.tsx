import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const STEPS = [
  { title: 'พูดคุยความต้องการ', desc: 'เจาะลึกความต้องการและเป้าหมายทางธุรกิจของคุณ' },
  { title: 'ออกแบบระบบ', desc: 'วางโครงสร้างฐานข้อมูลและลำดับการใช้งาน UI/UX' },
  { title: 'การพัฒนา', desc: 'การพัฒนาแบบ Agile พร้อมการอัปเดตความคืบหน้าอย่างสม่ำเสมอ' },
  { title: 'การทดสอบ', desc: 'การตรวจสอบคุณภาพอย่างเข้มงวดเพื่อให้มั่นใจในความเสถียรและความปลอดภัย' },
  { title: 'การติดตั้งระบบ', desc: 'เปิดใช้งานจริงและติดตามผลการทำงาน' }
];

export default function Process() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight mb-4">กระบวนการพัฒนา</h2>
          <p className="text-white/50">แนวทางที่เป็นระบบเพื่อสร้างซอฟต์แวร์คุณภาพสูง</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden lg:block" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 glass p-8 rounded-3xl text-center group hover:border-purple-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <span className="font-bold">{i + 1}</span>
                </div>
                <h3 className="font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
