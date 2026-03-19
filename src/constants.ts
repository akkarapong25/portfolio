export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  images: string[];
  category: 'ระบบเว็บ' | 'แดชบอร์ด' | 'สตาร์ทอัพ';
  caseStudy?: {
    problem: string;
    solution: string;
    result: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: 'construction-stock',
    title: 'STOCK-PRO-MAX',
    description: 'ระบบจัดการสต็อกสินค้าวัสดุก่อสร้าง + Dashboard วิเคราะห์ธุรกิจแบบ Real-time',
    features: [
      'ระบบจัดการสินค้า (Product Management): เพิ่ม/แก้ไข/ลบ/จัดหมวดหมู่',
      'ระบบบันทึกการเคลื่อนไหวของสินค้า (Stock Movement)',
      'Dashboard วิเคราะห์ธุรกิจ: ดูภาพรวม/แนวโน้ม/รายงาน',
      'ระบบผู้ใช้งาน (User Management): รองรับหลาย role (admin / staff)',
      'Activity Log: ตรวจสอบย้อนหลังได้ทุก action',
      'Real-time Update: ข้อมูลอัปเดตทันที ไม่ต้อง refresh'
    ],
    tech: [
      'React', 'TypeScript', 'TailwindCSS', 'Vite',
      'Node.js', 'REST API', 'SQLite',
      'Docker', 'Docker Compose', 'Nginx',
      'Vitest', 'Integration Testing'
    ],
    images: [
      '/src/photo/stock-pro/Screenshot 2026-03-18 153842.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154117.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154203.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154231.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154248.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154310.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154328.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154346.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154402.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154424.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154506.png',
      '/src/photo/stock-pro/Screenshot 2026-03-18 154531.png'
    ],
    category: 'ระบบเว็บ',
    caseStudy: {
      problem: 'ธุรกิจจัดการสต็อกแบบ manual / Excel ทำให้เกิดปัญหาสินค้าขาดโดยไม่รู้ตัว ข้อมูลไม่ Real-time และวิเคราะห์ยอดขายยาก',
      solution: 'STOCK-PRO-MAX เป็นระบบ Business Tool ที่รวมทุกอย่างไว้ในที่เดียว แยก Frontend / Backend ชัดเจน (Scalable) ใช้ TypeScript ทั้งระบบ ออกแบบ API เป็น Modular พร้อมระบบ Test ตั้งแต่ต้นและรองรับการ deploy จริง (Dockerized)',
      result: 'โครงสร้างโปรเจกต์พร้อม scale เป็น SaaS ได้ ทำให้จัดการสต็อกได้อย่างมีประสิทธิภาพและดูภาพรวมธุรกิจได้อย่างแม่นยำ'
    }
  },
  {
    id: 'market-intel',
    title: 'แดชบอร์ดวิเคราะห์ตลาด',
    description: 'ระบบ Dashboard ที่มี API backend (Python) และ UI frontend (Next.js) แยกกันชัดเจน พร้อมใช้งานจริง (Production-ready & Deployable via Docker)',
    features: [
      'Dashboard & Visualizations (กราฟ, สถิติ, รายงาน)',
      'Component-based UI (Reusable components, clear layouts)',
      'API Integration (เชื่อมโยง Frontend กับ Backend แยกอิสระ)',
      'Mock Data System (ใช้ทดสอบ UI ก่อนต่อ Backend จริง)',
      'App Router & SSR/SPA Hybrid (Next.js ล่าสุด)',
      'Deployment Ready (Dockerfile, docker-compose.yml)',
      'Environment Configurations (.env แยกตามสภาพแวดล้อม)'
    ],
    tech: ['Next.js', 'React', 'Tailwind', 'Python', 'FastAPI', 'Docker'],
    images: [
      '/src/photo/finboard/Screenshot 2026-03-19 015509.png',
      '/src/photo/finboard/Screenshot 2026-03-19 015533.png',
      '/src/photo/finboard/Screenshot 2026-03-19 015551.png',
      '/src/photo/finboard/Screenshot 2026-03-19 015607.png'
    ],
    category: 'แดชบอร์ด',
    caseStudy: {
      problem: 'ต้องการระบบ Dashboard วิเคราะห์ตลาดที่สามารถ Scale นำไป Deploy จริงได้ทันที และมีโครงสร้างการทำงานที่แยกส่วนชัดเจนเพื่อความสะดวกในการพัฒนาทีมย่อย',
      solution: 'ออกแบบสถาปัตยกรรมแบบ Microservice-like แยก Frontend เป็น Next.js (App Router) และ Backend เป็น Python พร้อมแพ็กเกจด้วย Docker และ Docker Compose',
      result: 'ได้ Web Dashboard Application เต็มรูปแบบที่พร้อมรันบน Production ทันที ด้วยโครงสร้างโค้ดและระบบ Config สภาพแวดล้อมที่เหมาะสมกับการทำ CI/CD'
    }
  },
  {
    id: 'unistay',
    title: 'แพลตฟอร์ม UniStay',
    description: 'Web Application สำหรับระบบหอพักนักศึกษาแบบแยกโครงสร้างชัดเจนด้วย React + TypeScript ฟีเจอร์ครบครันตั้งแต่ค้นหา จองห้อง ไปจนถึง Dashboard ของผู้ใช้งานแต่ละกลุ่ม',
    features: [
      'ระบบ Authentication (Login/Signup พร้อม Global Auth State)',
      'ระบบค้นหาและแสดงหอพัก (ค้นหา, ดูแบบ Card, ดูรายละเอียดห้อง)',
      'ระบบโปรไฟล์ (ดูและแก้ไขข้อมูลผู้ใช้ส่วนตัว)',
      'Dashboard รองรับหลาย Role (Admin จัดการระบบ, Landlord จัดการหอ/ห้อง)',
      'ระบบแชท (ผู้เช่าสามารถพูดคุยกับเจ้าของหอพัก)',
      'AI Integration (เชื่อมต่อ Google Gemini เพื่อช่วยแนะนำและค้นหาหอพัก)'
    ],
    tech: [
      'React', 'TypeScript', 'Vite', 'CSS', 'Node.js', 'Express', 'Google Gemini API'
    ],
    images: [
      '/src/photo/UniStay/Screenshot 2026-03-18 190947.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191024.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191042.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191057.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191113.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191157.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191220.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191239.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191257.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191319.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191357.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191436.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191453.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 191518.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 192454.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 192557.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 192618.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 192732.png',
      '/src/photo/UniStay/Screenshot 2026-03-18 192751.png'
    ],
    category: 'สตาร์ทอัพ',
    caseStudy: {
      problem: 'นักศึกษามักประสบปัญหาในการค้นหาและจองหอพักที่มีข้อมูลกระจัดกระจาย ในขณะที่เจ้าของหอพักไม่มีระบบจัดการข้อมูลส่วนกลางที่ดีพอ',
      solution: 'สร้างระบบ Web App (SPA) ด้วย React + TypeScript ที่เชื่อมต่อผู้เช่าและ Landlord ผ่านระบบเดียว พร้อมผสาน AI (Gemini) เพื่อช่วยค้นหาและแนะนำหอพักอย่างชาญฉลาด',
      result: 'ระบบที่ครบจบในที่เดียว รองรับ Role ผู้ใช้งานหลายระดับ จัดการข้อมูลหอพักอย่างเป็นระเบียบ และมีระบบแชทสื่อสารได้ทันที'
    }
  },
  {
    id: 'ai-chatbot',
    title: 'ระบบ AI Chatbot อัจฉริยะ',
    description: 'ระบบตอบแชทลูกค้าอัตโนมัติทุกแพลตฟอร์ม (LINE, FB, IG)',
    features: ['ตอบแชทอัตโนมัติ 24/7', 'เชื่อมต่อทุกแพลตฟอร์ม', 'ระบบปิดการขายอัตโนมัติ', 'วิเคราะห์พฤติกรรมลูกค้า'],
    tech: ['OpenAI API', 'Node.js', 'LINE API', 'FB API'],
    images: [
      '/src/photo/workflow/Screenshot 2026-03-19 112355.png'
    ],
    category: 'ระบบเว็บ',
    caseStudy: {
      problem: 'ธุรกิจเสียโอกาสการขายเพราะตอบแชทลูกค้าไม่ทันในช่วงเวลาเร่งด่วนและนอกเวลาทำการ ทำให้ลูกค้าเปลี่ยนใจไปซื้อที่อื่น',
      solution: 'พัฒนา AI Chatbot ที่มีความฉลาดใกล้เคียงมนุษย์ เชื่อมต่อกับฐานข้อมูลสินค้า สามารถตอบคำถาม ปิดการขาย และรับออเดอร์ได้อัตโนมัติทุกช่องทาง',
      result: 'เพิ่มยอดขายขึ้น 40% ภายใน 3 เดือนแรก และลดภาระงานของแอดมินในการตอบคำถามซ้ำๆ ลงได้ถึง 80%'
    }
  }
];

