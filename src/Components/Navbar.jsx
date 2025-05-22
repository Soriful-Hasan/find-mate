import React, { use, useContext, useEffect, useState } from "react";
import { userContext } from "../Authentication/AuthProvider";
import { Link, NavLink } from "react-router";
import Loader from "./Loader";
import { IoMdListBox, IoMdPersonAdd } from "react-icons/io";
import { RiHome4Fill } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { PiUserListFill } from "react-icons/pi";
import { Tooltip } from "react-tooltip";
import Swal from "sweetalert2";

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
          icon: "successfully",
          title: "Sign Out Successfully",
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .catch((error) => console.log(error));
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
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
                  <span className="loading loading-spinner loading-xl"></span>
                ) : (
                  <div className="">
                    {user ? (
                      <div className="">
                        <img
                          width={40}
                          className="rounded-full"
                          src={user?.photoURL}
                          referrerPolicy="no-referrer"
                        />
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
          <div className="">
            <input
              type="checkbox"
              value="synthwave"
              onChange={handleToggle}
              className="toggle theme-controller"
            />
          </div>

          {loading ? (
            <span className="loading loading-spinner loading-xl"></span>
          ) : (
            <>
              {user ? (
                <button
                  className={`${
                    theme === "light"
                      ? "btn  text-white rounded-sm bg-[#23BE0A] "
                      : "bg-white btn text-black"
                  }`}
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex gap-4">
                  <Link
                    className="btn text-white dark:text-white rounded-sm bg-[#23BE0A] "
                    to={"/login"}
                  >
                    Sing In
                  </Link>
                  <Link
                    className="btn dark:text-white text-white rounded-sm bg-[#59C6D2] "
                    to={"/register"}
                  >
                    Sign Up
                  </Link>
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
