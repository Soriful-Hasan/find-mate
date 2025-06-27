import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { FaTrash, FaUserEdit } from "react-icons/fa";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import NoDataFound from "../Components/NoDataFound";
import Loader from "../Components/Loader";
import { Helmet } from "react-helmet-async";

const MyListing = () => {
  const { user, theme } = useContext(userContext);
  const [listingData, setListingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = user?.email;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_url}/findMyEmail/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        setListingData(data);
        setLoading(false);
      });
  }, [userEmail]);

  fetch(`${import.meta.env.VITE_url}/findMyEmail/${userEmail}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {});

  const handleDelete = (id) => {
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
        fetch(`${import.meta.env.VITE_url}/deleteList/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
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
      }
    });

    // const filterDelete = listingData.filter(
    //   (filterDelete) => filterDelete._id != id
    // );
    // setListingData(filterDelete);
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="  w-full lg:w-10/12  mx-auto  ">
      <Helmet>
        <title>My Listing</title>
      </Helmet>
      {listingData.length > 0 ? (
        <div>
          <div className="min-h-screen ">
            <div className="overflow-x-auto mt-10">
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
                      <td className="border border-gray-200">
                        {listing.title}
                      </td>

                      <td className="border border-gray-200">
                        {listing.amount} Taka
                      </td>

                      <td className="border border-gray-200">
                        <div className="flex gap-2 ">
                          <Link
                            className={
                              theme == "light" ? "btn" : "btn bg-gray-800"
                            }
                            to={`/dashboard/updateDetails/${listing._id}`}
                          >
                            {theme == "light" ? (
                              <FaUserEdit />
                            ) : (
                              <FaUserEdit color="white" />
                            )}
                          </Link>
                        </div>
                      </td>
                      <td className={theme == "light" ? "" : "border"}>
                        <button
                          onClick={() => handleDelete(listing._id)}
                          className={
                            theme == "light" ? "btn" : "btn bg-gray-800"
                          }
                        >
                          {theme == "light" ? (
                            <FaTrash />
                          ) : (
                            <FaTrash color="white" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default MyListing;
