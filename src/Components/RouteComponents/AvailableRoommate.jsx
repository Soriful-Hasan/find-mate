import React, { useContext } from "react";
import { BsHouseFill } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoCheckCircleFill } from "react-icons/go";
import { ImLocation } from "react-icons/im";
import { TbCoinTakaFilled } from "react-icons/tb";
import { Link } from "react-router";
import { userContext } from "../../Authentication/AuthProvider";

const AvailableRoommate = ({ singleData }) => {
  const { theme } = useContext(userContext);
  const isLight = theme === "light";

  return (
    <div>
      {/* parent div */}
      <div
        className={`${
          isLight ? "card bg-base-100 card-md shadow-sm" : "bg-[#191E24] card"
        }`}
      >
        <div className="card-body">
          <h2
            className={`card-title ${
              isLight ? "text-[#23BE0A]" : "text-white"
            }  `}
          >
            {singleData.title}
          </h2>
          <p
            className={` ${
              isLight
                ? "text-[#23BE0A] flex place-items-center gap-2"
                : "text-white flex place-items-center gap-2"
            }  `}
          >
            <ImLocation color="#FF4C4C" />
            {singleData.Location}
          </p>
          <p
            className={` ${
              isLight
                ? "text-[#23BE0A] flex place-items-center gap-2"
                : "text-white flex place-items-center gap-2"
            }  `}
          >
            <TbCoinTakaFilled color="#23BE0A" />
            {singleData.amount}
          </p>
          <p
            className={` ${
              isLight
                ? "text-[#23BE0A] flex place-items-center gap-2"
                : "text-white flex place-items-center gap-2"
            }  `}
          >
            <BsHouseFill color="#1E90FF" />
            {singleData.roomType}
          </p>
          <p
            className={` ${
              isLight
                ? "text-[#23BE0A] flex place-items-center gap-2"
                : "text-white flex place-items-center gap-2"
            }  `}
          >
            <GoCheckCircleFill color="#23BE0A" />
            {singleData.availability}
          </p>
          <p
            className={` ${
              isLight
                ? "text-[#23BE0A] line-clamp-2 overflow-hidden text-ellipsis"
                : "text-white line-clamp-2 overflow-hidden text-ellipsis"
            }  `}
          >
            {singleData.description} this arean and our distric new room and bes
            outside inviroment and realy and our new
          </p>
          <div className="justify-end card-actions">
            <Link
              to={`/roommateDetails/${singleData._id}`}
              className="btn bg-[#23BE0A] text-white rounded-lg"
            >
              See More <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableRoommate;
