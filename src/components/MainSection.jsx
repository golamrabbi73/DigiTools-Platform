import React, { useState } from 'react'
import CartSection from './CartSection'
import ProductSection from './ProductSection'
import TabToggle from './TabToggle'

const MainSection = ({cart, onAddToCart, onRemove, onCheckout}) => {
    const [activeTab, setActiveTab] = useState("products");
  return (
    <div>

        {/* header */}
        <div className='text-center pt-30 pb-4 px-4'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>Premium <span style={{ color: "#7c3aed" }}>Digital Tools</span></h2>
            <p className='text-gray-500 mt-3 max-w-xl mx-auto'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>

            <TabToggle
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                cartCount={cart.length}
            />
        </div>

        {activeTab === "products" ? (
            <ProductSection onAddToCart={onAddToCart}/>
        ) : (
            <CartSection cart={cart} onRemove={onRemove} onCheckout={onCheckout} />
        )}
        
        
    </div>
  )
}

export default MainSection