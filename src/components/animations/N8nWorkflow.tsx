import React from 'react';
import { motion } from 'motion/react';
import { Webhook, Brain, Database, FileSpreadsheet, GitBranch, MessageCircle, CloudCog } from 'lucide-react';

export default function N8nWorkflow() {
  const tools = [
    {
      icon: Webhook,
      color: "text-orange-400",
      bg: "bg-orange-500/20",
      title: "1. Receive Messages",
      desc: "โหนด Webhook ทำหน้าที่เป็นด่านหน้ารับข้อมูล (Event Trigger) ทันทีที่ลูกค้าพิมพ์ข้อความเข้ามาจากช่องทางใดช่องทางหนึ่ง"
    },
    {
      icon: Brain,
      color: "text-white",
      bg: "bg-gray-700/50",
      title: "2. AI Chatbot Agent",
      desc: "หัวใจหลักของระบบที่ควบคุมทิศทางการตอบคำถาม โดยทำงานร่วมกับโมเดล พลังความจำ และเครื่องมือเสริมที่เชื่อมต่ออยู่"
    },
    {
      icon: CloudCog,
      color: "text-green-400",
      bg: "bg-green-500/20",
      title: "3. OpenAI Chat Model",
      desc: "เชื่อมต่อกับ API ของ OpenAI เพื่อให้แชทบอทสามารถทำความเข้าใจภาษา (NLU) ประมวลผลเจตนาของลูกค้า และสร้างคำตอบได้อย่างเป็นธรรมชาติ"
    },
    {
      icon: Database,
      color: "text-blue-400",
      bg: "bg-blue-500/20",
      title: "4. Conversation Memory",
      desc: "ระบบจำประวัติการสนทนา (Window Memory) ช่วยให้ AI โต้ตอบได้อย่างต่อเนื่อง ไม่ลืมบริบทที่คุยไปก่อนหน้า"
    },
    {
      icon: FileSpreadsheet,
      color: "text-emerald-400",
      bg: "bg-emerald-500/20",
      title: "5. Google Sheets (Tool)",
      desc: "เครื่องมือที่อนุญาตให้ AI วิ่งไปดึงข้อมูล Knowledge Base หรือเช็คสต็อกสินค้าจาก Google Sheets มาตอบลูกค้าได้แบบ Real-time"
    },
    {
      icon: GitBranch,
      color: "text-blue-500",
      bg: "bg-blue-500/20",
      title: "6. Route by Platform",
      desc: "โหนด Router ตรวจสอบว่าข้อความมาจากแพลตฟอร์มใด (LINE, FB, IG) และแยกทิศทางเพื่อประมวลผลการส่งข้อมูลกลับให้ถูกต้องร้อยเปอร์เซ็นต์"
    },
    {
      icon: MessageCircle,
      color: "text-purple-400",
      bg: "bg-purple-500/20",
      title: "7. Send Reply & Acknowledge",
      desc: "ขั้นตอนสุดท้ายในการยิง HTTP Request กลับไปยัง LINE/FB/IG API เพื่อนำข้อความของ AI ไปแสดงผลให้ลูกค้าเห็นบนหน้าแชท"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full space-y-12">
      {/* ภาพ Workflow */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-[#1a1c23] p-3 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-duration-500 rounded-3xl blur-2xl" />
        <div className="relative z-10 rounded-2xl overflow-hidden glass border border-white/5">
          <img 
            src="/src/photo/workflow/Screenshot 2026-03-19 112355.png" 
            alt="AI Chatbot n8n Workflow" 
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* คำอธิบาย */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {tools.map((tool, idx) => (
          <motion.div 
            key={idx} 
            variants={item}
            className="flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tool.bg} ${tool.color} transition-transform group-hover:scale-110`}>
              <tool.icon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">{tool.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {tool.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
