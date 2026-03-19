import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Zap, Shield, Crown, Star, X, Wrench, Lightbulb, Code, BarChart3, Bot } from 'lucide-react';

export interface Package {
  name: string;
  price: string;
  priceSuffix: string;
  desc: string;
  suitableFor: string;
  recommendedPrice: string;
  duration: string;
  features: string[];
  shortFeatures: string[];
  icon: React.ElementType;
  color: string;
  popular?: boolean;
  buttonText: string;
}

const PACKAGES: Package[] = [
  {
    name: 'Starter (Landing Page)',
    price: '1,500',
    priceSuffix: '+',
    desc: 'สำหรับเปิดตัวธุรกิจหรือแคมเปญด้วยหน้าเว็บที่สวยงามและดึงดูด',
    suitableFor: 'แบรนด์ใหม่ ธุรกิจขนาดเล็ก หรือ Landing Page สำหรับยิงแอดโฆษณา',
    recommendedPrice: '1,500 - 3,500+ บาท',
    duration: '3 - 7 วัน',
    features: [
      'เว็บไซต์หน้าเดียว (Single Page) ดีไซน์ทันสมัย',
      'รองรับการแสดงผลทุกจอ (Responsive Design)',
      'ปรับแต่ง SEO พื้นฐาน (On-page SEO)',
      'เชื่อมต่อฟอร์มติดต่อสอบถาม / ข้อมูลติดต่อ / แผนที่',
      'เชื่อมต่อ Google Analytics พื้นฐาน'
    ],
    shortFeatures: [
      'เว็บไซต์หน้าเดียว',
      'รองรับมือถือและแท็บเล็ต',
      'ตั้งค่า SEO พื้นฐาน',
      'ส่งมอบภายใน 3-7 วัน'
    ],
    icon: Zap,
    color: 'border-white/10',
    buttonText: 'ดูรายละเอียด'
  },
  {
    name: 'Data Dashboard',
    price: '15,000',
    priceSuffix: '+',
    desc: 'ระบบแดชบอร์ดสรุปยอดขายหรือภาพรวมธุรกิจแบบโต้ตอบได้',
    suitableFor: 'บริษัทหรือธุรกิจที่มีข้อมูลล้นมือ และต้องการจอสรุปผลที่ดูง่าย ดึงข้อมูลสดใหม่ได้',
    recommendedPrice: '15,000 - 25,000+ บาท',
    duration: '14 - 21 วัน',
    features: [
      'หน้ากระดานสรุปข้อมูล (Dashboard) พร้อมกราฟิกสวยงาม',
      'เชื่อมต่อฐานข้อมูลภายนอกแบบ Read-only หรือ API',
      'ระบบตัวกรองข้อมูลหลายมิติ (Filter / Search)',
      'การออกแบบ UX/UI เน้นการวิเคราะห์เชิงลึก (Data Visualization)'
    ],
    shortFeatures: [
      'กราฟิกข้อมูลโต้ตอบได้ (Interactive)',
      'เชื่อมต่อระบบ API ดึงข้อมูล',
      'ระบบตัวกรองแบบละเอียด',
      'ส่งมอบภายใน 14-21 วัน'
    ],
    icon: BarChart3,
    color: 'border-white/10',
    buttonText: 'ดูรายละเอียด'
  },
  {
    name: 'Web Application / SaaS',
    price: '35,000',
    priceSuffix: '+',
    desc: 'ระบบจัดเก็บ ดึง และแก้ไขข้อมูลแบบเต็มรูปแบบ',
    suitableFor: 'การสร้างโปรแกรมภายในองค์กร, ระบบ CRM, หรือแพลตฟอร์มโซเชียลมีเดีย',
    recommendedPrice: '35,000 - 80,000+ บาท',
    duration: '1 - 2 เดือน',
    features: [
      'ระบบจัดการผู้ใช้งาน (Login / Register / Roles)',
      'สร้าง ฐานข้อมูลครบวงจร (CRUD Operations)',
      'พัฒนาด้วย React/Next.js (Frontend) และ Node.js/Python (Backend)',
      'แดชบอร์ดสำหรับแอดมิน เพื่อจัดการเนื้อหาทั้งหมด',
      'ระบบป้องกันความปลอดภัยพื้นฐานและพร้อมขยาย (Scalability)'
    ],
    shortFeatures: [
      'ระบบ Frontend และ Backend เต็มองค์',
      'ระบบจัดการผู้ใช้งาน',
      'แผงควบคุมแอดมิน (Admin Panel)',
      'ส่งมอบ 1-2 เดือน+'
    ],
    icon: Crown,
    color: 'border-purple-500/50 glow-purple',
    popular: true,
    buttonText: 'ดูรายละเอียด'
  },
  {
    name: 'AI Chatbot & Automation',
    price: '12,900',
    priceSuffix: '+',
    desc: 'บอทตอบลูกค้า 24/7 พร้อมเชื่อมโยงระบบการทำงานอัตโนมัติ',
    suitableFor: 'เพจขายของ ร้านค้าออนไลน์ที่มีคนทักเยอะ หรือองค์กรที่งานหลังบ้านซ้ำซ้อนเยอะ',
    recommendedPrice: '12,900 - 30,000+ บาท',
    duration: '7 - 14 วัน',
    features: [
      'เชื่อมต่อ ChatGPT / Google Gemini อ่านแชทจาก LINE หรือ FB',
      'ฐานข้อมูลย่อยจาก Google Sheets สำหรับให้บอทดึงราคาสินค้ามาตอบ',
      'ออกแบบระบบ Workflow การตอบด้วย n8n / Make.com / Zapier',
      'แยกเส้นทางแชทระหว่างเซลล์ตัวจริงกับบอท',
      'เก็บข้อมูลการคุยลูกค้าเพื่อวิเคราะห์พฤติกรรม'
    ],
    shortFeatures: [
      'สร้างบอท AI ฉลาดตอบเหมือนมนุษย์',
      'เชื่อม Google Sheets',
      'ออกแบบ Workflow ด้วย n8n',
      'ส่งมอบภายใน 7-14 วัน'
    ],
    icon: Bot,
    color: 'border-white/10',
    buttonText: 'ดูรายละเอียด'
  }
];

