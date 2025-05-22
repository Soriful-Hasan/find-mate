import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { FaTrash, FaUserEdit } from "react-icons/fa";
import { BiSolidMessageSquareEdit } from "react-icons/bi";

const MyListing = () => {
  const { user, theme } = useContext(userContext);
  const [listingData, setListingData] = useState([]);
  const userEmail = user?.email;

  useEffect(() => {
    fetch(`http://localhost:3000/findMyEmail/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setListingData(data));
  }, [userEmail]);

  fetch(`http://localhost:3000/findMyEmail/${userEmail}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/deleteList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            const filterDelete = listingData.filter(
              (filterDelete) => filterDelete._id != id
            );
            setListingData(filterDelete);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      });

    // const filterDelete = listingData.filter(
    //   (filterDelete) => filterDelete._id != id
    // );
    // setListingData(filterDelete);
  };
  const handleEdit = (id) => {};
  return (
    <div className="min-h-screen ">
      <div className="overflow-x-auto mt-4 ">
        <table
          className={`${
            theme === "light"
              ? "table border bg-white border-gray-200"
              : "table border text-white bg-[#191E24] border-gray-500"
          }`}
        >
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
              <th className="border border-gray-200">Edit</th>
              <th className="border border-gray-200">Delete</th>
            </tr>
          </thead>
          <tbody>
            {listingData.map((listing) => (
              <tr>
                <td className="border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="">{listing.name}</div>
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
                  <div className="flex gap-2 ">
                    <Link
                      className={theme == "light" ? "btn" : "btn bg-gray-800"}
                      to={`/updateDetails/${listing._id}`}
                    >
                      {theme == "light" ? (
                        <FaUserEdit />
                      ) : (
                        <FaUserEdit color="white" />
                      )}
                    </Link>
                  </div>
                </td>
                <td className="border ">
                  <button
                    onClick={() => handleDelete(listing._id)}
                    className={theme == "light" ? "btn" : "btn bg-gray-800"}
                  >
                    {theme == "light" ? <FaTrash /> : <FaTrash color="white" />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListing;
