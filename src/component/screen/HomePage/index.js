import React from "react";
import { Header, RatingSection, StepSection, VideoSection } from "../../common";
import Slider from "../Slider";
import CardSection from "../CardSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <VideoSection />
      <RatingSection />
      <CardSection />
      {/* <StepSection /> */}
    </>
  );
};

export default HomePage;
