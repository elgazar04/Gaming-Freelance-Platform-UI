import React from 'react';
import { Star, Clock } from 'lucide-react';

interface GigCardProps {
  title: string;
  gamer: string;
  avatar: string;
  category: string;
  price: number;
  rating: number;
  deliveryTime: string;
  onClick?: () => void;
}

export function GigCard({ title, gamer, avatar, category, price, rating, deliveryTime, onClick }: GigCardProps) {
  return (
    <div 
      className="group bg-[#1A1A1A] border border-[#333] rounded-xl overflow-hidden hover:border-[#00FF9D] transition-all duration-300 cursor-pointer hover:transform hover:scale-105 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-[#00FF9D]/20"
      onClick={onClick}
    >
      <div className="relative h-52 bg-gradient-to-br from-[#7B61FF]/20 to-[#3B82F6]/20 flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
        <span className="text-[#00FF9D] text-sm px-4 py-2 bg-[#1A1A1A] rounded-full border border-[#00FF9D]/30 relative z-10 font-medium">
          {category}
        </span>
      </div>
      
      <div className="p-12">
        <h4 className="mb-8 line-clamp-2 group-hover:text-[#00FF9D] transition-colors text-xl">{title}</h4>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#7B61FF] flex items-center justify-center shadow-lg">
            <span className="text-black text-base font-semibold">{gamer[0]}</span>
          </div>
          <span className="text-[#B0B0B0] text-base">{gamer}</span>
        </div>
        
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <Star size={18} className="text-[#00FF9D] fill-[#00FF9D]" />
            <span className="text-base font-semibold">{rating.toFixed(1)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-[#B0B0B0]">
            <Clock size={16} />
            <span className="text-base">{deliveryTime}</span>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t-2 border-[#333] flex items-center justify-between">
          <span className="text-[#B0B0B0] text-lg">Starting at</span>
          <span className="text-[#00FF9D] text-2xl font-bold">${price}</span>
        </div>
      </div>
    </div>
  );
}
