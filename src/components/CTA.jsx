import React from 'react'

const CTA = () => {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#7c3aed" }}>
        <div className='max-w-3xl mx-auto text-center flex flex-col items-center gap-6'>

            {/* heading */}
            <h2 className='text-3xl md:text-4xl font-bold text-white'>
                Ready To Transform Your Workflow?
            </h2>

            {/* description */}
            <p className='text-purple-200 max-w-lg'>
                Join thousands of professionals who are already using Digitools to work smarter.
                Start your free trial today.
            </p>

            {/* buttons */}
            <div className='flex gap-4 flex-wrap justify-center'>
                <button
                    className='px-6 py-3 rounded-full font-semibold bg-white text-[#7c3aed] hover:opacity-90 transition-all'
                >
                    Explore Products
                </button>

                <button
                    className='px-6 py-3 rounded-full font-semibold text-white border border-white hover:bg-white hover:text-[#7c3aed] transition-all'
                >
                    View Pricing
                </button>
            </div>

            {/* note */}
            <p className='text-purple-300 text-sm'>
                14-day free trial • No credit card required • Cancel anytime
            </p>
        </div>
    </section>
  )
}

export default CTA