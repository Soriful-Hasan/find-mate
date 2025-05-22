import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../Authentication/AuthProvider";
import { useLoaderData } from "react-router";

const UpdateListing = () => {
  const { user } = useContext(userContext);
  const data = useLoaderData();

  const {
    title,
    roomType,
    description,
    contact,
    availability,
    lifestyle,
    amount,
    Location,
    _id,
  } = data[0];

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    fetch(`http://localhost:3000/update/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => console.log("after update data" + data));
  };

  return (
    <div className="border my-10 w-8/12 mx-auto p-8 border-gray-200 bg-white">
      <h1 className="font-bold  text-2xl text-start">Update Your Post</h1>
      <form className="" onSubmit={(e) => handleUpdate(e, _id)}>
        <div className=" gap-10 mt-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <input
              type="text"
              name="title"
              placeholder="Title"
              defaultValue={title}
              className="input input-md w-full disabled:not-read-only focus:outline-none border-green-500"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="Location"
              placeholder="Location"
              className="input input-md w-full disabled:not-read-only focus:outline-none border-green-500"
              defaultValue={Location}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="amount"
              placeholder="Rent Amount"
              className="input input-md w-full"
              defaultValue={amount}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="roomType"
              className="input input-md w-full disabled:not-read-only focus:outline-none border-green-500"
              placeholder="Room Type"
              list="roomType"
              defaultValue={roomType}
            />
            <datalist id="roomType">
              <option value="New"></option>
              <option value="Old"></option>
            </datalist>
          </div>
          <div className="">
            <input
              type="text"
              name="lifestyle"
              className="input input-md w-full disabled:not-read-only focus:outline-none border-green-500"
              placeholder="Lifestyle Preferences"
              list="lifestyle"
              defaultValue={lifestyle}
            />
            <datalist id="lifestyle">
              <option value="Smoking"></option>
              <option value="pet"></option>
            </datalist>
          </div>
          <div className="">
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-md w-full disabled:not-read-only focus:outline-none border-green-500"
              defaultValue={description}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="contact"
              placeholder="Contact Info "
              className="input input-md w-full disabled:not-read-only focus:outline-none border-green-500"
              defaultValue={contact}
            />
          </div>
          <div className="">
            <input
              type="text"
              name="availability"
              className="input input-md w-full disabled:not-read-only focus:outline-none border-green-500"
              placeholder="availability"
              list="availability"
              defaultValue={availability}
            />

            <datalist id="availability">
              <option value="Available"></option>
              <option value="Unavailable"></option>
            </datalist>
          </div>
          <div className="">
            <input
              type="text"
              name="email"
              value={user?.email}
              className="input input-md w-full disabled:not-read-only focus:outline-none border-green-500"
            />
          </div>
          <div className="">
            <input
              type="text"
              name="name"
              value={user?.displayName}
              placeholder="Soriful Hasan"
              className="input input-md w-full disabled:not-read-only focus:outline-none border-green-500"
            />
          </div>
        </div>
        <div className=" flex justify-center mt-20">
          <button
            type="submit"
            className="btn full w-full bg-[#23BE0A] text-white"
          >
            Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateListing;
