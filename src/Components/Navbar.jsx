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
import { LuLogIn } from "react-icons/lu";
import { MdSunny } from "react-icons/md";
import ProfileDropdown from "./DropDown/DropDown";
import { BiSupport } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";

const Navbar = () => {
  const { user, userSignOut, loading, handleToggle, theme } =
    useContext(userContext);

  const link = [
    <div className="flex items-center flex-col  xl:gap-4  lg:flex-row">
      <NavLink
        to={"/"}
        className={({ isActive }) => {
          if (isActive) {
            return theme == "light"
              ? "text-[#23BE0A] py-2 px-4 "
              : "text-white bg-gray-800 rounded  py-2 px-4 ";
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
        to={"/dashboard/dashBoardMain"}
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
        <span className="flex items-center gap-2">Dash Board</span>
      </NavLink>

      <NavLink
        to={"/browseListing"}
        className={({ isActive }) => {
          if (isActive) {
            return theme == "light"
              ? "text-[#23BE0A] py-2 px-4 "
              : "text-white bg-gray-800 rounded  py-2 px-4 ";
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
        to={"/contact"}
        className={({ isActive }) => {
          if (isActive) {
            return theme == "light"
              ? "text-[#23BE0A] py-2 px-4 "
              : "text-white bg-gray-800 rounded  py-2 px-4 ";
          } else {
            return theme === "light"
              ? "text-black py-2 px-4"
              : "text-white py-2 px-4";
          }
        }}
      >
        <span className="flex items-center gap-2">
          <BiMessageDetail /> Contact
        </span>
      </NavLink>
      <NavLink
        to={"/about"}
        className={({ isActive }) => {
          if (isActive) {
            return theme == "light"
              ? "text-[#23BE0A] py-2 px-4 "
              : "text-white bg-gray-800 rounded  py-2 px-4 ";
          } else {
            return theme === "light"
              ? "text-black py-2 px-4"
              : "text-white py-2 px-4";
          }
        }}
      >
        <span className="flex items-center gap-2">
          <BiSupport /> about
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
    <div className="">
      <div
        className={`navbar fixed top-0 z-50 shadow-sm ${
          theme === "light" ? "bg-white" : "bg-[#191E24]"
        }`}
      >
        <div className="w-11/12 mx-auto flex justify-between items-center">
          {/* Navbar Start */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <RiMenu3Line
                  size={25}
                  color={theme === "light" ? "black" : "white"}
                />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>

            {/* Logo & Title */}
            <div className="lg:flex items-center gap-4 hidden lg:block">
              <img src="/logo.png" alt="Logo" width={30} height={30} />
              <a
                className={`text-sm lg:text-xl font-semibold ${
                  theme === "light" ? "text-black" : "text-white"
                }`}
              >
                Find<span className="font-bold ml-1">Mate</span>
              </a>
            </div>
          </div>

          {/* Navbar End (everything on right) */}
          <div className="navbar-end space-x-5">
            {/* Desktop Menu (Right Aligned) */}
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{link}</ul>
            </div>
            {/* Theme Toggle */}
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
                onChange={handleToggle}
              />
              <span
                className={
                  theme === "light"
                    ? "bg-gray-100 rounded-full p-2 "
                    : "bg-gray-800 hover:bg-gray-900 rounded-full p-2"
                }
              >
                <MdSunny
                  size={20}
                  color={theme === "light" ? "black " : "white"}
                />
              </span>
            </label>
            {/* User Avatar or Loading */}
            {loading ? (
              <span
                className={`loading loading-ring loading-xl ${
                  theme !== "light" && "text-white"
                }`}
              />
            ) : (
              user && (
                <div className="">
                  <ProfileDropdown user={user} handleSignOut={handleSignOut} />
                </div>
              )
            )}

            {/* Auth Buttons */}
            {loading ? (
              <span
                className={`loading loading-ring loading-xl ${
                  theme !== "light" && "text-white"
                }`}
              />
            ) : user ? (
              <div></div>
            ) : (
              <div className="flex gap-4">
                <Link
                  to="/login"
                  className={` text-lg flex text-white py-1 px-4 rounded-lg font-medium gap-2 items-center ${
                    theme === "light"
                      ? "hover:bg-green-500 bg-[#23BE0A]"
                      : "text-white bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  <LuLogIn /> Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
