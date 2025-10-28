import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { StatCard } from '../StatCard';
import { Users, Briefcase, DollarSign, TrendingUp, Flag, CheckCircle, XCircle } from 'lucide-react';
import { Badge } from '../ui/badge';
import { GlowButton } from '../GlowButton';

interface AdminDashboardProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function AdminDashboard({ currentPage, onNavigate }: AdminDashboardProps) {
  const pendingJobs = [
    {
      id: 1,
      title: 'League of Legends Rank Boost',
      client: 'Client_Alex',
      gamer: 'ProGamer_X',
      amount: 150,
      status: 'pending-approval'
    },
    {
      id: 2,
      title: 'Valorant Coaching',
      client: 'Client_Sarah',
      gamer: 'CoachAce',
      amount: 45,
      status: 'dispute'
    },
  ];

  const recentUsers = [
    { name: 'ProGamer_Elite', type: 'Gamer', joined: '2 hours ago', status: 'active' },
    { name: 'Client_Mike', type: 'Client', joined: '5 hours ago', status: 'active' },
    { name: 'CoachPro_89', type: 'Gamer', joined: '1 day ago', status: 'pending' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0D0D0D]">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex min-h-screen w-full" style={{ marginTop: '80px' }}>
        <Sidebar userRole="admin" currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="flex-1 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-[#121212] border-b-2 border-[#1A1A1A] px-8 lg:px-12 py-8 shadow-lg">
          <h2 className="heading-spacing-sm">Admin Dashboard</h2>
          <p className="text-lg text-[#A0A0A0]">Platform overview and management</p>
        </div>

        {/* Content */}
        <div className="flex-1 dashboard-section">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <StatCard
              title="Total Users"
              value="12,487"
              icon={Users}
              color="green"
              trend="+8% this month"
            />
            <StatCard
              title="Active Jobs"
              value="342"
              icon={Briefcase}
              color="blue"
            />
            <StatCard
              title="Total Revenue"
              value="$84,329"
              icon={DollarSign}
              color="green"
              trend="+15% this month"
            />
            <StatCard
              title="Platform Growth"
              value="+23%"
              icon={TrendingUp}
              color="purple"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pending Jobs */}
            <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h4>Pending Jobs</h4>
                <button 
                  onClick={() => onNavigate('pending-jobs')}
                  className="text-[#00FF9D] hover:underline text-sm font-medium"
                >
                  View All
                </button>
              </div>
              <div className="flex flex-col list-spacing-md">
                {pendingJobs.map((job) => (
                  <div key={job.id} className="p-5 bg-[#121212] rounded-xl border border-[#333] hover:border-[#00FF9D]/30 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h6 className="content-spacing-xs">{job.title}</h6>
                        <p className="text-sm text-[#A0A0A0]">
                          {job.client} → {job.gamer}
                        </p>
                      </div>
                      {job.status === 'dispute' ? (
                        <Badge className="bg-[#FF4444]/20 text-[#FF4444] border-[#FF4444]/30">
                          <Flag size={12} className="mr-1" />
                          Dispute
                        </Badge>
                      ) : (
                        <Badge className="bg-[#7B61FF]/20 text-[#7B61FF] border-[#7B61FF]/30">
                          Pending
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#00FF9D]">${job.amount}</span>
                      <div className="flex items-center gap-2">
                        <button className="p-2 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded hover:bg-[#00FF9D]/20 transition-all">
                          <CheckCircle size={16} className="text-[#00FF9D]" />
                        </button>
                        <button className="p-2 bg-[#FF4444]/10 border border-[#FF4444]/30 rounded hover:bg-[#FF4444]/20 transition-all">
                          <XCircle size={16} className="text-[#FF4444]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Users */}
            <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <h4>Recent Users</h4>
                <button 
                  onClick={() => onNavigate('users')}
                  className="text-[#00FF9D] hover:underline text-sm font-medium"
                >
                  View All
                </button>
              </div>
              <div className="flex flex-col list-spacing-md">
                {recentUsers.map((user, index) => (
                  <div key={index} className="p-5 bg-[#121212] rounded-xl border border-[#333] hover:border-[#7B61FF]/30 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#7B61FF] flex items-center justify-center">
                          <span>{user.name[0]}</span>
                        </div>
                        <div>
                          <h6>{user.name}</h6>
                          <p className="text-sm text-[#A0A0A0]">{user.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={
                          user.status === 'active' 
                            ? 'bg-[#00FF9D]/20 text-[#00FF9D] border-[#00FF9D]/30'
                            : 'bg-[#7B61FF]/20 text-[#7B61FF] border-[#7B61FF]/30'
                        }>
                          {user.status}
                        </Badge>
                        <p className="text-xs text-[#A0A0A0] mt-1">{user.joined}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <GlowButton 
              variant="primary"
              onClick={() => onNavigate('pending-jobs')}
              className="w-full"
            >
              <Flag size={18} className="mr-2" />
              Review Pending Jobs
            </GlowButton>
            <GlowButton 
              variant="secondary"
              onClick={() => onNavigate('users')}
              className="w-full"
            >
              <Users size={18} className="mr-2" />
              Manage Users
            </GlowButton>
            <GlowButton 
              variant="tertiary"
              onClick={() => onNavigate('analytics')}
              className="w-full"
            >
              <TrendingUp size={18} className="mr-2" />
              View Analytics
            </GlowButton>
          </div>
        </div>
      </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
