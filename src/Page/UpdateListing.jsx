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
    <div className="min-h-screen">
      <form onSubmit={(e) => handleUpdate(e, _id)}>
        <div className="grid grid-cols-2 gap-10 mt-20">
          <input
            type="text"
            name="title"
            placeholder="Title"
            defaultValue={title}
            className="input input-md w-full"
          />
          <input
            type="text"
            name="Location"
            placeholder="Location"
            className="input input-md w-full"
            defaultValue={Location}
          />
          <input
            type="text"
            name="amount"
            placeholder="Rent Amount"
            className="input input-md w-full"
            defaultValue={amount}
          />
          <input
            type="text"
            name="roomType"
            className="input w-full"
            placeholder="Room Type"
            list="roomType"
            defaultValue={roomType}
          />
          <datalist id="roomType">
            <option value="New"></option>
            <option value="Old"></option>
          </datalist>
          <input
            type="text"
            name="lifestyle"
            className="input w-full"
            placeholder="Lifestyle Preferences"
            list="lifestyle"
            defaultValue={lifestyle}
          />
          <datalist id="lifestyle">
            <option value="Smoking"></option>
            <option value="pet"></option>
          </datalist>
          <input
            type="text"
            name="description"
            placeholder="Description"
            className="input input-md w-full"
            defaultValue={description}
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Info "
            className="input input-md w-full"
            defaultValue={contact}
          />
          <input
            type="text"
            name="availability"
            className="input w-full"
            placeholder="availability"
            list="availability"
            defaultValue={availability}
          />
          <datalist id="availability">
            <option value="Available"></option>
            <option value="Unavailable"></option>
          </datalist>
          <input
            type="text"
            name="email"
            value={user?.email}
            className="input input-md w-full disabled:not-read-only"
          />
          <input
            type="text"
            name="name"
            value={user?.displayName}
            placeholder="Soriful Hasan"
            className="input input-md w-full disabled:not-read-only"
          />
        </div>
        <div className=" flex justify-center mt-20">
          <button type="submit" className="btn w-8/12 ">
            Update Data
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateListing;
