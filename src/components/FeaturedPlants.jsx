import { FaStar, FaLeaf, FaSeedling } from 'react-icons/fa';

export default function FeaturedPlants() {
  const featuredSections = [
    {
      title: "Most Viewed Plants",
      icon: <FaStar className="text-3xl" />,
      plants: [
        {
          commonName: "Aloe Vera",
          scientificName: "Aloe barbadensis",
          fact: "Can survive without water for up to 3 months"
        },
        {
          commonName: "Snake Plant",
          scientificName: "Sansevieria trifasciata",
          fact: "Produces oxygen at night, perfect for bedrooms"
        },
        {
          commonName: "Peace Lily",
          scientificName: "Spathiphyllum wallisii",
          fact: "NASA's top air-purifying plant"
        }
      ]
    },
    {
      title: "Plants of the Week",
      icon: <FaLeaf className="text-3xl" />,
      plants: [
        {
          commonName: "Monstera Deliciosa",
          scientificName: "Monstera deliciosa",
          fact: "Leaves develop holes as the plant matures"
        },
        {
          commonName: "Fiddle Leaf Fig",
          scientificName: "Ficus lyrata",
          fact: "Can grow up to 50 feet tall in its native habitat"
        },
        {
          commonName: "Rubber Plant",
          scientificName: "Ficus elastica",
          fact: "Originally used to make rubber before synthetic alternatives"
        }
      ]
    },
    {
      title: "Seasonal Highlights",
      icon: <FaSeedling className="text-3xl" />,
      plants: [
        {
          commonName: "Winter Jasmine",
          scientificName: "Jasminum nudiflorum",
          fact: "Blooms in winter when most plants are dormant"
        },
        {
          commonName: "Holly",
          scientificName: "Ilex aquifolium",
          fact: "Berries provide food for birds during winter months"
        },
        {
          commonName: "Poinsettia",
          scientificName: "Euphorbia pulcherrima",
          fact: "Red 'flowers' are actually modified leaves called bracts"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="text-sm text-black uppercase tracking-widest mb-4">
              Featured Collection
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Discover Amazing Plants
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-[#628141]"></div>
              <p className="text-lg text-black">
                Curated selections from our extensive database
              </p>
              <div className="h-px w-20 bg-[#628141]"></div>
            </div>
          </div>

          {/* Featured Sections */}
          <div className="space-y-16">
            {featuredSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-[#628141]">{section.icon}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    {section.title}
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {section.plants.map((plant, plantIndex) => (
                    <div 
                      key={plantIndex}
                      className="bg-white border-2 border-black hover:border-[#628141] transition-all duration-300 group cursor-pointer shadow-lg"
                    >
                      <div className="aspect-video bg-white border-b-2 border-black group-hover:border-[#628141] transition-colors">
                        <div className="w-full h-full bg-[#628141]/10 flex items-center justify-center">
                          <FaLeaf className="text-6xl text-[#628141]" />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-black group-hover:text-[#628141] transition-colors mb-2">
                          {plant.commonName}
                        </h4>
                        <p className="text-black italic text-sm mb-3">
                          {plant.scientificName}
                        </p>
                        <p className="text-black text-sm leading-relaxed">
                          {plant.fact}
                        </p>
                        
                        <button className="btn btn-outline btn-sm mt-4 border-black hover:border-[#628141] hover:bg-[#628141] hover:text-white">
                          Learn More
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="btn bg-[#628141] text-white btn-lg shadow-lg">
              View All Featured Plants
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}