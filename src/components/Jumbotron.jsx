import React from "react";
import bg_main from "../assets/bg-image.png";
import icons from "../utils/icons";
import Button from "./Button";

const Jumbotron = () => {
  const { AiOutlineMenu } = icons;

  return (
    <div className="w-full flex justify-center">
  <img
    className="h-[800px] w-full object-cover"
    src={bg_main}
    alt="Background main"
  />
  <div className="xl:w-main w-full h-full absolute top-0">
    <div className="flex top-[80px] right-8 justify-end relative">
      <AiOutlineMenu
        color="black"
        className="cursor-pointer"
        size={24}
      />
    </div>

    <div className="flex mt-[254px] flex-col items-center justify-center">
      <span className="tracking-5 font-[400] text-[30px] uppercase text-[#353535]">
        halcyon<span className="text-[#a1a9b0]">days</span>
      </span>
      <span className="pt-[30px] tracking-4 text-[#c0c6ca] text-[20px] text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </span>

      <Button text={"Learn more"} tracking={"tracking-4"} />
    </div>
  </div>
</div>

  );
};

export default Jumbotron;
