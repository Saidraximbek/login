import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OnlineUsers from "../hooks/OnlineUsers";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="main-container flex gap-[50px] mt-10 w-[100%] max-md:flex-col-reverse">
        <Outlet />
        <OnlineUsers />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
