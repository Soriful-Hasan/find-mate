import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { userContext } from "../Authentication/AuthProvider";
import { CgDetailsMore } from "react-icons/cg";
import Loader from "../Components/Loader";
import NoDataFound from "../Components/NoDataFound";

const BrowseListing = () => {
  const { user, theme } = useContext(userContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const browsData = useLoaderData();

  useEffect(() => {
    fetch("https://roommate-finder-server-steel.vercel.app/listingData")
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
    <div className="">
      {data.length > 0 ? (
        <div>
          <div className="min-h-screen ">
            <div
              className={`${
                theme === "light" ? "" : "text-white bg-[#191E24] "
              }`}
            >
              <div className="overflow-x-auto mt-10 mb-30 ">
                <table className="table border border-gray-200">
                  {/* head */}
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
    </div>
  );
};

export default BrowseListing;
