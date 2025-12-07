import { useState } from "react";
import Dummy from "./components/dummy";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import OtherServices from "./components/OtherServices";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import VisitUs from "./components/VisitUs";
import "./index.css";

export default function App() {

  return (
    
    <div >
     

  <Navbar />
      <HeroSection />
      <Service />
      <OtherServices />
      <Gallery/>
      <Testimonial/>
      <VisitUs />
      <Footer />
    </div>
  );
}
