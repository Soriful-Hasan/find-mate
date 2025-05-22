import React, { useEffect, useState } from "react";
import AvailableRoommate from "../Components/RouteComponents/AvailableRoommate";
import Slider from "../Components/Slider/Slider";

const Home = () => {
  const [data, setData] = useState([]);
  const [availableData, setAvailableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/roommateData/")
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
      <div className="min-h-screen  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
        {data?.map((singleData) => (
          <AvailableRoommate singleData={singleData}></AvailableRoommate>
        ))}
      </div>
    </div>
  );
};

export default Home;
