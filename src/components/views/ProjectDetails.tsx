import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Folder, File, FileCode, FileJson, Database, Server, Box, Terminal, ShieldCheck, Layout, MessageSquare, Cpu } from 'lucide-react';
import N8nWorkflow from '../animations/N8nWorkflow';

interface ProjectDetailsProps {
  projectId: string;
  onBack: () => void;
}

const STOCK_TREE = [
  { name: 'components', type: 'folder', children: [{ name: 'Layout.tsx', type: 'tsx' }] },
  { name: 'dist', type: 'folder' },
  { name: 'dist-server', type: 'folder' },
  { name: 'hooks', type: 'folder', children: [{ name: 'useRealTime.ts', type: 'ts' }] },
  { name: 'logs', type: 'folder' },
  { name: 'node_modules', type: 'folder' },
  { name: 'pages', type: 'folder', children: [
      { name: 'ActivityLog.tsx', type: 'tsx' },
      { name: 'Dashboard.tsx', type: 'tsx' },
      { name: 'Login.tsx', type: 'tsx' },
      { name: 'ProductList.tsx', type: 'tsx' },
      { name: 'Reports.tsx', type: 'tsx' },
      { name: 'StockOperations.tsx', type: 'tsx' },
      { name: 'UserManagement.tsx', type: 'tsx' }
  ] },
  { name: 'scripts', type: 'folder', children: [{ name: 'clear-movements.ts', type: 'ts' }] },
  { name: 'server', type: 'folder', children: [
      { name: 'database.ts', type: 'ts' },
      { name: 'index.ts', type: 'ts' },
      { name: 'routes.ts', type: 'ts' }
  ] },
  { name: 'services', type: 'folder', children: [
      { name: 'database', type: 'folder', children: [{ name: 'connection.ts', type: 'ts' }] }
  ] },
  { name: 'tests', type: 'folder', children: [
      { name: '01-auth.test.ts', type: 'ts' },
      { name: '02-categories-products.test.ts', type: 'ts' },
      { name: '03-stock-movements.test.ts', type: 'ts' },
      { name: '04-bills-customers.test.ts', type: 'ts' },
      { name: '05-users-dashboard-system.test.ts', type: 'ts' },
      { name: '06-database.test.ts', type: 'ts' },
      { name: '07-integration.test.ts', type: 'ts' },
      { name: 'setup.ts', type: 'ts' }
  ] },
  { name: '.dockerignore', type: 'file' },
  { name: '.env.local', type: 'file' },
  { name: '.gitignore', type: 'file' },
  { name: 'App.tsx', type: 'tsx' },
  { name: 'construction_stock.db', type: 'db' },
  { name: 'docker-compose.yml', type: 'docker' },
  { name: 'Dockerfile', type: 'docker' },
  { name: 'Dockerfile.web', type: 'docker' },
  { name: 'index.css', type: 'css' },
  { name: 'index.html', type: 'html' },
  { name: 'index.tsx', type: 'tsx' },
  { name: 'metadata.json', type: 'json' },
  { name: 'nginx.conf', type: 'config' },
  { name: 'package.json', type: 'json' },
  { name: 'tailwind.config.js', type: 'js' },
  { name: 'tsconfig.json', type: 'json' },
  { name: 'types.ts', type: 'ts' },
  { name: 'vite.config.ts', type: 'ts' },
  { name: 'vitest.config.ts', type: 'ts' }
];

const UNISTAY_TREE = [
  { name: 'node_modules', type: 'folder' },
  { name: 'src', type: 'folder', children: [
    { name: 'components', type: 'folder', children: [
      { name: 'Navbar.tsx', type: 'tsx' },
      { name: 'PropertyCard.tsx', type: 'tsx' }
    ]},
    { name: 'context', type: 'folder', children: [
      { name: 'AuthContext.tsx', type: 'tsx' }
    ]},
    { name: 'pages', type: 'folder', children: [
      { name: 'AdminDashboard.tsx', type: 'tsx' },
      { name: 'ChatPage.tsx', type: 'tsx' },
      { name: 'HomePage.tsx', type: 'tsx' },
      { name: 'LandlordDashboard.tsx', type: 'tsx' },
      { name: 'LoginPage.tsx', type: 'tsx' },
      { name: 'ProfilePage.tsx', type: 'tsx' },
      { name: 'PropertyDetailPage.tsx', type: 'tsx' },
      { name: 'SearchPage.tsx', type: 'tsx' },
      { name: 'SignupPage.tsx', type: 'tsx' }
    ]},
    { name: 'services', type: 'folder', children: [
      { name: 'geminiService.ts', type: 'ts' }
    ]},
    { name: 'App.tsx', type: 'tsx' },
    { name: 'index.css', type: 'css' },
    { name: 'main.tsx', type: 'tsx' },
    { name: 'types.ts', type: 'ts' }
  ]},
  { name: '.env.example', type: 'file' },
  { name: '.gitignore', type: 'file' },
  { name: 'index.html', type: 'html' },
  { name: 'metadata.json', type: 'json' },
  { name: 'package-lock.json', type: 'json' },
  { name: 'package.json', type: 'json' },
  { name: 'README.md', type: 'file' },
  { name: 'server.ts', type: 'ts' },
  { name: 'tsconfig.json', type: 'json' },
  { name: 'vite.config.ts', type: 'ts' }
];

