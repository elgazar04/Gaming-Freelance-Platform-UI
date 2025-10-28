import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Sidebar } from '../Sidebar';
import { GigCard } from '../GigCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Slider } from '../ui/slider';
import { Badge } from '../ui/badge';

interface GigMarketplaceProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function GigMarketplace({ currentPage, onNavigate }: GigMarketplaceProps) {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [showFilters, setShowFilters] = useState(true);

  const gigs = [
    {
      title: 'League of Legends Rank Boosting - Any Rank to Diamond',
      gamer: 'ProGamer_X',
      avatar: '',
      category: 'Rank Boosting',
      price: 149,
      rating: 4.9,
      deliveryTime: '3-5 days'
    },
    {
      title: 'Valorant 1-on-1 Coaching Sessions - Improve Your Aim',
      gamer: 'CoachAce',
      avatar: '',
      category: 'Coaching',
      price: 45,
      rating: 5.0,
      deliveryTime: '1 hour'
    },
    {
      title: 'CS:GO Competitive Rank Boost to Global Elite',
      gamer: 'EliteShooter',
      avatar: '',
      category: 'Rank Boosting',
      price: 89,
      rating: 4.8,
      deliveryTime: '2-4 days'
    },
    {
      title: 'Overwatch 2 Coaching - Tank & Support Main',
      gamer: 'TankMaster',
      avatar: '',
      category: 'Coaching',
      price: 35,
      rating: 4.7,
      deliveryTime: '1 hour'
    },
    {
      title: 'Apex Legends Predator Rank Boosting',
      gamer: 'ApexChampion',
      avatar: '',
      category: 'Rank Boosting',
      price: 199,
      rating: 5.0,
      deliveryTime: '5-7 days'
    },
    {
      title: 'Fortnite Building & Editing Masterclass',
      gamer: 'BuildPro',
      avatar: '',
      category: 'Coaching',
      price: 55,
      rating: 4.9,
      deliveryTime: '2 hours'
    },
    {
      title: 'Dota 2 MMR Boosting - Fast & Safe',
      gamer: 'DotaLegend',
      avatar: '',
      category: 'Rank Boosting',
      price: 125,
      rating: 4.8,
      deliveryTime: '4-6 days'
    },
    {
      title: 'Rainbow Six Siege Coaching - Platinum+',
      gamer: 'TacticalGuru',
      avatar: '',
      category: 'Coaching',
      price: 40,
      rating: 4.9,
      deliveryTime: '1 hour'
    },
    {
      title: 'Rocket League Grand Champion Boosting',
      gamer: 'RocketKing',
      avatar: '',
      category: 'Rank Boosting',
      price: 95,
      rating: 4.7,
      deliveryTime: '3-5 days'
    },
  ];

  const categories = ['All Categories', 'Rank Boosting', 'Coaching', 'Account Leveling', 'Game Completion'];

  return (
    <div className="min-h-screen w-full bg-[#0D0D0D]">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex min-h-screen w-full" style={{ marginTop: '80px' }}>
        <Sidebar userRole="client" currentPage={currentPage} onNavigate={onNavigate} />
      
      <div className="flex-1 min-h-screen flex flex-col">
        {/* Header */}
        <div className="bg-[#121212] border-b-2 border-[#1A1A1A] px-8 lg:px-12 py-8 shadow-lg">
          <h2 className="heading-spacing-sm">Gig Marketplace</h2>
          <p className="text-lg text-[#A0A0A0]">Browse and hire elite gamers for your needs</p>
        </div>

        {/* Content */}
        <div className="flex-1 dashboard-section">
          {/* Search & Filter Bar */}
          <div className="bg-[#1A1A1A] border border-[#333] rounded-xl card-padding-medium content-spacing-lg shadow-lg">
            <div className="flex flex-col lg:flex-row button-spacing-md">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0A0A0]" size={20} />
                <Input
                  placeholder="Search for gigs..."
                  className="pl-10 bg-[#121212] border-[#333]"
                />
              </div>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-full lg:w-48 bg-[#121212] border-[#333]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat.toLowerCase().replace(' ', '-')}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select defaultValue="rating">
                <SelectTrigger className="w-full lg:w-48 bg-[#121212] border-[#333]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rating">Sort by Rating</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="delivery">Fastest Delivery</SelectItem>
                </SelectContent>
              </Select>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-2 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded-lg text-[#00FF9D] hover:bg-[#00FF9D]/20 transition-all flex items-center gap-2"
              >
                <SlidersHorizontal size={20} />
                Filters
              </button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-[#333]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-3 text-sm">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={500}
                      step={10}
                      className="mb-4"
                    />
                  </div>
                  
                  <div>
                    <label className="block mb-3 text-sm">Minimum Rating</label>
                    <Select defaultValue="4">
                      <SelectTrigger className="bg-[#121212] border-[#333]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5 Stars</SelectItem>
                        <SelectItem value="4">4+ Stars</SelectItem>
                        <SelectItem value="3">3+ Stars</SelectItem>
                        <SelectItem value="any">Any Rating</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block mb-3 text-sm">Games</label>
                  <div className="flex flex-wrap gap-2">
                    {['League of Legends', 'Valorant', 'CS:GO', 'Overwatch', 'Apex Legends', 'Fortnite'].map((game) => (
                      <Badge key={game} variant="outline" className="cursor-pointer hover:bg-[#00FF9D]/10 hover:border-[#00FF9D]/30">
                        {game}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-[#A0A0A0]">{gigs.length} gigs found</p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#A0A0A0]">View:</span>
              <button className="p-2 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded text-[#00FF9D]">
                <Filter size={16} />
              </button>
              <button className="p-2 bg-[#1A1A1A] border border-[#333] rounded hover:border-[#00FF9D]/30">
                <Filter size={16} className="text-[#A0A0A0]" />
              </button>
            </div>
          </div>

          {/* Gigs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {gigs.map((gig, index) => (
              <GigCard key={index} {...gig} onClick={() => onNavigate('gig-detail')} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2">
            <button className="px-4 py-2 bg-[#1A1A1A] border border-[#333] rounded-lg hover:border-[#00FF9D] transition-all">
              Previous
            </button>
            <button className="px-4 py-2 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded-lg text-[#00FF9D]">
              1
            </button>
            <button className="px-4 py-2 bg-[#1A1A1A] border border-[#333] rounded-lg hover:border-[#00FF9D] transition-all">
              2
            </button>
            <button className="px-4 py-2 bg-[#1A1A1A] border border-[#333] rounded-lg hover:border-[#00FF9D] transition-all">
              3
            </button>
            <button className="px-4 py-2 bg-[#1A1A1A] border border-[#333] rounded-lg hover:border-[#00FF9D] transition-all">
              Next
            </button>
          </div>
        </div>
      </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
