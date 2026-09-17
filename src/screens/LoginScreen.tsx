import { useState } from 'react';
import type { Screen } from '../App';

type Props = { navigate: (s: Screen) => void };

export default function LoginScreen({ navigate }: Props) {
  const [email, setEmail] = useState('bernicegrace@email.com');
  const [password, setPassword] = useState('••••••••');
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="min-h-screen flex" style={{ background: '#F4F5FF' }}>
      {/* Left panel — visible on wider screens */}
      <div
        className="hidden lg:flex flex-col justify-center items-center flex-1 p-16"
        style={{ background: 'linear-gradient(160deg, #1B1F4B 0%, #3D45C0 100%)' }}
      >
        <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6" style={{ background: 'rgba(255,255,255,0.15)' }}>
          <svg width="44" height="44" viewBox="0 0 52 52" fill="none">
            <rect x="6" y="12" width="40" height="34" rx="5" stroke="white" strokeWidth="2.5"/>
            <path d="M6 22H46" stroke="white" strokeWidth="2.5"/>
            <path d="M16 6V18M36 6V18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M14 31H22M14 37H28M30 31H38" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">PlanWise</h2>
        <p className="text-white/60 text-center max-w-xs leading-relaxed">
          Your AI-powered scheduling assistant that learns from your habits and optimizes your day.
        </p>
      </div>

      {/* Right panel — login form */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 max-w-md mx-auto w-full">
        {/* Mobile logo */}
        <div className="flex lg:hidden items-center gap-3 mb-10 self-start">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#5B67FA,#7C3AED)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="17" rx="3" stroke="white" strokeWidth="2"/>
              <path d="M3 9H21M8 2V6M16 2V6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-bold text-lg" style={{ color: '#1B1F4B' }}>PlanWise</span>
        </div>

        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold mb-1" style={{ color: '#1B1F4B' }}>Welcome Back</h1>
          <p className="text-sm text-gray-500 mb-8">Sign in to continue planning your day.</p>

          <div className="flex flex-col gap-4">
            <div>
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5 block">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                style={{ borderColor: '#E8EAFF', background: 'white', color: '#1B1F4B' }}
                onFocus={(e) => (e.target.style.borderColor = '#5B67FA')}
                onBlur={(e) => (e.target.style.borderColor = '#E8EAFF')}
              />
            </div>

            <div>
              <div className="flex justify-between mb-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Password</label>
                <button className="text-xs font-medium" style={{ color: '#5B67FA' }}>Forgot Password?</button>
              </div>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all pr-10"
                  style={{ borderColor: '#E8EAFF', background: 'white', color: '#1B1F4B' }}
                  onFocus={(e) => (e.target.style.borderColor = '#5B67FA')}
                  onBlur={(e) => (e.target.style.borderColor = '#E8EAFF')}
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M1 1l22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/></svg>
                  )}
                </button>
              </div>
            </div>

            <button
              onClick={() => navigate('home')}
              className="w-full py-3.5 rounded-xl text-white font-semibold text-sm mt-2 transition-all active:scale-[0.98]"
              style={{ background: 'linear-gradient(135deg, #5B67FA 0%, #7C3AED 100%)', boxShadow: '0 4px 15px rgba(91,103,250,0.35)' }}
            >
              Sign In
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">or</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <button
              className="w-full py-3 rounded-xl border border-gray-200 flex items-center justify-center gap-3 text-sm font-medium text-gray-700 bg-white transition-all hover:border-gray-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Sign in with Google
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account?{' '}
            <button onClick={() => navigate('register')} className="font-semibold" style={{ color: '#5B67FA' }}>
              Register Now
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
