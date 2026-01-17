export default function InteractiveSection() {
  const interactiveFeatures = [
    {
      icon: "🌿",
      title: "Did You Know?",
      content: "The largest living organism on Earth is a fungus in Oregon that spans over 2,400 acres!",
      action: "Get Daily Facts",
      bgColor: "bg-green-50"
    },
    {
      icon: "🌼",
      title: "Plant of the Day",
      content: "Today's featured plant: Dragon's Blood Tree - bleeds crimson resin when cut!",
      action: "View Today's Plant",
      bgColor: "bg-blue-50"
    },
    {
      icon: "🎲",
      title: "Random Discovery",
      content: "Feeling adventurous? Let us surprise you with a fascinating plant from our database!",
      action: "Discover Random Plant",
      bgColor: "bg-purple-50"
    },
    {
      icon: "📸",
      title: "Plant Identifier",
      content: "Upload a photo and our AI will help identify the plant species for you.",
      action: "Identify Plant",
      bgColor: "bg-yellow-50"
    }
  ];

  const plantFacts = [
    "Some bamboo species can grow up to 3 feet in a single day",
    "The Venus flytrap can count - it needs two trigger touches to close",
    "Bananas are berries, but strawberries aren't",
    "A single oak tree can produce 10,000 acorns in a year",
    "The smell of freshly cut grass is actually a plant distress signal"
  ];

  return (
    <section className="py-20 bg-accent/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-secondary/20 rounded-full animate-spin-slow"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border border-secondary/30 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-secondary rounded-full animate-ping"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-4">
              Interactive Experience
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Fun & Discovery
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-secondary"></div>
              <p className="text-lg text-gray-600">
                Make learning about plants engaging and memorable
              </p>
              <div className="h-px w-20 bg-secondary"></div>
            </div>
          </div>

          {/* Interactive Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {interactiveFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`${feature.bgColor} border-2 border-black hover:border-secondary transition-all duration-300 group cursor-pointer shadow-lg`}
              >
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black group-hover:text-secondary transition-colors mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {feature.content}
                      </p>
                      <button className="btn btn-secondary text-white hover:bg-secondary/90 transition-all">
                        {feature.action}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Facts Carousel */}
          <div className="bg-white border-2 border-black p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black mb-4">
                Amazing Plant Facts
              </h3>
              <p className="text-gray-600">
                Discover fascinating facts that will change how you see the plant world
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plantFacts.slice(0, 3).map((fact, index) => (
                <div 
                  key={index}
                  className="bg-accent/20 p-6 border border-gray-200 hover:border-secondary transition-all group"
                >
                  <div className="text-secondary text-2xl mb-3">💡</div>
                  <p className="text-gray-700 text-sm leading-relaxed group-hover:text-black transition-colors">
                    {fact}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <button className="btn btn-outline border-2 border-black hover:bg-black hover:text-white">
                View More Facts
              </button>
            </div>
          </div>

          {/* Plant Quiz Teaser */}
          <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 border-2 border-black p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold text-black mb-4">
                Test Your Plant Knowledge
              </h3>
              <p className="text-gray-700 mb-6">
                Challenge yourself with our interactive plant quizzes. From beginner basics 
                to expert-level botany, see how much you really know about the plant kingdom!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn btn-secondary btn-lg text-white hover:bg-secondary/90">
                  Take Plant Quiz
                </button>
                <button className="btn btn-outline btn-lg border-2 border-black hover:bg-black hover:text-white">
                  View Leaderboard
                </button>
              </div>
            </div>
          </div>

          {/* Coming Soon Features */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-black mb-6">
              Coming Soon
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-white border border-gray-300 text-gray-600 text-sm rounded-full">
                🌱 Plant Growth Simulator
              </span>
              <span className="px-4 py-2 bg-white border border-gray-300 text-gray-600 text-sm rounded-full">
                🎮 Virtual Garden Game
              </span>
              <span className="px-4 py-2 bg-white border border-gray-300 text-gray-600 text-sm rounded-full">
                📱 AR Plant Viewer
              </span>
              <span className="px-4 py-2 bg-white border border-gray-300 text-gray-600 text-sm rounded-full">
                🤖 Plant Care Assistant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}