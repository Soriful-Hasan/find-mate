import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { useContext } from "react";
import { Outlet } from "react-router";
import { userContext } from "../Authentication/AuthProvider";

const Root = () => {
  const { theme } = useContext(userContext);
  const isLight = theme === "light";
  return (
    <div className={`${isLight?'bg-gray-50':'bg-gray-700'}`}>
      <Navbar></Navbar>
      
        <div className="w-11/12 mx-auto ">
          <Outlet></Outlet>
        </div>
    
      <Footer></Footer>
    </div>
  );
};

export default Root;
