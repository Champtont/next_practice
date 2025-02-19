//example of using a client side component "AddToCart" in a server component
//Also Tailwind example
import React from 'react'
import AddToCart from './AddToCart'

const ProductCard = () => {
  return (
    <div>
        <AddToCart />
    </div>
  )
}

export default ProductCard