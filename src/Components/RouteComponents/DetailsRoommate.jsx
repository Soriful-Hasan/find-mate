import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router";
import { userContext } from "../../Authentication/AuthProvider";

const DetailsRoommate = () => {
  const { user } = useContext(userContext);
  const [like, setLike] = useState(1);
  const data = useLoaderData();
  const [postDetails, setPostDetails] = useState(data);

  const handleLike = (id) => {
    setLike(1);
    fetch(`http://localhost:3000/addLike/${id}`, {
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
    <div className="min-h-screen">
      {postDetails?.map((details) => (
        <div className="p-4 shadow mt-4">
          <h1>{details.name}</h1>
          <h1>{details.title}</h1>
          <h1>{details.email}</h1>
          <h1>{details.Location}</h1>
          <h1>{details.amount}</h1>
          <h1>{details.contact}</h1>
          <h1>{details.roomType}</h1>
          <h1>{details.description}</h1>
          <h1>{details.availability}</h1>
          <h1></h1>
          <p className="mt-4">like count: {details.like}</p>

          <div className="">
            {details.like > 0 ? "show information" : "hide information"}
          </div>
          <button
            onClick={() => {
              handleLike(details._id);
            }}
            className={
              details.isLiked ? "disabled:cursor-not-allowed btn" : "btn"
            }
          >
            Like
          </button>
        </div>
      ))}
    </div>
  );
};

export default DetailsRoommate;
