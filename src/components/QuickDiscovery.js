export default function QuickDiscovery() {
  const discoveryCategories = [
    {
      icon: "🌼",
      title: "By Type",
      items: ["Trees", "Flowers", "Herbs", "Succulents", "Ferns", "Grasses"]
    },
    {
      icon: "🌍",
      title: "By Habitat",
      items: ["Tropical", "Desert", "Aquatic", "Mountain", "Forest", "Coastal"]
    },
    {
      icon: "🌿",
      title: "By Use",
      items: ["Medicinal", "Edible", "Ornamental", "Indoor", "Aromatic", "Textile"]
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm text-black uppercase tracking-widest mb-4">
              Quick Discovery
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Find Plants Your Way
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-[#628141]"></div>
              <p className="text-lg text-black">
                Choose your path to discovery
              </p>
              <div className="h-px w-20 bg-[#628141]"></div>
            </div>
          </div>

          {/* Discovery Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {discoveryCategories.map((category, index) => (
              <div key={index} className="bg-white border-2 border-black hover:border-[#628141] transition-all duration-300 group shadow-lg">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-2xl font-bold text-black group-hover:text-[#628141] transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <button 
                        key={itemIndex}
                        className="btn btn-outline btn-sm w-full text-black border-black hover:border-[#628141] hover:bg-[#628141] hover:text-white transition-all"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-black mb-6">
              Can't find what you're looking for? Try our advanced search
            </p>
            <button className="btn bg-[#628141] text-white btn-lg hover:bg-[#628141]/90">
              Advanced Plant Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}