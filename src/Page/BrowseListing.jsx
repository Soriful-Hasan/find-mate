import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { userContext } from "../Authentication/AuthProvider";

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
    <div className="min-h-screen">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>User</th>
              <th>Title</th>
              <th>Location</th>
              <th>amount</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((listing) => (
              <tr>
                <td>
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
                      <span className="badge badge-ghost badge-sm">
                        {listing.availability}
                      </span>
                    </div>
                  </div>
                </td>
                <td>{listing.title}</td>
                <td>
                  {listing.Location}
                  <br />
                </td>
                <td>{listing.amount} Taka</td>
                <td>
                  <div className="flex flex-col">
                    <span>{listing.email}</span>
                    <span>{listing.contact}</span>
                  </div>
                </td>
                <td>
                  <Link to={`/roommateDetails/${listing._id}`} className="btn">
                    details
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
