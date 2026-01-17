import { FaTint, FaSun, FaSeedling, FaBug, FaCut, FaLeaf } from 'react-icons/fa';

export default function PlantCareGuides() {
  const careGuides = [
    {
      icon: <FaTint className="text-4xl mx-auto" />,
      title: "Watering Wisdom",
      description: "Master the art of proper plant hydration with our comprehensive watering guide.",
      tips: [
        "Check soil moisture before watering",
        "Water deeply but less frequently",
        "Use room temperature water",
        "Consider plant-specific needs"
      ],
      difficulty: "Beginner"
    },
    {
      icon: <FaSun className="text-4xl mx-auto" />,
      title: "Light Requirements",
      description: "Understand how to provide the perfect lighting conditions for healthy plant growth.",
      tips: [
        "Identify your plant's light needs",
        "Rotate plants for even growth",
        "Use grow lights when needed",
        "Watch for light stress signs"
      ],
      difficulty: "Beginner"
    },
    {
      icon: <FaSeedling className="text-4xl mx-auto" />,
      title: "Soil & Nutrition",
      description: "Learn about soil types, drainage, and feeding schedules for optimal plant health.",
      tips: [
        "Choose the right soil mix",
        "Ensure proper drainage",
        "Feed during growing season",
        "Test soil pH regularly"
      ],
      difficulty: "Intermediate"
    },
    {
      icon: <FaBug className="text-4xl mx-auto" />,
      title: "Disease Prevention",
      description: "Identify common plant diseases early and learn effective treatment strategies.",
      tips: [
        "Inspect plants regularly",
        "Maintain good air circulation",
        "Quarantine new plants",
        "Use organic treatments first"
      ],
      difficulty: "Advanced"
    },
    {
      icon: <FaCut className="text-4xl mx-auto" />,
      title: "Pruning & Maintenance",
      description: "Keep your plants healthy and beautiful with proper pruning and maintenance techniques.",
      tips: [
        "Use clean, sharp tools",
        "Prune at the right time",
        "Remove dead or diseased parts",
        "Shape for better growth"
      ],
      difficulty: "Intermediate"
    },
    {
      icon: <FaLeaf className="text-4xl mx-auto" />,
      title: "Propagation Basics",
      description: "Multiply your plant collection through various propagation methods and techniques.",
      tips: [
        "Choose healthy parent plants",
        "Learn cutting techniques",
        "Provide proper rooting conditions",
        "Be patient with the process"
      ],
      difficulty: "Intermediate"
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-white text-black border-black';
      case 'Intermediate': return 'bg-white text-black border-black';
      case 'Advanced': return 'bg-white text-black border-black';
      default: return 'bg-white text-black border-black';
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm text-black uppercase tracking-widest mb-4">
              Practical Guidance
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Plant Care Guides
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-[#628141]"></div>
              <p className="text-lg text-black">
                Everything you need to keep your plants thriving
              </p>
              <div className="h-px w-20 bg-[#628141]"></div>
            </div>
            <p className="text-black max-w-2xl mx-auto">
              Whether you're a beginner or experienced gardener, our step-by-step guides 
              will help you provide the best care for your green companions.
            </p>
          </div>

          {/* Care Guides Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {careGuides.map((guide, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-black hover:border-[#628141] transition-all duration-300 group cursor-pointer shadow-lg h-full"
              >
                <div className="p-6 h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="mb-4 text-[#628141]">{guide.icon}</div>
                    <h3 className="text-xl font-bold text-black group-hover:text-[#628141] transition-colors mb-2">
                      {guide.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 text-xs font-semibold border ${getDifficultyColor(guide.difficulty)}`}>
                      {guide.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-black text-sm mb-6 leading-relaxed flex-grow">
                    {guide.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-sm font-semibold text-black mb-3">
                      Key Tips:
                    </div>
                    <ul className="space-y-2">
                      {guide.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-2 text-sm text-black">
                          <div className="w-1.5 h-1.5 bg-[#628141] rounded-full mt-2 flex-shrink-0"></div>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="btn btn-outline btn-sm w-full border-black hover:border-[#628141] hover:bg-[#628141] hover:text-white transition-all mt-auto">
                    Read Full Guide
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Care Calendar CTA */}
          <div className="bg-white border-2 border-black p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">
                Never Miss Plant Care Again
              </h3>
              <p className="text-black mb-6">
                Get personalized care reminders and seasonal tips delivered to your inbox. 
                Our plant care calendar helps you stay on top of watering, feeding, and maintenance schedules.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn bg-[#628141] text-white btn-lg hover:bg-[#628141]/90">
                  Get Care Calendar
                </button>
                <button className="btn btn-outline btn-lg border-2 border-black hover:bg-black hover:text-white">
                  Download Care Checklist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}