import { FaTint, FaSun, FaSeedling, FaBug, FaCut, FaLeaf, FaChevronRight, FaClipboardCheck } from 'react-icons/fa';

export default function PlantCareGuides() {
  const careGuides = [
    {
      icon: <FaTint />,
      title: "Watering Wisdom",
      description: "Master the art of proper plant hydration with our comprehensive watering guide.",
      tips: ["Check soil moisture", "Water deeply/infrequently", "Room temperature only", "Species-specific needs"],
      difficulty: "Beginner"
    },
    {
      icon: <FaSun />,
      title: "Light Optimization",
      description: "Understand how to provide the perfect lighting conditions for healthy plant growth.",
      tips: ["Identify light levels", "Rotate for even growth", "Use grow lights", "Watch for light stress"],
      difficulty: "Beginner"
    },
    {
      icon: <FaSeedling />,
      title: "Soil & Nutrition",
      description: "Learn about soil types, drainage, and feeding schedules for optimal plant health.",
      tips: ["Choose the right mix", "Ensure proper drainage", "Feed during season", "Test pH regularly"],
      difficulty: "Intermediate"
    },
    {
      icon: <FaBug />,
      title: "Disease Prevention",
      description: "Identify common plant diseases early and learn effective treatment strategies.",
      tips: ["Regular inspections", "Maintain circulation", "Quarantine new plants", "Organic treatments"],
      difficulty: "Advanced"
    },
    {
      icon: <FaCut />,
      title: "Pruning Methods",
      description: "Keep your plants healthy and beautiful with proper pruning techniques.",
      tips: ["Use sharp tools", "Prune at right time", "Remove dead growth", "Shape for health"],
      difficulty: "Intermediate"
    },
    {
      icon: <FaLeaf />,
      title: "Propagation",
      description: "Multiply your plant collection through various propagation methods.",
      tips: ["Healthy parent choice", "Cutting techniques", "Rooting conditions", "Patience is key"],
      difficulty: "Intermediate"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Section Header - Styled for Clarity */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">Protocol 04</span>
              <div className="h-px w-12 bg-black"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter leading-none mb-4">
              Essential Care <span className="text-[#628141] italic">Guides</span>
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed">
              Step-by-step maintenance procedures designed to keep your specimens thriving in any environment.
            </p>
          </div>
          <div className="bg-gray-100 p-4 border-l-4 border-[#628141] hidden lg:block">
            <p className="text-[10px] font-mono uppercase text-gray-500">Live Database Update</p>
            <p className="text-xs font-bold text-black">Total Guides: 154 Verified</p>
          </div>
        </div>

        {/* Care Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {careGuides.map((guide, index) => (
            <div 
              key={index}
              className="group relative flex flex-col h-full border-b-4 border-black pb-8 hover:border-[#628141] transition-all"
            >
              {/* Difficulty Stamp */}
              <div className="flex justify-between items-center mb-6">
                <div className="text-2xl text-[#628141] group-hover:scale-110 transition-transform">
                  {guide.icon}
                </div>
                <span className="px-2 py-0.5 border-2 border-black text-[10px] font-black uppercase tracking-tighter bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  {guide.difficulty}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-black uppercase mb-3 tracking-tight">
                {guide.title}
              </h3>
              
              <p className="text-sm text-gray-500 font-medium mb-6 leading-relaxed">
                {guide.description}
              </p>
              
              {/* Tips Checklist */}
              <div className="bg-gray-50 p-5 border border-black/5 mb-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Daily Checklist:</p>
                <ul className="space-y-3">
                  {guide.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-center gap-3 text-xs font-bold text-black uppercase tracking-tight">
                      <div className="w-4 h-4 border border-black flex items-center justify-center bg-white group-hover:bg-[#628141] transition-colors">
                        <div className="w-1.5 h-1.5 bg-black rounded-full opacity-20 group-hover:opacity-100"></div>
                      </div>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="mt-auto group/btn flex items-center justify-between text-xs font-black uppercase tracking-widest text-black hover:text-[#628141] transition-colors">
                Open Maintenance Log
                <FaChevronRight className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Care Calendar CTA - Boxed Content */}
        <div className="mt-24 bg-black p-10 md:p-16 relative overflow-hidden">
          {/* Decorative Icon */}
          <FaClipboardCheck className="absolute -right-10 -bottom-10 text-[200px] text-white/5 rotate-12" />
          
          <div className="relative z-10 grid md:grid-cols-2 items-center gap-12">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
                Automated Care <br /><span className="text-[#628141]">Reminders</span>
              </h3>
              <p className="text-white/60 font-medium max-w-sm">
                Get personalized care reminders and seasonal maintenance schedules delivered to your device.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#628141] text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                Sync My Calendar
              </button>
              <button className="bg-transparent border border-white/20 text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
                Care Checklist PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}