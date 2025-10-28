import React from 'react';
import { GlowButton } from '../GlowButton';
import { GigCard } from '../GigCard';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { 
  Gamepad2, 
  Trophy, 
  Zap, 
  Star, 
  ChevronRight,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const featuredGigs = [
    {
      title: 'League of Legends Rank Boosting - Diamond to Master',
      gamer: 'ProGamer_X',
      avatar: '',
      category: 'Rank Boosting',
      price: 149,
      rating: 4.9,
      deliveryTime: '3-5 days'
    },
    {
      title: 'Valorant 1-on-1 Coaching Sessions',
      gamer: 'CoachAce',
      avatar: '',
      category: 'Coaching',
      price: 45,
      rating: 5.0,
      deliveryTime: '1 hour'
    },
    {
      title: 'CS:GO Competitive Rank Boost',
      gamer: 'EliteShooter',
      avatar: '',
      category: 'Rank Boosting',
      price: 89,
      rating: 4.8,
      deliveryTime: '2-4 days'
    },
  ];

  const testimonials = [
    {
      name: 'Alex M.',
      rating: 5,
      text: 'Amazing service! Got my rank boosted in 3 days. The booster was professional and kept me updated.',
      game: 'League of Legends'
    },
    {
      name: 'Sarah K.',
      rating: 5,
      text: 'Best coaching I\'ve ever received. My gameplay improved dramatically after just 5 sessions.',
      game: 'Valorant'
    },
    {
      name: 'Mike D.',
      rating: 5,
      text: 'Super fast delivery and great communication. Will definitely use this platform again!',
      game: 'CS:GO'
    },
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} showAuthButtons showNavLinks />

      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ marginTop: '80px' }}>
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00FF9D] rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7B61FF] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6] rounded-full blur-[180px] opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Hero Content - Centered */}
        <div className="flex items-center justify-center relative z-10" style={{ minHeight: '70vh' }}>
          <div className="landing-container">
            <div className="text-center mx-auto w-full" style={{ maxWidth: '896px' }}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00FF9D]/10 border border-[#00FF9D]/30 rounded-full mb-8 animate-fade-in-up opacity-0">
              <Zap size={18} className="text-[#00FF9D] animate-pulse" />
              <span className="text-[#00FF9D] text-sm font-medium">The #1 Gaming Freelance Platform</span>
            </div>
            
            <h1 className="mb-8 sm:mb-10 leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold animate-fade-in-up opacity-0 delay-100">
              <span className="block mb-2">Level Up Your Skills.</span>
              <span className="gradient-text-animated inline-block">
                Play. Earn. Dominate.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-[#B0B0B0] mb-10 sm:mb-12 mx-auto leading-relaxed animate-fade-in-up opacity-0 delay-200" style={{ maxWidth: '768px' }}>
              Connect with elite gamers for boosting and coaching services, or offer your skills and earn money doing what you love.
            </p>
            
            <div className="flex items-center justify-center flex-wrap content-spacing-xl button-spacing-lg animate-fade-in-up opacity-0 delay-300">
              <GlowButton 
                variant="primary"
                onClick={() => onNavigate('gig-marketplace')}
                className="group"
              >
                <span className="flex items-center gap-2">
                  Hire Gamers
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </GlowButton>
              <GlowButton 
                variant="secondary"
                onClick={() => onNavigate('register')}
              >
                Start Selling Services
              </GlowButton>
            </div>
            </div>
          </div>
        </div>

        {/* Stats - Separate Section */}
        <div className="landing-container relative z-10 pb-24 sm:pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 card-grid-medium">
            <div className="text-center card-padding-large bg-[#1A1A1A]/80 backdrop-blur-xl border border-[#333] rounded-2xl hover:border-[#00FF9D]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#00FF9D]/20 hover:scale-105 animate-scale-in opacity-0 delay-400 card-enhanced">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto content-spacing-lg rounded-full bg-[#00FF9D]/10 flex items-center justify-center">
                <Gamepad2 className="text-[#00FF9D]" size={36} />
              </div>
              <h3 className="content-spacing-sm text-3xl sm:text-4xl">10,000+</h3>
              <p className="text-[#A0A0A0] text-base sm:text-lg">Active Gamers</p>
            </div>
            
            <div className="text-center card-padding-large bg-[#1A1A1A]/80 backdrop-blur-xl border border-[#333] rounded-2xl hover:border-[#7B61FF]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#7B61FF]/20 hover:scale-105 animate-scale-in opacity-0 delay-500 card-enhanced">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto content-spacing-lg rounded-full bg-[#7B61FF]/10 flex items-center justify-center">
                <Trophy className="text-[#7B61FF]" size={36} />
              </div>
              <h3 className="content-spacing-sm text-3xl sm:text-4xl">50,000+</h3>
              <p className="text-[#A0A0A0] text-base sm:text-lg">Jobs Completed</p>
            </div>
            
            <div className="text-center card-padding-large bg-[#1A1A1A]/80 backdrop-blur-xl border border-[#333] rounded-2xl hover:border-[#3B82F6]/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#3B82F6]/20 hover:scale-105 animate-scale-in opacity-0 delay-500 sm:delay-300 card-enhanced">
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto content-spacing-lg rounded-full bg-[#3B82F6]/10 flex items-center justify-center">
                <Star className="text-[#3B82F6]" size={36} />
              </div>
              <h3 className="content-spacing-sm text-3xl sm:text-4xl">4.9/5</h3>
              <p className="text-[#A0A0A0] text-base sm:text-lg">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gigs */}
      <section id="services" className="section-spacing bg-[#121212]">
        <div className="landing-container">
          <div className="text-center section-header">
            <h2 className="heading-spacing-lg">Featured Services</h2>
            <p className="text-xl sm:text-2xl text-[#B0B0B0] container-md leading-relaxed">Top-rated boosting and coaching services from elite gamers</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 card-grid-large content-spacing-xl">
            {featuredGigs.map((gig, index) => (
              <GigCard key={index} {...gig} onClick={() => onNavigate('gig-marketplace')} />
            ))}
          </div>
          
          <div className="text-center">
            <GlowButton variant="secondary" onClick={() => onNavigate('gig-marketplace')} size="xl">
              Browse All Services
            </GlowButton>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section-spacing">
        <div className="landing-container">
          <div className="text-center section-header">
            <h2 className="heading-spacing-lg">How It Works</h2>
            <p className="text-xl sm:text-2xl text-[#B0B0B0] container-md leading-relaxed">Get started in three simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 card-grid-medium">
            <div className="text-center group cursor-pointer card-padding-medium">
              <div className="w-24 h-24 mx-auto content-spacing-lg rounded-full bg-gradient-to-br from-[#00FF9D]/20 to-[#00FF9D]/5 border-2 border-[#00FF9D]/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#00FF9D]/60 transition-all duration-300 shadow-lg shadow-[#00FF9D]/10 group-hover:shadow-2xl group-hover:shadow-[#00FF9D]/30">
                <Shield className="text-[#00FF9D] group-hover:scale-110 transition-transform" size={40} />
              </div>
              <h4 className="heading-spacing-md group-hover:text-[#00FF9D] transition-colors text-2xl">1. Post Your Job</h4>
              <p className="text-[#B0B0B0] text-lg leading-relaxed">Create a job listing with your requirements, budget, and deadline</p>
            </div>
            
            <div className="text-center group cursor-pointer card-padding-medium">
              <div className="w-24 h-24 mx-auto content-spacing-lg rounded-full bg-gradient-to-br from-[#7B61FF]/20 to-[#7B61FF]/5 border-2 border-[#7B61FF]/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#7B61FF]/60 transition-all duration-300 shadow-lg shadow-[#7B61FF]/10 group-hover:shadow-2xl group-hover:shadow-[#7B61FF]/30">
                <Trophy className="text-[#7B61FF] group-hover:scale-110 transition-transform" size={40} />
              </div>
              <h4 className="heading-spacing-md group-hover:text-[#7B61FF] transition-colors text-2xl">2. Get Offers</h4>
              <p className="text-[#B0B0B0] text-lg leading-relaxed">Receive proposals from qualified gamers and choose the best fit</p>
            </div>
            
            <div className="text-center group cursor-pointer card-padding-medium">
              <div className="w-24 h-24 mx-auto content-spacing-lg rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5 border-2 border-[#3B82F6]/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#3B82F6]/60 transition-all duration-300 shadow-lg shadow-[#3B82F6]/10 group-hover:shadow-2xl group-hover:shadow-[#3B82F6]/30">
                <Gamepad2 className="text-[#3B82F6] group-hover:scale-110 transition-transform" size={40} />
              </div>
              <h4 className="heading-spacing-md group-hover:text-[#3B82F6] transition-colors text-2xl">3. Play & Earn</h4>
              <p className="text-[#B0B0B0] text-lg leading-relaxed">Work together, track progress, and get paid upon completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-spacing bg-[#121212]">
        <div className="landing-container">
          <div className="text-center section-header">
            <h2 className="heading-spacing-lg">What Our Users Say</h2>
            <p className="text-xl sm:text-2xl text-[#B0B0B0] container-md leading-relaxed">Trusted by thousands of gamers worldwide</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 card-grid-medium">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-padding-large bg-[#1A1A1A] border border-[#333] rounded-xl hover:border-[#00FF9D]/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#00FF9D]/10 hover:scale-105 hover:-translate-y-1">
                <div className="flex items-center gap-1 content-spacing-md">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#00FF9D] fill-[#00FF9D]" />
                  ))}
                </div>
                <p className="text-[#B0B0B0] content-spacing-lg leading-relaxed text-lg">{testimonial.text}</p>
                <div className="flex items-center justify-between pt-6 border-t border-[#333]">
                  <span className="font-semibold text-lg">{testimonial.name}</span>
                  <span className="text-base text-[#00FF9D] font-medium">{testimonial.game}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
