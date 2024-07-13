import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import GoToTop from "./GoToTop";

export default function RootLayout() {
  return (
    <>
      <GoToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
