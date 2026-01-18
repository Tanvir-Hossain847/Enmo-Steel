import { FaGraduationCap, FaGlobeAmericas, FaMicroscope, FaSeedling, FaUserGraduate, FaLeaf, FaTree, FaUser, FaCheckDouble, FaLink } from 'react-icons/fa';

export default function AboutSection() {
  const missionPoints = [
    {
      icon: <FaGraduationCap />,
      title: "Educational Excellence",
      description: "Scientifically-backed data for students and researchers."
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Global Accessibility",
      description: "Making botanical knowledge free for every continent."
    },
    {
      icon: <FaMicroscope />,
      title: "Scientific Accuracy",
      description: "Reviewed by certified botanists and updated daily."
    },
    {
      icon: <FaSeedling />,
      title: "Conservation Awareness",
      description: "Promoting stewardship through accessible education."
    }
  ];

  return (
    // Added overflow-hidden to the section to prevent any horizontal scroll leaks
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Safer Decorative Element: No skew, fixed right alignment */}
      <div className="absolute top-0 right-0 w-24 h-full bg-gray-50 border-l border-black/5 hidden xl:block pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-12 bg-black"></span>
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#628141]">Institutional Profile</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter leading-none">
            Our Mission & <br />
            <span className="italic font-light text-[#628141]">Botanical Purpose</span>
          </h2>
        </div>

        {/* Vision Statement Box */}
        <div className="grid lg:grid-cols-12 gap-0 border-4 border-black mb-24 shadow-[12px_12px_0px_0px_rgba(98,129,65,1)] md:shadow-[20px_20px_0px_0px_rgba(98,129,65,1)]">
          <div className="lg:col-span-8 p-8 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-black">
            <h3 className="text-sm font-black uppercase tracking-widest mb-6 bg-black text-white inline-block px-3 py-1">Manifesto</h3>
            <p className="text-2xl md:text-3xl font-medium text-black leading-tight italic">
              "We democratize botanical knowledge to inspire a more plant-aware world and better environmental stewardship."
            </p>
          </div>
          <div className="lg:col-span-4 p-8 bg-gray-50 flex flex-col justify-center">
            <div className="space-y-6">
              {missionPoints.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-[#628141] text-xl shrink-0 mt-1">{point.icon}</div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-tighter text-black">{point.title}</h4>
                    <p className="text-[11px] text-gray-500 font-bold uppercase">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Sources & Quality */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-black text-black uppercase mb-4">The Global Database</h3>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                Our infrastructure is built on the <span className="text-black font-bold">International Plant Names Index</span>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Kew Gardens", "Missouri Botanical", "World Flora Online", "GBIF"].map((source, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-[11px] uppercase text-gray-500 font-bold bg-gray-100 p-2 border border-black/5">
                    <FaLink className="text-[#628141]" /> {source}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "Expert Review", desc: "Verified by PhD Botanists before entry.", icon: <FaCheckDouble /> },
              { title: "Real-time Sync", desc: "Syncing daily with global taxonomy records.", icon: <FaMicroscope /> }
            ].map((card, i) => (
              <div key={i} className="group p-6 border-2 border-black hover:bg-black hover:text-white transition-all flex justify-between items-center">
                <div>
                  <h4 className="font-black uppercase text-lg">{card.title}</h4>
                  <p className="text-sm font-medium opacity-70">{card.desc}</p>
                </div>
                <div className="text-3xl opacity-20 group-hover:opacity-100 group-hover:text-[#628141] transition-all">
                  {card.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="border-y-4 border-black py-12 mb-32 overflow-x-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 min-w-[600px] lg:min-w-0">
            {[
              { label: "Plant Species", val: "500K+" },
              { label: "Active Users", val: "2.4M" },
              { label: "Global Nodes", val: "150+" },
              { label: "Expert Staff", val: "85+" }
            ].map((stat, i) => (
              <div key={i} className="px-4">
                <div className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-1">{stat.val}</div>
                <div className="text-[10px] md:text-xs font-bold text-[#628141] uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-100 py-16 px-4 border-2 border-black relative mb-12">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black px-6 py-2 font-black uppercase text-xs tracking-[0.3em] whitespace-nowrap">
            Institutional Access
          </div>
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-8">Join the Botanical Network</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#628141] text-white px-10 py-5 font-black uppercase text-sm tracking-widest hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all">
              Start Research
            </button>
            <button className="bg-white border-2 border-black text-black px-10 py-5 font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}