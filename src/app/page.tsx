import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Content from "./Content";
import ImageContent from "./ImageContent";
import ImageContentReverse from "./ImageContentReverse";
import Testimonial from "./Testimonial";
import Signup from "./Signup";
import Footer from "./Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Content />
      <ImageContent />
      <ImageContentReverse />
      <Testimonial />
      <Signup />
      <Footer />
    </>
  );
};

export default Page;
