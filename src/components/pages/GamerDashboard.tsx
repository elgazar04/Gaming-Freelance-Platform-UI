import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { StatCard } from '../StatCard';
import { 
  DollarSign, 
  Briefcase, 
  Star, 
  TrendingUp,
  Clock,
  CheckCircle,
  Plus
} from 'lucide-react';
import { GlowButton } from '../GlowButton';

interface GamerDashboardProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function GamerDashboard({ currentPage, onNavigate }: GamerDashboardProps) {
  const recentActivities = [
    { type: 'completed', title: 'Valorant Coaching Session completed', time: '2 hours ago' },
    { type: 'offer', title: 'New offer received for LoL Boosting', time: '5 hours ago' },
    { type: 'review', title: 'New 5-star review from @client_xyz', time: '1 day ago' },
    { type: 'payment', title: 'Payment received: $149.00', time: '1 day ago' },
  ];

  const activeJobs = [
    {
      title: 'League of Legends Rank Boost',
      client: 'Client_123',
      progress: 65,
      deadline: '2 days left'
    },
    {
      title: 'Valorant Coaching - 5 Sessions',
      client: 'ProPlayer_89',
      progress: 40,
      deadline: '5 days left'
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0D0D0D]">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex min-h-screen w-full" style={{ marginTop: '80px' }}>
        <Sidebar userRole="gamer" currentPage={currentPage} onNavigate={onNavigate} />
        
        <div className="flex-1 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-[#121212] border-b-2 border-[#1A1A1A] dashboard-section shadow-lg">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between button-spacing-md">
            <div>
              <h2 className="heading-spacing-sm">Dashboard Overview</h2>
              <p className="text-lg text-[#A0A0A0]">Welcome back, ProGamer! 👋</p>
            </div>
            <GlowButton onClick={() => onNavigate('my-gigs')}>
              <span className="flex items-center gap-2">
                <Plus size={20} />
                Create New Gig
              </span>
            </GlowButton>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 dashboard-section">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 dashboard-grid dashboard-header">
            <StatCard
              title="Active Jobs"
              value={3}
              icon={Briefcase}
              color="green"
            />
            <StatCard
              title="Completed"
              value={127}
              icon={CheckCircle}
              color="blue"
            />
            <StatCard
              title="Average Rating"
              value="4.9"
              icon={Star}
              color="purple"
            />
            <StatCard
              title="Total Earnings"
              value="$8,432"
              icon={DollarSign}
              color="green"
              trend="+12% this month"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 dashboard-grid">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <div className="bg-[#1A1A1A] border border-[#333] rounded-xl card-padding-medium shadow-lg">
                <h4 className="heading-spacing-md">Recent Activities</h4>
                <div className="flex flex-col list-spacing-md">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start button-spacing-sm card-padding-small bg-[#121212] rounded-xl border border-[#333] hover:border-[#00FF9D]/30 transition-all">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'completed' ? 'bg-[#00FF9D]/10 text-[#00FF9D]' :
                        activity.type === 'offer' ? 'bg-[#7B61FF]/10 text-[#7B61FF]' :
                        activity.type === 'review' ? 'bg-[#3B82F6]/10 text-[#3B82F6]' :
                        'bg-[#00FF9D]/10 text-[#00FF9D]'
                      }`}>
                        {activity.type === 'completed' && <CheckCircle size={20} />}
                        {activity.type === 'offer' && <Briefcase size={20} />}
                        {activity.type === 'review' && <Star size={20} />}
                        {activity.type === 'payment' && <DollarSign size={20} />}
                      </div>
                      <div className="flex-1">
                        <p className="content-spacing-xs">{activity.title}</p>
                        <p className="text-sm text-[#A0A0A0]">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <div className="bg-[#1A1A1A] border border-[#333] rounded-xl card-padding-medium content-spacing-lg shadow-lg">
                <h4 className="heading-spacing-md">Quick Actions</h4>
                <div className="flex flex-col list-spacing-md">
                  <button 
                    onClick={() => onNavigate('my-gigs')}
                    className="w-full px-5 py-4 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded-xl text-[#00FF9D] hover:bg-[#00FF9D]/20 transition-all text-left font-medium"
                  >
                    <Plus size={18} className="inline mr-3" />
                    Add New Gig
                  </button>
                  <button 
                    onClick={() => onNavigate('job-board')}
                    className="w-full px-5 py-4 bg-[#7B61FF]/10 border border-[#7B61FF]/30 rounded-xl text-[#7B61FF] hover:bg-[#7B61FF]/20 transition-all text-left font-medium"
                  >
                    <Briefcase size={18} className="inline mr-3" />
                    Browse Jobs
                  </button>
                  <button 
                    onClick={() => onNavigate('chat')}
                    className="w-full px-5 py-4 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-xl text-[#3B82F6] hover:bg-[#3B82F6]/20 transition-all text-left font-medium"
                  >
                    <Clock size={18} className="inline mr-3" />
                    View Messages
                  </button>
                </div>
              </div>

              {/* Active Jobs Progress */}
              <div className="bg-[#1A1A1A] border border-[#333] rounded-xl card-padding-medium shadow-lg">
                <h4 className="heading-spacing-md">Active Jobs</h4>
                <div className="flex flex-col list-spacing-md">
                  {activeJobs.map((job, index) => (
                    <div key={index} className="card-padding-small bg-[#121212] rounded-xl border border-[#333] hover:border-[#7B61FF]/30 transition-all">
                      <div className="flex items-start justify-between content-spacing-xs">
                        <div className="flex-1">
                          <p className="text-sm content-spacing-xs">{job.title}</p>
                          <p className="text-xs text-[#A0A0A0]">{job.client}</p>
                        </div>
                      </div>
                      <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden content-spacing-xs">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00FF9D] to-[#7B61FF]"
                          style={{ width: `${job.progress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#00FF9D]">{job.progress}% complete</span>
                        <span className="text-[#A0A0A0]">{job.deadline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
