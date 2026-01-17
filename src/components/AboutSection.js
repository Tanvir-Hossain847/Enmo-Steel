export default function AboutSection() {
  const missionPoints = [
    {
      icon: "🎓",
      title: "Educational Excellence",
      description: "Providing accurate, scientifically-backed information for students, researchers, and plant enthusiasts worldwide."
    },
    {
      icon: "🌍",
      title: "Global Accessibility",
      description: "Making botanical knowledge freely available to everyone, regardless of location or background."
    },
    {
      icon: "🔬",
      title: "Scientific Accuracy",
      description: "All content is reviewed by certified botanists and updated with the latest research findings."
    },
    {
      icon: "🌱",
      title: "Conservation Awareness",
      description: "Promoting plant conservation and environmental stewardship through education and awareness."
    }
  ];

  const dataSources = [
    "Royal Botanic Gardens, Kew",
    "Missouri Botanical Garden",
    "International Plant Names Index",
    "World Flora Online",
    "Encyclopedia of Life",
    "Global Biodiversity Information Facility"
  ];

  const targetAudience = [
    {
      icon: "👨‍🎓",
      title: "Students & Researchers",
      description: "From high school biology to PhD research, find reliable botanical information for academic work."
    },
    {
      icon: "🌿",
      title: "Gardening Enthusiasts",
      description: "Home gardeners seeking to understand and better care for their plants."
    },
    {
      icon: "🌳",
      title: "Nature Lovers",
      description: "Curious minds who want to learn about the incredible diversity of plant life."
    },
    {
      icon: "👩‍🏫",
      title: "Educators",
      description: "Teachers and professors looking for comprehensive botanical resources for their curriculum."
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-4">
              About PlantPedia
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Our Mission & Purpose
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-secondary"></div>
              <p className="text-lg text-gray-600">
                Building the world's most comprehensive plant encyclopedia
              </p>
              <div className="h-px w-20 bg-secondary"></div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-accent/20 border-2 border-black p-8 mb-16 text-center">
            <h3 className="text-2xl font-bold text-black mb-6">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
              PlantPedia exists to democratize botanical knowledge and foster a deeper understanding 
              of the plant kingdom. We believe that by making plant science accessible to everyone, 
              we can inspire better environmental stewardship and cultivate a more plant-aware world.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {missionPoints.map((point, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-3">{point.icon}</div>
                  <h4 className="text-lg font-bold text-black mb-2">
                    {point.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sources */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Trusted Data Sources
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our comprehensive database is built upon the most authoritative botanical 
                institutions and research organizations worldwide. We maintain partnerships 
                with leading botanical gardens and universities to ensure accuracy and completeness.
              </p>
              <div className="space-y-3">
                {dataSources.map((source, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{source}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-black mb-6">
                Quality Assurance
              </h3>
              <div className="space-y-6">
                <div className="bg-white border-2 border-black p-6">
                  <h4 className="font-bold text-black mb-2">Expert Review Process</h4>
                  <p className="text-sm text-gray-700">
                    Every plant entry is reviewed by certified botanists before publication.
                  </p>
                </div>
                <div className="bg-white border-2 border-black p-6">
                  <h4 className="font-bold text-black mb-2">Regular Updates</h4>
                  <p className="text-sm text-gray-700">
                    Our database is continuously updated with the latest taxonomic changes and discoveries.
                  </p>
                </div>
                <div className="bg-white border-2 border-black p-6">
                  <h4 className="font-bold text-black mb-2">Community Contributions</h4>
                  <p className="text-sm text-gray-700">
                    Verified experts can contribute to expand our knowledge base.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-black text-center mb-12">
              Who We Serve
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {targetAudience.map((audience, index) => (
                <div 
                  key={index}
                  className="text-center bg-white border-2 border-black hover:border-secondary transition-all duration-300 group p-6"
                >
                  <div className="text-4xl mb-4">{audience.icon}</div>
                  <h4 className="text-lg font-bold text-black group-hover:text-secondary transition-colors mb-3">
                    {audience.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-secondary/10 border-2 border-black p-8 mb-16">
            <h3 className="text-2xl font-bold text-black text-center mb-8">
              PlantPedia by the Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">500K+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Plant Species</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">2M+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Monthly Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">150+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">Expert Contributors</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-black mb-6">
              Join Our Growing Community
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Whether you're just starting your botanical journey or you're a seasoned expert, 
              PlantPedia has something for everyone. Join thousands of plant enthusiasts 
              exploring the fascinating world of botany.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-secondary btn-lg text-white hover:bg-secondary/90">
                Start Exploring
              </button>
              <button className="btn btn-outline btn-lg border-2 border-black hover:bg-black hover:text-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}