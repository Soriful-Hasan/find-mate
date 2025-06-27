import React, { useContext, useEffect, useState } from "react";
import AvailableRoommate from "../Components/RouteComponents/AvailableRoommate";
import Slider from "../Components/Slider/Slider";
import TypRiter from "../Components/Slider/TypRiter";
import UserSay from "../Components/ExtraSection/UserSay";
import { userContext } from "../Authentication/AuthProvider";
import { useLoaderData } from "react-router";
import OverView from "../Components/ExtraSection/OverView";
import NoDataFound from "../Components/NoDataFound";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet-async";
import AskQuestion from "../Components/ExtraSection/AskQuestion";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const avaiablePost = useLoaderData();
  const { theme } = useContext(userContext);
  const light = theme == "light";
  useEffect(() => {
    fetch(`${import.meta.env.VITE_url}/roommateData/`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [avaiablePost]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider></Slider>

      <div
        className={`${
          light
            ? "place-items-center space-y-5 my-10"
            : "place-items-center text-white my-10"
        }`}
      >
        <h1 className="text-2xl font-bold">Available Post</h1>
        <p>Find Your best roommate in post </p>
      </div>
      {data.length > 0 ? (
        <>
          <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 ">
            <AvailableRoommate singleData={data}></AvailableRoommate>
          </div>
        </>
      ) : (
        <>
          <NoDataFound></NoDataFound>
        </>
      )}

      <OverView></OverView>
      <AskQuestion theme={theme} />
      <UserSay></UserSay>
    </div>
  );
};

export default Home;
