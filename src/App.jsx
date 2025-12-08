import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Service from "./components/Service";
import OtherServices from "./components/OtherServices";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import VisitUs from "./components/VisitUs";
import Footer from "./components/Footer";
import AboutUs from "./components/pages/AboutUs";
import "./index.css";

const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HeroSection />
        <Service />
        <OtherServices />
        <Gallery />
        <Testimonial />
        <VisitUs />
      </MainLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <MainLayout>
        <AboutUs />
      </MainLayout>
    ),
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
