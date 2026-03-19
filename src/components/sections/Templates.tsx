import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Download, Star, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { TEMPLATES, Template } from '../../constants';

export default function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Close modal when pressing escape
  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTemplate(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="templates" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            เทมเพลตและผลงานออกแบบ<span className="text-purple-500">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl"
          >
            ดาวน์โหลดโครงร่างและเทมเพลตเว็บไซต์ไปใช้งานหรือศึกษา Source Code สำหรับโปรเจกต์ของคุณ
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEMPLATES.map((template, i) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-3xl group hover:border-purple-500/50 transition-colors"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                <img 
                  src={template.image} 
                  alt={template.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button 
                    onClick={() => {
                      setSelectedTemplate(template);
                      setActiveImgIndex(0);
                    }}
                    className="px-6 py-3 bg-white text-black rounded-full hover:bg-purple-500 hover:text-white font-bold transition-colors shadow-xl" 
                  >
                    ดูรูปภาพผลงาน
                  </button>
                </div>

              </div>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {template.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded-full text-white/60 group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-white/60 mb-6 line-clamp-2">
                {template.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Template Details Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedTemplate(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl bg-[#0f0f13] border border-white/10 rounded-3xl shadow-2xl overflow-hidden glass z-10 max-h-[95vh] flex flex-col"
            >
              <div className="flex flex-col lg:flex-row h-full overflow-hidden">
                
                {/* Image Section */}
                <div className="w-full lg:w-3/5 xl:w-2/3 bg-black/50 border-b lg:border-b-0 lg:border-r border-white/10 relative shrink-0 flex flex-col">
                  {/* Main Image */}
                  <div className="relative flex-1 min-h-[300px] lg:min-h-0 flex items-center justify-center p-4">
                    <img 
                      src={selectedTemplate.gallery ? selectedTemplate.gallery[activeImgIndex] : selectedTemplate.image} 
                      alt={selectedTemplate.title} 
                      className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" 
                    />
                    
                    {/* Navigation Arrows */}
                    {selectedTemplate.gallery && selectedTemplate.gallery.length > 1 && (
                      <>
                        <button 
                          onClick={() => setActiveImgIndex(prev => prev === 0 ? selectedTemplate.gallery!.length - 1 : prev - 1)}
                          className="absolute left-6 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-purple-500 text-white rounded-full backdrop-blur-sm transition-colors border border-white/10"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button 
                          onClick={() => setActiveImgIndex(prev => prev === selectedTemplate.gallery!.length - 1 ? 0 : prev + 1)}
                          className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-purple-500 text-white rounded-full backdrop-blur-sm transition-colors border border-white/10"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Thumbnails */}
                  {selectedTemplate.gallery && selectedTemplate.gallery.length > 1 && (
                    <div className="h-24 lg:h-32 border-t border-white/10 p-4 flex gap-3 overflow-x-auto shrink-0 hide-scrollbar items-center bg-black/20">
                      {selectedTemplate.gallery.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImgIndex(idx)}
                          className={`relative h-full aspect-video rounded-lg overflow-hidden shrink-0 border-2 transition-all ${activeImgIndex === idx ? 'border-purple-500 opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-100'}`}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/5 xl:w-1/3 p-6 lg:p-8 overflow-y-auto relative flex flex-col bg-[#0f0f13]">
                  <button 
                    onClick={() => setSelectedTemplate(null)}
                    className="absolute top-6 right-6 p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20"
                  >
                    <X size={20} />
                  </button>

                  <div className="mb-6 pr-10">
                    <div className="flex flex-wrap gap-2 mb-4">

                      
                      {selectedTemplate.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/5 rounded-full text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6">{selectedTemplate.title}</h3>

                    <p className="text-white/80 leading-relaxed mb-8 text-lg">
                      {selectedTemplate.description}
                    </p>
                  </div>

                  {/* Actions intentionally removed */}

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
