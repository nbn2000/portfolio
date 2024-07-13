import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { HelmetProvider } from "react-helmet-async";
import GoToTop from "./GoToTop";

export default function RootLayout() {
  return (
    <HelmetProvider>
      <GoToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </HelmetProvider>
  );
}
