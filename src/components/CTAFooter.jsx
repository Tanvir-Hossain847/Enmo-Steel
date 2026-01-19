import Link from 'next/link';
import { FaSeedling, FaSearch, FaBook, FaArrowRight, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function CTAFooter() {
  return (
    <footer className="bg-white border-t-4 border-black pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Main Action Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tighter leading-[0.9] mb-8">
              Grow Your <br />
              <span className="text-[#628141] italic font-light">Perspective.</span>
            </h2>
            <p className="text-lg text-gray-600 font-medium max-w-md mb-10">
              Join a global network of botanists, researchers, and enthusiasts 
              documenting the world's flora.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-[#628141] transition-all flex items-center gap-3 group">
                Begin Exploration <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="border-2 border-black px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all">
                Database Search
              </button>
            </div>
          </div>

          {/* Newsletter Panel */}
          <div className="bg-gray-50 border-2 border-black p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-2">The Weekly Specimen</h3>
              <p className="text-sm text-gray-500 font-medium mb-8">Latest discoveries and care protocols, delivered Friday.</p>
              
              <form className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Registry Email Address" 
                  className="bg-white border-2 border-black p-4 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#628141]/20"
                />
                <button className="w-full bg-[#628141] text-white py-4 font-black uppercase text-xs tracking-[0.2em] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
                  Subscribe to Journal
                </button>
              </form>
              <p className="text-[10px] text-gray-400 mt-4 uppercase font-bold tracking-widest">Scientific Privacy Guaranteed</p>
            </div>
            <FaSeedling className="absolute -bottom-10 -right-10 text-[180px] text-black/[0.03] rotate-12" />
          </div>
        </div>

        {/* Simplified Link Tree */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t-2 border-black pt-16 mb-16">
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-6">Archive</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-500 uppercase tracking-tighter">
              <li className="hover:text-black cursor-pointer">Plant Index</li>
              <li className="hover:text-black cursor-pointer">Taxonomy</li>
              <li className="hover:text-black cursor-pointer">Global Map</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-6">Academy</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-500 uppercase tracking-tighter">
              <li className="hover:text-black cursor-pointer">Botany 101</li>
              <li className="hover:text-black cursor-pointer">Research Papers</li>
              <li className="hover:text-black cursor-pointer">Certifications</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-6">Support</h4>
            <ul className="space-y-3 text-sm font-bold text-gray-500 uppercase tracking-tighter">
              <li className="hover:text-black cursor-pointer">Methodology</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">Privacy</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
             <div className="flex gap-4 text-xl">
               <FaInstagram className="hover:text-[#628141] cursor-pointer" />
               <FaTwitter className="hover:text-[#628141] cursor-pointer" />
               <FaLinkedin className="hover:text-[#628141] cursor-pointer" />
             </div>
             <p className="text-[10px] font-black uppercase tracking-widest text-gray-300">© 2026 PlantPedia</p>
          </div>
        </div>

        {/* Final Branding Mark */}
        <div className="text-center opacity-10 pointer-events-none select-none">
          <h1 className="text-[12vw] font-black uppercase tracking-tighter leading-none">PlantPedia</h1>
        </div>

      </div>
    </footer>
  );
}