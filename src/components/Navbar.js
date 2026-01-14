import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-accent shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">🌿 PlantPedia</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <Link href="/plants" className="hover:text-secondary transition-colors">
              Browse Plants
            </Link>
            <Link href="/about" className="hover:text-secondary transition-colors">
              About
            </Link>
          </div>

          <div className="md:hidden">
            <button className="btn btn-ghost btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
