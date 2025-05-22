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
  const { theme } = useContext(userContext);
  console.log(theme);
  const [like, setLike] = useState(1);
  const data = useLoaderData();
  const [postDetails, setPostDetails] = useState(data);

  const handleLike = (id) => {
    setLike(1);
    fetch(`https://roommate-finder-server-steel.vercel.app/addLike/${id}`, {
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

  // const handleUserIsLike = (id) => {
  //   const userID = user?.uid;
  //   const logUserId = {
  //     userID,
  //   };
  //   console.log(logUserId);
  //   fetch(`http://localhost:3000/userLiked/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(logUserId),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {});
  // };

  // useState(() => {
  //   fetch("http://localhost:3000/userLogId")
  //     .then((res) => res.json())
  //     .then((data) => setGetId(data));
  // }, []);
  // const desId = getId[0];
  // const objDesId = desId?.userLogId;
  // console.log("objDesId", objDesId);
  // console.log(desId);
  // const filterId = logId.filter((id) => id.userId == user?.uid);
  // console.log(filterId);
  // const updatedPosts = [...postDetails];
  // const index = updatedPosts.findIndex((post) => post._id == id);
  // if (index != -1) {
  //   updatedPosts[index].isLiked = true;
  //   setPostDetails(updatedPosts);
  // }

  return (
    <div className="my-10 mb-25 mx-auto lg:w-8/12 w-full flex flex-col justify-center ">
      {postDetails?.map((details) => (
        <div
          className={`${
            theme == "light"
              ? "p-8 border border-gray-50 bg-white"
              : "p-8 border border-gray-400 mt-4 bg-[#191E24]"
          }`}
        >
          <p className="text-sm mb-4 ">
            <span className="font-semibold bg-[#23BE0A15]  text-[#23BE0A] p-2 rounded">
              {details.like} People intersted
            </span>
          </p>
          <div className="space-y-3">
            <h1
              className={`${
                theme === "light"
                  ? "lg:text-4xl font-bold text-xl"
                  : "text-4xl font-bold text-white text-xl lg:text-4xl"
              }`}
            >
              {details.title}
            </h1>
            <p className={`${theme == "light" ? "" : "text-white"}`}>
              Post By {details.name}
            </p>
            <div className="border-b border-gray-200 w-full "></div>
          </div>

          <div
            className={`${
              theme === "light" ? "space-y-3 mt-3" : "space-y-3 mt-3 text-white"
            }`}
          >
            <p>Room Type: {details.roomType}</p>
            <p>Life Style: {details.lifestyle}</p>
            <div className="border-b border-gray-200 w-full "></div>
          </div>

          <div
            className={`${
              theme === "light" ? "space-y-4 my-6" : "space-y-4 my-6 text-white"
            }`}
          >
            <p className="flex place-items-center gap-2">
              <ImLocation color="#FF4C4C" />
              {details.Location}
            </p>
            <p className="flex place-items-center gap-2">
              <TbCoinTakaFilled color="#23BE0A" />
              {details.amount}
            </p>
            <p className="flex place-items-center gap-2">
              <BsHouseFill color="#1E90FF" />
              {details.roomType}
            </p>
            <p className="flex place-items-center gap-2">
              <GoCheckCircleFill color="#23BE0A" />
              {details.availability}
            </p>
          </div>

          <div className={`${theme === "light" ? "" : "text-white"}`}>
            <p className="my-6 lg:w-4xl">
              <span className="font-semibold">Room Details</span>:{" "}
              {details.description}I’m friendly, clean, and respectful, and I’d
              love to share the space with someone like-minded. If you’re
              interested or have any questions, feel free to DM me! love to
              share the space with someone like-minded. If you’re interested or
              have any questions, feel free to DM me! love to share the space
              with someone like-minded. If you’re interested or have any
              questions, feel free to DM me!
            </p>
            <div className="border-b my-6 border-gray-200 w-full "></div>
            {details.like > 0 ? (
              <div className="space-y-2">
                <div className={`${theme === "light" ? "" : "text-white"}`}>
                  <p className="font-semibold">Contact Information </p>
                  <p
                    className={`${
                      theme === "light" ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {details.name}
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <MdEmail color="#FF4C4C" />
                  <p
                    className={`${
                      theme === "light" ? "text-gray-900" : "text-white"
                    }`}
                  >
                    {details.email}
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
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
            ) : (
              <></>
            )}

            <div className="cursor-pointer mt-4">
              {details.like > 0 ? (
                <div className="cursor-not-allowed">
                  <AiFillLike color="#1E90FF" size={40} />
                </div>
              ) : (
                <AiOutlineLike
                  size={40}
                  onClick={() => handleLike(details._id)}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsRoommate;