const FINBOARD_TREE = [
  { name: 'backend', type: 'folder', children: [
    { name: 'app', type: 'folder' },
    { name: '.env.example', type: 'file' },
    { name: 'Dockerfile', type: 'docker' },
    { name: 'main.py', type: 'py' },
    { name: 'requirements.txt', type: 'file' }
  ]},
  { name: 'frontend', type: 'folder', children: [
    { name: '.next', type: 'folder' },
    { name: 'app', type: 'folder', children: [
      { name: 'dashboard', type: 'folder' },
      { name: 'globals.css', type: 'css' },
      { name: 'layout.tsx', type: 'tsx' },
      { name: 'page.tsx', type: 'tsx' }
    ]},
    { name: 'components', type: 'folder', children: [
      { name: 'charts', type: 'folder' },
      { name: 'layout', type: 'folder' },
      { name: 'ui', type: 'folder' }
    ]},
    { name: 'lib', type: 'folder', children: [
      { name: 'api.ts', type: 'ts' },
      { name: 'mock.ts', type: 'ts' },
      { name: 'types.ts', type: 'ts' }
    ]},
    { name: 'node_modules', type: 'folder' },
    { name: '.env.example', type: 'file' },
    { name: '.env.local', type: 'file' },
    { name: 'Dockerfile', type: 'docker' },
    { name: 'next-env.d.ts', type: 'ts' },
    { name: 'next.config.js', type: 'js' },
    { name: 'package-lock.json', type: 'json' },
    { name: 'package.json', type: 'json' },
    { name: 'postcss.config.js', type: 'js' },
    { name: 'tailwind.config.js', type: 'js' },
    { name: 'tsconfig.json', type: 'json' }
  ]},
  { name: '.gitignore', type: 'file' },
  { name: 'docker-compose.yml', type: 'docker' },
  { name: 'README.md', type: 'file' }
];

