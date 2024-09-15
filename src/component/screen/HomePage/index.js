import React from "react";
import {
  AboutSection,
  CheckoutButton,
  Header,
  MapSection,
  RatingSection,
  StepSection,
  TechInsight,
  Testimonials,
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
      {/* <RatingSection /> */}
      {/* <CardSection /> */}
      <CheckoutButton />
      {/* <StepSection /> */}
      {/* <AboutSection />
      <TechInsight />
      <Testimonials />
      <MapSection /> */}
    </>
  );
};

export default HomePage;
