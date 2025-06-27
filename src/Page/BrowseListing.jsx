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
  // const browsData = useLoaderData();
  console.log(data);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_url}/listingData`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className=" my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10">
      <BrowseListingCard theme={theme} data={data} />
    </div>
  );
};

export default BrowseListing;

