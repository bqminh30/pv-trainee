import React from "react";
import Title from "./Title";
import { serviceExtraInformation } from "../utils/contants";
import CircleContent from "./CircleContent";



const ServiceGeneric = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="md:w-main flex flex-col items-center">
        <Title value={"love what you do, and you'll do it well"} />
        <div class="md:w-main justify-center content-center grid grid-cols-3 gap-8 mt-[64px] mb-[120px]">
         {
          serviceExtraInformation.map((el) => (
            <CircleContent 
            el={el}
            key={el?.id}
            />
          ))
         }
        </div>
      </div>
    </div>
  );
};

export default ServiceGeneric;
