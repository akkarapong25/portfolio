import { motion } from 'motion/react';
import { MessageSquare, Mail, Github, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold tracking-tighter mb-8">
          มาเริ่มสร้างสรรค์ <br />
          <span className="text-gradient">ผลงานร่วมกัน</span>
        </h2>
        <p className="text-xl text-white/50 mb-12 mx-auto max-w-md">
          มีโปรเจกต์ในใจไหม? มาสร้างสิ่งที่พิเศษไปด้วยกันเถอะ
        </p>

        <div className="space-y-6 max-w-md mx-auto text-left">
          {/* Email */}
          <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5 transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">
              <Mail size={24} />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest">อีเมล</div>
              <div className="font-bold text-white">aumakkara@gmail.com</div>
            </div>
          </div>

          {/* Line */}
          <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5 transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400">
              <MessageSquare size={24} />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest">ไลน์</div>
              <div className="font-bold text-white">@aumakkara_bb</div>
            </div>
          </div>

          {/* Facebook */}
          <a 
            href="#" 
            className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5 group transition-transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 transition-colors">
              <Facebook size={24} className="group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest">Facebook</div>
              <div className="font-bold text-white">akkarapong pongwat</div>
            </div>
          </a>

          {/* Github */}
          <a 
            href="https://github.com/akkarapong" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 glass rounded-2xl border border-white/5 group transition-transform hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white group-hover:bg-white pt-[2px] transition-colors">
              <Github size={24} className="group-hover:text-black transition-colors" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase tracking-widest">กิตฮับ</div>
              <div className="font-bold text-white">github.com/akkarapong</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
