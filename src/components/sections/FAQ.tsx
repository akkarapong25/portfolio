import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: 'ระยะเวลาในการพัฒนาปกติใช้เวลานานเท่าไหร่?',
    answer: 'ระยะเวลาขึ้นอยู่กับความซับซ้อนของโปรเจกต์ โดยทั่วไปสำหรับระบบ Automation ขนาดเล็กจะใช้เวลาประมาณ 1-2 สัปดาห์ ส่วนเว็บแอปพลิเคชันเต็มรูปแบบอาจใช้เวลา 4-8 สัปดาห์ ผมจะมีการประเมินเวลาที่ชัดเจนให้ก่อนเริ่มงานเสมอครับ'
  },
  {
    question: 'มีบริการดูแลหลังการขายและซัพพอร์ตไหม?',
    answer: 'แน่นอนครับ ผมมีบริการดูแลหลังการขาย (Maintenance) เพื่อให้มั่นใจว่าระบบจะทำงานได้อย่างราบรื่นตลอดเวลา โดยจะครอบคลุมทั้งการแก้ไขบั๊ก การอัปเดตความปลอดภัย และการให้คำปรึกษาการใช้งาน'
  },
  {
    question: 'สามารถเชื่อมต่อกับระบบเดิม (Legacy System) ที่มีอยู่แล้วได้หรือไม่?',
    answer: 'ได้ครับ ผมมีความเชี่ยวชาญในการทำ API Integration และการเชื่อมต่อระบบข้ามแพลตฟอร์ม ไม่ว่าจะเป็นระบบบัญชี, CRM เดิม หรือฐานข้อมูลภายในองค์กร เพื่อให้ข้อมูลไหลเวียนได้อย่างไร้รอยต่อ'
  },
  {
    question: 'ราคาเริ่มต้นสำหรับโปรเจกต์ประมาณเท่าไหร่?',
    answer: 'ราคาจะเริ่มต้นตามความต้องการของลูกค้าครับ สำหรับระบบ Automation ง่ายๆ เริ่มต้นที่หลักพันปลายๆ ไปจนถึงระบบเว็บแอปพลิเคชันขนาดใหญ่ ผมเน้นความคุ้มค่า (Value for Money) และการคืนทุนที่รวดเร็วสำหรับธุรกิจของคุณ'
  },
  {
    question: 'ต้องเตรียมข้อมูลอะไรบ้างก่อนเริ่มปรึกษาโปรเจกต์?',
    answer: 'เพียงแค่เตรียม "ปัญหา" หรือ "เป้าหมาย" ที่คุณต้องการทำให้สำเร็จครับ เช่น ต้องการลดเวลาทำงานส่วนไหน หรือต้องการระบบอะไรมาช่วย หากมีตัวอย่างกระบวนการทำงานเดิม (Workflow) จะช่วยให้การประเมินรวดเร็วขึ้นมากครับ'
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  key?: any;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left hover:text-purple-400 transition-colors group"
      >
        <span className="text-lg font-medium pr-8">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-purple-400 transition-colors ${isOpen ? 'bg-purple-500 border-purple-500 text-white' : ''}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-white/60 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-black/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">คำถามที่พบบ่อย</h2>
          <p className="text-white/50">รวบรวมข้อสงสัยเบื้องต้น เพื่อช่วยให้คุณตัดสินใจได้ง่ายขึ้น</p>
        </div>

        <div className="glass rounded-[32px] p-8 md:p-12 border border-white/10">
          <div className="divide-y divide-white/10">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/40 text-sm">
            ยังมีคำถามอื่นๆ? <a href="#contact" className="text-purple-400 hover:underline">ติดต่อสอบถามผมโดยตรงได้ที่นี่</a>
          </p>
        </div>
      </div>
    </section>
  );
}
