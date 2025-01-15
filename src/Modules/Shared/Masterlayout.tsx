import { Outlet } from "react-router-dom";
import Footer from "../MasterModules/Components/Footer";
import Navbar from "../MasterModules/Components/Navbar";

export default function Masterlayout() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  )
}
