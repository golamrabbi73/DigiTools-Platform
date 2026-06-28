import React from 'react'
import { FiPlay } from 'react-icons/fi'
import bannerImg from '../assets/banner.png'

const Banner = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 md:px-16 py-16 flex flex-col md:flex-row items-center gap-10'>

        {/* left part */}
        <div className='flex-1 space-y-6'>

            {/* badge */}
            <div className='inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-sm font-medium px-4 py-1.5 rounded-full'>
                <span className='w-2 h-2 rounded-full bg-purple-500 inline-block'></span>
                New: AI-Powered Tools Available
            </div>

            {/* heading */}
            <h1 className='text-4xl md:text-5xl font-bold text-gray-900 leading-tight'>
                Supercharge Your <br />
                Digital Workflow
            </h1>

            {/* description */}
            <p className='text-gray-500 text-base max-w-md'>
                Access premium AI tools, design assets, templates, and productivity software — all in one place. Start creating faster today.
            </p>
            <p className='text-gray-500 text-sm font-medium cursor-pointer hover:text-[#7c3aed] transition-colors'>
                Explore Products
            </p>

            {/* buttons */}
            <div className='flex gap-4 flex-wrap'>
                <button
                    className="font-semibold text-white px-6 py-3 rounded-full transition-all hover:opacity-90 cursor-pointer"
                    style={{ backgroundColor: "#7c3aed" }}
                >
                    Explore Products
                </button>

                <button
                    className='flex items-center gap-2 font-semibold text-gray-700 px-6 py-3 rounded-full border border-gray-300 hover:border-[#7c3aed] hover:text-[#7c3aed] transition-all cursor-pointer'
                >
                    <FiPlay size={24} />
                    Watch Demo
                </button>
            </div>
        </div>

        {/* right part */}
        <div className='flex-1 flex justify-center'>
            <img
                src={bannerImg}
                alt="banner image"
                className='w-full max-w-md rounded-2xl object-cover'
            />
        </div>
    </section>
  )
}

export default Banner