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
      className={`footer sm:footer-horizontal shadow-sm p-10 ${
        light ? "bg-white text-black" : "bg-[#191E24] text-white"
      }`}
    >
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <aside className="space-y-2">
          <img src="/logo.png" alt="Logo" width={30} height={30} />
          <p>
            <a
              className={`text-sm lg:text-xl font-semibold ${
                theme === "light" ? "text-black" : "text-white"
              }`}
            >
              Find<span className="font-bold ml-1">Mate</span>
            </a>
            <br />
            Connecting Roommate care, since - 2025
          </p>
          <div className="flex gap-4">
            <a
              href="..."
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaInstagram size={24} color="#E1306C" />
            </a>
            <a
              href="..."
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <MdFacebook size={24} color="#1877F2" />
            </a>
            <a
              href="..."
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaYoutube size={24} color="#FF0000" />
            </a>
            <a
              href="..."
              target="_blank"
              rel="noreferrer"
              className="hover:scale-110 transition"
            >
              <FaTelegram size={24} color="#229ED9" />
            </a>
          </div>
        </aside>

        {/* Services Links */}
        <nav>
          <h6 className="footer-title">Services</h6>
          <div className="flex flex-col gap-3">
            <NavLink
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="link link-hover"
            >
              Home
            </NavLink>
            <NavLink
              to="/findRoommate"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="link link-hover"
            >
              Add Roommate
            </NavLink>
            <NavLink
              to="/browseListing"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="link link-hover"
            >
              Browse Listing
            </NavLink>
            <NavLink
              to="/myListing"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="link link-hover"
            >
              My Listing
            </NavLink>
          </div>
        </nav>

        {/* Company Info */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <div className="flex flex-col gap-2">
            <a className="link link-hover">About RoommateFind</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Blog</a>
          </div>
        </nav>

        {/* Policies */}
        <nav>
          <h6 className="footer-title">Terms & Condition</h6>
          <div className="flex flex-col gap-3">
            <a className="link link-hover">Privacy Policy</a>
            <a className="link link-hover">Community Guidelines</a>
            <a className="link link-hover">Safety Tips</a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