const SOFTWARE_PACKAGES: Package[] = [
  {
    name: 'Bug Fixing & Troubleshooting',
    price: '500',
    priceSuffix: '+/ชม.',
    desc: 'บริการแก้ไขโค้ดและแก้บัค เหมาะสำหรับระบบเดิมที่มีปัญหา',
    suitableFor: 'ลูกค้าที่มีระบบเดิมอยู่แล้วแต่พบปัญหาการใช้งาน, โค้ดพัง, หรือต้องการปรับปรุงประสิทธิภาพการทำงานของระบบ (เช่น การดึงข้อมูลหรือปรับปรุง Query ให้ทำงานเร็วขึ้น)',
    recommendedPrice: 'รายชั่วโมง: 500 - 1,500+ บาท | เหมาตามอาการ: เริ่มต้น 1,500 - 3,000+ บาท / บัค',
    duration: 'ขึ้นอยู่กับความซับซ้อนของปัญหา',
    features: [
      'การไล่หาต้นตอของปัญหา (Root Cause Analysis)',
      'แก้ไขโค้ดให้ระบบกลับมาทำงานได้ตามปกติ',
      'สรุปรายงานปัญหาและวิธีการแก้ไขสั้นๆ ให้ลูกค้า'
    ],
    shortFeatures: [
      'ไล่หาต้นตอของปัญหา',
      'แก้ไขโค้ดให้ระบบทำงานปกติ',
      'สรุปรายงานการแก้ไข',
      'คิดแบบรายชั่วโมงหรือเหมา'
    ],
    icon: Wrench,
    color: 'border-white/10',
    buttonText: 'ดูรายละเอียด'
  },
  {
    name: 'Software Consulting & Review',
    price: '1,000',
    priceSuffix: '+/เซสชัน',
    desc: 'บริการให้คำปรึกษาด้านซอฟต์แวร์ และโครงสร้างระบบ',
    suitableFor: 'ทีมพัฒนาที่ต้องการมุมมองจากผู้เชี่ยวชาญ, องค์กรที่กำลังจะเริ่มโปรเจกต์และต้องการวางโครงสร้าง, หรือนักศึกษา/บุคคลทั่วไปที่ติดปัญหาเรื่องการเขียนโปรแกรมและการออกแบบฐานข้อมูล',
    recommendedPrice: 'คิดเป็นเซสชัน (Per Session): 1,000 - 2,500+ บาท / 1-2 ชั่วโมง (ผ่าน Google Meet / Zoom)',
    duration: '1-2 ชั่วโมง / เซสชัน',
    features: [
      'การให้คำแนะนำเรื่องสถาปัตยกรรมระบบ (System Architecture)',
      'คำแนะนำการออกแบบและจัดการโครงสร้างฐานข้อมูลที่มีความซับซ้อน',
      'การทำ Code Review เพื่อหาจุดที่ควรปรับปรุง',
      'แนะนำ Tech Stack ที่เหมาะสมกับขอบเขตของงานและงบประมาณ'
    ],
    shortFeatures: [
      'ให้คำแนะนำสถาปัตยกรรมระบบ',
      'ออกแบบโครงสร้างฐานข้อมูล',
      'ทำ Code Review',
      'แนะนำ Tech Stack ที่เหมาะสม'
    ],
    icon: Lightbulb,
    color: 'border-white/10',
    buttonText: 'ดูรายละเอียด'
  },
  {
    name: 'Custom Software Development',
    price: '40,000',
    priceSuffix: '+',
    desc: 'บริการออกแบบและพัฒนาซอฟต์แวร์เฉพาะทาง',
    suitableFor: 'องค์กรที่ต้องการระบบภายใน (Internal Tools), Web Application ที่มีฟังก์ชันเฉพาะตัว, หรือระบบที่มีการจัดการข้อมูลและตรรกะที่ซับซ้อน',
    recommendedPrice: 'เริ่มต้นที่ 40,000 - 100,000+ บาท (ประเมินตามขอบเขตงาน)',
    duration: '1 - 3 เดือนขึ้นไป (แบ่งการทำงานเป็นเฟส)',
    features: [
      'การเก็บ Requirement และออกแบบ Flow การทำงานของระบบ',
      'ออกแบบฐานข้อมูลและเขียน API / ควบคุมการดึงข้อมูลต่างๆ',
      'พัฒนาระบบทั้งส่วนหน้าบ้าน (Frontend) และหลังบ้าน (Backend)',
      'ทดสอบระบบ (Testing) ก่อนส่งมอบ',
      'คู่มือการใช้งานเบื้องต้นและรับประกันงานหลังส่งมอบ (เช่น 30 วัน)'
    ],
    shortFeatures: [
      'ออกแบบ Flow และ Database',
      'พัฒนาระบบ Frontend / Backend',
      'ทดสอบระบบก่อนส่งมอบ',
      'คู่มือและรับประกันงาน'
    ],
    icon: Code,
    color: 'border-purple-500/50 glow-purple',
    popular: true,
    buttonText: 'ดูรายละเอียด'
  }
];

