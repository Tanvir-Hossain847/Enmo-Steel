'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaUserPlus, FaArrowRight, FaArrowLeft, FaIdCard, FaLock, FaMicroscope } from 'react-icons/fa6';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    specialization: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="w-full max-w-xl">
      {/* Container with Neo-Brutalist Shadow */}
      <div className="bg-white border-[3px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12">
        
        {/* Header with Progress Indicator */}
        <div className="flex justify-between items-start mb-10">
          <div>
            <h1 className="text-4xl font-black text-black uppercase tracking-tighter">Enrollment</h1>
            <p className="text-[10px] font-bold text-[#628141] uppercase tracking-widest">Researcher Registration</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-black font-mono">STEP 0{step}/02</span>
            <div className="flex gap-1 mt-1">
              <div className={`h-1.5 w-8 border border-black ${step >= 1 ? 'bg-[#628141]' : 'bg-gray-100'}`}></div>
              <div className={`h-1.5 w-8 border border-black ${step >= 2 ? 'bg-[#628141]' : 'bg-gray-100'}`}></div>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          {step === 1 ? (
            /* --- PHASE 01: IDENTITY --- */
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Given Name</label>
                  <input 
                    type="text" 
                    placeholder="Jane"
                    className="w-full border-2 border-black p-3 text-sm font-bold focus:bg-[#628141]/5 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Surname</label>
                  <input 
                    type="text" 
                    placeholder="Linné"
                    className="w-full border-2 border-black p-3 text-sm font-bold focus:bg-[#628141]/5 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Primary Specialization</label>
                <select className="w-full border-2 border-black p-3 text-sm font-bold bg-white outline-none appearance-none cursor-pointer">
                  <option>Taxonomy & Classification</option>
                  <option>Plant Physiology</option>
                  <option>Ecology & Conservation</option>
                  <option>Ethnobotany</option>
                </select>
              </div>

              <button 
                onClick={nextStep}
                className="w-full bg-black text-white p-4 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-[#628141] transition-all"
              >
                Continue to Security <FaArrowRight />
              </button>
            </div>
          ) : (
            /* --- PHASE 02: CREDENTIALS --- */
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Registry Email</label>
                <input 
                  type="email" 
                  placeholder="j.linne@archive.org"
                  className="w-full border-2 border-black p-3 text-sm font-bold focus:bg-[#628141]/5 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-gray-400">Secret Access Code</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full border-2 border-black p-3 text-sm font-bold focus:bg-[#628141]/5 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <button 
                  onClick={prevStep}
                  className="border-2 border-black p-4 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-gray-100 transition-all"
                >
                  <FaArrowLeft /> Back
                </button>
                <button 
                  className="bg-[#628141] text-white p-4 font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 border-2 border-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  Complete Enrollment
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Alternative Actions */}
        <div className="mt-10 pt-8 border-t-2 border-black border-dashed flex flex-col items-center gap-4">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Already have an ID? <Link href="/auth/login" className="text-black underline decoration-2 underline-offset-4 hover:text-[#628141]">Login here</Link>
          </p>
        </div>
      </div>

      {/* Security Disclaimer */}
      <div className="mt-6 flex items-center gap-4 px-2 opacity-50">
        <FaMicroscope className="text-gray-400" />
        <p className="text-[9px] font-mono leading-tight uppercase">
          By enrolling, you agree to the botanical data collection protocols and ethical research guidelines established by the Archive.
        </p>
      </div>
    </div>
  );
}