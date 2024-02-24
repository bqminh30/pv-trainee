import React, { useState } from "react";
import icons from "../utils/icons";

const ImageContent = ({ el }) => {
  const { title, sub, image } = el;
  const { CiSearch } = icons;
  return (
    <div className="flex flex-col items-center">
      <div class="group relative w-[360px] h-[200px]">
        <img
          class="w-[360px] h-[200px]"
          alt="Louvre"
          src="https://tecdn.b-cdn.net/img/new/fluid/city/113.webp"
        />
        <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center cursor-pointer items-center bg-main opacity-0 group-hover:h-full group-hover:opacity-80 duration-500">
          <CiSearch size={28} color="white" />
          <h1 class="text-lg text-white uppercase pt-2">View more</h1>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <span className="pt-[40px] font-[500] uppercase text-[20px]">
          {title}
        </span>
        <div className="h-[2px] w-[20px] my-6 bg-main"></div>
        <span className=" text-[16px] text-center inline-block px-4">
          {sub}
        </span>
      </div>
    </div>
  );
};

export default ImageContent;
