import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="bg-white border-b-2 border-black">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Logo className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-black tracking-tight">PlantPedia</h1>
          </div>
          
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-black font-medium hover:text-[#628141] transition-colors">Home</Link>
            <Link href="/plants" className="text-black font-medium hover:text-[#628141] transition-colors">Plants</Link>
            <a href="#about" className="text-black font-medium hover:text-[#628141] transition-colors">About</a>
            <a href="#contact" className="text-black font-medium hover:text-[#628141] transition-colors">Contact</a>
          </div>

          <button className="md:hidden text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
