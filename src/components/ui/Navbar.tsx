import React from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'หน้าแรก', href: '#' },
    { name: 'ผลงาน', href: '#projects' },
    { name: 'เทมเพลต', href: '#templates' },
    { name: 'บริการ', href: '#services' },
    { name: 'แพ็กเกจ', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    { name: 'ติดต่อ', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          TIDBUG<span className="text-purple-500">.404</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all"
          >
            จ้างงานผม
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium py-2 border-b border-white/5 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full py-4 bg-purple-600 rounded-xl font-bold mt-2">จ้างงานผม</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
