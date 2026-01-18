import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header Section */}
        <div className="mb-16 border-b-4 border-black pb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-black uppercase tracking-tighter">
            Get in <span className="text-[#628141]">Touch</span>
          </h1>
          <p className="text-xl text-black mt-4 max-w-2xl font-medium">
            Have a question about a specific species or want to contribute to our database? 
            Our botanical experts are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest flex items-center gap-3">
                <span className="w-8 h-1 bg-[#628141]"></span>
                Contact Details
              </h2>
              
              <div className="space-y-6">
                <ContactMethod 
                  icon={<FaEnvelope />} 
                  label="Email Us" 
                  value="hello@plantpedia.com" 
                />
                <ContactMethod 
                  icon={<FaPhone />} 
                  label="Call Us" 
                  value="+1 (555) 000-PLNT" 
                />
                <ContactMethod 
                  icon={<FaMapMarkerAlt />} 
                  label="Our Greenhouse" 
                  value="123 Botanical Way, Green District, CA" 
                />
              </div>
            </div>

            {/* Social Connect */}
            <div className="p-8 border-2 border-black bg-[#628141]/5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold uppercase mb-4 text-[#628141]">Follow our Growth</h3>
              <div className="flex gap-6">
                <a href="#" className="text-2xl hover:text-[#628141] transition-colors"><FaInstagram /></a>
                <a href="#" className="text-2xl hover:text-[#628141] transition-colors"><FaTwitter /></a>
                <a href="#" className="text-2xl hover:text-[#628141] transition-colors"><FaGithub /></a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="relative">
            {/* Decorative "Stamp" */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-dashed border-[#628141] rounded-full flex items-center justify-center rotate-12 bg-white z-10 hidden md:flex">
              <span className="text-[10px] font-bold text-[#628141] text-center uppercase">Botanically<br/>Verified</span>
            </div>

            <form className="border-2 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(98,129,65,1)] bg-white space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    className="p-3 border-2 border-black focus:border-[#628141] focus:outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    className="p-3 border-2 border-black focus:border-[#628141] focus:outline-none transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest">Subject</label>
                <select className="p-3 border-2 border-black focus:border-[#628141] focus:outline-none bg-white font-medium">
                  <option>General Inquiry</option>
                  <option>Plant Identification Help</option>
                  <option>Database Partnership</option>
                  <option>Reporting an Error</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-widest">Message</label>
                <textarea 
                  rows="5"
                  className="p-3 border-2 border-black focus:border-[#628141] focus:outline-none transition-colors"
                  placeholder="How can we help your garden grow?"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-black text-white font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#628141] transition-all group">
                Send Message
                <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

// Sub-component for info rows
function ContactMethod({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-12 h-12 border-2 border-black flex items-center justify-center text-xl bg-[#628141] text-white group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
        {icon}
      </div>
      <div>
        <p className="text-[10px] font-bold uppercase text-gray-500 tracking-tighter">{label}</p>
        <p className="text-lg font-bold text-black">{value}</p>
      </div>
    </div>
  );
}