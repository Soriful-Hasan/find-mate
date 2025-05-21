import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyListing = () => {
  const { user } = useContext(userContext);
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
            </tr>
          </thead>
          <tbody>
            {listingData.map((listing) => (
              <tr>
                <td>
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
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDelete(listing._id)}
                      className="btn"
                    >
                      x
                    </button>
                    <Link className="btn" to={`/updateDetails/${listing._id}`}>
                      edit
                    </Link>
                  </div>
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
