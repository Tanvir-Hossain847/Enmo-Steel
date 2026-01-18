import { FaSeedling, FaGlobeAmericas, FaLeaf, FaChevronRight } from 'react-icons/fa';

export default function QuickDiscovery() {
  const discoveryCategories = [
    {
      icon: <FaSeedling />,
      title: "Biological Type",
      subtitle: "Classification by structure",
      items: ["Trees", "Flowers", "Herbs", "Succulents", "Ferns", "Grasses"]
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Geographic Habitat",
      subtitle: "Classification by region",
      items: ["Tropical", "Desert", "Aquatic", "Mountain", "Forest", "Coastal"]
    },
    {
      icon: <FaLeaf />,
      title: "Functional Use",
      subtitle: "Classification by benefit",
      items: ["Medicinal", "Edible", "Ornamental", "Indoor", "Aromatic", "Textile"]
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Blueprint Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        
        {/* Section Header - Scaled Down */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-8 bg-[#628141]"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#628141]">Database Filter</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight">
            Categorical <span className="italic font-light">Discovery</span>
          </h2>
        </div>

        {/* Discovery Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {discoveryCategories.map((category, index) => (
            <div key={index} 
                 className="group relative bg-white border-2 border-black transition-all duration-300 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(98,129,65,1)]">
              
              {/* Header Tab */}
              <div className="bg-black text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <span className="text-xl text-[#628141]">{category.icon}</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest">{category.title}</span>
                </div>
                <span className="text-[10px] opacity-50 font-mono">0{index + 1}</span>
              </div>

              <div className="p-8">
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-6 tracking-tighter">
                  {category.subtitle}
                </p>
                
                {/* Tag Cloud Layout */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <button 
                      key={itemIndex}
                      className="px-3 py-1.5 border border-black/10 text-[11px] font-bold uppercase tracking-tight bg-gray-50 hover:bg-[#628141] hover:text-white hover:border-[#628141] transition-all"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-black/5 flex justify-between items-center group/link cursor-pointer">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black">View All Species</span>
                  <FaChevronRight className="text-[10px] group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Refined Bottom CTA */}
        <div className="mt-20 border-t-2 border-black pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-md">
            <h4 className="font-bold text-lg mb-1 italic uppercase">Missing a specific specimen?</h4>
            <p className="text-xs text-gray-500 font-medium">Use our advanced identification engine to filter by scientific nomenclature, soil pH, or UV requirements.</p>
          </div>
          <button className="bg-black text-white px-8 py-4 font-black uppercase text-xs tracking-widest hover:bg-[#628141] transition-all shadow-[6px_6px_0px_0px_rgba(98,129,65,0.3)] hover:shadow-none">
            Advanced Search Protocol
          </button>
        </div>
      </div>
    </section>
  );
}