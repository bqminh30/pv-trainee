import React from 'react'
import { portExtraInformation } from '../utils/contants'
import ImageContent from './ImageContent'

const FortPolio = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="md:w-main flex flex-col items-center">
        <div class="md:w-main justify-center content-center grid grid-cols-3 gap-8 mt-[64px] mb-[120px]">
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
