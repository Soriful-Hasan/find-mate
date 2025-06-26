import React, { useContext } from "react";
import { userContext } from "../../Authentication/AuthProvider";

const DashboardMain = () => {
  const { user } = useContext(userContext);

  return (
    <div className="w-8/12 mx-auto">
      <div className=" mt-20 h-80 shadow-sm bg-white rounded-2xl ">
        <div className="p-8  text-[#111827]">
          <h1 className="font-semibold">Welcome to {user?.displayName}</h1>
          <p>you add more roommate find</p>
        </div>
      </div>
      <div className="flex gap-4 mt-10 ">
        <div className="bg-white w-2xl h-40 shadow-sm"></div>
        <div className="bg-white w-2xl h-40 shadow-sm"></div>
        <div className="bg-white w-2xl h-40 shadow-sm"></div>
      </div>
    </div>
  );
};

export default DashboardMain;
