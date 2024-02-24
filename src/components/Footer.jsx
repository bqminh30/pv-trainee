import React from "react";
import { Title, GroupContent, Icon } from "./";
import { footerInformation, iconsFooter } from "../utils/contants";

const Footer = () => {
  return (
    <>
     <div className="w-full bg-[#f3f5f8] flex flex-col items-center">
  <div className="xl:w-main w-full">
    <div className="flex flex-col items-center">
      <Title value={"love what you do, and you'll do it well"} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 grid xl:grid-cols-3 gap-8 mt-8 xl:mt-16 mb-8 xl:mb-20">
        {footerInformation.map((el) => (
          <GroupContent el={el} key={el?.id} />
        ))}
      </div>
    </div>
    <div className="w-full flex justify-center gap-4 items-center my-8 xl:my-[110px]">
      {iconsFooter?.map((el) => (
        <Icon icon={el.icon} key={el.id} />
      ))}
    </div>
  </div>
</div>
<div className="w-full bg-[#242830] h-[120px] flex items-center justify-center">
  <div className="xl:w-main w-full flex flex-col sm:flex-row items-center md:justify-between justify-around md:mx-8">
    <span className="text-[#a1a9b0] text-sm mb-4 sm:mb-0">Terms & Conditions | Legas</span>
    <span className="text-[#a1a9b0] text-sm">Copyright by Example website</span>
  </div>
</div>

    </>
  );
};

export default Footer;
