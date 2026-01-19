'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter, usePathname } from 'next/navigation';
import { FaDatabase, FaBars, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Check for session whenever the page changes
  useEffect(() => {
    const session = Cookies.get('plantpedia_session');
    setIsLoggedIn(!!session);
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove('plantpedia_session');
    setIsLoggedIn(false);
    router.push('/');
    router.refresh();
  };

  return (
    <nav className="bg-white border-b-4 border-black sticky top-0 z-[100]">
      {/* Top Thin Strip: Reinforces the "Institutional" feel */}
      <div className="bg-black text-white py-1 px-4 hidden md:flex justify-between items-center text-[10px] font-mono tracking-[0.2em] uppercase">
        <div className="flex gap-4">
          <span>Global Access: {isLoggedIn ? 'Authorized' : 'Public'}</span>
          <span className={isLoggedIn ? "text-[#628141]" : "text-yellow-500"}>
            ● {isLoggedIn ? 'Researcher Connection' : 'Guest Access'}
          </span>
        </div>
        <div>Ver 2026.01.18</div>
      </div>

      <div className="container mx-auto px-4 py-3 md:py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-[#628141] p-1.5 border-2 border-black group-hover:rotate-90 transition-transform duration-300">
              <FaDatabase className="text-white text-lg" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-black text-black uppercase tracking-tighter leading-none">
                Plant<span className="text-[#628141]">Pedia</span>
              </h1>
              <span className="text-[9px] font-black uppercase tracking-widest text-gray-400 leading-none mt-1">
                Botanical Archive
              </span>
            </div>
          </Link>
          
          {/* Main Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", path: "/" },
              { name: "Archive", path: "/main/plants" },
              { name: "Protocols", path: "/main/contact" },
              { name: "Institution", path: "/main/about" }
            ].map((link) => (
              <Link 
                key={link.name}
                href={link.path} 
                className="relative text-xs font-black uppercase tracking-widest text-black hover:text-[#628141] transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#628141] transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Conditional Action Buttons */}
          <div className="flex items-center gap-4">
            {!isLoggedIn ? (
              // SHOW IF LOGGED OUT
              <>
                <Link href='/auth/login' className="hidden lg:block bg-black text-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#628141] transition-colors border-2 border-black shadow-[4px_4px_0px_0px_rgba(98,129,65,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  Login
                </Link>
                
                <Link href='/auth/register' className="hidden lg:block bg-black text-white px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#628141] transition-colors border-2 border-black shadow-[4px_4px_0px_0px_rgba(98,129,65,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                  Registration
                </Link>
              </>
            ) : (
              // SHOW IF LOGGED IN
              <div className="flex items-center gap-3">
                <Link 
                  href="/profile" 
                  className="flex items-center gap-2 bg-[#628141] text-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.1em] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  <FaUserCircle size={14}/> Profile
                </Link>

                <button 
                  onClick={handleLogout}
                  className="bg-white text-red-600 p-2 border-2 border-black hover:bg-red-50 transition-colors"
                  title="Logout"
                >
                  <FaSignOutAlt className="w-4 h-4" />
                </button>
              </div>
            )}
            
            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-black p-2 border-2 border-black active:bg-gray-100">
              <FaBars className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}