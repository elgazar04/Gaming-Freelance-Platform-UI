import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { StatCard } from '../StatCard';
import { TrendingUp, Users, DollarSign, Briefcase } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AnalyticsPageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function AnalyticsPage({ currentPage, onNavigate }: AnalyticsPageProps) {
  const jobsData = [
    { month: 'Jan', jobs: 245 },
    { month: 'Feb', jobs: 312 },
    { month: 'Mar', jobs: 289 },
    { month: 'Apr', jobs: 398 },
    { month: 'May', jobs: 445 },
    { month: 'Jun', jobs: 523 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 12400 },
    { month: 'Feb', revenue: 15800 },
    { month: 'Mar', revenue: 14200 },
    { month: 'Apr', revenue: 19600 },
    { month: 'May', revenue: 21500 },
    { month: 'Jun', revenue: 25300 },
  ];

  const categoriesData = [
    { name: 'Rank Boosting', value: 45 },
    { name: 'Coaching', value: 30 },
    { name: 'Account Leveling', value: 15 },
    { name: 'Game Completion', value: 10 },
  ];

  const userRolesData = [
    { name: 'Gamers', value: 6500 },
    { name: 'Clients', value: 5987 },
  ];

  const COLORS = ['#00FF9D', '#7B61FF', '#3B82F6', '#F59E0B'];

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex min-h-screen" style={{ marginTop: '80px' }}>
        <Sidebar userRole="admin" currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="flex-1">
        {/* Header */}
        <div className="bg-[#121212] border-b border-[#333] px-8 py-6">
          <h2 className="mb-2">Analytics Dashboard</h2>
          <p className="text-[#A0A0A0]">Platform performance and insights</p>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Revenue Growth"
              value="+23%"
              icon={TrendingUp}
              color="green"
              trend="vs last month"
            />
            <StatCard
              title="Active Users"
              value="8,234"
              icon={Users}
              color="blue"
              trend="+12% this month"
            />
            <StatCard
              title="Avg Job Value"
              value="$145"
              icon={DollarSign}
              color="green"
              trend="+5% this month"
            />
            <StatCard
              title="Completion Rate"
              value="94%"
              icon={Briefcase}
              color="purple"
              trend="+2% this month"
            />
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Job Postings Over Time */}
            <div className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6">
              <h4 className="mb-6">Job Postings Over Time</h4>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={jobsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#A0A0A0" />
                  <YAxis stroke="#A0A0A0" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1A1A', 
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#FFFFFF'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="jobs" 
                    stroke="#00FF9D" 
                    strokeWidth={3}
                    dot={{ fill: '#00FF9D', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Revenue Growth */}
            <div className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6">
              <h4 className="mb-6">Revenue Growth</h4>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                  <XAxis dataKey="month" stroke="#A0A0A0" />
                  <YAxis stroke="#A0A0A0" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1A1A', 
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#FFFFFF'
                    }} 
                  />
                  <Bar dataKey="revenue" fill="#7B61FF" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Gigs by Category */}
            <div className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6">
              <h4 className="mb-6">Gigs by Category</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoriesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoriesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1A1A', 
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#FFFFFF'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* User Distribution */}
            <div className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6">
              <h4 className="mb-6">User Distribution</h4>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={userRolesData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    <Cell fill="#00FF9D" />
                    <Cell fill="#7B61FF" />
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1A1A1A', 
                      border: '1px solid #333',
                      borderRadius: '8px',
                      color: '#FFFFFF'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top Performers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6">
              <h4 className="mb-6">Top Earning Gamers</h4>
              <div className="space-y-3">
                {[
                  { name: 'ProGamer_Elite', earnings: 8432, jobs: 127 },
                  { name: 'CoachPro_89', earnings: 6890, jobs: 234 },
                  { name: 'BoostKing', earnings: 5234, jobs: 89 },
                ].map((gamer, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#121212] rounded-lg border border-[#333]">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index === 0 ? 'bg-[#00FF9D] text-black' :
                        index === 1 ? 'bg-[#7B61FF] text-white' :
                        'bg-[#3B82F6] text-white'
                      }`}>
                        {index + 1}
                      </span>
                      <div>
                        <h6>{gamer.name}</h6>
                        <p className="text-sm text-[#A0A0A0]">{gamer.jobs} jobs completed</p>
                      </div>
                    </div>
                    <span className="text-[#00FF9D]">${gamer.earnings.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6">
              <h4 className="mb-6">Platform Highlights</h4>
              <div className="space-y-4">
                <div className="p-4 bg-[#121212] rounded-lg border border-[#00FF9D]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#A0A0A0]">Average Response Time</span>
                    <span className="text-[#00FF9D]">&lt; 45 min</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <div className="h-full bg-[#00FF9D]" style={{ width: '92%' }} />
                  </div>
                </div>

                <div className="p-4 bg-[#121212] rounded-lg border border-[#7B61FF]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#A0A0A0]">Customer Satisfaction</span>
                    <span className="text-[#7B61FF]">4.9/5.0</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <div className="h-full bg-[#7B61FF]" style={{ width: '98%' }} />
                  </div>
                </div>

                <div className="p-4 bg-[#121212] rounded-lg border border-[#3B82F6]/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#A0A0A0]">Repeat Customer Rate</span>
                    <span className="text-[#3B82F6]">67%</span>
                  </div>
                  <div className="w-full h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                    <div className="h-full bg-[#3B82F6]" style={{ width: '67%' }} />
                  </div>
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
