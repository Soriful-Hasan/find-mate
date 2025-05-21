import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React from "react";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="bg-gray-50">
      <Navbar></Navbar>
      
        <div className="w-11/12 mx-auto ">
          <Outlet></Outlet>
        </div>
    

      <Footer></Footer>
    </div>
  );
};

export default Root;
