import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '../../constants';
import ProjectDetails from '../views/ProjectDetails';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);

  const nextImage = React.useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  }, [project.images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  React.useEffect(() => {
    if (isPaused || project.images.length <= 1) return;
    
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextImage, isPaused, project.images.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="glass w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-[40px] border border-white/10 flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Slideshow Section */}
        <div 
          className="relative w-full md:w-3/5 bg-black/40 flex items-center justify-center overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={project.images[currentImageIndex]}
              alt={`${project.title} view ${currentImageIndex + 1}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-contain p-4"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-purple-500 transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-purple-500 transition-colors opacity-0 group-hover:opacity-100"
              >
                <ChevronRight size={24} />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImageIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentImageIndex ? 'bg-purple-500 w-6' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="text-xs font-mono text-purple-400 mb-2 uppercase tracking-widest">{project.category}</div>
              <h2 className="text-3xl font-bold tracking-tight">{project.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-3">ภาพรวม</h3>
              <p className="text-white/60 leading-relaxed">{project.description}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-3">ฟีเจอร์หลัก</h3>
              <ul className="grid grid-cols-1 gap-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-3">เทคโนโลยีที่ใช้</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.caseStudy && (
              <div className="pt-8 border-t border-white/10 flex gap-4">
                <button 
                  onClick={() => setShowDetails(true)}
                  className="flex-1 py-4 bg-purple-500 hover:bg-purple-600 text-white border border-purple-500/50 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-purple-500/25"
                >
                  <ExternalLink size={18} />
                  ดูรายละเอียดระบบ (Architecture Details)
                </button>
              </div>
            )}

          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showDetails && (
          <ProjectDetails projectId={project.id} onBack={() => setShowDetails(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
