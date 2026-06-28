import React from 'react'
import ProductCard from './ProductCard'
import products from "../data/products.json"

const ProductSection = ({onAddToCart}) => {
  return (
    <section className='max-w-6xl mx-auto px-4 md:px-16 pt-4 pb-16'>

        {/* card section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          { products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
    </section>
  )
}

export default ProductSection