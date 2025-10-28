import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { JobCard } from '../JobCard';
import { GlowButton } from '../GlowButton';
import { Search, Plus } from 'lucide-react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

interface JobBoardProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function JobBoard({ currentPage, onNavigate }: JobBoardProps) {
  const [showApplyModal, setShowApplyModal] = useState(false);

  const jobs = [
    {
      title: 'League of Legends Rank Boost to Diamond',
      description: 'Looking for an experienced booster to take my account from Gold II to Diamond IV. Must have proven track record and use VPN.',
      budget: 150,
      deadline: '5 days',
      category: 'Rank Boosting',
      status: 'open' as const,
      offersCount: 8
    },
    {
      title: 'Valorant 1-on-1 Coaching Sessions',
      description: 'Need help improving my aim and game sense. Looking for Immortal+ player for 5 coaching sessions.',
      budget: 200,
      deadline: '1 week',
      category: 'Coaching',
      status: 'open' as const,
      offersCount: 12
    },
    {
      title: 'CS:GO Prime Account to Global Elite',
      description: 'Boost my Prime account from Master Guardian to Global Elite. Fast completion preferred.',
      budget: 180,
      deadline: '7 days',
      category: 'Rank Boosting',
      status: 'open' as const,
      offersCount: 5
    },
    {
      title: 'Apex Legends Predator Push',
      description: 'Currently Diamond I, need help reaching Predator rank this season.',
      budget: 300,
      deadline: '10 days',
      category: 'Rank Boosting',
      status: 'open' as const,
      offersCount: 3
    },
    {
      title: 'Fortnite Building Coaching',
      description: 'Want to learn advanced building techniques and editing. 3 hour session needed.',
      budget: 90,
      deadline: '3 days',
      category: 'Coaching',
      status: 'in-progress' as const,
      offersCount: 15
    },
    {
      title: 'Overwatch 2 Tank Coaching',
      description: 'Diamond tank main looking to improve positioning and ult management.',
      budget: 75,
      deadline: '5 days',
      category: 'Coaching',
      status: 'open' as const,
      offersCount: 7
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0D0D0D]">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex min-h-screen w-full" style={{ marginTop: '80px' }}>
        <Sidebar userRole="gamer" currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="flex-1 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-[#121212] border-b-2 border-[#1A1A1A] px-8 lg:px-12 py-8 shadow-lg">
          <h2 className="heading-spacing-sm">Job Board</h2>
          <p className="text-lg text-[#A0A0A0]">Browse available jobs and submit your offers</p>
        </div>

        {/* Content */}
        <div className="flex-1 dashboard-section">
          {/* Search & Filter Bar */}
          <div className="bg-[#1A1A1A] border border-[#333] rounded-xl card-padding-medium content-spacing-lg shadow-lg">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0A0A0]" size={20} />
                <Input
                  placeholder="Search jobs..."
                  className="pl-10 bg-[#121212] border-[#333]"
                />
              </div>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-full lg:w-48 bg-[#121212] border-[#333]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="boosting">Rank Boosting</SelectItem>
                  <SelectItem value="coaching">Coaching</SelectItem>
                  <SelectItem value="leveling">Account Leveling</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="newest">
                <SelectTrigger className="w-full lg:w-48 bg-[#121212] border-[#333]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="budget-high">Highest Budget</SelectItem>
                  <SelectItem value="budget-low">Lowest Budget</SelectItem>
                  <SelectItem value="deadline">Shortest Deadline</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-[#A0A0A0]">{jobs.length} jobs available</p>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 card-grid-medium">
            {jobs.map((job, index) => (
              <div key={index} className="relative">
                <JobCard {...job} onClick={() => setShowApplyModal(true)} />
                {job.status === 'open' && (
                  <Dialog open={showApplyModal} onOpenChange={setShowApplyModal}>
                    <DialogTrigger asChild>
                      <button className="absolute top-4 right-4 px-4 py-2 bg-[#00FF9D] text-black rounded-lg hover:bg-[#00CC7E] transition-all shadow-[0_0_20px_rgba(0,255,157,0.3)]">
                        Apply Now
                      </button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#1A1A1A] border-[#333] max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Submit Your Offer</DialogTitle>
                      </DialogHeader>
                      <form className="space-y-4 mt-4">
                        <div>
                          <Label>Job: {job.title}</Label>
                          <p className="text-sm text-[#A0A0A0] mt-1">Client Budget: ${job.budget}</p>
                        </div>
                        
                        <div>
                          <Label htmlFor="offer-price">Your Offer Price ($)</Label>
                          <Input
                            id="offer-price"
                            type="number"
                            placeholder="Enter your price"
                            className="bg-[#121212] border-[#333] mt-2"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="delivery-time">Delivery Time</Label>
                          <Select>
                            <SelectTrigger className="bg-[#121212] border-[#333] mt-2">
                              <SelectValue placeholder="Select delivery time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1-2 days</SelectItem>
                              <SelectItem value="3">3-5 days</SelectItem>
                              <SelectItem value="7">1 week</SelectItem>
                              <SelectItem value="14">2 weeks</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="offer-message">Cover Letter</Label>
                          <Textarea
                            id="offer-message"
                            placeholder="Explain why you're the best fit for this job..."
                            className="bg-[#121212] border-[#333] mt-2 min-h-32"
                          />
                        </div>
                        
                        <div className="flex gap-3 pt-4">
                          <GlowButton type="submit" className="flex-1">
                            Submit Offer
                          </GlowButton>
                          <button
                            type="button"
                            onClick={() => setShowApplyModal(false)}
                            className="px-6 py-3 bg-[#1A1A1A] border border-[#333] rounded-lg hover:border-[#7B61FF] transition-all"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
