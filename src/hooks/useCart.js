import toast from 'daisyui/components/toast';
import React, { useState } from 'react'

const useCart = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart((prev) => [...prev, product]);
        toast.success(`${product.name} added to cart!`);
    };

    const handleRemove = (index) => {
        const removed = cart[index];
        setCart((prev) => prev.filter((_, i) => i !== index));
        toast.error(`${removed.name} removed from cart!`);
    };

    const handleCheckout = () => {
        setCart([]);
        toast.success("Checkout successful! Cart cleared.");
    };
    
  return {cart, handleAddToCart, handleRemove, handleCheckout};
};

export default useCart;