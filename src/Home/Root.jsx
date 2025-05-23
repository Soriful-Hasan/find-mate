import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router";
import { userContext } from "../Authentication/AuthProvider";
import Loader from "../Components/Loader";

const Root = () => {
  const { theme } = useContext(userContext);
  const isLight = theme === "light";
  const { state } = useNavigate();
  return (
    <div className={`${isLight ? "bg-gray-50 pt-16" : "bg-[#121212] pt-16"} `}>
      <Navbar></Navbar>

      <div className="w-11/12 mx-auto ">
        {state == "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
