import React, { useEffect, useState } from "react";
import AvailableRoommate from "../Components/RouteComponents/AvailableRoommate";
import Slider from "../Components/Slider/Slider";
import TypRiter from "../Components/Slider/TypRiter";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  const [data, setData] = useState([]);
  const [availableData, setAvailableData] = useState([]);

  useEffect(() => {
    fetch("https://roommate-finder-server-steel.vercel.app/roommateData/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    const filterAvailable = data.filter(
      (available) => available.availability == "Available"
    );
    setAvailableData(filterAvailable);
  }, [data]);

  return (
    <div className="">
      <Slider></Slider>
      <TypRiter></TypRiter>
      {/* <DotLottieReact
        src="https://lottie.host/bf0f03e5-c9db-41d0-80e0-bd421e8a2b80/BNDc5TWvz9.lottie"
        loop
        autoplay
      /> */}
      <div className="min-h-screen  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
        {data?.map((singleData) => (
          <AvailableRoommate singleData={singleData}></AvailableRoommate>
        ))}
      </div>
    </div>
  );
};

export default Home;
