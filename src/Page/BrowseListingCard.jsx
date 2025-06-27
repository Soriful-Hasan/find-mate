import React from "react";
import { Helmet } from "react-helmet-async";
import { BsHouseFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import { ImLocation } from "react-icons/im";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from "react-router";

const BrowseListingCard = ({ data, theme }) => {
  const isLight = theme === "light";
  return (
    <>
      {data.map((data) => (
        <div
          key={data._id}
          className={`card shadow-sm card-md overflow-hidden rounded-lg ${
            isLight ? "bg-base-100" : "bg-[#191E24]"
          }`}
        >
          {/* Room Image Top */}
          <figure>
            <img
              src={data.roomPhoto}
              alt={data.title}
              className="w-full h-48 object-cover"
            />
          </figure>

          <div className="card-body">
            {/* common text color class */}
            {(() => {
              const textColor = isLight ? "text-black" : "text-white";
              const iconTextClass = `${textColor} flex place-items-center gap-2`;
              const descriptionClass = `${textColor} line-clamp-2 overflow-hidden text-ellipsis`;

              return (
                <>
                  <h2 className={`card-title ${textColor}`}>{data.title}</h2>

                  <p className={iconTextClass}>
                    <ImLocation color="#FF4C4C" />
                    {data.Location}
                  </p>

                  <p className={iconTextClass}>
                    <TbCoinTakaFilled color="#23BE0A" />
                    {data.amount}
                  </p>

                  <p className={iconTextClass}>
                    <BsHouseFill color="#1E90FF" />
                    {data.roomType}
                  </p>

                  <p className={iconTextClass}>
                    <GoCheckCircleFill color="#23BE0A" />
                    {data.availability}
                  </p>

                  <p className={descriptionClass}>{data.description}</p>

                  <div className="justify-end card-actions">
                    <Link
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                      to={`/roommateDetails/${data._id}`}
                      className="btn bg-[#23BE0A] text-white rounded-lg"
                    >
                      See More <FaLongArrowAltRight />
                    </Link>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      ))}
    </>
  );
};

export default BrowseListingCard;
