import React from "react";
import Title from "./Title";
import { serviceExtraInformation } from "../utils/contants";
import CircleContent from "./CircleContent";



const ServiceGeneric = () => {
  return (
    <div className="w-full flex flex-col items-center">
  <div className="xl:w-main w-full flex flex-col items-center">
    <Title value={"love what you do, and you'll do it well"} />
    <div class="xl:w-main w-full lg:grid lg:grid-cols-2 grid xl:grid-cols-3 gap-8 mt-8 xl:mt-16 mb-8 xl:mb-20">
      {serviceExtraInformation.map((el) => (
        <CircleContent el={el} key={el?.id} />
      ))}
    </div>
  </div>
</div>

  );
};

export default ServiceGeneric;
