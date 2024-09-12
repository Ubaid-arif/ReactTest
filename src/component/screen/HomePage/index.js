import React from "react";
import {
  AboutSection,
  Header,
  RatingSection,
  StepSection,
  TechInsight,
  VideoSection,
} from "../../common";
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
      <StepSection />
      <AboutSection />
      <TechInsight />
    </>
  );
};

export default HomePage;
