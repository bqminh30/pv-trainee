import React from "react";
import bg_main from "../assets/iphone.png";
import CircleContent from "./CircleContent";
import Title from "./Title";
import { serviceExtraInformation } from "../utils/contants";

const ServiceIphone = () => {
  return (
    <div className="flex-col items-center">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:h-[800px] md:h-[600px] h-[400px] bg-[#f3f5f8] w-full relative">
          <img
            className="h-full w-full object-contain lg:left-[250px] absolute"
            src={bg_main}
            alt="Background main"
          />
        </div>
        <div className="lg:w-1/2 w-full z-30 bg-white">
          <div className="flex flex-col items-center">
            <Title value={"response design specialist"} />
            <div class="grid grid-cols-1 lg:grid-cols-6 gap-4 mt-8 lg:mt-[64px] mb-8 lg:mb-[120px]">
              <div class="lg:col-start-2 lg:col-span-4">
                <span className="text-[#a7adb2] text-center inline-block font-medium">
                  It is a long established fact that by the readable content of
                  a page when looking at its layout. The point of using Lorem
                  Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here',
                  making it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIphone;
