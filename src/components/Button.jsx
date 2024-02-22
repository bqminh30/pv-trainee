import React from 'react'

const Button = ({text}) => {
  return (
    <button
    type='button'
    className={`boxShadow px-5 py-3 rounded-[6px] uppercase text-white bg-main cursor-pointer text-[14px] font-medium mt-[65px] w-fit`}
   
    >
        {text}
    </button>
  )
}

export default Button
