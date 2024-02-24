import React from 'react'
import icons from "../utils/icons";

const Title = ({value}) => {
    const { AiOutlineCaretDown,CgBorderStyleDotted } = icons;
  return (
    <div className='mt-[108px] flex flex-col items-center'>
        <span className='font-medium uppercase md:text-2xl px-2 text-center tracking-3 text-[#4e4f4f]'>{value}</span>
        <div className='flex justify-center mt-[25px]'>
            <span className='tracking-5 text-[#a7adb2] md:block hidden'>.............................</span>
            <AiOutlineCaretDown size={26} className='mx-[30px] mt-1 md:block hidden'/>
            <span className='tracking-5 text-[#a7adb2] md:block hidden'>.............................</span>
        </div>  
    </div>
  )
}

export default Title