export default function Pricing() {
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);

  // Close modal when pressing escape
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedPkg(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">แพ็กเกจและบริการ</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              เลือกแผนที่เหมาะกับความต้องการของคุณ ทุกแพ็กเกจเน้นคุณภาพ ประสิทธิภาพ และความปลอดภัย
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-8 rounded-[40px] border flex flex-col relative ${pkg.color} ${pkg.popular ? 'bg-purple-500/5' : ''}`}
            >
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${pkg.popular ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-white/40'}`}>
                  <pkg.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-xl font-bold text-white/70">{pkg.priceSuffix}</span>
                  <span className="text-white/40 text-sm ml-1">บาท</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed h-12">
                  {pkg.desc}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {pkg.shortFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-white/70">
                    <div className="mt-1 text-purple-500">
                      <Check size={14} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setSelectedPkg(pkg)}
                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all ${
                pkg.popular 
                  ? 'bg-purple-500 text-white hover:bg-purple-600 shadow-lg shadow-purple-500/20' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}>
                {pkg.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold tracking-tight mb-4">บริการด้านซอฟต์แวร์</h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Software & Consulting Services ตอบโจทย์ทั้งการแก้ปัญหา และพัฒนาซอฟต์แวร์เฉพาะทาง
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SOFTWARE_PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-8 rounded-[40px] border flex flex-col relative ${pkg.color} ${pkg.popular ? 'bg-purple-500/5' : ''}`}
            >
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${pkg.popular ? 'bg-purple-500/20 text-purple-400' : 'bg-white/5 text-white/40'}`}>
                  <pkg.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-xl font-bold text-white/70">{pkg.priceSuffix}</span>
                  <span className="text-white/40 text-sm ml-1">บาท</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed h-12">
                  {pkg.desc}
                </p>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {pkg.shortFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-white/70">
                    <div className="mt-1 text-purple-500">
                      <Check size={14} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setSelectedPkg(pkg)}
                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all ${
                pkg.popular 
                  ? 'bg-purple-500 text-white hover:bg-purple-600 shadow-lg shadow-purple-500/20' 
                  : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
              }`}>
                {pkg.buttonText}
              </button>
            </motion.div>
          ))}
        </div>


        <div className="mt-16 text-center">
          <p className="text-white/40 text-sm">
            ต้องการโซลูชันที่ปรับแต่งเอง? <a href="#contact" className="text-purple-400 hover:underline">ติดต่อคุยรายละเอียดกับผมได้เลย</a>
          </p>
        </div>
      </div>

      {/* Package Details Modal */}
      <AnimatePresence>
        {selectedPkg && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedPkg(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0f0f13] border border-white/10 rounded-3xl shadow-2xl overflow-hidden glass z-10 max-h-[90vh] flex flex-col"
            >
              <div className="p-6 md:p-8 overflow-y-auto">
                <button 
                  onClick={() => setSelectedPkg(null)}
                  className="absolute top-6 right-6 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4 mb-6 pr-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${selectedPkg.popular ? 'bg-purple-500/20 text-purple-400' : 'bg-white/10 text-white'}`}>
                    <selectedPkg.icon size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{selectedPkg.name}</h3>
                </div>

                <div className="space-y-6">
                  {/* เหมาะสำหรับ */}
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">เหมาะสำหรับ</h4>
                    <p className="text-white/80 leading-relaxed">{selectedPkg.suitableFor}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    {/* ราคาแนะนำ */}
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <h4 className="text-sm font-semibold text-white/50 mb-1">ราคาแนะนำ</h4>
                      <p className="text-lg font-bold text-white">{selectedPkg.recommendedPrice}</p>
                    </div>

                    {/* ระยะเวลา */}
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <h4 className="text-sm font-semibold text-white/50 mb-1">ระยะเวลา</h4>
                      <p className="text-lg font-bold text-white">{selectedPkg.duration}</p>
                    </div>
                  </div>

                  {/* สิ่งที่จะได้รับ */}
                  <div>
                    <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-4">สิ่งที่จะได้รับ</h4>
                    <ul className="grid grid-cols-1 gap-3">
                      {selectedPkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 text-purple-500 shrink-0">
                            <Check size={16} />
                          </div>
                          <span className="text-white/80 text-sm md:text-base leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                  <button 
                    onClick={() => setSelectedPkg(null)}
                    className="w-full md:w-auto px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors"
                  >
                    ปิดหน้าต่าง
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
