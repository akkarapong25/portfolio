import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'อา.', value: 400 },
  { name: 'จ.', value: 300 },
  { name: 'อ.', value: 600 },
  { name: 'พ.', value: 800 },
  { name: 'พฤ.', value: 500 },
  { name: 'ศ.', value: 900 },
  { name: 'ส.', value: 700 },
];

export default function InteractiveDemo() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[32px] md:rounded-[40px] p-6 md:p-12 border border-white/10 overflow-hidden relative">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] -z-10" />
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 mb-6 uppercase tracking-widest">
                ตัวอย่างการใช้งาน
              </div>
              <h2 className="text-4xl font-bold mb-6">ความเชี่ยวชาญด้านการแสดงข้อมูล</h2>
              <p className="text-white/50 mb-8 leading-relaxed">
                ผมไม่ได้แค่สร้างตาราง แต่ผมสร้างประสบการณ์ที่เปลี่ยนข้อมูลดิบให้เป็นข้อมูลเชิงลึกที่นำไปใช้งานได้จริง
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-sm font-medium">การสตรีมข้อมูลแบบเรียลไทม์</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-sm font-medium">คอมโพเนนต์แผนภูมิแบบกำหนดเอง</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-sm font-medium">การแสดงผลที่ปรับแต่งประสิทธิภาพสูงสุด</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="glass p-6 rounded-3xl border border-white/5 h-[300px]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/40">รายได้รายสัปดาห์</h3>
                  <div className="text-emerald-400 text-xs font-bold">+12.5%</div>
                </div>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="rgba(255,255,255,0.3)" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#a855f7" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorValue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'อัตราการเปลี่ยนเป็นลูกค้า', val: '3.2%', color: 'text-purple-400' },
                  { label: 'ยอดสั่งซื้อเฉลี่ย', val: '4,500 บาท', color: 'text-blue-400' },
                  { label: 'อัตราการตีกลับ', val: '24%', color: 'text-emerald-400' },
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
