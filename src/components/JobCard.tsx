import React from 'react';
import { Clock, DollarSign, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

interface JobCardProps {
  title: string;
  description: string;
  budget: number;
  deadline: string;
  category: string;
  status: 'open' | 'in-progress' | 'completed';
  offersCount?: number;
  onClick?: () => void;
}

export function JobCard({ title, description, budget, deadline, category, status, offersCount, onClick }: JobCardProps) {
  const statusColors = {
    open: 'bg-[#00FF9D]/20 text-[#00FF9D] border-[#00FF9D]/30',
    'in-progress': 'bg-[#3B82F6]/20 text-[#3B82F6] border-[#3B82F6]/30',
    completed: 'bg-[#7B61FF]/20 text-[#7B61FF] border-[#7B61FF]/30',
  };

  return (
    <div 
      className="bg-[#1A1A1A] border border-[#333] rounded-xl card-padding-medium hover:border-[#7B61FF] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
      onClick={onClick}
    >
      <div className="flex items-start justify-between content-spacing-sm">
        <div className="flex-1">
          <h4 className="heading-spacing-sm">{title}</h4>
          <p className="text-[#A0A0A0] text-sm line-clamp-2 content-spacing-sm">{description}</p>
        </div>
        <Badge className={statusColors[status]}>
          {status.replace('-', ' ')}
        </Badge>
      </div>
      
      <div className="flex items-center gap-4 content-spacing-md">
        <span className="text-[#00FF9D] text-sm px-3 py-1 bg-[#00FF9D]/10 rounded-full border border-[#00FF9D]/30">
          {category}
        </span>
        {offersCount && offersCount > 0 && (
          <span className="text-[#3B82F6] text-sm">
            {offersCount} offer{offersCount !== 1 ? 's' : ''}
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-[#A0A0A0]">
          <DollarSign size={16} className="text-[#00FF9D]" />
          <span>${budget}</span>
        </div>
        <div className="flex items-center gap-2 text-[#A0A0A0]">
          <Calendar size={16} className="text-[#7B61FF]" />
          <span>{deadline}</span>
        </div>
      </div>
    </div>
  );
}
