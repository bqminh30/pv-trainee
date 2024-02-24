import React from 'react'
import { portExtraInformation } from '../utils/contants'
import ImageContent from './ImageContent'

const FortPolio = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="xl:w-main flex flex-col items-center">
        <div class="xl:w-main w-full lg:grid lg:grid-cols-2 xl:grid-cols-3 grid gap-8 xl:mt-16 xl:mb-20 mt-[64px] mb-[120px]">
         {
          portExtraInformation.map((el) => (
            <ImageContent 
            el={el}
            key={el?.id}
            />
          ))
         }
        </div>
      </div>
    </div>
  )
}

export default FortPolio
