import React from 'react'
import { FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#1a1f2e" }} className="text-gray-400 px-4 pt-16 pb-8">
        <div className='max-w-6xl mx-auto'>

            {/* top part */}
            <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 pb-10 border-b border-gray-700'>

                {/* logo and desc */}
                <div className='md: col-span-2 flex flex-col gap-4'>
                    <h2 className='text-2xl font-bold text-white'>DigiTools</h2>
                    <p className='text-gray-400 text-sm leading-relaxed max-w-xs'>
                        Premium digital tools for creators, professionals, and businesses. Work smarter
                        with our suite of powerful tools.
                    </p>
                </div>

                {/* product links */}
                <div className='flex flex-col gap-3'>
                    <h4 className='text-white font-semibold mb-1'>Product</h4>
                    {["Features", "Pricing", "Templates", "Integrations"].map((item) => (
                        <a
                            href="#"
                            key={item}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* company links */}
                <div className='flex flex-col gap-3'>
                    <h4 className='text-white font-semibold mb-1'>Company</h4>
                    {["About", "Blog", "Careers", "Press"].map((item) => (
                        <a
                            href="#"
                            key={item}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* resources links */}
                <div className='flex flex-col gap-3'>
                    <h4 className='text-white font-semibold mb-1'>Resources</h4>
                    {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
                        <a
                            href="#"
                            key={item}
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* social links */}
                <div className='flex flex-col md:flex-row md:justify-between gap-4'>
                        <div>
                            <h4 className='text-white font-semibold mb-3'>
                                Social Links
                            </h4>
                            <div className='flex gap-3'>
                                <a
                                    href="#"
                                    className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                                    style={{ backgroundColor: "#2d3348" }}
                                >
                                    <FiYoutube className='text-white' size={16} />
                                </a>

                                <a
                                    href="#"
                                    className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                                    style={{ backgroundColor: "#2d3348" }}
                                >
                                    <FiFacebook className='text-white' size={16} />
                                </a>

                                <a
                                    href="#"
                                    className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-all"
                                    style={{ backgroundColor: "#2d3348" }}
                                >
                                    <FiTwitter className='text-white' size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
            </div>

            {/* bottom bar */}
                    <div className='pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm'>
                        <p>© 2026 Digitools. All rights reserved.</p>
                        <div className='flex gap-6'>
                            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                                <a
                                    key={item} href="#" className="hover:text-white transition-colors"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
        </div>
    </footer>
  )
}

export default Footer