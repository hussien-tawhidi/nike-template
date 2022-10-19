import React from "react";
import Hero from "./Hero/Hero";
import Sales from "./sales/Sales";
import { heroapi,popularsales,toprateslaes,highlight,sneaker, story, footerAPI } from "../Data/data";
import FlexComponent from "./flexComponent/FlexComponent";
import Story from "./story/Story";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar"
import Card from "./card/Card";
const index = () => {
  return (
    <div>
      <Card/>
      <Navbar/>
      <Hero heroapi={heroapi} />
      <Sales endpoint={popularsales} ifExit/>
      <FlexComponent endpoint={highlight} ifExit/>
      <Sales endpoint={toprateslaes}/>
      <FlexComponent endpoint={sneaker}/>
      <Story story={story}/>
      <Footer footerAPI={footerAPI}/>
    </div>
  );
};

export default index;
