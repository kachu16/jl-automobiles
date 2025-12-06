import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import Navbar from "./components/Navbar";
import OtherServices from "./components/OtherServices";
import Service from "./components/Service";
import VisitUs from "./components/Visitus";
import "./index.css";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Service />
      <OtherServices/>
      <VisitUs/>
      <Footer/>
    </>
  );
}
