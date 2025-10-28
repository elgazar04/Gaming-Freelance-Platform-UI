import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { StatCard } from '../StatCard';
import { JobCard } from '../JobCard';
import { 
  Briefcase, 
  CheckCircle, 
  Clock,
  Users,
  Plus
} from 'lucide-react';
import { GlowButton } from '../GlowButton';

interface ClientDashboardProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function ClientDashboard({ currentPage, onNavigate }: ClientDashboardProps) {
  const myJobs = [
    {
      title: 'League of Legends Rank Boost to Diamond',
      description: 'Need someone to boost my account from Gold II to Diamond IV',
      budget: 150,
      deadline: '5 days',
      category: 'Rank Boosting',
      status: 'in-progress' as const,
      offersCount: 8
    },
    {
      title: 'Valorant 1-on-1 Coaching',
      description: 'Looking for an experienced coach to help improve my aim and game sense',
      budget: 50,
      deadline: '2 days',
      category: 'Coaching',
      status: 'open' as const,
      offersCount: 12
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0D0D0D]">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex min-h-screen w-full" style={{ marginTop: '80px' }}>
        <Sidebar userRole="client" currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="flex-1 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-[#121212] border-b-2 border-[#1A1A1A] dashboard-section shadow-lg">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between button-spacing-md">
            <div>
              <h2 className="heading-spacing-sm">Dashboard Overview</h2>
              <p className="text-lg text-[#A0A0A0]">Manage your jobs and track progress</p>
            </div>
            <GlowButton onClick={() => onNavigate('job-board')}>
              <span className="flex items-center gap-2">
                <Plus size={20} />
                Post New Job
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
              value={2}
              icon={Briefcase}
              color="purple"
            />
            <StatCard
              title="In Progress"
              value={1}
              icon={Clock}
              color="blue"
            />
            <StatCard
              title="Completed"
              value={15}
              icon={CheckCircle}
              color="green"
            />
            <StatCard
              title="Total Offers"
              value={20}
              icon={Users}
              color="purple"
            />
          </div>

          {/* My Jobs */}
          <div className="dashboard-header">
            <div className="flex items-center justify-between mb-8">
              <h4>My Jobs</h4>
              <button 
                onClick={() => onNavigate('my-jobs')}
                className="text-[#00FF9D] hover:underline text-sm font-medium"
              >
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {myJobs.map((job, index) => (
                <JobCard key={index} {...job} onClick={() => onNavigate('my-jobs')} />
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#1A1A1A] border border-[#333] rounded-xl card-padding-medium shadow-lg">
            <h4 className="heading-spacing-md">Recent Activity</h4>
            <div className="flex flex-col list-spacing-md">
              <div className="flex items-start gap-5 p-5 bg-[#121212] rounded-xl border border-[#333] hover:border-[#00FF9D]/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#00FF9D]/10 flex items-center justify-center">
                  <CheckCircle className="text-[#00FF9D]" size={20} />
                </div>
                <div className="flex-1">
                  <p className="content-spacing-xs">Job "CS:GO Rank Boost" marked as complete</p>
                  <p className="text-sm text-[#A0A0A0]">2 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 p-5 bg-[#121212] rounded-xl border border-[#333] hover:border-[#7B61FF]/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#7B61FF]/10 flex items-center justify-center">
                  <Users className="text-[#7B61FF]" size={20} />
                </div>
                <div className="flex-1">
                  <p className="content-spacing-xs">3 new offers received for "Valorant Coaching"</p>
                  <p className="text-sm text-[#A0A0A0]">4 hours ago</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 p-5 bg-[#121212] rounded-xl border border-[#333] hover:border-[#3B82F6]/30 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 flex items-center justify-center">
                  <Briefcase className="text-[#3B82F6]" size={20} />
                </div>
                <div className="flex-1">
                  <p className="content-spacing-xs">Offer accepted for "LoL Rank Boost"</p>
                  <p className="text-sm text-[#A0A0A0]">1 day ago</p>
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
