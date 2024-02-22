import React, { useState } from "react";

const ImageContent = ({ el }) => {
  const { title, sub, image } = el;
  const [isShowOption, setIsShowOption] = useState(false);
  return (
    <div className="flex flex-col items-center relative">
      <img
        src={image}
        className={`
        h-[200px] w-[350px] object-contain cursor-pointer
        ${isShowOption ? 'bg-opacity-50' : 'bg-slate-200'} 
        `}
        onMouseEnter={(e) => {
          setIsShowOption(true);
          e.preventDefault();
        }}
        onMouseLeave={(e) => {
          setIsShowOption(false);
          e.preventDefault();
        }}
      />
      {isShowOption && (
        <div className="absolute top-0 left-[28px] bg-opacity-50 bg-slate-200  animate-slide-top">
          123123123adf
        </div>
      )}
      <div className="flex flex-col items-center">
        <span className="pt-[40px] font-[500] uppercase text-[20px]">
          {title}
        </span>
        <div className="h-[2px] w-[20px] my-6 bg-main"></div>
        <span className=" text-[16px] text-center inline-block">{sub}</span>
      </div>
    </div>
  );
};

export default ImageContent;
