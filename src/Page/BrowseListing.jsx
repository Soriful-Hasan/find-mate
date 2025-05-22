import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { userContext } from "../Authentication/AuthProvider";
import { CgDetailsMore } from "react-icons/cg";

const BrowseListing = () => {
  const { user } = useContext(userContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/listingData")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  {
    /* <Link
            to={`/roommateDetails/${filterUser._id}`}
            className="btn"
          >
            details
          </Link> */
  }
  return (
    <div className="">
      <div className="overflow-x-auto mt-10 mb-30">
        <table className="table border border-gray-200">
          {/* head */}
          <thead className="bg-green-100 text-green-700">
            <tr className="border border-gray-200">
              <th className="border border-gray-200">User</th>
              <th className="border border-gray-200">Title</th>
              <th className="border border-gray-200">Location</th>
              <th className="border border-gray-200">amount</th>
              <th className="border border-gray-200">Contact</th>
              <th className="border border-gray-200">Details</th>
            </tr>
          </thead>
          <tbody>
            {data.map((listing) => (
              <tr className="border border-gray-200">
                <td className="border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={listing.userPhoto}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{listing.name}</div>
                    </div>
                  </div>
                </td>
                <td className="border border-gray-200">{listing.title}</td>
                <td className="border border-gray-200">
                  {listing.Location}
                  <br />
                </td>
                <td className="border border-gray-200">
                  {listing.amount} Taka
                </td>
                <td className="border border-gray-200">
                  <div className="flex flex-col">
                    <span>{listing.email}</span>
                    <span>{listing.contact}</span>
                  </div>
                </td>
                <td className="border border-gray-200">
                  <Link to={`/roommateDetails/${listing._id}`} className="btn">
                    <CgDetailsMore />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListing;
