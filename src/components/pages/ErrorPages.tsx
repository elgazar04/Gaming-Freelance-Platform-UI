import React from 'react';
import { GlowButton } from '../GlowButton';
import { Home, RefreshCw } from 'lucide-react';

interface ErrorPageProps {
  type: '404' | '500';
  onNavigate: (page: string) => void;
}

export function ErrorPage({ type, onNavigate }: ErrorPageProps) {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF9D] rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B61FF] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      {/* Error Content */}
      <div className="relative z-10 text-center max-w-2xl">
        {type === '404' ? (
          <>
            {/* 404 Content */}
            <div className="mb-8">
              <h1 className="text-9xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF9D] via-[#7B61FF] to-[#3B82F6] animate-pulse">
                404
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#00FF9D]"></div>
                <span className="text-4xl">⚡</span>
                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#7B61FF]"></div>
              </div>
            </div>

            <h2 className="mb-4">You Ventured Into The Void</h2>
            <p className="text-xl text-[#A0A0A0] mb-8 max-w-lg mx-auto">
              This page has been lost in the digital realm. The coordinates you entered don't exist in our gaming universe.
            </p>

            {/* Floating Gaming Icons */}
            <div className="mb-8 flex items-center justify-center gap-8">
              <div className="text-6xl animate-float" style={{ animationDelay: '0s' }}>🎮</div>
              <div className="text-6xl animate-float" style={{ animationDelay: '0.5s' }}>🎯</div>
              <div className="text-6xl animate-float" style={{ animationDelay: '1s' }}>🏆</div>
            </div>
          </>
        ) : (
          <>
            {/* 500 Content */}
            <div className="mb-8">
              <h1 className="text-9xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF4444] via-[#7B61FF] to-[#3B82F6] animate-pulse">
                500
              </h1>
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#FF4444]"></div>
                <span className="text-4xl">💥</span>
                <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#7B61FF]"></div>
              </div>
            </div>

            <h2 className="mb-4">System Glitch!</h2>
            <p className="text-xl text-[#A0A0A0] mb-8 max-w-lg mx-auto">
              Our servers took critical damage. The dev team is working on a respawn. Try again in a moment.
            </p>

            {/* Glitch Effect */}
            <div className="mb-8 flex items-center justify-center gap-8">
              <div className="text-6xl animate-pulse" style={{ animationDelay: '0s' }}>⚠️</div>
              <div className="text-6xl animate-pulse" style={{ animationDelay: '0.3s' }}>🔧</div>
              <div className="text-6xl animate-pulse" style={{ animationDelay: '0.6s' }}>⚡</div>
            </div>
          </>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <GlowButton 
            variant="green"
            onClick={() => onNavigate('landing')}
            className="min-w-[200px]"
          >
            <Home size={20} className="mr-2" />
            Back to Home
          </GlowButton>
          {type === '500' && (
            <GlowButton 
              variant="purple"
              onClick={() => window.location.reload()}
              className="min-w-[200px]"
            >
              <RefreshCw size={20} className="mr-2" />
              Try Again
            </GlowButton>
          )}
        </div>

        {/* Additional Help */}
        <div className="mt-12 p-6 bg-[#1A1A1A] border border-[#333] rounded-lg backdrop-blur-xl">
          <p className="text-[#A0A0A0]">
            Need assistance?{' '}
            <button 
              onClick={() => onNavigate('landing')}
              className="text-[#00FF9D] hover:underline"
            >
              Contact Support
            </button>
            {' '}or{' '}
            <button 
              onClick={() => onNavigate('landing')}
              className="text-[#00FF9D] hover:underline"
            >
              Visit Help Center
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
