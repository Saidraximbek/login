import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OnlineUsers from "../hooks/OnlineUsers";
import Sitebar from "../components/Sitebar";
import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

function MainLayout() {

  return (
    <>
      <Navbar />
      <main className="main-container flex gap-[25px] mt-10 w-[100%] max-md:flex-col-reverse">
        <Sitebar/>
        <Outlet />
        <OnlineUsers />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
