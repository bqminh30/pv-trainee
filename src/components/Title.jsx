import React from 'react'
import icons from "../utils/icons";

const Title = ({value}) => {
    const { AiOutlineCaretDown,CgBorderStyleDotted } = icons;
  return (
    <div className='mt-[108px] flex flex-col items-center'>
        <span className='font-medium uppercase text-[25px] tracking-3 text-[#4e4f4f]'>{value}</span>
        <div className='flex justify-center mt-[25px]'>
            <span className='tracking-4'>.......................................................</span>
            <AiOutlineCaretDown size={30} className='mx-[30px] mt-1'/>
            <span className='tracking-4'>.......................................................</span>
        </div>  
    </div>
  )
}

export default Title