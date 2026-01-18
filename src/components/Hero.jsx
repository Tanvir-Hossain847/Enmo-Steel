import { FaLeaf, FaArrowRight, FaMicroscope, FaBookOpen, FaCompass } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden p-4">
      
      {/* 1. Technical Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)', 
             backgroundSize: '60px 60px' 
           }}>
      </div>
      
      {/* 2. Floating Specimen Labels */}
      <div className="absolute top-20 right-[10%] border-2 border-black p-2 rotate-6 opacity-20 hidden md:block">
        <p className="text-[10px] font-black uppercase tracking-tighter">Index Ref: FLORA_99</p>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Bold Branding & Core Messaging */}
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 bg-[#628141] text-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <FaMicroscope className="text-sm" />
              <span className="text-xs font-black uppercase tracking-widest">Open Access Database</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-black leading-[0.8] uppercase tracking-tighter">
              Plant<br />
              <span className="text-[#628141] italic">Pedia</span>
            </h1>

            <p className="text-xl md:text-2xl font-bold text-black max-w-xl leading-tight border-l-8 border-black pl-6">
              The world's most comprehensive open-source botanical archive. Built for researchers, gardeners, and nature enthusiasts.
            </p>

            {/* 3. PRIMARY CTA SECTION */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              {/* Main Action */}
              <button className="group relative bg-[#628141] text-white border-4 border-black p-4 flex items-center justify-center gap-4 transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0">
                <span className="text-xl font-black uppercase tracking-tighter">Explore Catalog</span>
                <FaArrowRight className="text-xl group-hover:translate-x-2 transition-transform" />
              </button>

              {/* Secondary Action */}
              <button className="group bg-white text-black border-4 border-black p-3 flex items-center justify-center gap-4 transition-all hover:bg-black hover:text-white">
                <FaBookOpen className="text-xl" />
                <span className="text-xl font-black uppercase tracking-tighter">Our Mission</span>
              </button>
            </div>

            {/* Quick Stats / Trust Bar */}
            <div className="flex gap-10 pt-8 border-t-2 border-black/10">
              <div>
                <p className="text-3xl font-black text-black">500+</p>
                <p className="text-[10px] font-bold uppercase text-gray-400">Species</p>
              </div>
              <div>
                <p className="text-3xl font-black text-black">100%</p>
                <p className="text-[10px] font-bold uppercase text-gray-400">Verified</p>
              </div>
              <div>
                <p className="text-3xl font-black text-black">24/7</p>
                <p className="text-[10px] font-bold uppercase text-gray-400">Open Access</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual CTA Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border-4 border-black p-8 bg-white shadow-[10px_10px_0px_0px_rgba(98,129,65,1)] group cursor-pointer hover:bg-[#628141]/5 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-black text-white">
                  <FaCompass className="text-2xl" />
                </div>
                <span className="text-[10px] font-black border-2 border-black px-2 py-1 uppercase">New Entries</span>
              </div>
              <h3 className="text-2xl font-black uppercase mb-2">Discovery Hub</h3>
              <p className="text-sm font-bold text-gray-600 mb-4">Browse recently documented species from the Amazon Basin and beyond.</p>
              <div className="flex items-center gap-2 text-[#628141] font-black uppercase text-xs group-hover:gap-4 transition-all">
                <span>Navigate</span> <FaArrowRight />
              </div>
            </div>

            <div className="border-4 border-black p-8 bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.1)] group cursor-pointer hover:border-[#628141] transition-all translate-x-4">
              <h3 className="text-xl font-black uppercase mb-2 flex items-center gap-2">
                <FaLeaf className="text-[#628141]" /> Contribute
              </h3>
              <p className="text-sm font-bold text-gray-600">Help us expand. Submit your botanical findings to our laboratory.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}