export const SKILLS = [
  {
    category: 'หน้าบ้าน (Frontend)',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'หลังบ้าน (Backend)',
    items: ['Node.js', 'Express', 'Python', 'FastAPI', 'REST API']
  },
  {
    category: 'ฐานข้อมูล (Database)',
    items: ['SQLite', 'PostgreSQL', 'MongoDB', 'Supabase']
  },
  {
    category: 'การดูแลระบบ/เทสติ้ง (DevOps/QA)',
    items: ['Docker', 'Nginx', 'Vitest', 'CI/CD']
  },
  {
    category: 'AI & Automation (🔥)',
    items: ['n8n', 'OpenAI', 'Google Gemini', 'LINE Messaging API']
  }
];

export interface Template {
  id: string;
  title: string;
  description: string;
  image: string;
  previewUrl: string;
  tags: string[];
  featured?: boolean;
  downloadUrl?: string;
  gallery?: string[];
}

export const TEMPLATES: Template[] = [
  {
    id: 'money-101-template',
    title: 'เว็บไซต์ Money 101',
    description: 'แพลตฟอร์มให้ความรู้ทางการเงิน การลงทุน และการจัดการภาษีเบื้องต้น (Money 101) นำเสนอเนื้อหาที่เข้าใจง่าย พร้อมเครื่องมือคำนวณและกราฟิกที่ช่วยให้เรื่องเงินเป็นเรื่องสนุกสำหรับทุกคน',
    image: '/src/photo/Money101/Screenshot 2026-03-19 010152.png',
    previewUrl: '#',
    tags: ['React', 'Tailwind', 'Finance & EdTech'],
    featured: true,
    gallery: [
      '/src/photo/Money101/Screenshot 2026-03-19 010152.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010207.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010222.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010235.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010249.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010308.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010332.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010348.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010413.png',
      '/src/photo/Money101/Screenshot 20d26-03-19 010438.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010514.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010531.png',
      '/src/photo/Money101/Screenshot 2026-03-19 010544.png'
    ]
  },
  {
    id: 'bitcoin-journey-template',
    title: 'เว็บไซต์ Bitcoin Journey',
    description: 'แพลตฟอร์มให้ความรู้ ข้อมูลเจาะลึก และเส้นทางการเติบโตของเทคโนโลยี Bitcoin และ Cryptocurrency ออกแบบด้วยสไตล์ที่ล้ำสมัย สื่อถึงนวัตกรรมแห่งโลกการเงินดิจิทัล',
    image: '/src/photo/bitcoin-journey/Screenshot 2026-03-19 004904.png',
    previewUrl: '#',
    tags: ['React', 'Tailwind', 'Web3 & Crypto'],
    featured: true,
    gallery: [
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 004904.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005000.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005018.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005032.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005045.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005058.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005112.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005130.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005143.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005156.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005219.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005234.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005247.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005300.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005315.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005349.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 005404.png',
      '/src/photo/bitcoin-journey/Screenshot 2026-03-19 0f04924.png'
    ]
  },
  {
    id: 'codeflow-simulator-template',
    title: 'แพลตฟอร์ม CodeFlow Simulator',
    description: 'แพลตฟอร์มจำลองและเรียนรู้การเขียนโค้ด (CodeFlow Simulator) ออกแบบมาเพื่อให้นักพัฒนาได้ทดลองและเรียนรู้การทำงานของระบบต่างๆ มาพร้อมกับเครื่องมือจำลองเสมือนจริงและอินเทอร์เฟซที่ใช้งานง่าย',
    image: '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004056.png',
    previewUrl: '#',
    tags: ['React', 'Tailwind', 'Education Platform'],
    featured: true,
    gallery: [
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004056.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004117.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004135.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004148.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004208.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004227.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004242.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004301.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004319.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004335.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004351.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004408.png',
      '/src/photo/codeflow-simulator/Screenshot 2026-03-19 004422.png'
    ]
  },
  {
    id: 'chatflow-ai-template',
    title: 'แพลตฟอร์ม ChatFlow AI',
    description: 'แพลตฟอร์ม AI ผู้ช่วยอัจฉริยะแบบครบวงจร ที่ผสานการทำงานของแชทบอทเข้ากับฟีเจอร์การดึงข้อมูล สนทนาโต้ตอบ และการทำงานอัตโนมัติได้อย่างลื่นไหลไร้รอยต่อ',
    image: '/src/photo/ChatFlow AI/Screenshot 2026-03-19 001305.png',
    previewUrl: '#',
    tags: ['React', 'Tailwind', 'AI Platform'],
    featured: true,
    gallery: [
      '/src/photo/ChatFlow AI/Screenshot 2026-03-19 001305.png',
      '/src/photo/ChatFlow AI/Screenshot 2026-03-19 001327.png',
      '/src/photo/ChatFlow AI/Screenshot 2026-03-19 001357.png',
      '/src/photo/ChatFlow AI/Screenshot 2026-03-19 001421.png',
      '/src/photo/ChatFlow AI/Screenshot 2026-03-19 001443.png',
      '/src/photo/ChatFlow AI/Screenshot 2026-03-19 001501.png',
      '/src/photo/ChatFlow AI/Screenshot 2026-03-19 001514.png'
    ]
  },
  {
    id: 'warzone-x-template',
    title: 'เว็บไซต์ Warzone-X',
    description: 'แพลตฟอร์มเว็บไซต์สำหรับคอมมูนิตี้และเกมเมอร์ Warzone-X นำเสนอกิจกรรม ข่าวสาร ทัวร์นาเมนต์ และฟีเจอร์สำหรับชาวเกมเมอร์โดยเฉพาะ ด้วยดีไซน์ที่ดุดัน โฉบเฉี่ยว และเร้าใจ',
    image: '/src/photo/warzone-x/Screenshot 2026-03-18 201943.png',
    previewUrl: '#',
    tags: ['React', 'Tailwind', 'Gaming'],
    featured: true,
    gallery: [
      '/src/photo/warzone-x/Screenshot 2026-03-18 201943.png',
      '/src/photo/warzone-x/Screenshot 2026-03-18 202028.png',
      '/src/photo/warzone-x/Screenshot 2026-03-18 202057.png',
      '/src/photo/warzone-x/Screenshot 2026-03-18 202133.png',
      '/src/photo/warzone-x/Screenshot 2026-03-18 202201.png',
      '/src/photo/warzone-x/Screenshot 2026-03-18 202222.png',
      '/src/photo/warzone-x/Screenshot 2026-03-18 202239.png',
      '/src/photo/warzone-x/Screenshot 2026-03-18 202303.png'
    ]
  },
  {
    id: 'think-big-template',
    title: 'เว็บไซต์ Think Big',
    description: 'แพลตฟอร์มเว็บไซต์สำหรับองค์กรและบริษัท Think Big นำเสนอวิสัยทัศน์ บริการ และผลงานที่โดดเด่น ด้วยการออกแบบที่เน้นภาพลักษณ์ความก้าวหน้า ทันสมัย และสเกลได้',
    image: '/src/photo/Think Big/Screenshot 2026-03-18 201423.png',
    previewUrl: '#',
    tags: ['React', 'Tailwind', 'Corporate'],
    featured: true,
    gallery: [
      '/src/photo/Think Big/Screenshot 2026-03-18 201423.png',
      '/src/photo/Think Big/Screenshot 2026-03-18 201439.png',
      '/src/photo/Think Big/Screenshot 2026-03-18 201454.png',
      '/src/photo/Think Big/Screenshot 2026-03-18 201510.png',
      '/src/photo/Think Big/Screenshot 2026-03-18 201528.png',
      '/src/photo/Think Big/Screenshot 2026-03-18 201544.png'
    ]
  },
  {
    id: 'stuffsus-shop-template',
    title: 'เว็บไซต์ Stuffsus Shop',
    description: 'แพลตฟอร์ม E-Commerce แบบครบวงจร มาพร้อมระบบตะกร้าสินค้า แกลลอรี่ภาพ และการจัดการสินค้า ออกแบบ UI/UX ให้ใช้งานง่ายและเพิ่มโอกาสในการขาย',
    image: '/src/photo/stuffsus-shop/Screenshot 2026-03-18 200724.png',
    previewUrl: '#',
    tags: ['React', 'Tailwind', 'E-commerce'],
    featured: true,
    gallery: [
      '/src/photo/stuffsus-shop/Screenshot 2026-03-18 200724.png',
      '/src/photo/stuffsus-shop/Screenshot 2026-03-18 200747.png',
      '/src/photo/stuffsus-shop/Screenshot 2026-03-18 200810.png',
      '/src/photo/stuffsus-shop/Screenshot 2026-03-18 200828.png'
    ]
  },
  {
    id: 'lamica-template',
    title: 'เว็บไซต์ LaMica',
    description: 'แพลตฟอร์มเว็บไซต์สำหรับแบรนด์ LaMica นำเสนอผลิตภัณฑ์ บริการ และเอกลักษณ์ของแบรนด์ด้วยดีไซน์ที่ทันสมัย เรียบหรู และดึงดูดสายตา',
    image: '/src/photo/LaMica/Screenshot 2026-03-18 195917.png',
    previewUrl: '#',
    tags: ['React', 'Tailwind', 'Brand Site'],
    featured: true,
    gallery: [
      '/src/photo/LaMica/Screenshot 2026-03-18 195917.png'
    ]
  },
  {
    id: 'lamica-export-template',
    title: 'เว็บไซต์บริษัท Lamica Export',
    description: 'แพลตฟอร์มเว็บไซต์สำหรับธุรกิจส่งออก (Export Company) นำเสนอสินค้า บริการ และข้อมูลบริษัทแบบมืออาชีพ ออกแบบด้วยดีไซน์ที่สร้างความน่าเชื่อถือระดับสากล',
    image: '/src/photo/lamica-export/Screenshot 2026-03-18 195505.png',
    previewUrl: '#',
    tags: ['React', 'Tailwind', 'Corporate Site'],
    featured: true,
    gallery: [
      '/src/photo/lamica-export/Screenshot 2026-03-18 195505.png',
      '/src/photo/lamica-export/Screenshot 2026-03-18 195526.png',
      '/src/photo/lamica-export/Screenshot 2026-03-18 195544.png'
    ]
  }
];
