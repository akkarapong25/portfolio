import { motion } from 'motion/react';
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs, 
  SiDocker, 
  SiPostgresql, 
  SiMongodb, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiPython,
  SiJest,
  SiPostman,
  SiPhp,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const TECH_LOGOS = [
  { icon: SiHtml5, name: 'HTML5' },
  { icon: SiCss, name: 'CSS3' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiPython, name: 'Python' },
  { icon: SiPhp, name: 'PHP' },
  { icon: FaJava, name: 'Java' },
  { icon: SiJest, name: 'Jest' },
  { icon: SiPostman, name: 'Postman' }
];

export default function InfiniteMarquee() {
  return (
    <div className="py-12 bg-white/5 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-10 md:gap-20 items-center pr-20"
        >
          {[...TECH_LOGOS, ...TECH_LOGOS].map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 text-white/20 hover:text-purple-500/50 transition-colors cursor-default group"
            >
              <div className="group-hover:scale-110 transition-transform">
                <tech.icon size={32} />
              </div>
              <span className="text-xl font-bold uppercase tracking-widest">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
