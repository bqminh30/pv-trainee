import React from "react";

const CircleContent = ({ el }) => {
  const { title, sub, icon } = el;
  return (
    <div className="flex flex-col items-center">
      <div className="h-[145px] w-[145px] rounded-full bg-main flex justify-center items-center">
        {icon}
      </div>
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

export default CircleContent;
