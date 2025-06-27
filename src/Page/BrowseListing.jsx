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
{
  /* <div className=" ">
<Helmet>
  <title>Browse listing</title>
</Helmet>
{data.length > 0 ? (
  <div>
    <div className="min-h-screen ">
      <div
        className={`${
          theme === "light" ? "bg-white" : "text-white bg-[#191E24] "
        }`}
      >
        <div className="overflow-x-auto mt-10 mb-30 ">
          <table className="table border border-gray-200">
            
            <thead
              className={`${
                theme === "light"
                  ? "border border-gray-200 bg-green-100 text-green-700"
                  : "text-white bg-gray-600"
              }`}
            >
              <tr className="border border-gray-200">
                <th className="border border-gray-200">User</th>
                <th className="border border-gray-200">Title</th>
                <th className="border border-gray-200">Location</th>
                <th className="border border-gray-200">amount</th>
                <th className="border border-gray-200">Details</th>
              </tr>
            </thead>
            <tbody>
              {data.map((listing) => (
                <tr className="border border-gray-200">
                  <td className="border border-gray-200">
                    <div className="flex  items-center gap-6">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={listing.userPhoto}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="">{listing.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="border border-gray-200">
                    {listing.title}
                  </td>
                  <td className="border border-gray-200">
                    {listing.Location}
                    <br />
                  </td>
                  <td className="border border-gray-200">
                    {listing.amount} Taka
                  </td>

                  <td className="border border-gray-200">
                    <Link
                      to={`/roommateDetails/${listing._id}`}
                      className={
                        theme == "light" ? "btn" : "btn bg-gray-800"
                      }
                    >
                      {theme == "light" ? (
                        <CgDetailsMore />
                      ) : (
                        <CgDetailsMore color="white" />
                      )}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
) : (
  <div>
    <NoDataFound></NoDataFound>
  </div>
)}
</div> */
}
