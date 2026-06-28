import React from 'react'
import { FiPackage, FiUser, FiZap } from 'react-icons/fi';

const steps = [
        {
            id: "01",
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started.",
            icon: <FiUser size={28} />,
        },
        {
            id: "02",
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs.",
            icon: <FiPackage size={28} />,
        },
        {
            id: "03",
            title: "Start Creating",
            description: "Download and start using your premium tools immediately.",
            icon: <FiZap size={28} />,
        },
];

const Steps = () => {

  return (
    <section className='bg-[#F9FAFC] py-20 px-4'>
        <div className='max-w-5xl mx-auto'>
            
            {/* header */}
            <div className='text-center mb-12'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Get Started In 3 Steps</h2>
                <p className='text-gray-500 mt-3'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            {/* steps card */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className='w-80 h-80 relative bg-white rounded-2xl p-8 flex flex-col items-center text-center gap-5 border border-gray-100 shadow-sm justify-center'
                    >
                        <div
                            className='absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white'
                            style={{backgroundColor: "#7c3aed"}}
                        >
                            {step.id}
                        </div>

                        <div
                            className='w-16 h-16 rounded-full flex items-center justify-center'
                            style={{backgroundColor: "#ede9fe", color: "#7c3aed" }}
                        >
                            {step.icon}
                        </div>
                        
                        <h3 className='text-lg font-bold text-gray-900'>{step.title}</h3>
                        <p className='text-gray-500 text-sm leading-relaxed'>{step.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Steps