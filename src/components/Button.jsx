import React from 'react'

const Button = ({text, tracking}) => {
  return (
    <button
    type='button'
    className={`boxShadow px-6 py-4 rounded-[6px] uppercase text-white bg-main cursor-pointer 
    text-[14px] font-medium mt-[65px] w-fit ${tracking ? tracking : ''}`}
   
    >
        {text}
    </button>
  )
}

export default Button
