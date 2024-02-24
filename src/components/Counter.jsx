import React from 'react'
import bg_main from "../assets/slide.png";

const Counter = () => {
  return (
    <div className="w-full relative flex justify-center mx-auto">
    <img
      className="h-[300px] w-full object-fill mx-auto"
      src={bg_main}
      alt="Background main"
    />
    </div>
  )
}

export default Counter