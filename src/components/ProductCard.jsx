import React from 'react'
import { FiCheck } from 'react-icons/fi';

const tagColors = {
    popular: "bg-purple-100 text-purple-600",
    new: "bg-green-100 text-green-600",
    "best-seller": "bg-orange-100 text-orange-600",
};

const ProductCard = ({product, onAddToCart}) => {
    const {name, description, price, period, tag, tagType, features, icon} = product;

  return (
    <div className='border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300 bg-white'>

        <div className='flex items-center justify-between'>
            <span className='text-4xl'>{icon}</span>
            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${tagColors[tagType]}`}>{tag}</span>
        </div>

        <h3 className='text-lg font-bold text-gray-900'>{name}</h3>
        <p className='text-gray-500 text-sm leading-relaxed'>{description}</p>

        {/* features */}
        <ul className='space-y-2'>
            {features.map((feature, index) => (
                <li
                    key={index}
                    className='flex items-center gap-2 text-sm text-gray-600'
                >
                    <FiCheck className='text-green-600 shrink-0'/>
                    {feature}
                </li>
            ))}
        </ul>

        <div className='border-t border-gray-100 mt-auto'></div>

        <div className='flex items-center justify-between'>
            <div>
                <span className='text-2xl font-bold text-gray-900'>${price}</span>
                <span className='text-gray-400 text-sm ml-1'>{period}</span>
            </div>

            <button
                className='font-semibold text-white text-sm px-5 py-2 rounded-full transition-all hover:opacity-90'
                style={{background: "#7c3aed"}}
                onClick={() => onAddToCart(product)}
            >
                Buy Now
            </button>
        </div>
    </div>
  )
}

export default ProductCard