import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: 'green' | 'purple' | 'blue';
  trend?: string;
}

export function StatCard({ title, value, icon: Icon, color = 'green', trend }: StatCardProps) {
  const colors = {
    green: 'from-[#00FF9D]/20 to-[#00FF9D]/5 border-[#00FF9D]/30',
    purple: 'from-[#7B61FF]/20 to-[#7B61FF]/5 border-[#7B61FF]/30',
    blue: 'from-[#3B82F6]/20 to-[#3B82F6]/5 border-[#3B82F6]/30',
  };

  const iconColors = {
    green: 'text-[#00FF9D]',
    purple: 'text-[#7B61FF]',
    blue: 'text-[#3B82F6]',
  };

  return (
    <div className={`card-padding-medium rounded-xl bg-gradient-to-br ${colors[color]} border backdrop-blur-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 duration-300`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[#A0A0A0] content-spacing-sm">{title}</p>
          <h3 className="content-spacing-xs">{value}</h3>
          {trend && <p className="text-[#00FF9D] text-sm">{trend}</p>}
        </div>
        <div className={`p-3 rounded-lg bg-[#1A1A1A] ${iconColors[color]}`}>
          <Icon size={24} />
        </div>
      </div>
    </div>
  );
}