const PROJECT_DATA: Record<string, any> = {
  'construction-stock': {
    title: 'STOCK-PRO-MAX โครงสร้างโปรเจกต์',
    subtitle: 'Architecture Case Study',
    explorerTitle: '📂 STOCK-PRO-MAX',
    tree: STOCK_TREE,
    introTitle: 'การออกแบบโครงสร้างที่พร้อม Scale',
    introDesc: 'แตกต่างจากโปรเจกต์เว็บทั่วไป โปรเจกต์ STOCK-PRO-MAX ถูกออกแบบด้วยแนวคิดการแยกส่วนประกอบที่ชัดเจน (Modular Architecture) รองรับการขยายตัว (Scalability) และมีระบบการจัดการข้อผิดพลาด (Automated Testing) อย่างครอบคลุม',
    sections: [
      {
        icon: <FileCode size={24} />,
        iconColor: 'text-blue-400',
        bg: 'bg-blue-500/20',
        borderHover: 'hover:border-blue-500/50',
        title: 'Frontend (React + Vite)',
        desc: 'จัดเรียงโค้ดเป็นโฟลเดอร์ pages/ ตามฟีเจอร์หลัก (Dashboard, ProductList, StockOperations) การแยกส่วนแบบนี้ทำให้การเพิ่มฟีเจอร์ใหม่ๆ ไม่กระทบกับโค้ดส่วนอื่น และดึงข้อมูลแบบ Real-time ผ่าน useRealTime.ts'
      },
      {
        icon: <Server size={24} />,
        iconColor: 'text-green-400',
        bg: 'bg-green-500/20',
        borderHover: 'hover:border-green-500/50',
        title: 'Backend & Database',
        desc: 'API ถูกแบ่งอย่างเป็นระเบียบใน server/routes.ts เชื่อมต่อไปยังฐานข้อมูล SQLite (construction_stock.db) ผ่าน Service Layer พิเศษ ช่วยให้จัดเก็บข้อมูล Transactions ได้รวดเร็วและปลอดภัยระดับ Business Grade'
      },
      {
        icon: <ShieldCheck size={24} />,
        iconColor: 'text-orange-400',
        bg: 'bg-orange-500/20',
        borderHover: 'hover:border-orange-500/50',
        title: 'Testing System (Vitest)',
        desc: 'ไฮไลท์ของการพัฒนา! เราเขียน Unit Test และ Integration Test ครอบคลุมถึง 7 ประเภท ตั้งแต่ Auth, Products ไปจนถึง Database การมีไฟล์เทสต์ที่ครบครันนี้รับประกันความเสถียรของโปรแกรม'
      },
      {
        icon: <Box size={24} />,
        iconColor: 'text-purple-400',
        bg: 'bg-purple-500/20',
        borderHover: 'hover:border-purple-500/50',
        title: 'DevOps & Deployment',
        desc: 'พร้อมขึ้น Production เสมอ! จัดการสภาพแวดล้อมด้วย Dockerfile, docker-compose.yml และตั้งค่า Proxy Server ด้วย nginx.conf เตรียมตัวสเกลเป็นระบบ SaaS ในอนาคต'
      }
    ]
  },
  'unistay': {
    title: 'UniStay Student Housing',
    subtitle: 'System Architecture',
    explorerTitle: '📂 UNISTAY---STUDENT-HOUSING',
    tree: UNISTAY_TREE,
    introTitle: 'ระบบ Web Application สำหรับหอพักครบวงจร',
    introDesc: 'แอปพลิเคชัน Single Page App (SPA) ที่แยกโครงสร้างชัดเจนตามแนวทาง React + TypeScript ระบบนี้ถูกออกแบบให้รองรับ Role หลากหลาย ทั้งผู้เช่า เจ้าของหอพัก และแอดมิน โดยผสานพลัง AI เพื่อตอบสนองความต้องการของผู้ใช้อย่างรวดเร็วและชาญฉลาด',
    sections: [
      {
        icon: <ShieldCheck size={24} />,
        iconColor: 'text-blue-400',
        bg: 'bg-blue-500/20',
        borderHover: 'hover:border-blue-500/50',
        title: '🔒 การจัดการ Authentication',
        desc: 'รวมศูนย์หน้าสมัครสมาชิก (SignupPage.tsx) และเข้าสู่ระบบ (LoginPage.tsx) ไว้ที่ AuthContext.tsx เพื่อเก็บ Global State ของผู้ใช้ ทำให้จัดการสิทธิ์การเข้าถึงหน้าจองหอพักหรือโปรไฟล์ส่วนตัวได้อย่างปลอดภัย'
      },
      {
        icon: <Layout size={24} />,
        iconColor: 'text-purple-400',
        bg: 'bg-purple-500/20',
        borderHover: 'hover:border-purple-500/50',
        title: '🏠 ระบบค้นหาและ Dashboard อัจฉริยะ',
        desc: 'ระบบค้นหา (SearchPage.tsx) พร้อมโชว์รายการหอพัก (PropertyCard.tsx) ดึงข้อมูลมาแสดงที่ PropertyDetailPage.tsx นอกจากนี้ยังมี Dashboard ถูกสร้างแยกตาม Role เช่น AdminDashboard และ LandlordDashboard เพื่อ UI/UX ที่เหมาะสมที่สุด'
      },
      {
        icon: <MessageSquare size={24} />,
        iconColor: 'text-emerald-400',
        bg: 'bg-emerald-500/20',
        borderHover: 'hover:border-emerald-500/50',
        title: '💬 ระบบ Chat สนทนาแบบ Real-time',
        desc: 'เพิ่มฟีเจอร์ ChatPage.tsx อำนวยความสะดวกให้ผู้เช่าและ Landlord สามารถพูดคุยเพื่อเจรจา สอบถามราคา หรือขอดูห้องเพิ่มเติมได้ทันทีบนแพลตฟอร์ม'
      },
      {
        icon: <Cpu size={24} />,
        iconColor: 'text-rose-400',
        bg: 'bg-rose-500/20',
        borderHover: 'hover:border-rose-500/50',
        title: '🤖 AI Integration',
        desc: 'ผสานการทำงานของ Google Gemini API ผ่าน geminiService.ts เพื่อสร้างเป็นผู้ช่วยส่วนตัว คอยแนะนำหอพักที่ตรงสเปก หรือใช้เป็น Chatbot สำหรับตอบคำถามเบื้องต้น (FAQ) ให้กับผู้สนใจ 24 ชั่วโมง'
      }
    ]
  },
  'market-intel': {
    title: 'แดชบอร์ดวิเคราะห์ตลาด (FinBoard)',
    subtitle: 'System Architecture',
    explorerTitle: '📂 FINBOARD',
    tree: FINBOARD_TREE,
    introTitle: 'ระบบ Web Dashboard พร้อมโครงสร้าง Production-ready',
    introDesc: 'ระบบนี้ออกแบบสถาปัตยกรรมแบบแยกส่วน (Decoupled Architecture) อย่างชัดเจนระหว่าง Frontend (Next.js) และ Backend (Python) เพื่อให้ง่ายต่อการดูแลรักษา (Maintenance) เปลี่ยนแปลงเทคโนโลยี และดึงข้อมูลมหาศาล (Data Visualization) ได้อย่างเต็มประสิทธิภาพ พร้อมห่อหุ้มด้วย Docker ทำให้สามารถ Deploy ขึ้น Production ได้ทันที',
    sections: [
      {
        icon: <Layout size={24} />,
        iconColor: 'text-blue-400',
        bg: 'bg-blue-500/20',
        borderHover: 'hover:border-blue-500/50',
        title: '📊 Frontend เร็วแรงด้วย Next.js',
        desc: 'โครงสร้างแบบ App Router (app/dashboard) ร่วมกับ Component-based UI (components/ui, components/charts) ช่วยให้การแสดงผลข้อมูลตลาดการเงินทำได้ลื่นไหล รองรับ Server-Side Rendering (SSR) เต็มรูปแบบ'
      },
      {
        icon: <Terminal size={24} />,
        iconColor: 'text-purple-400',
        bg: 'bg-purple-500/20',
        borderHover: 'hover:border-purple-500/50',
        title: '⚙️ Backend สาย Data (Python)',
        desc: 'วางโค้ดฝั่ง Backend (backend/main.py) แยกอิสระโดยใช้ Python (FastAPI/Flask) ซึ่งเหมาะที่สุดสำหรับการประมวลผลข้อมูลหนักๆ และ API ที่มีประสิทธิภาพสูง พร้อมเชื่อมโยงกับ Frontend ผ่าน lib/api.ts'
      },
      {
        icon: <FileCode size={24} />,
        iconColor: 'text-emerald-400',
        bg: 'bg-emerald-500/20',
        borderHover: 'hover:border-emerald-500/50',
        title: '🧪 Mock Data สำหรับ Test UI',
        desc: 'เตรียมพร้อมสำหรับการทำงานคู่ขนานผ่าน lib/mock.ts ให้นักพัฒนา Frontend สามารถใช้งานและจำลอง Data นำมาสร้างกราฟ (charts) ได้ในขณะที่ Backend กำลังพัฒนา ลดปัญหาคอขวดของทีม'
      },
      {
        icon: <Box size={24} />,
        iconColor: 'text-orange-400',
        bg: 'bg-orange-500/20',
        borderHover: 'hover:border-orange-500/50',
        title: '🐳 กระบวนการ Deploy อัตโนมัติ',
        desc: 'ติดตั้ง Dockerfile ในโฟลเดอร์ฝั่ง frontend และ backend พร้อมรวมร่างผ่าน docker-compose.yml ภายนอก ทำให้ทีม Infra สามารถจัดการ Env Variables (.env) และรันระบบทั้งหมดได้ทันที'
      }
    ]
  },
  'ai-chatbot': {
    title: 'ระบบ AI Chatbot อัจฉริยะ',
    subtitle: 'N8N AUTOMATION WORKFLOW',
    explorerTitle: '',
    tree: [],
    introTitle: 'การผสานการทำงานด้วย n8n Workflow',
    introDesc: 'เบื้องหลังของ AI Chatbot ขับเคลื่อนด้วยระบบ Automation ระดับองค์กร (n8n) ยืดหยุ่นและปรับเปลี่ยน Flow ได้ทันที ทำงานโดยรับ Event จาก LINE OA หรือ Facebook Page ทันทีที่มีลูกค้าทักเข้ามา จากนั้นวิเคราะห์เนื้อหาด้วยแบบจำลองภาษาขนาดใหญ่ (OpenAI) พร้อมประมวลผลข้อความและข้อมูลสินค้าในฐานข้อมูล ก่อนประกอบเป็นคำตอบที่มีชั้นเชิงให้ลูกค้าราวกับคุยกับแอดมินคนโปรด',
    sections: []
  }
};

