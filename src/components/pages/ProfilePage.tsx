import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { GlowButton } from '../GlowButton';
import { Star, MapPin, Calendar, Trophy, Briefcase, Edit } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';

interface ProfilePageProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function ProfilePage({ currentPage, onNavigate }: ProfilePageProps) {
  const gigs = [
    { title: 'League of Legends Rank Boosting', price: 149, rating: 4.9, orders: 87 },
    { title: 'Valorant Coaching Sessions', price: 45, rating: 5.0, orders: 124 },
    { title: 'CS:GO Rank Boost', price: 89, rating: 4.8, orders: 56 },
  ];

  const reviews = [
    {
      client: 'Client_Alex',
      rating: 5,
      comment: 'Amazing service! Very professional and completed the boost faster than expected. Highly recommended!',
      date: '2 days ago',
      job: 'League of Legends Rank Boost'
    },
    {
      client: 'Client_Sarah',
      rating: 5,
      comment: 'Great coaching session. Learned a lot about positioning and aim. Will book again!',
      date: '1 week ago',
      job: 'Valorant Coaching'
    },
    {
      client: 'Client_Mike',
      rating: 4,
      comment: 'Good service, took a bit longer than expected but the result was perfect.',
      date: '2 weeks ago',
      job: 'CS:GO Rank Boost'
    },
  ];

