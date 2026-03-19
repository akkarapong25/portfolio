import { motion } from 'motion/react';
import { Layout, BarChart3, Rocket, Bot } from 'lucide-react';

const SERVICES = [
  {
    title: 'Custom Web Applications',
    desc: 'สร้างแพลตฟอร์ม Web App, CRM และระบบธุรกิจเฉพาะทาง ด้วย React, Next.js และ TypeScript รองรับผู้ใช้งานจำนวนมาก',
    icon: Layout,
    color: 'text-purple-400'
  },
  {
    title: 'Data Dashboards',
    desc: 'พัฒนาระบบแดชบอร์ดแสดงผลข้อมูลสด (Real-time) และสรุปยอดขาย ช่วยให้คุณวิเคราะห์ข้อมูลและตัดสินใจทางธุรกิจได้รวดเร็วขึ้น',
    icon: BarChart3,
    color: 'text-blue-400'
  },
  {
    title: 'AI Chatbots',
    desc: 'ผสานพลัง ChatGPT / Gemini API สร้างบอทตอบลูกค้า ปิดการขาย อัจฉริยะ บน LINE และ Facebook ตลอด 24 ชั่วโมง',
    icon: Bot,
    color: 'text-cyan-400'
  },
  {
    title: 'Workflow Automation',
    desc: 'เชื่อมต่อระบบต่างๆ เข้าด้วยกัน ลดงานที่ต้องทำซ้ำๆ ด้วย n8n / Webhooks เพื่อให้ทีมงานโฟกัสกับงานที่สำคัญกว่า',
    icon: Rocket,
    color: 'text-emerald-400'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">บริการ</h2>
          <p className="text-white/50">โซลูชันซอฟต์แวร์เต็มรูปแบบสำหรับธุรกิจที่ต้องการเติมโตด้วยเทคโนโลยี</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 flex flex-col items-center text-center rounded-[32px] group hover:border-white/20 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:shadow-purple-500/10"
            >
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${s.color} group-hover:scale-110 transition-transform`}>
                <s.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
