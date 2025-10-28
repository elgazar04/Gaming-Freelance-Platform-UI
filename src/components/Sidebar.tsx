import React from 'react';
import { 
  LayoutDashboard, 
  Briefcase, 
  MessageSquare, 
  User, 
  Settings,
  CheckCircle,
  FileCheck,
  DollarSign,
  Users,
  BarChart3,
  Flag,
  LogOut
} from 'lucide-react';

interface SidebarProps {
  userRole: 'gamer' | 'client' | 'admin';
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ userRole, currentPage, onNavigate }: SidebarProps) {
  const gamerMenu = [
    { id: 'gamer-dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'my-gigs', label: 'My Gigs', icon: Briefcase },
    { id: 'active-jobs', label: 'Active Jobs', icon: CheckCircle },
    { id: 'proof-of-work', label: 'Proof of Work', icon: FileCheck },
    { id: 'earnings', label: 'Earnings', icon: DollarSign },
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const clientMenu = [
    { id: 'client-dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'my-jobs', label: 'My Jobs', icon: Briefcase },
    { id: 'job-board', label: 'Browse Gamers', icon: Users },
    { id: 'approved-work', label: 'Approved Work', icon: CheckCircle },
    { id: 'chat', label: 'Chat', icon: MessageSquare },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const adminMenu = [
    { id: 'admin-dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'pending-jobs', label: 'Pending Jobs', icon: Flag },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const menu = userRole === 'gamer' ? gamerMenu : userRole === 'client' ? clientMenu : adminMenu;

  return (
    <div className="w-64 min-h-screen bg-[#121212] border-r-2 border-[#1A1A1A] flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-[#333]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00FF9D] to-[#7B61FF] flex items-center justify-center shadow-lg">
            <span className="text-xl">⚡</span>
          </div>
          <h3 className="text-[#00FF9D] text-lg">GameBoost</h3>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto scrollbar-custom py-6">
        <div className="space-y-1 px-3">
          {menu.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#00FF9D]/10 border border-[#00FF9D]/30 text-[#00FF9D] shadow-lg shadow-[#00FF9D]/10' 
                    : 'text-[#A0A0A0] hover:text-white hover:bg-[#1A1A1A] border border-transparent'
                }`}
              >
                <Icon size={20} />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* User section */}
      <div className="p-4 border-t border-[#333]">
        <button 
          onClick={() => onNavigate('landing')}
          className="w-full flex items-center gap-3 px-4 py-3.5 text-[#A0A0A0] hover:text-white hover:bg-[#1A1A1A] rounded-lg transition-all border border-transparent hover:border-[#333]"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