  const stats = [
    { label: 'Completed Jobs', value: '127' },
    { label: 'Success Rate', value: '98%' },
    { label: 'Response Time', value: '< 1 hour' },
    { label: 'Member Since', value: 'Jan 2024' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0D0D0D]">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex min-h-screen w-full" style={{ marginTop: '80px' }}>
        <Sidebar userRole="gamer" currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="flex-1 min-h-screen flex flex-col bg-[#0D0D0D]">
        {/* Profile Header */}
        <div className="relative">
          {/* Banner */}
          <div className="h-48 bg-gradient-to-r from-[#00FF9D]/20 via-[#7B61FF]/20 to-[#3B82F6]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
          </div>

          {/* Profile Info */}
          <div className="px-8 lg:px-12 pb-12 bg-[#0D0D0D]">
            <div className="flex flex-col md:flex-row md:items-end gap-8 -mt-20 relative z-10">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#7B61FF] p-1">
                  <div className="w-full h-full rounded-full bg-[#0D0D0D] flex items-center justify-center">
                    <span className="text-5xl">🎮</span>
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-[#00FF9D] text-black rounded-full hover:bg-[#00CC7E] transition-all shadow-[0_0_20px_rgba(0,255,157,0.5)]">
                  <Edit size={16} />
                </button>
              </div>

              {/* Name & Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2>ProGamer_Elite</h2>
                      <Badge className="bg-[#00FF9D]/20 text-[#00FF9D] border-[#00FF9D]/30">
                        <Trophy size={14} className="mr-1" />
                        Elite Seller
                      </Badge>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-[#A0A0A0]">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-[#00FF9D] fill-[#00FF9D]" />
                        <span>4.9 (127 reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>United States</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>Member since Jan 2024</span>
                      </div>
                    </div>
                  </div>
                  <GlowButton>Edit Profile</GlowButton>
                </div>

                {/* Bio */}
                <p className="text-[#A0A0A0] mb-6 max-w-2xl">
                  Professional gamer and coach with 5+ years of experience. Specialized in FPS and MOBA games. 
                  Diamond+ player in League of Legends, Valorant, and CS:GO. I provide high-quality boosting and 
                  coaching services with guaranteed results.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-[#1A1A1A] border border-[#333] rounded-xl p-6 text-center hover:border-[#00FF9D]/30 transition-all shadow-lg">
                      <p className="text-3xl font-bold mb-2">{stat.value}</p>
                      <p className="text-sm text-[#A0A0A0]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex-1 px-8 lg:px-12 pb-12 bg-[#0D0D0D]">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="bg-[#121212] border-b-2 border-[#333] w-full justify-start rounded-none mb-8 h-14">
              <TabsTrigger value="about" className="text-base px-6 h-full">About</TabsTrigger>
              <TabsTrigger value="gigs" className="text-base px-6 h-full">Gigs</TabsTrigger>
              <TabsTrigger value="reviews" className="text-base px-6 h-full">Reviews</TabsTrigger>
            </TabsList>

            {/* About Tab */}
            <TabsContent value="about" className="py-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                  <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-8 shadow-lg">
                    <h4 className="mb-4">About Me</h4>
                    <p className="text-[#A0A0A0] leading-relaxed">
                      I'm a dedicated professional gamer with extensive experience across multiple competitive titles. 
                      My passion for gaming has led me to achieve high ranks in several games, and now I want to help 
                      others reach their goals too.
                    </p>
                    <p className="text-[#A0A0A0] leading-relaxed mt-4">
                      Whether you need rank boosting or personalized coaching, I provide reliable and efficient services 
                      with a focus on customer satisfaction. All work is done securely and professionally.
                    </p>
                  </div>

                  <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-8 shadow-lg">
                    <h4 className="mb-6">Skills & Expertise</h4>
                    <div className="flex flex-wrap gap-3">
                      {['League of Legends', 'Valorant', 'CS:GO', 'Apex Legends', 'Overwatch', 
                        'Coaching', 'Rank Boosting', 'Game Strategy', 'Team Coordination'].map((skill) => (
                        <Badge key={skill} variant="outline" className="bg-[#00FF9D]/10 border-[#00FF9D]/30 text-[#00FF9D] px-4 py-2 text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-8 shadow-lg">
                    <h5 className="mb-4">Languages</h5>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span>English</span>
                        <span className="text-[#00FF9D] text-sm">Native</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Spanish</span>
                        <span className="text-[#A0A0A0] text-sm">Fluent</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#1A1A1A] border border-[#333] rounded-xl p-8 shadow-lg">
                    <h5 className="mb-4">Availability</h5>
                    <p className="text-[#A0A0A0] mb-3">Typically responds within 1 hour</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-[#A0A0A0]">Mon - Fri</span>
                        <span>9 AM - 11 PM</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#A0A0A0]">Sat - Sun</span>
                        <span>10 AM - 12 AM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Gigs Tab */}
            <TabsContent value="gigs" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gigs.map((gig, index) => (
                  <div key={index} className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6 hover:border-[#00FF9D] transition-all">
                    <h5 className="mb-4 line-clamp-2">{gig.title}</h5>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-[#00FF9D] fill-[#00FF9D]" />
                        <span className="text-sm">{gig.rating}</span>
                        <span className="text-[#A0A0A0] text-sm">({gig.orders})</span>
                      </div>
                      <span className="text-[#00FF9D]">${gig.price}</span>
                    </div>
                    <GlowButton className="w-full" variant="secondary">
                      View Gig
                    </GlowButton>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Reviews Tab */}
            <TabsContent value="reviews" className="py-6">
              <div className="mb-6 bg-[#1A1A1A] border border-[#333] rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h2 className="mb-2">4.9</h2>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="text-[#00FF9D] fill-[#00FF9D]" />
                      ))}
                    </div>
                    <p className="text-[#A0A0A0]">Based on 127 reviews</p>
                  </div>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="w-12 text-sm text-[#A0A0A0]">{stars} star</span>
                        <div className="flex-1 h-2 bg-[#121212] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-[#00FF9D]"
                            style={{ width: stars === 5 ? '85%' : stars === 4 ? '12%' : '3%' }}
                          />
                        </div>
                        <span className="w-12 text-sm text-[#A0A0A0] text-right">
                          {stars === 5 ? '108' : stars === 4 ? '15' : '4'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00FF9D] to-[#7B61FF] flex items-center justify-center">
                          <span>{review.client[0]}</span>
                        </div>
                        <div>
                          <h6>{review.client}</h6>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} size={14} className="text-[#00FF9D] fill-[#00FF9D]" />
                              ))}
                            </div>
                            <span className="text-sm text-[#A0A0A0]">{review.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#A0A0A0] mb-3">{review.comment}</p>
                    <p className="text-sm text-[#A0A0A0]">
                      <Briefcase size={14} className="inline mr-1" />
                      {review.job}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
