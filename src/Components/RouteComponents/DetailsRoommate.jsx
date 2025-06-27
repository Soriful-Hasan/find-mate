import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { userContext } from "../../Authentication/AuthProvider";
import { FcLike } from "react-icons/fc";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { TbCoinTakaFilled } from "react-icons/tb";
import { BsHouseFill } from "react-icons/bs";
import { GoCheckCircleFill } from "react-icons/go";
import { FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const DetailsRoommate = () => {
  const { theme, user } = useContext(userContext);
  const [isLike, SetLike] = useState(false);

  const [like, setLike] = useState(1);
  const data = useLoaderData();
  const [postDetails, setPostDetails] = useState(data);

  const handleLike = (id) => {
    SetLike(true);
    console.log(isLike);
    setLike(1);
    fetch(`${import.meta.env.VITE_url}/addLike/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ like: like }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updatedPosts = [...postDetails];
        const index = updatedPosts.findIndex((post) => post._id == id);
        if (index != -1) {
          updatedPosts[index] = {
            ...updatedPosts[index],
            like: (updatedPosts[index].like || 0) + 1,
          };
          setPostDetails(updatedPosts);
        }
      });
  };

  return (
    <div className="min-h-screen mx-auto lg:w-11/12 w-full flex flex-col justify-center">
      {postDetails?.map((details) => (
        <div
          key={details._id}
          className={`${
            theme === "light"
              ? "p-8 border border-gray-100 bg-white"
              : "p-8 border border-gray-400 mt-4 bg-[#191E24]"
          } rounded-lg mb-6`}
        >
          <p className="text-sm mb-4">
            <span className="font-semibold bg-[#23BE0A15] text-[#23BE0A] p-2 rounded">
              {details.like} People interested
            </span>
          </p>

          {/* Two-column layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left - Room Image */}
            <div
              className={`${
                theme === "light"
                  ? "flex-1  p-10  bg-gray-50 "
                  : "flex-1  p-10  bg-[#1E2939]"
              }`}
            >
              <div className=" w-full    overflow-hidden rounded-lg">
                <img
                  src={
                    details.roomPhoto || "https://via.placeholder.com/600x400"
                  }
                  alt={details.title}
                  className=" rounded-lg"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="flex-1 w-full space-y-4  p-10">
              <h1
                className={`${
                  theme === "light"
                    ? "text-2xl lg:text-4xl font-bold"
                    : "text-white text-2xl lg:text-4xl font-bold"
                }`}
              >
                {details.title}
              </h1>

              <p className={`${theme === "light" ? "" : "text-white"}`}>
                Post By {details.name}
              </p>

              <div className="flex items-center gap-2">
                <MdEmail color="#FF4C4C" />
                <p
                  className={`${
                    theme === "light" ? "text-gray-900" : "text-white"
                  }`}
                >
                  {details.email}
                </p>
              </div>

              <div className="border-b border-gray-300 w-full my-2" />

              <div
                className={`${
                  theme === "light" ? "" : "text-white"
                } space-y-1 mt-10`}
              >
                <p>Room Type: {details.roomType}</p>
                <p>Life Style: {details.lifestyle}</p>
              </div>

              <div
                className={`${
                  theme === "light" ? "" : "text-white"
                } mt-8  space-y-4`}
              >
                <p className="flex place-items-center gap-2">
                  <ImLocation color="#FF4C4C" /> {details.Location}
                </p>
                <p className="flex place-items-center gap-2">
                  <TbCoinTakaFilled color="#23BE0A" /> {details.amount} Taka
                </p>
                <p className="flex place-items-center gap-2">
                  <BsHouseFill color="#1E90FF" /> {details.roomType}
                </p>
                <p className="flex place-items-center gap-2">
                  <GoCheckCircleFill color="#23BE0A" /> {details.availability}
                </p>
              </div>

              <p className={`${theme === "light" ? "" : "text-white"} my-4`}>
                <span className="font-semibold">Room Details</span>:{" "}
                {details.description}
              </p>

              {isLike && (
                <div
                  className={`${
                    theme === "light"
                      ? "space-y-2 bg-gray-50 lg:w-sm rounded p-4"
                      : "space-y-2 bg-gray-700 lg:w-sm rounded p-4"
                  }`}
                >
                  <p
                    className={`${
                      theme === "light" ? "" : "text-white"
                    } font-semibold`}
                  >
                    Contact Information
                  </p>
                  <div className="flex items-center gap-2">
                    <FaMobile color="#23BE0A" />
                    <p
                      className={`${
                        theme === "light" ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {details.contact}
                    </p>
                  </div>
                </div>
              )}

              {/* Like button */}
              {details.email === user.email ? (
                <span className="cursor-not-allowed">
                  <AiFillLike color="#1E90FF" size={40} />
                </span>
              ) : (
                <div className="  cursor-pointer mt-4 p-2 rounded-full w-sm">
                  <AiFillLike
                    color="#1E90FF"
                    size={40}
                    onClick={() => handleLike(details._id)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsRoommate;
