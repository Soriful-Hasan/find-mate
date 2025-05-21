import React, { useEffect, useState } from "react";
import AvailableRoommate from "../Components/RouteComponents/AvailableRoommate";

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
    <div className="min-h-screen grid grid-cols-3 gap-4 mt-10 ">
      {data?.map((singleData) => (
        <AvailableRoommate singleData={singleData}></AvailableRoommate>
      ))}
    </div>
  );
};

export default Home;
