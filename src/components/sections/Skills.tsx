import { motion } from 'motion/react';
import { SKILLS } from '../../constants';

export default function Skills() {
  return (
    <section className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">ความเชี่ยวชาญ</h2>
          <p className="text-white/50">เทคโนโลยีที่ผมใช้เพื่อสร้างระบบที่มีประสิทธิภาพสูง</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:border-purple-500/30 transition-colors group"
            >
              <h3 className="text-lg font-bold mb-6 text-purple-400">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium group-hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
