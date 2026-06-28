import React from 'react'
import ProductCard from './ProductCard'
import products from "../data/products.json"

const ProductSection = () => {
  return (
    <section className='max-w-6xl mx-auto px-4 md:px-16 py-16'>

        {/* header */}
        <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Premium <span style={{ color: "#7c3aed" }}>Digital Tools</span></h2>
            <p className='text-gray-500 mt-3 max-w-xl mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
        </div>

        {/* card section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          { products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
    </section>
  )
}

export default ProductSection