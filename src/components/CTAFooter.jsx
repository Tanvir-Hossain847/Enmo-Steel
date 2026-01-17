import { FaSeedling, FaSearch, FaBook, FaLeaf } from 'react-icons/fa';

export default function CTAFooter() {
  const ctaOptions = [
    {
      icon: <FaSeedling className="text-5xl mx-auto" />,
      title: "Start Your Plant Journey",
      description: "Begin exploring our vast collection of plant species and discover the wonders of botany.",
      buttonText: "Explore Plants",
      buttonStyle: "bg-[#628141] text-white"
    },
    {
      icon: <FaSearch className="text-5xl mx-auto" />,
      title: "Search Our Database",
      description: "Use our advanced search tools to find specific plants or browse by characteristics.",
      buttonText: "Search Plants",
      buttonStyle: "btn-outline"
    },
    {
      icon: <FaBook className="text-5xl mx-auto" />,
      title: "Learn Something New",
      description: "Dive into our educational resources and expand your botanical knowledge with our help",
      buttonText: "Start Learning",
      buttonStyle: "btn-outline"
    }
  ];

  return (
    <section className="py-20 bg-[#628141]/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-24 h-24 border border-[#628141]/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-16 h-16 border border-[#628141]/30 rounded-full animate-bounce"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main CTA Header */}
          <div className="text-center mb-16">
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-4">
              Ready to Explore?
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Your Plant Adventure
              <br />
              <span className="text-[#628141]">Starts Here</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-[#628141]"></div>
              <p className="text-lg text-gray-600">
                Join thousands discovering the plant kingdom
              </p>
              <div className="h-px w-20 bg-[#628141]"></div>
            </div>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              From curious beginners to expert botanists, PlantPedia offers the tools, 
              knowledge, and community you need to explore the fascinating world of plants.
            </p>
          </div>

          {/* CTA Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {ctaOptions.map((option, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-black hover:border-[#628141] transition-all duration-300 group text-center shadow-lg"
              >
                <div className="p-8">
                  <div className="text-[#628141] mb-6">{option.icon}</div>
                  <h3 className="text-xl font-bold text-black group-hover:text-[#628141] transition-colors mb-4">
                    {option.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <button className={`btn ${option.buttonStyle} btn-lg w-full ${
                    option.buttonStyle === 'btn-[#628141]' 
                      ? 'border-2 border-black text-black hover:text-white hover:bg-black/90' 
                      : 'border-2 border-black hover:bg-black hover:text-white'
                  }`}>
                    {option.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white border-2 border-black p-8 mb-12 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Stay Updated with Plant Discoveries
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Get weekly plant spotlights, care tips, and the latest botanical discoveries 
              delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="join w-full">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="input input-bordered input-lg join-item flex-1 border-2 border-black focus:border-[#628141] focus:outline-none" 
                />
                <button className="btn btn-[#628141] btn-lg join-item px-6 hover:text-white border-2 border-black hover:bg-[#628141]/90">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-6">
              Trusted by plant enthusiasts worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-semibold text-gray-500">Universities</div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="text-sm font-semibold text-gray-500">Botanical Gardens</div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="text-sm font-semibold text-gray-500">Research Institutions</div>
              <div className="w-px h-6 bg-gray-300"></div>
              <div className="text-sm font-semibold text-gray-500">Garden Centers</div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-[#628141]/20 border-2 border-[#628141] px-8 py-4 mb-6">
              <FaLeaf className="text-2xl text-[#628141]" />
              <div className="text-left">
                <div className="font-bold text-black">Ready to become a plant expert?</div>
                <div className="text-sm text-gray-600">Start with just one plant today</div>
              </div>
            </div>
            <div>
              <button className="btn btn-[#628141] btn-lg hover:text-white hover:bg-[#628141]/90 shadow-lg mr-4">
                Begin Your Journey
              </button>
              <button className="btn btn-outline btn-lg border-2 border-black hover:bg-black hover:text-white shadow-lg">
                Browse Plants
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}