import React, { useState } from 'react';
import { LandingPage } from './components/pages/LandingPage';
import { AuthPage } from './components/pages/AuthPage';
import { GamerDashboard } from './components/pages/GamerDashboard';
import { ClientDashboard } from './components/pages/ClientDashboard';
import { GigMarketplace } from './components/pages/GigMarketplace';
import { JobBoard } from './components/pages/JobBoard';
import { ChatPage } from './components/pages/ChatPage';
import { ProofOfWorkPage } from './components/pages/ProofOfWorkPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { AdminDashboard } from './components/pages/AdminDashboard';
import { AnalyticsPage } from './components/pages/AnalyticsPage';
import { ErrorPage } from './components/pages/ErrorPages';
import './styles/globals.css';

type Page = 
  | 'landing'
  | 'login'
  | 'register'
  | 'gamer-dashboard'
  | 'client-dashboard'
  | 'admin-dashboard'
  | 'gig-marketplace'
  | 'job-board'
  | 'chat'
  | 'proof-of-work'
  | 'profile'
  | 'my-gigs'
  | 'active-jobs'
  | 'earnings'
  | 'my-jobs'
  | 'approved-work'
  | 'settings'
  | 'pending-jobs'
  | 'users'
  | 'analytics'
  | 'gig-detail'
  | '404'
  | '500';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      
      case 'login':
      case 'register':
        return <AuthPage onNavigate={handleNavigate} />;
      
      case 'gamer-dashboard':
      case 'my-gigs':
      case 'active-jobs':
      case 'earnings':
        return <GamerDashboard currentPage={currentPage} onNavigate={handleNavigate} />;
      
      case 'client-dashboard':
      case 'my-jobs':
      case 'approved-work':
        return <ClientDashboard currentPage={currentPage} onNavigate={handleNavigate} />;
      
      case 'gig-marketplace':
      case 'gig-detail':
        return <GigMarketplace currentPage={currentPage} onNavigate={handleNavigate} />;
      
      case 'job-board':
        return <JobBoard currentPage={currentPage} onNavigate={handleNavigate} />;
      
      case 'chat':
        return <ChatPage currentPage={currentPage} onNavigate={handleNavigate} />;
      
      case 'proof-of-work':
        return <ProofOfWorkPage currentPage={currentPage} onNavigate={handleNavigate} />;
      
      case 'profile':
        return <ProfilePage currentPage={currentPage} onNavigate={handleNavigate} />;
      
      case 'admin-dashboard':
      case 'pending-jobs':
      case 'users':
      case 'settings':
        return <AdminDashboard currentPage={currentPage} onNavigate={handleNavigate} />;
      
      case 'analytics':
        return <AnalyticsPage currentPage={currentPage} onNavigate={handleNavigate} />;
      
      case '404':
        return <ErrorPage type="404" onNavigate={handleNavigate} />;
      
      case '500':
        return <ErrorPage type="500" onNavigate={handleNavigate} />;
      
      default:
        return <ErrorPage type="404" onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen w-screen bg-[#0D0D0D] text-white m-0 p-0">
      {renderPage()}
      
      {/* Demo Navigation Helper - Hidden in production */}
      <div className="fixed bottom-6 right-6 z-50">
        <details className="bg-[#1A1A1A] border border-[#333] rounded-lg shadow-lg backdrop-blur-xl">
          <summary className="px-4 py-3 cursor-pointer hover:bg-[#222] transition-all list-none flex items-center gap-2">
            <span className="text-[#00FF9D]">🎮</span>
            <span className="text-sm">Demo Navigation</span>
          </summary>
          <div className="p-4 border-t border-[#333] max-h-96 overflow-y-auto scrollbar-custom">
            <div className="space-y-2 text-sm">
              <div className="mb-3">
                <p className="text-xs text-[#A0A0A0] mb-2">Main Pages</p>
                <button onClick={() => handleNavigate('landing')} className="block w-full text-left px-3 py-2 hover:bg-[#00FF9D]/10 rounded transition-all">
                  Landing Page
                </button>
                <button onClick={() => handleNavigate('login')} className="block w-full text-left px-3 py-2 hover:bg-[#00FF9D]/10 rounded transition-all">
                  Login / Register
                </button>
              </div>

              <div className="mb-3">
                <p className="text-xs text-[#A0A0A0] mb-2">Gamer Views</p>
                <button onClick={() => handleNavigate('gamer-dashboard')} className="block w-full text-left px-3 py-2 hover:bg-[#7B61FF]/10 rounded transition-all">
                  Gamer Dashboard
                </button>
                <button onClick={() => handleNavigate('job-board')} className="block w-full text-left px-3 py-2 hover:bg-[#7B61FF]/10 rounded transition-all">
                  Job Board
                </button>
                <button onClick={() => handleNavigate('proof-of-work')} className="block w-full text-left px-3 py-2 hover:bg-[#7B61FF]/10 rounded transition-all">
                  Proof of Work
                </button>
              </div>

              <div className="mb-3">
                <p className="text-xs text-[#A0A0A0] mb-2">Client Views</p>
                <button onClick={() => handleNavigate('client-dashboard')} className="block w-full text-left px-3 py-2 hover:bg-[#3B82F6]/10 rounded transition-all">
                  Client Dashboard
                </button>
                <button onClick={() => handleNavigate('gig-marketplace')} className="block w-full text-left px-3 py-2 hover:bg-[#3B82F6]/10 rounded transition-all">
                  Gig Marketplace
                </button>
              </div>

              <div className="mb-3">
                <p className="text-xs text-[#A0A0A0] mb-2">Shared</p>
                <button onClick={() => handleNavigate('chat')} className="block w-full text-left px-3 py-2 hover:bg-[#00FF9D]/10 rounded transition-all">
                  Chat
                </button>
                <button onClick={() => handleNavigate('profile')} className="block w-full text-left px-3 py-2 hover:bg-[#00FF9D]/10 rounded transition-all">
                  Profile
                </button>
              </div>

              <div className="mb-3">
                <p className="text-xs text-[#A0A0A0] mb-2">Admin</p>
                <button onClick={() => handleNavigate('admin-dashboard')} className="block w-full text-left px-3 py-2 hover:bg-[#FF4444]/10 rounded transition-all">
                  Admin Dashboard
                </button>
                <button onClick={() => handleNavigate('analytics')} className="block w-full text-left px-3 py-2 hover:bg-[#FF4444]/10 rounded transition-all">
                  Analytics
                </button>
              </div>

              <div>
                <p className="text-xs text-[#A0A0A0] mb-2">Error Pages</p>
                <button onClick={() => handleNavigate('404')} className="block w-full text-left px-3 py-2 hover:bg-[#A0A0A0]/10 rounded transition-all">
                  404 Error
                </button>
                <button onClick={() => handleNavigate('500')} className="block w-full text-left px-3 py-2 hover:bg-[#A0A0A0]/10 rounded transition-all">
                  500 Error
                </button>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