export default function ProjectDetails({ projectId, onBack }: ProjectDetailsProps) {
  // Fallback to stock-pro if ID not directly mapped
  const data = PROJECT_DATA[projectId] || PROJECT_DATA['construction-stock'];

  const getIcon = (type: string, name: string) => {
    if (type === 'folder') return <Folder size={16} className="text-blue-400" />;
    if (type === 'tsx' || type === 'ts' || type === 'js') return <FileCode size={16} className="text-blue-500" />;
    if (type === 'py') return <Terminal size={16} className="text-yellow-400" />;
    if (type === 'json') return <FileJson size={16} className="text-yellow-400" />;
    if (type === 'db') return <Database size={16} className="text-yellow-600" />;
    if (type === 'docker') return <Box size={16} className="text-blue-600" />;
    return <File size={16} className="text-gray-400" />;
  };

  const renderTree = (nodes: any[], depth = 0) => {
    return nodes.map((node, i) => (
      <div key={`${node.name}-${i}`}>
        <div 
          className="flex items-center gap-2 py-1 px-2 hover:bg-white/5 cursor-pointer rounded-md transition-colors"
          style={{ paddingLeft: `${depth * 1 + 0.5}rem` }}
        >
          {getIcon(node.type, node.name)}
          <span className={`text-sm tracking-wide ${node.type === 'folder' ? 'text-white/90' : 'text-white/60'}`}>
            {node.name}
          </span>
        </div>
        {node.children && renderTree(node.children, depth + 1)}
      </div>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 z-[200] bg-[#0a0a0c] flex flex-col overflow-hidden"
    >
      {/* Header */}
      <div className="h-20 border-b border-white/10 flex items-center px-8 bg-black/20 backdrop-blur-md sticky top-0 z-10 shrink-0">
        <button 
          onClick={onBack}
          className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
        >
          <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="font-bold tracking-wider">กลับไปหน้ารายละเอียด</span>
        </button>
        <div className="mx-auto flex flex-col items-center">
          <span className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-1">{data.subtitle}</span>
          <h1 className="text-xl font-bold">{data.title}</h1>
        </div>
        <div className="w-40" /> {/* Spacer for centering */}
      </div>

      <div className="flex-1 flex overflow-hidden">
        {projectId === 'ai-chatbot' ? (
          <div className="flex-1 bg-[#0a0a0c] overflow-y-auto p-8 md:p-16 custom-scrollbar">
            <div className="max-w-5xl mx-auto space-y-12 pb-20">
              <section className="text-center">
                <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                  {data.introTitle}
                </h2>
                <p className="text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
                  {data.introDesc}
                </p>
              </section>
              <N8nWorkflow />
            </div>
          </div>
        ) : (
          <>
            {/* Left: VSCode Explorer */}
            <div className="w-80 border-r border-white/10 bg-[#1e1e1e] flex flex-col shrink-0">
              <div className="p-4 border-b border-white/5">
                <h2 className="text-xs font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
                  <Terminal size={14} /> Explorer
                </h2>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                <div className="text-sm font-bold text-white/80 uppercase tracking-wider mb-2 px-2 flex items-center gap-2">
                   {data.explorerTitle}
                </div>
                {renderTree(data.tree)}
              </div>
            </div>

            {/* Right: Explanations */}
            <div className="flex-1 bg-[#0a0a0c] overflow-y-auto p-8 md:p-16 custom-scrollbar">
              <div className="max-w-4xl mx-auto space-y-16 pb-20">
                
                {/* Intro */}
                <section>
                  <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                    {data.introTitle}
                  </h2>
                  <p className="text-lg text-white/60 leading-relaxed">
                    {data.introDesc}
                  </p>
                </section>

                {/* Grid Explanations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {data.sections.map((sec: any, idx: number) => (
                    <div key={idx} className={`glass p-8 rounded-3xl border border-white/10 transition-colors ${sec.borderHover}`}>
                      <div className={`w-12 h-12 ${sec.bg} ${sec.iconColor} rounded-2xl flex items-center justify-center mb-6`}>
                        {sec.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{sec.title}</h3>
                      <p className="text-white/60 leading-relaxed mb-4">
                        {sec.desc.split(/(?=[a-zA-Z]+\.[a-z]+|\<[a-z]+\>|\bpages\/\b|\bserver\/[a-z]+\.[a-z]+)/).map((part: string, i: number) => {
                          if (part.match(/^[a-zA-Z0-9_-]+\.[a-z]{2,3}/) || part.match(/^(pages\/|server\/[a-z]+\.[a-z]+)/) || part.match(/^[A-Z][a-zA-Z]+\.tsx/)) {
                            const words = part.split(' ');
                            const filename = words[0];
                            const rest = words.slice(1).join(' ');
                            return <React.Fragment key={i}><code className="bg-white/10 px-1.5 py-0.5 rounded text-white/90">{filename}</code>{' '}{rest}</React.Fragment>;
                          }
                          return part;
                        })}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
