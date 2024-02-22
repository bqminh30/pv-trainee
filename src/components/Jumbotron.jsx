import React from "react";
import bg_main from "../assets/bg_image.jpg";
import icons from "../utils/icons";
import Button from "./Button";

const Jumbotron = () => {
  const { AiOutlineMenu } = icons;

  return (
    <div className="w-full relative flex justify-center">
  <img
    className="h-[800px] w-full object-fill object-center"
    src={bg_main}
    alt="Background main"
  />
  <div className="md:w-main flex flex-col absolute top-0">
    <div className="flex mt-[80px] right-[18px] absolute">
      <AiOutlineMenu color="black" className="cursor-pointer" size={24} />
    </div>

    <div className="flex mt-[254px] flex-col items-center justify-center">
      <span className="tracking-5 font-[400] text-[30px] uppercase text-[#353535]">
        halcyon<span className="text-[#a1a9b0]">days</span>
      </span>
      <span className="pt-[30px] tracking-4 text-[#a1a9b0] text-[20px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </span>

      <Button text={"Learn more"}/>
    </div>
  </div>
</div>

  );
};

export default Jumbotron;
