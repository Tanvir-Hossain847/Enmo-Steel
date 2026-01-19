'use client';

import { useState } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie'; // Import js-cookie
import { useRouter } from 'next/navigation';
import { FaDatabase, FaGoogle, FaGithub, FaArrowRight, FaKey, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Hardcoded credentials for simulation
  const VALID_EMAIL = "fallback@gmail.com";
  const VALID_PASSWORD = "Fallback1234@";

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // 1. Validate Credentials
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      
      // 2. Prepare Data
      const userData = {
        email: email,
        role: 'RESEARCHER',
        lastLogin: new Date().toISOString(),
      };

      // 3. Send Data to Cookie (expires in 7 days, secure handling)
      Cookies.set('plantpedia_session', JSON.stringify(userData), { 
        expires: 7, 
        path: '/',
        sameSite: 'strict' 
      });

      // 4. Redirect to Dashboard/Archive
      router.push('/plants');
      
    } else {
      setError('AUTHENTICATION FAILED: INVALID CREDENTIALS');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      
      {/* Left Side: Visual Branding */}
      <div className="hidden md:flex md:w-1/2 bg-[#628141] border-r-4 border-black p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, black 2px, transparent 2px)',
          backgroundSize: '40px 40px'
        }}></div>

        <Link href="/" className="relative z-10 flex items-center gap-3 group">
          <div className="bg-black p-2 border-2 border-white group-hover:rotate-90 transition-transform">
            <FaDatabase className="text-white text-2xl" />
          </div>
          <h1 className="text-2xl font-black text-white uppercase tracking-tighter">PlantPedia</h1>
        </Link>

        <div className="relative z-10">
          <h2 className="text-6xl font-black text-white uppercase tracking-tighter leading-none mb-6">
            Access the <br /> <span className="italic font-light opacity-80">Archive.</span>
          </h2>
        </div>

        <div className="relative z-10 text-[10px] font-mono text-white/50 uppercase tracking-[0.2em]">
          System Status: Online // Connection: Encrypted
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-16">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-2">Login</h3>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Identify yourself to continue</p>
          </div>

          {/* Error Message Box */}
          {error && (
            <div className="mb-6 bg-red-50 border-2 border-red-600 p-4 flex items-center gap-3 text-red-600 animate-shake">
              <FaExclamationTriangle />
              <span className="text-[10px] font-black uppercase tracking-widest">{error}</span>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400">Archive Email</label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  required
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@botany.io"
                  className="w-full border-2 border-black p-4 pl-12 text-sm font-bold focus:outline-none focus:border-[#628141] focus:shadow-[4px_4px_0px_0px_rgba(98,129,65,1)] transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-400">Secret Key</label>
              </div>
              <div className="relative">
                <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  required
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full border-2 border-black p-4 pl-12 text-sm font-bold focus:outline-none focus:border-[#628141] focus:shadow-[4px_4px_0px_0px_rgba(98,129,65,1)] transition-all outline-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white p-5 font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#628141] transition-all group"
            >
              Authenticate <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          {/* External SSO simplified for space */}
          <div className="mt-12 space-y-4">
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <span className="relative bg-white px-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">External SSO</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="border-2 border-black p-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all font-black text-[10px] uppercase tracking-widest">
                <FaGoogle /> Google
              </button>
              <button className="border-2 border-black p-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition-all font-black text-[10px] uppercase tracking-widest">
                <FaGithub /> GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}