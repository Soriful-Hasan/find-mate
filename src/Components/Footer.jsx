import React, { useContext } from "react";
import { userContext } from "../Authentication/AuthProvider";
import { NavLink } from "react-router";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  const { theme } = useContext(userContext);
  const light = theme == "light";
  return (
    <footer
      className={`${
        light
          ? "footer sm:footer-horizontal shadow-sm bg-white text-black p-10 "
          : "footer sm:footer-horizontal shadow-sm bg-[#191E24] text-white p-10"
      }`}
    >
      <aside className="space-y-2">
        <img height={30} width={30} src="/logo.png" alt="" />
        <p>
          <a
            className={`${
              theme == "light"
                ? "text-black text-sm lg:text-xl  font-semibold"
                : "text-white text-sm lg:text-xl  font-semibold"
            }`}
          >
            Find
            <span className="font-bold ml-1">Mate</span>
          </a>
          <br />
          Connecting Roommate care, since - 2025
        </p>
        <div className="flex gap-4 ">
          <a href="https://www.instagram.com/hasibhasan1642/" target="_blank">
            <FaInstagram size={24}></FaInstagram>
          </a>
          <a href="https://www.facebook.com/sorifulhasan300" target="_blank">
            <MdFacebook size={24}></MdFacebook>
          </a>
          <a href="https://www.youtube.com/@sorifullhasan3818" target="_blank">
            <FaYoutube size={24}></FaYoutube>
          </a>
          <a href="https://telegram.org/" target="_blank">
            <FaTelegram size={24}></FaTelegram>
          </a>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <NavLink
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/"}
          className="link link-hover"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/findRoommate"}
          className="link link-hover"
        >
          Add Roommate
        </NavLink>
        <NavLink
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/browseListing"}
          className="link link-hover"
        >
          Browse Listing
        </NavLink>
        <NavLink
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          to={"/myListing"}
          className="link link-hover"
        >
          My Listing
        </NavLink>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About RoommateFind</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Blog</a>
      </nav>
      <nav>
        <h6 className="footer-title">Terms & Condition</h6>
        <a className="link link-hover">Privacy Policy</a>
        <a className="link link-hover">Community Guidelines</a>
        <a className="link link-hover">Safety Tips</a>
      </nav>
    </footer>
  );
};

export default Footer;
