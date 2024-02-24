import React from "react";

const GroupContent = ({ el }) => {
  const { title, sub, icon } = el;
  return (
    <div className="bg-white py-4">
      <div className="flex flex-col items-center">
        {icon}
        <span className="font-[500] uppercase text-[18px] text-main pt-2">
          {title}
        </span>
        <span className=" text-[14px] pt-3 text-center inline-block">
          {sub}
        </span>
      </div>
    </div>
  );
};

export default GroupContent;
