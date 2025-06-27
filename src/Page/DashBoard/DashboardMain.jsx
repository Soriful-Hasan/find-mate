import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../Authentication/AuthProvider";
import LikeChart from "./likeChart/LikeChart";
import AmountChart from "./amountChart/AmountChart";
import RoomAvailAbleChart from "./RoomAvailableChart/RoomAvailAbleChart";

const DashboardMain = () => {
  const { user, theme } = useContext(userContext);
  const userEmail = user?.email;
  const isDark = theme === "dark";
  const [listingData, setListingData] = useState([]);
  useEffect(() => {
    fetch(
      `https://roommate-finder-server-steel.vercel.app/findMyEmail/${userEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setListingData(data);
      });
  }, [userEmail]);
  const bgClass = isDark ? "bg-[#2A2E37] text-white" : "bg-white text-black";

  return (
    <div className="w-10/12 mx-auto">
      <div
        className={`mt-10 shadow-sm rounded-2xl p-4 transition-colors duration-300 ${bgClass}`}
      >
        <LikeChart listingData={listingData} theme={theme} />
      </div>
      <div className="flex gap-4 mt-10 mb-10 flex-col lg:flex-row">
        <div
          className={`flex-1 shadow-sm rounded-2xl p-4 transition-colors duration-300 ${bgClass}`}
        >
          <AmountChart listingData={listingData} />
        </div>
        <div
          className={`flex-1 shadow-sm rounded-2xl p-4 transition-colors duration-300 ${bgClass}`}
        >
          <RoomAvailAbleChart listingData={listingData} theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
