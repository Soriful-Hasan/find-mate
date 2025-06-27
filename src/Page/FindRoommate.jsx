import React, { useContext } from "react";
import { userContext } from "../Authentication/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const FindRoommate = () => {
  const { user, theme } = useContext(userContext);
  const userPhoto = user?.photoURL;
  const handleSubmitData = (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const userData = Object.fromEntries(formData.entries());

    fetch("https://roommate-finder-server-steel.vercel.app/addRoommate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...userData, userPhoto }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Post Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="min-h-screen m-4">
      <Helmet>
        <title>Add Post</title>
      </Helmet>

      {/* Wrapper with theme support */}
      <div
        className={`border my-10 w-full lg:w-10/12  mx-auto p-8 ${
          theme === "light"
            ? "border-gray-200 bg-white text-black"
            : "border-gray-400 bg-[#191E24] text-gray-50"
        }`}
      >
        <h1 className="font-bold text-2xl text-start">Add Post</h1>

        <form onSubmit={handleSubmitData}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            {[
              { name: "title", placeholder: "Title" },
              { name: "Location", placeholder: "Location" },
              { name: "amount", placeholder: "Rent Amount" },
              {
                name: "roomType",
                placeholder: "Room Type",
                list: "roomType",
                datalist: ["Single", "Shared"],
              },
              {
                name: "lifestyle",
                placeholder: "Lifestyle Preferences",
                list: "lifestyle",
                datalist: [
                  "Early riser",
                  "Night owl",
                  "Smoker",
                  "Non-smoker",
                  "Pet",
                ],
              },
              { name: "description", placeholder: "Description" },
              { name: "contact", placeholder: "Contact Info" },
              {
                name: "availability",
                placeholder: "Availability",
                list: "availability",
                datalist: ["Available", "Unavailable"],
              },
              {
                name: "email",
                value: user.email,
              },
              {
                name: "name",
                value: user.displayName,
                placeholder: "Your Name",
              },
            ].map((field, idx) => (
              <div key={idx}>
                <input
                  type="text"
                  required
                  name={field.name}
                  placeholder={field.placeholder}
                  value={field.value}
                  list={field.list}
                  className={`focus:outline-none input input-md w-full ${
                    theme === "light" ? "bg-white" : ""
                  }`}
                  readOnly={["email", "name"].includes(field.name)}
                />
                {field.datalist && (
                  <datalist id={field.list}>
                    {field.datalist.map((option, i) => (
                      <option key={i} value={option} />
                    ))}
                  </datalist>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center w-full mt-20">
            <button
              className={`btn w-full xl:w-4xl text-white ${
                theme === "light" ? "bg-[#23BE0A]" : "bg-gray-700"
              }`}
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FindRoommate;
