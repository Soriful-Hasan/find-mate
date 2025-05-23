import React, { use, useContext, useEffect, useState } from "react";
import { userContext } from "../Authentication/AuthProvider";
import { Link, NavLink } from "react-router";
import Loader from "./Loader";
import { IoMdListBox, IoMdPersonAdd } from "react-icons/io";
import { RiHome4Fill, RiMenu3Line } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { PiUserListFill } from "react-icons/pi";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

const Navbar = () => {
  const { user, userSignOut, loading, handleToggle, theme } =
    useContext(userContext);

  const link = [
    <div className="flex items-center flex-col gap-4 lg:gap-6 xl:18 lg:flex-row">
      <NavLink
        to={"/"}
        className={({ isActive }) => {
          if (isActive) {
            return theme == "light"
              ? "text-[#23BE0A] outline-[#23BE0A]  py-2 px-4 rounded outline-1"
              : "text-white outline-white   py-2 px-4 rounded outline-1";
          } else {
            return theme === "light"
              ? "text-black py-2 px-4"
              : "text-white py-2 px-4";
          }
        }}
      >
        <span className="flex items-center gap-2">
          <RiHome4Fill /> Home
        </span>
      </NavLink>

      <NavLink
        to={"/findRoommate"}
        className={({ isActive }) => {
          if (isActive) {
            return theme == "light"
              ? "text-[#23BE0A] outline-[#23BE0A]  py-2 px-4 rounded outline-1"
              : "text-white outline-white   py-2 px-4 rounded outline-1";
          } else {
            return theme === "light"
              ? "text-black py-2 px-4"
              : "text-white py-2 px-4";
          }
        }}
      >
        <span className="flex items-center  gap-2">
          <IoPersonAdd /> Add Roommate
        </span>
      </NavLink>

      <NavLink
        to={"/browseListing"}
        className={({ isActive }) => {
          if (isActive) {
            return theme == "light"
              ? "text-[#23BE0A] outline-[#23BE0A]  py-2 px-4 rounded outline-1"
              : "text-white outline-white   py-2 px-4 rounded outline-1";
          } else {
            return theme === "light"
              ? "text-black py-2 px-4"
              : "text-white py-2 px-4";
          }
        }}
      >
        <span className="flex items-center gap-2">
          <IoMdListBox /> Browse Listing
        </span>
      </NavLink>

      <NavLink
        to={"/myListing"}
        className={({ isActive }) => {
          if (isActive) {
            return theme == "light"
              ? "text-[#23BE0A] outline-[#23BE0A]  py-2 px-4 rounded outline-1"
              : "text-white outline-white  py-2 px-4 rounded outline-1";
          } else {
            return theme === "light"
              ? "text-black py-2 px-4"
              : "text-white py-2 px-4";
          }
        }}
      >
        <span className="flex items-center gap-2">
          <PiUserListFill /> My Listings
        </span>
      </NavLink>
    </div>,
  ];

  const handleSignOut = () => {
    userSignOut()
      .then((result) =>
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Out Successfully!",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch((error) =>
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Something was wrong",
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };
  return (
    <div>
      <div
        className={`${
          theme === "light"
            ? "navbar shadow-sm "
            : "navbar shadow-sm bg-[#191E24]"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {theme == "light" ? (
                <RiMenu3Line size={25} />
              ) : (
                <RiMenu3Line size={25} color="white"/>
              )}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="lg:flex item-center  items-center gap-4 hidden lg:block">
            <img height={30} width={30} src="/logo.png" alt="" />
            <a
              className={`${
                theme == "light"
                  ? "text-black text-sm lg:text-xl  font-semibold"
                  : "text-white text-sm lg:text-xl  font-semibold"
              }`}
            >
              Room mate
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        <div className="navbar-end  space-x-5">
          <div className="">
            <a
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user?.displayName}
              data-tooltip-place="top-end"
            >
              <div className="">
                {loading ? (
                  <span
                    className={`${
                      theme == "light"
                        ? "loading loading-ring loading-xl"
                        : "loading loading-ring loading-xl text-white"
                    }`}
                  ></span>
                ) : (
                  <div className="">
                    {user ? (
                      <div className="avatar">
                        <div className=" w-10 rounded-full  ">
                          <img src={user?.photoURL} />
                        </div>
                      </div>
                    ) : (
                      <span className=""></span>
                    )}
                  </div>
                )}
              </div>
            </a>

            <Tooltip id="my-tooltip" />
          </div>

          {/* handle dark and light loogle */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
              onChange={handleToggle}
            />

            {/* sun icon */}
            {theme == "light" ? (
              <MdSunny size={30} color="black" />
            ) : (
              <MdSunny size={30} color="white" />
            )}

            {/* moon icon */}
          </label>

          {loading ? (
            <span
              className={`${
                theme == "light"
                  ? "loading loading-ring loading-xl"
                  : "loading loading-ring loading-xl text-white"
              }`}
            ></span>
          ) : (
            <>
              {user ? (
                <button
                  className={`${
                    theme === "light"
                      ? "btn  text-white rounded-sm bg-[#23BE0A] "
                      : "bg-[#1E2939] text-white btn text-black"
                  }`}
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex gap-4">
                  <Link
                    className={`${
                      theme === "light"
                        ? "btn  text-white rounded-sm bg-[#23BE0A] "
                        : "bg-[#1E2939] text-white btn text-black"
                    }`}
                    to={"/login"}
                  >
                    Sing In
                  </Link>
                  <div className="hidden md:block">
                    <Link
                      className={`${
                        theme === "light"
                          ? "btn  text-white rounded-sm bg-[#59C6D2] "
                          : "bg-[#1E2939] text-white btn text-black"
                      }`}
                      to={"/register"}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
