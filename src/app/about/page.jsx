import { FaLeaf, FaUsers, FaGlobe, FaSeedling } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* 1. Simplified Hero Section */}
      <section className="py-20 border-b-2 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, black 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <span className="text-sm font-bold uppercase tracking-widest text-[#628141] mb-4 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 tracking-tight">
            Rooted in <span className="text-[#628141]">Knowledge.</span>
          </h1>
          <p className="text-xl text-black max-w-2xl mx-auto leading-relaxed">
            PlantPedia was born from a simple idea: to create a digital sanctuary where 
            botanical science meets accessible education for enthusiasts worldwide.
          </p>
        </div>
      </section>

      {/* 2. Values Grid - Consistent with your Stats styling */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<FaLeaf />} 
              title="Accuracy First" 
              description="Every species in our database is cross-referenced with botanical records to ensure scientific integrity." 
            />
            <ValueCard 
              icon={<FaGlobe />} 
              title="Global Scope" 
              description="From the Amazon rainforest to your backyard garden, we aim to catalog the world's diverse flora." 
            />
            <ValueCard 
              icon={<FaSeedling />} 
              title="Conservation" 
              description="We highlight endangered species to raise awareness about the vital importance of plant biodiversity." 
            />
          </div>
        </div>
      </section>

      {/* 3. Content & Image Section */}
      <section className="py-20 border-t-2 border-black bg-[#628141]/5">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-black">Bridging the gap between Nature and Technology</h2>
              <p className="text-lg text-black leading-relaxed">
                We believe that understanding plants is the first step toward protecting our planet. 
                Our platform uses modern web technology to make complex botanical data easy to 
                browse, search, and understand.
              </p>
              <div className="pt-4">
                <button className="btn bg-[#628141] text-white border-2 border-black hover:bg-black transition-all rounded-none px-8">
                  View Our Database
                </button>
              </div>
            </div>
            
            {/* Styled Image Placeholder to match your "PlantGrid" border style */}
            <div className="lg:w-1/2 w-full aspect-video bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(98,129,65,1)] flex items-center justify-center relative">
               <FaUsers className="text-8xl text-[#628141]/20" />
               <img src="https://images.unsplash.com/photo-1470058869958-2a77ade41c02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
               <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 font-bold italic">
                 EST. 2024
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Newsletter/Join CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center border-2 border-black p-12 shadow-lg relative bg-white">
          <h2 className="text-3xl font-bold mb-4">Join our Botanical Community</h2>
          <p className="mb-8">Get weekly updates on new species discoveries and gardening tips.</p>
          <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="input input-bordered border-2 border-black rounded-none flex-1 focus:outline-none focus:border-[#628141]"
            />
            <button className="btn bg-black text-white rounded-none border-2 border-black hover:bg-[#628141] hover:border-[#628141]">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

// Sub-component for clean code
function ValueCard({ icon, title, description }) {
  return (
    <div className="p-8 border-2 border-black hover:border-[#628141] transition-colors group bg-white shadow-md">
      <div className="text-3xl text-[#628141] mb-4 group-hover:scale-110 transition-transform inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
}