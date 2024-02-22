import React from "react";
import Title from "./Title";

const Intro = () => {
  return (
    <div className="w-full bg-[#f3f5f8] flex flex-col items-center">
        <div className="md:w-main flex flex-col items-center h-[500px]">
        <Title 
        value={"A CREATIVE PORTFOLIO TEMPLATE"}
        />
      <div class="grid grid-cols-6 gap-4 mt-[64px] mb-[120px]">
        <div class="col-start-2 col-span-4">
            <span className="text-[#a7adb2] text-center inline-block font-medium">
            It is a long established fact that a <span className="text-black">reader will be distracted</span> by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
            </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Intro;
