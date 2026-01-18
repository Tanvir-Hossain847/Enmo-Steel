import { FaSeedling, FaSun, FaGlobeAmericas, FaLeaf, FaChevronRight, FaBookOpen, FaClock } from 'react-icons/fa';

export default function LearnSection() {
  const learningTopics = [
    {
      id: "BT-01",
      icon: <FaSeedling />,
      title: "Plant Anatomy Basics",
      description: "Understand the fundamental structures that make plants work - from roots to leaves, and everything in between.",
      topics: ["Root Systems", "Stem Functions", "Leaf Structure", "Flower Parts"],
      readTime: "5 min"
    },
    {
      id: "BT-02",
      icon: <FaSun />,
      title: "Photosynthesis Explained",
      description: "Discover how plants convert sunlight into energy and why this process is crucial for all life on Earth.",
      topics: ["Light Reactions", "Carbon Fixation", "Chlorophyll Role", "Energy Storage"],
      readTime: "7 min"
    },
    {
      id: "BT-03",
      icon: <FaGlobeAmericas />,
      title: "Plant Adaptations",
      description: "Explore the incredible ways plants have evolved to survive in diverse environments around the world.",
      topics: ["Desert Survival", "Aquatic Life", "Cold Climates", "Tropical Rainforests"],
      readTime: "6 min"
    },
    {
      id: "BT-04",
      icon: <FaLeaf />,
      title: "Plant Life Cycles",
      description: "Follow the journey from seed to mature plant, understanding reproduction and growth patterns.",
      topics: ["Germination", "Growth Phases", "Reproduction", "Seasonal Changes"],
      readTime: "4 min"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Structural Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1.2px, transparent 1.2px), linear-gradient(90deg, #000 1.2px, transparent 1.2px)', backgroundSize: '50px 50px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 border-l-8 border-black pl-8">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#628141] mb-2 block">
            Botanical Curriculum
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter mb-4">
            Learn & <span className="italic font-light">Understand</span>
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Master the science behind the greenery. Our modules cover everything from cellular biology to global ecology.
          </p>
        </div>

        {/* Learning Topics Grid */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {learningTopics.map((topic, index) => (
            <div key={index} className="group flex flex-col md:flex-row bg-white border-4 border-black transition-all hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              
              {/* Vertical Sidebar on Card */}
              <div className="bg-black text-white p-6 flex flex-row md:flex-col justify-between items-center md:w-20 border-b-4 md:border-b-0 md:border-r-4 border-black">
                <span className="text-2xl text-[#628141]">{topic.icon}</span>
                <span className="font-mono text-[10px] uppercase tracking-widest [writing-mode:vertical-lr] hidden md:block rotate-180">
                  Topic Reference {topic.id}
                </span>
                <span className="font-mono text-[10px] md:hidden">Ref: {topic.id}</span>
              </div>

              {/* Main Card Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black text-black uppercase leading-tight group-hover:text-[#628141] transition-colors">
                    {topic.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gray-400 font-bold text-[10px] uppercase">
                    <FaClock /> {topic.readTime}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 font-medium leading-relaxed">
                  {topic.description}
                </p>
                
                <div className="mt-auto">
                  <div className="text-[10px] font-black uppercase tracking-widest text-black mb-3 border-b border-black/10 pb-2">
                    Curriculum Overview:
                  </div>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 mb-8">
                    {topic.topics.map((subtopic, subIndex) => (
                      <div key={subIndex} className="flex items-center gap-2 text-xs font-bold text-gray-500">
                        <div className="w-1.5 h-1.5 bg-[#628141]"></div>
                        {subtopic}
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-white border-2 border-black font-black uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                    Access Module <FaChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        

      </div>
    </section>
  );
}