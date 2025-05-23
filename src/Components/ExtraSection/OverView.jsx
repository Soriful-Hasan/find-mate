import React, { useContext } from "react";
import { userContext } from "../../Authentication/AuthProvider";

const OverView = () => {
  const { theme } = useContext(userContext);
  const light = theme == "light";
  return (
    <div
      className={`${
        light
          ? "shadow bg-white rounded mt-20 p-4"
          : "shadow bg-[#191E24] rounded text-white p-4 "
      }`}
    >
      <div className="flex flex-col xl:flex-row  justify-around ">
        <div className=" lg:w-[800px] ">
          <img src="/overview.svg" alt="" />
        </div>
        <div className="place-items-center  w-full p-4 xl:w-2xl space-y-2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold">How This Platform Work</h1>
          <p className=" text-sm">
            Right way to finding roommate in our website
          </p>
          <div
            className={`${
              light
                ? "text-gray-600 space-y-4 mt-2 "
                : "text-white space-y-4 mt-2"
            }`}
          >
            <p className="">
              Finding the right roommate can be challenging, especially when
              you're new to a city or living on a budget. That’s why we built a
              platform designed to make the roommate search process simple,
              secure, and stress-free. Our website allows users to create
              personalized posts about their available rooms or roommate
              preferences.
            </p>
            <p>
              Whether you're offering a shared room, a private space, or simply
              looking to join someone else’s place — you can post it here. Once
              a listing is published, it becomes visible to others across the
              platform. Users can browse available posts based on location,
              rent, gender preference, lifestyle, and more. Each listing
              includes important details like photos, budget, amenities, and
              contact preferences — so you can make informed decisions before
              reaching out. Communication is straightforward.
            </p>
            <p className="space-y-6">
              If you find a post that matches your need, you can directly
              contact the poster through our built-in messaging system or the
              contact details provided. We prioritize user safety and
              authenticity by encouraging verified profiles and respectful
              interactions. Whether you're a student, a young professional, or
              someone moving to a new place — our platform is built to help you
              connect with people who share your living goals. No more endless
              Facebook groups or unreliable listings. Just clean, focused, and
              relevant roommate connections. Our goal is to simplify co-living
              and make it easier for people to find a comfortable and compatible
              living partner. Start your roommate journey with us today and find
              the perfect match in just a few clicks. Welcome to a smarter way
              to share your space.
            </p>
          </div>
          <div className="  justify-center xl:justify-start  w-full gap-8 flex mt-8">
            <button className="btn bg-[#23BE0A] text-white">Learn More</button>
            <button className="btn  outline-[#23BE0A]">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
