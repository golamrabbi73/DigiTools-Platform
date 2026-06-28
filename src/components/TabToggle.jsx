import React from 'react'

const TabToggle = ({activeTab, setActiveTab, cartCount}) => {
    const btnClass = (tab) =>
        `cursor-pointer px-8 py-3 rounded-full font-semibold transition-all ${
            activeTab === tab 
            ? "text-white"
            : " text-black hover: border-[#7c3aed] hover:text-[#7c3aed]"}`;

  return (
    <div className='flex justify-center gap-4 pt-4'>
        <div className='border border-gray-100 rounded-full w-64 h-14 flex items-center justify-center'>
            <button
                onClick={() => setActiveTab("products")}
                className={btnClass("products")}
                style={activeTab === "products" ? {background: "#7c3aed"} : {}}
            >
                Products
            </button>
            <button
                onClick={() =>setActiveTab("cart")}
                className={btnClass("cart")}
                style={activeTab === "cart" ? {background: "#7c3aed"} : {}}
            >
                Cart ({cartCount})
            </button>
        </div>
    </div>
  )
}

export default TabToggle