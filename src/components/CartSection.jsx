import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';

const CartSection = ({cart, onRemove, onCheckout}) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className='max-w-6xl mx-auto mt-3 px-4 py-16 border border-gray-100'>
        <h2 className='text-2xl font-bold text-gray-900 mb-8'>
            Yout Cart
        </h2>

        {cart.length === 0 ? (
            <div className='text-center py-20 text-gray-400'>
                <div className='text-6xl mb-4'>
                    <FiShoppingCart/>
                </div>
                <p className='text-lg font-medium'>Your cart is empty</p>
                <p className='text-sm mt-1'>Add some products to get started!</p>
            </div>
        ) : (
            <div className='flex flex-col gap-3'>
                {cart.map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center justify-between border border-gray-200 rounded-2xl p-4 bg-white shadow-sm'
                    >
                        <div className='flex items-center gap-4'>
                            <span className='text-3xl'>{item.icon}</span>
                            <div>
                                <h4 className='font-semibold text-gray-900'>{item.name}</h4>
                                <p className='text-sm text-gray-400'>{item.period}</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <span className='font-bold text-gray-900'>${item.price}</span>
                            <button
                                onClick={() => onRemove(index)}
                                className='text-sm font-medium text-red-400 hover:text-red-600 border border-red-200 px-3 py-1 rounded-full hover:bg-red-50'
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                <div className='flex items-center justify-between border-t border-gray-200 pt-4 mt-2'>
                    <span className='font-semibold text-gray-700'>Total</span>
                    <span className='text-2xl font-bold text-gray-900'>${total}</span>
                </div>

                <button
                    onClick={onCheckout}
                    className='w-full font-semibold text-white py-3 rounded-full hover:opacity-90 mt-2'
                    style={{background: "#7c3aed"}}
                >
                    Proceed to Checkout
                </button>
            </div>
        )}
    </section>
  )
}

export default CartSection