import React from "react";
import { FortPolio, Intro, Jumbotron, ServiceGeneric, ServiceIphone } from "../components";

const Home = () => {
  return (
    <div className="w-full flex flex-col scroll-smooth">
        <Jumbotron />
        <Intro/>
        <ServiceGeneric/>
        <ServiceIphone/>
        <FortPolio/>
        <div className="h-[1000px]"></div>
    </div>
  );
};

export default Home;
