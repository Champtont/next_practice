'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button className='btn btn-primary size-full rounded-md p-2 my-5 text-xl border-r-5 border-0 transition duration-700 ease-in-out hover:bg-lime-700 hover:text-black' onClick={()=> console.log("I've been clicked!")}>Add to Cart</button>
    </div>
  )
}

export default AddToCart