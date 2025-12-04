/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, MapPin, Users, Utensils } from 'lucide-react';

// --- FINANCIAL BREAKDOWN ---
export const InvestmentChart: React.FC = () => {
  const data = [
    { label: 'Construction & Buildout', value: 1300000, color: 'bg-casa-stone' },
    { label: 'Kitchen Equipment', value: 350000, color: 'bg-stone-500' },
    { label: 'Arch. & Engineering', value: 300000, color: 'bg-stone-400' },
    { label: 'Bar Buildout', value: 200000, color: 'bg-casa-gold' },
    { label: 'Furniture & Decor', value: 200000, color: 'bg-[#D4B06A]' },
    { label: 'Permits & Fees', value: 75000, color: 'bg-[#E5C380]' },
    { label: 'Pre-Opening', value: 75000, color: 'bg-stone-300' },
  ];

  const total = 2500000;

  return (
    <div className="flex flex-col p-8 bg-white rounded-xl shadow-sm border border-stone-200 my-8 w-full max-w-2xl mx-auto">
      <h3 className="font-serif text-2xl mb-2 text-casa-black">Investment Allocation</h3>
      <p className="text-sm text-stone-500 mb-8 font-serif italic">Total Capital Requirement: $2.5 Million</p>
      
      <div className="space-y-4">
        {data.map((item, idx) => (
          <div key={idx} className="group">
             <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-stone-600 mb-1">
                <span>{item.label}</span>
                <span>${item.value.toLocaleString()}</span>
             </div>
             <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.value / 1500000) * 100}%` }} // Scaling slightly for visual impact
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className={`h-full ${item.color}`}
                />
             </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-stone-100 flex justify-between items-center text-sm text-stone-500">
         <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-casa-gold rounded-full"></span>
            <span>Targeting $450k - $550k TI Allowance</span>
         </div>
      </div>
    </div>
  );
};

// --- REVENUE PROJECTION ---
export const RevenueChart: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 items-center p-8 bg-casa-stone text-white rounded-xl my-8 border border-stone-800 shadow-xl w-full">
        <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-casa-gold/20 text-casa-gold text-xs font-bold tracking-widest uppercase rounded-full mb-4 border border-casa-gold/30">
                <TrendingUp size={14}/> First Year Projections
            </div>
            <h3 className="font-serif text-3xl mb-4 text-white">Projected Cash Flow</h3>
            <p className="text-stone-400 text-sm mb-6 leading-relaxed">
                Based on conservative estimates of 150 guests/day with a $70 average ticket. Strong bar programs typically drive margins higher than the conservative 20% modeled here.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-stone-400 uppercase tracking-widest mb-1">Gross Revenue</div>
                    <div className="text-2xl font-serif text-white">$3.78M</div>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-stone-400 uppercase tracking-widest mb-1">Net Profit</div>
                    <div className="text-2xl font-serif text-casa-gold">~$756k</div>
                </div>
            </div>
        </div>

        <div className="relative w-64 h-64 bg-stone-800/50 rounded-full border border-stone-700/50 flex items-center justify-center p-8">
             <div className="text-center">
                 <div className="text-5xl font-serif text-white mb-2">20%</div>
                 <div className="text-xs font-bold text-casa-gold uppercase tracking-widest">Profit Margin</div>
             </div>
             {/* Decorative ring */}
             <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
                 <circle cx="50%" cy="50%" r="48%" fill="none" stroke="#333" strokeWidth="2" />
                 <motion.circle 
                    cx="50%" cy="50%" r="48%" 
                    fill="none" 
                    stroke="#C5A059" 
                    strokeWidth="4" 
                    strokeDasharray="300" 
                    strokeDashoffset="300"
                    whileInView={{ strokeDashoffset: 60 }} // Approx 80% circle
                    transition={{ duration: 1.5, ease: "easeOut" }}
                 />
             </svg>
        </div>
    </div>
  );
};

// --- LOCATION VISUALIZATION ---
export const LocationViz: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="relative bg-[#F5F4F0] rounded-xl overflow-hidden border border-stone-200 aspect-video md:aspect-[2/1] shadow-inner group">
            {/* Map Background abstraction */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-10 pointer-events-none">
                {[...Array(72)].map((_, i) => (
                    <div key={i} className="border border-stone-400"></div>
                ))}
            </div>
            
            {/* Streets */}
            {/* Mission Inn Ave (Horizontal) */}
            <div className="absolute top-1/2 left-0 right-0 h-16 bg-stone-300 -mt-8 flex items-center justify-between px-4 text-xs font-bold text-stone-500 uppercase tracking-widest">
                <span>Mission Inn Avenue</span>
                <span>(High Tourism Traffic)</span>
            </div>
            
            {/* Market St (Vertical) */}
            <div className="absolute top-0 bottom-0 left-1/3 w-16 bg-stone-300 -ml-8 flex flex-col items-center justify-between py-4 text-xs font-bold text-stone-500 uppercase tracking-widest writing-mode-vertical">
                <span className="rotate-90">Market Street</span>
                <span className="rotate-90">Artery</span>
            </div>

            {/* Casa De Oro Marker */}
            <motion.div 
                className="absolute top-1/2 left-1/3 -mt-8 -ml-8 w-16 h-16 bg-casa-black z-10 flex items-center justify-center cursor-pointer shadow-xl border-2 border-casa-gold"
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => setHovered('casa')}
                onMouseLeave={() => setHovered(null)}
            >
                <div className="text-casa-gold font-serif text-2xl font-bold">C</div>
            </motion.div>

            {/* Tooltip */}
            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md border border-stone-200 max-w-xs z-20">
                <h4 className="font-serif text-lg text-casa-black mb-1">Prime Corner Location</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                    Intersection of highest pedestrian activity. Directly across from Food Lab, walking distance to Mission Inn.
                </p>
            </div>

            {/* Pulsing radius */}
            <div className="absolute top-1/2 left-1/3 -mt-32 -ml-32 w-64 h-64 border border-casa-gold/30 rounded-full animate-ping pointer-events-none"></div>
        </div>
    )
}

// --- MENU HIGHLIGHTS ---
export const MenuPreview: React.FC = () => {
    const items = [
        { name: 'Wagyu & Prime Steaks', desc: 'Premium cuts, fire-grilled precision.' },
        { name: 'Baja Style Seafood', desc: 'Coastal inspired, fresh daily catch.' },
        { name: 'Modern Ceviche', desc: 'Acid-cured, vibrant flavors.' },
        { name: 'Fire Grilled Meats', desc: 'Signature open-flame preparation.' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-lg hover:border-casa-gold/50 transition-colors group cursor-default">
                    <Utensils size={20} className="text-casa-gold mb-3 opacity-80 group-hover:opacity-100" />
                    <h4 className="font-serif text-lg text-casa-black mb-1">{item.name}</h4>
                    <p className="text-sm text-stone-500 italic">{item.desc}</p>
                </div>
            ))}
        </div>
    )
}