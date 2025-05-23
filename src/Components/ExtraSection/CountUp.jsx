import React, { useContext } from "react";
import CountUp, { useCountUp } from "react-countup";
import { userContext } from "../../Authentication/AuthProvider";
import TypRiter from "../Slider/TypRiter";
import { FcHome } from "react-icons/fc";
const UserCountUp = () => {
  const { theme } = useContext(userContext);
  const light = theme == "light";
  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className="my-20 ">
      <div
        className={`${
          light
            ? "place-items-center space-y-5 my-10 "
            : "place-items-center text-white my-10 space-y-5"
        }`}
      >
        <h1 className="text-2xl font-bold">Our Growing Community</h1>
        <TypRiter></TypRiter>
      </div>
      <div
        className={`${
          light
            ? "grid  md:grid-cols-2 lg:grid-cols-3 gap-10 "
            : "grid grid-cols-2 md:grid-cols-3 gap-10 text-white "
        }`}
      >
        <div
          className={`${
            light
              ? "place-items-center  shadow bg-white rounded"
              : "place-items-center  shadow bg-[#191E24] rounded"
          }`}
        >
          <div className="App place-items-center space-y-2 my-4">
            <div className="">
              <FcHome size={60} />
            </div>
            <div className="content text-2xl font-bold p-2">
              <CountUp end={20000} enableScrollSpy />
            </div>
            <p className={`${light ? "text-gray-500" : "text-gray-100"}`}>
              Successfully Roommate Matches
            </p>
          </div>
        </div>
        <div
          className={`${
            light
              ? "place-items-center  shadow bg-white rounded"
              : "place-items-center  shadow bg-[#191E24] rounded"
          }`}
        >
          <div className="App place-items-center space-y-2 my-4">
            <div className="">
              <img src="/group.png" alt="" />
            </div>
            <div className="content text-2xl font-bold p-2">
              <CountUp end={10000} enableScrollSpy />
            </div>
            <p className={`${light ? "text-gray-500" : "text-gray-100"}`}>
              Active Users
            </p>
          </div>
        </div>
        <div
          className={`${
            light
              ? "place-items-center  shadow bg-white rounded"
              : "place-items-center  shadow bg-[#191E24] rounded"
          }`}
        >
          <div className="App place-items-center space-y-2 my-4">
            <div className="">
              <img src="/review.png" alt="" />
            </div>
            <div className="content text-2xl font-bold p-2">
              <CountUp end={5000} enableScrollSpy />
            </div>
            <p className={`${light ? "text-gray-500" : "text-gray-100"}`}>
              Positive Review
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCountUp;
