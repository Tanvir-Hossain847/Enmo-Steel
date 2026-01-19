import React from 'react'

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center relative">
      {/* Decorative Archive Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 w-full">
        {children}
      </div>

      {/* Auth-specific footer */}
      <div className="fixed bottom-0 w-full p-4 text-center font-mono text-[10px] uppercase text-gray-400">
        Secure Access Portal // PlantPedia Database
      </div>
    </div>
  )
}