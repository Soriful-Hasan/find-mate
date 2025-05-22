import React, { use, useContext, useEffect, useState } from "react";
import { userContext } from "../Authentication/AuthProvider";
import { Link, NavLink } from "react-router";
import Loader from "./Loader";
import { IoMdListBox, IoMdPersonAdd } from "react-icons/io";
import { RiHome4Fill } from "react-icons/ri";
import { IoPersonAdd } from "react-icons/io5";
import { PiUserListFill } from "react-icons/pi";

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
              : "text-white outline-[#23BE0A]  py-2 px-4 rounded outline-1";
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
              : "text-white outline-[#23BE0A]  py-2 px-4 rounded outline-1";
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
              : "text-white outline-[#23BE0A]  py-2 px-4 rounded outline-1";
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
              : "text-white outline-[#23BE0A]  py-2 px-4 rounded outline-1";
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
      .then((result) => alert("user sign out successfully"))
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
                theme == 'light'
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
          {/* handle dark and light loogle */}
          <div className="">
            <label className="">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                onChange={handleToggle}
              />
              {/* sun icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </label>
          </div>

          <div
            className="tooltip tooltip-bottom"
            data-tip={user?.auth?.displayName}
          >
            {loading ? (
              <span className="loading loading-spinner loading-xl"></span>
            ) : (
              <div className="avatar">
                <div className="w-12 rounded-full ">
                  {user ? (
                    <img src={user?.photoURL} referrerPolicy="no-referrer" />
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            )}
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
