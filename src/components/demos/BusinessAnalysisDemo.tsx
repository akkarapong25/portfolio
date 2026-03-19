import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { TrendingUp, Target, Zap } from 'lucide-react';

const data = [
  { name: 'Q1', value: 45 },
  { name: 'Q2', value: 52 },
  { name: 'Q3', value: 68 },
  { name: 'Q4', value: 85 },
];

export default function BusinessAnalysisDemo() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[32px] md:rounded-[40px] p-6 md:p-12 border border-white/10 overflow-hidden relative">
          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10" />
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 mb-6 uppercase tracking-widest">
                Business Analysis
              </div>
              <h2 className="text-4xl font-bold mb-6">ความเชี่ยวชาญด้านการวิเคราะห์ธุรกิจ</h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                เปลี่ยนความซับซ้อนของธุรกิจให้เป็นโอกาสที่จับต้องได้ ด้วยการวิเคราะห์เชิงลึกและการวางแผนกลยุทธ์ที่แม่นยำเพื่อการเติบโตที่ยั่งยืน
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">การวิเคราะห์กระบวนการทำงาน</h4>
                    <p className="text-xs text-white/40">Process Analysis & Optimization</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">การระบุความต้องการทางธุรกิจ</h4>
                    <p className="text-xs text-white/40">Requirements Gathering & Strategy</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">การประเมินความคุ้มค่าและการเติบโต</h4>
                    <p className="text-xs text-white/40">ROI & Growth Assessment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="glass p-6 rounded-3xl border border-white/5 h-[300px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">อัตราการเติบโตของธุรกิจ (Quarterly)</h3>
                  <div className="text-blue-400 text-xs font-bold">Target: 90%</div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="rgba(255,255,255,0.3)" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <Tooltip 
                      cursor={{fill: 'rgba(255,255,255,0.05)'}}
                      contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 3 ? '#3b82f6' : 'rgba(59, 130, 246, 0.3)'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'ประสิทธิภาพที่เพิ่มขึ้น', val: '+45%', color: 'text-blue-400' },
                  { label: 'ลดต้นทุนการดำเนินงาน', val: '20%', color: 'text-purple-400' },
                  { label: 'ความพึงพอใจของลูกค้า', val: '98%', color: 'text-emerald-400' },
                ].map(stat => (
                  <div key={stat.label} className="glass p-6 rounded-2xl border border-white/5">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">{stat.label}</div>
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
