import React from "react";
import { Footer, FortPolio, Intro, Jumbotron, ServiceGeneric, ServiceIphone, Subscribe } from "../components";
import Counter from "../components/Counter";

const Home = () => {
  return (
    <div className=" flex flex-col scroll-smooth ">
        <Jumbotron />
        <Intro/>
        <ServiceGeneric/>
        <ServiceIphone/>
        <Counter />
        <FortPolio/>
        <Subscribe/>
        <Footer/>
    </div>
  );
};

export default Home;
