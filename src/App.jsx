import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import Service from "./components/Service";
import OtherServices from "./components/OtherServices";
import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import VisitUs from "./components/VisitUs";
import Footer from "./components/Footer";
import AboutUs from "./components/pages/AboutUs"; // optional if you create it
import Dummy from "./components/dummy";
import "./index.css";

// Layout component to wrap common components like Navbar & Footer
const MainLayout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

// Define your routes
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
  {
    path: "/dummy",
    element: (
      <MainLayout>
        <Dummy />
      </MainLayout>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
