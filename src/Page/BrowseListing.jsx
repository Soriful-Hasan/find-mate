import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { userContext } from "../Authentication/AuthProvider";
import { CgDetailsMore } from "react-icons/cg";
import Loader from "../Components/Loader";
import NoDataFound from "../Components/NoDataFound";
import { Helmet } from "react-helmet-async";
import { BsHouseFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import { ImLocation } from "react-icons/im";
import { TbCoinTakaFilled } from "react-icons/tb";
import BrowseListingCard from "./BrowseListingCard";

const BrowseListing = () => {
  const { user, theme } = useContext(userContext);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortAmount, setSortAmount] = useState("");
  const [searchText, setSearchText] = useState("");
  console.log(sortAmount);
  // const browsData = useLoaderData();

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_url
      }/listingData?sort=${sortAmount}&search=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [sortAmount, searchText]);
  if (loading) {
    return <Loader></Loader>;
  }

  

  return (
    <div className="">
      <div className=" flex justify-between pt-6">
        <div className=" lg:w-full ">
          <label className="input ">
            <svg
              className={`h-[1em] ${
                theme === "dark" ? "text-white" : "text-gray-700"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              required
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search by title...."
              className={`w-full bg-transparent focus:outline-none text-base ${
                theme === "light" ? "placeholder-gray-500" : "placeholder-white"
              }`}
            />
          </label>
        </div>
        <div>
          <select
            onChange={(e) => setSortAmount(e.target.value)}
            defaultValue="Pick a color"
            className={`select w-full ${
              theme === "dark"
                ? "text-white bg-neutral"
                : "text-gray-800 bg-base-200"
            }`}
          >
            <option disabled={true}>Pick option</option>
            <option value={"desc"}>Height Rent</option>
            <option value={"asc"}>Low Rent</option>
          </select>
        </div>
      </div>
      <div className=" my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
        <BrowseListingCard theme={theme} data={data} />
      </div>
    </div>
  );
};

export default BrowseListing;
