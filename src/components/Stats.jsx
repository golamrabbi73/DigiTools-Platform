import React from 'react'

const Stats = () => {
  return (
    <section className="py-14" style={{ backgroundColor: "#7c3aed" }}>
        <div className='max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-around gap-8 text-center text-white'>

            {/* users */}
            <div>
                <h2 className='text-4xl font-bold'>50K+</h2>
                <p className='text-purple-200 mt-1 text-sm'>Active Users</p>
            </div>

            <div className='hidden md:block w-px h-12 bg-purple-400'></div>

            {/* tools */}
            <div>
                <h2 className='text-4xl font-bold'>50K+</h2>
                <p className='text-purple-200 mt-1 text-sm'>Active Users</p>
            </div>

            <div className='hidden md:block w-px h-12 bg-purple-400'></div>

            {/* users */}
            <div>
                <h2 className='text-4xl font-bold'>50K+</h2>
                <p className='text-purple-200 mt-1 text-sm'>Active Users</p>
            </div>
        </div>
    </section>
  )
}

export default Stats