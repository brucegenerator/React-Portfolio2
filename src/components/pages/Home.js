import React from "react";
import "../../App.css";
import Cards from "../Cards/Cards";
import HeroSection from "../HeroSection/HeroSection";

function Home(props) {
  return (
    <>
      <HeroSection />
      <Cards id={props.id} />
    </>
  );
}

export default Home;
