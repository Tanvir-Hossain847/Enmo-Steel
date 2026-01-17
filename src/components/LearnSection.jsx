import { FaSeedling, FaSun, FaGlobeAmericas, FaLeaf } from 'react-icons/fa';

export default function LearnSection() {
  const learningTopics = [
    {
      icon: <FaSeedling className="text-4xl" />,
      title: "Plant Anatomy Basics",
      description: "Understand the fundamental structures that make plants work - from roots to leaves, and everything in between.",
      topics: ["Root Systems", "Stem Functions", "Leaf Structure", "Flower Parts"],
      readTime: "5 min read"
    },
    {
      icon: <FaSun className="text-4xl" />,
      title: "Photosynthesis Explained",
      description: "Discover how plants convert sunlight into energy and why this process is crucial for all life on Earth.",
      topics: ["Light Reactions", "Carbon Fixation", "Chlorophyll Role", "Energy Storage"],
      readTime: "7 min read"
    },
    {
      icon: <FaGlobeAmericas className="text-4xl" />,
      title: "Plant Adaptations",
      description: "Explore the incredible ways plants have evolved to survive in diverse environments around the world.",
      topics: ["Desert Survival", "Aquatic Life", "Cold Climates", "Tropical Rainforests"],
      readTime: "6 min read"
    },
    {
      icon: <FaLeaf className="text-4xl" />,
      title: "Plant Life Cycles",
      description: "Follow the journey from seed to mature plant, understanding reproduction and growth patterns.",
      topics: ["Germination", "Growth Phases", "Reproduction", "Seasonal Changes"],
      readTime: "4 min read"
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 49%, black 49%, black 51%, transparent 51%)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm text-black uppercase tracking-widest mb-4">
              Educational Hub
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Learn & Understand
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-[#628141]"></div>
              <p className="text-lg text-black">
                Deepen your knowledge of the plant kingdom
              </p>
              <div className="h-px w-20 bg-[#628141]"></div>
            </div>
            <p className="text-black max-w-2xl mx-auto">
              From basic botany to advanced plant science, our educational resources 
              help you understand the fascinating world of plants.
            </p>
          </div>

          {/* Learning Topics Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {learningTopics.map((topic, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-black hover:border-[#628141] transition-all duration-300 group cursor-pointer shadow-lg"
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-[#628141]">{topic.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black group-hover:text-[#628141] transition-colors mb-2">
                        {topic.title}
                      </h3>
                      <div className="text-sm text-black mb-4">
                        {topic.readTime}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-black mb-6 leading-relaxed">
                    {topic.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-black mb-3">
                      What you'll learn:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {topic.topics.map((subtopic, subIndex) => (
                        <span 
                          key={subIndex}
                          className="px-3 py-1 bg-white text-black text-sm border border-black"
                        >
                          {subtopic}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="btn btn-outline w-full border-black hover:border-[#628141] hover:bg-[#628141] hover:text-white transition-all">
                    Start Learning
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Learning Resources */}
          <div className="bg-white border-2 border-black p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Want More In-Depth Learning?
            </h3>
            <p className="text-black mb-6 max-w-2xl mx-auto">
              Access our complete botanical course library with detailed guides, 
              interactive diagrams, and expert insights from leading botanists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn bg-[#628141] text-white btn-lg hover:bg-[#628141]/90">
                Browse All Courses
              </button>
              <button className="btn btn-outline btn-lg border-2 border-black hover:bg-black hover:text-white">
                Download Study Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}