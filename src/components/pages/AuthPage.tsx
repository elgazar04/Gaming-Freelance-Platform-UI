import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { GlowButton } from '../GlowButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

interface AuthPageProps {
  onNavigate: (page: string) => void;
}

export function AuthPage({ onNavigate }: AuthPageProps) {
  const [role, setRole] = useState<'gamer' | 'client'>('gamer');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('gamer-dashboard');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'gamer') {
      onNavigate('gamer-dashboard');
    } else {
      onNavigate('client-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
      <Navbar onNavigate={onNavigate} />
      
      <div className="flex-1 flex items-center justify-center p-6 relative overflow-hidden" style={{ marginTop: '80px' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00FF9D] rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7B61FF] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Back to Home */}
      <button
        onClick={() => onNavigate('landing')}
        className="absolute top-6 left-6 text-[#A0A0A0] hover:text-white transition-colors"
      >
        ← Back to Home
      </button>

      {/* Auth Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="bg-[#1A1A1A] border border-[#333] rounded-lg card-padding-large backdrop-blur-xl">
          {/* Logo */}
          <div className="text-center content-spacing-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#00FF9D] to-[#7B61FF] flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="heading-spacing-sm">Welcome to GameBoost</h3>
            <p className="text-[#A0A0A0]">Your gaming career starts here</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[#121212] mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="flex flex-col list-spacing-md">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-[#121212] border-[#333] mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#121212] border-[#333] mt-2"
                    required
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-[#A0A0A0] cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    Remember me
                  </label>
                  <a href="#" className="text-[#00FF9D] hover:underline">
                    Forgot password?
                  </a>
                </div>

                <GlowButton type="submit" className="w-full">
                  Login
                </GlowButton>
              </form>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="flex flex-col list-spacing-md">
                <div>
                  <Label htmlFor="fullname">Full Name</Label>
                  <Input
                    id="fullname"
                    type="text"
                    placeholder="John Doe"
                    className="bg-[#121212] border-[#333] mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="reg-email">Email</Label>
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-[#121212] border-[#333] mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="reg-password">Password</Label>
                  <Input
                    id="reg-password"
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#121212] border-[#333] mt-2"
                    required
                  />
                </div>

                <div>
                  <Label className="mb-3 block">I am a:</Label>
                  <RadioGroup
                    value={role}
                    onValueChange={(value) => setRole(value as 'gamer' | 'client')}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gamer" id="gamer" />
                      <Label htmlFor="gamer" className="cursor-pointer">Gamer (Seller)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="client" id="client" />
                      <Label htmlFor="client" className="cursor-pointer">Client (Buyer)</Label>
                    </div>
                  </RadioGroup>
                </div>

                  <GlowButton type="submit" variant="secondary" className="w-full">
                  Create Account
                </GlowButton>
              </form>
            </TabsContent>
          </Tabs>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#333]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#1A1A1A] text-[#A0A0A0]">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button className="px-4 py-2 bg-[#121212] border border-[#333] rounded-lg hover:border-[#00FF9D] transition-all">
                Google
              </button>
              <button className="px-4 py-2 bg-[#121212] border border-[#333] rounded-lg hover:border-[#00FF9D] transition-all">
                Discord
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
