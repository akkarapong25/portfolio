import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../../constants';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import ProjectModal from '../ui/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('ทั้งหมด');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch projects:', err);
        setLoading(false);
      });
  }, []);

  const filteredProjects = projects.filter(p => 
    filter === 'ทั้งหมด' || p.category === filter
  );

  // Removed auto-scroll logic

  return (
    <section id="projects" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">ผลงานที่โดดเด่น</h2>
            <p className="text-white/50 max-w-md">คัดสรรผลงานล่าสุดด้านการจัดการธุรกิจและการแสดงข้อมูลด้วยภาพ</p>
          </div>
          
          <div className="flex flex-col items-end gap-6">
            <div className="flex flex-wrap gap-2">
              {['ทั้งหมด', 'ระบบเว็บ', 'แดชบอร์ด', 'สตาร์ทอัพ'].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                    filter === f 
                      ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                      : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Staggered List Layout */}
      <div className="max-w-7xl mx-auto px-6">
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="w-10 h-10 animate-spin text-purple-500" />
          </div>
        ) : (
          <div className="flex flex-col gap-24 md:gap-32">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={`${project.id}-${i}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 md:gap-16 items-center group cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-3/5">
                <div className="relative aspect-video rounded-3xl overflow-hidden glass border border-white/10 group-hover:border-purple-500/30 transition-colors shadow-2xl">
                  {/* Decorative background glow based on index */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full ${i % 2 === 0 ? 'bg-purple-500/20' : 'bg-blue-500/20'} blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-contain bg-black/20 p-2 group-hover:scale-105 group-hover:rotate-1 transition-all duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f13] via-transparent to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <ArrowUpRight size={32} />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full uppercase tracking-wider border border-purple-500/20">
                    {project.category}
                  </span>
                  <span className="w-12 h-[1px] bg-white/20 flex-shrink-0" />
                  <span className="text-sm font-mono text-white/30 hidden sm:inline-block">Project 0{i + 1}</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/60 text-lg mb-8 leading-relaxed max-w-md">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map(t => (
                    <span key={t} className="text-sm px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/70 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3 text-purple-400 font-bold group-hover:gap-5 transition-all">
                  <span className="border-b-2 border-transparent group-hover:border-purple-400 pb-1 ransition-colors">ดูกรณีศึกษา (Case Study)</span>
                  <ArrowUpRight size={20} className="transition-transform group-hover:rotate-45" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
