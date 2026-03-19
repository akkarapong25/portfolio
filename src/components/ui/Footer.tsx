import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="text-xl font-bold tracking-tighter mb-2">
              Full-Stack<span className="text-purple-500">Development Services</span>
            </div>
            <p className="text-sm text-white/40">© 2026 Tidbug.404. สงวนลิขสิทธิ์ทั้งหมด</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white/40 hover:text-white transition-colors"><Mail size={20} /></a>
          </div>

          <div className="text-sm text-white/40">
            สร้างด้วย React และ Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
