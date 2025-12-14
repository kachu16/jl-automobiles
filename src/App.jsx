import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Service from "./components/Service";
import OtherServices from "./components/OtherServices";
import Testimonial from "./components/Testimonial";
import VisitUs from "./components/VisitUs";
import Footer from "./components/Footer";
import AboutUs from "./components/pages/AboutUs";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import "./index.css";
import ForkliftSlider from "./components/ForkliftSlider";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

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
        <Products />
        <Testimonial />
        <ForkliftSlider/>
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
    {
    path: "/terms-and-conditions",
    element: (
      <MainLayout>
        <TermsAndConditions />
      </MainLayout>
    ),
  },
  {
    path:"/products/:id",
    element : <ProductDetails/>
  }
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
