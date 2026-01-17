export default function SearchByCharacteristics() {
  const searchFilters = [
    {
      category: "Leaf Shape",
      icon: "🍃",
      options: ["Heart-shaped", "Lance-shaped", "Round", "Lobed", "Needle-like", "Compound"]
    },
    {
      category: "Flower Color",
      icon: "🌸",
      options: ["Red", "Pink", "White", "Yellow", "Purple", "Blue", "Orange"]
    },
    {
      category: "Growth Speed",
      icon: "📈",
      options: ["Very Slow", "Slow", "Moderate", "Fast", "Very Fast"]
    },
    {
      category: "Climate Zone",
      icon: "🌡️",
      options: ["Tropical", "Subtropical", "Temperate", "Cold", "Arid", "Mediterranean"]
    },
    {
      category: "Plant Size",
      icon: "📏",
      options: ["Miniature", "Small", "Medium", "Large", "Giant"]
    },
    {
      category: "Safety",
      icon: "⚠️",
      options: ["Pet Safe", "Child Safe", "Toxic to Pets", "Toxic to Humans", "Edible"]
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, black 10px, black 11px)',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm text-gray-500 uppercase tracking-widest mb-4">
              Advanced Search
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Search by Characteristics
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-secondary"></div>
              <p className="text-lg text-gray-600">
                Find plants like a botanist
              </p>
              <div className="h-px w-20 bg-secondary"></div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Use our advanced filtering system to discover plants based on specific 
              characteristics. Perfect for researchers, students, and curious plant enthusiasts.
            </p>
          </div>

          {/* Search Interface */}
          <div className="bg-accent/20 border-2 border-black p-8 mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {searchFilters.map((filter, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{filter.icon}</span>
                    <h3 className="text-lg font-bold text-black">
                      {filter.category}
                    </h3>
                  </div>
                  
                  <div className="space-y-2">
                    {filter.options.map((option, optionIndex) => (
                      <label 
                        key={optionIndex}
                        className="flex items-center gap-3 cursor-pointer hover:bg-white/50 p-2 rounded transition-colors"
                      >
                        <input 
                          type="checkbox" 
                          className="checkbox checkbox-sm border-2 border-black [--chkbg:theme(colors.secondary)] [--chkfg:white]"
                        />
                        <span className="text-sm text-gray-700">
                          {option}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t-2 border-black">
              <button className="btn btn-secondary btn-lg text-white hover:bg-secondary/90">
                Search Plants
              </button>
              <button className="btn btn-outline btn-lg border-2 border-black hover:bg-black hover:text-white">
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Search Examples */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white border-2 border-black hover:border-secondary transition-all group">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-lg font-bold text-black group-hover:text-secondary transition-colors mb-2">
                Example Search
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                "Pet-safe, small, fast-growing plants with heart-shaped leaves"
              </p>
              <button className="btn btn-outline btn-sm border-gray-300 hover:border-secondary hover:bg-secondary hover:text-white">
                Try This Search
              </button>
            </div>
            
            <div className="text-center p-6 bg-white border-2 border-black hover:border-secondary transition-all group">
              <div className="text-3xl mb-4">🌺</div>
              <h3 className="text-lg font-bold text-black group-hover:text-secondary transition-colors mb-2">
                Popular Combination
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                "Purple flowers, temperate climate, medium size, moderate growth"
              </p>
              <button className="btn btn-outline btn-sm border-gray-300 hover:border-secondary hover:bg-secondary hover:text-white">
                Try This Search
              </button>
            </div>
            
            <div className="text-center p-6 bg-white border-2 border-black hover:border-secondary transition-all group">
              <div className="text-3xl mb-4">🏠</div>
              <h3 className="text-lg font-bold text-black group-hover:text-secondary transition-colors mb-2">
                Indoor Focus
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                "Child-safe, slow-growing, small plants for indoor spaces"
              </p>
              <button className="btn btn-outline btn-sm border-gray-300 hover:border-secondary hover:bg-secondary hover:text-white">
                Try This Search
              </button>
            </div>
          </div>

          {/* Advanced Features */}
          <div className="bg-white border-2 border-black p-8 text-center">
            <h3 className="text-2xl font-bold text-black mb-4">
              Need Even More Precision?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Access our professional botanical database with over 50 searchable characteristics, 
              including detailed morphological features, genetic information, and ecological data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-secondary btn-lg text-white hover:bg-secondary/90">
                Professional Search
              </button>
              <button className="btn btn-outline btn-lg border-2 border-black hover:bg-black hover:text-white">
                API Access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}