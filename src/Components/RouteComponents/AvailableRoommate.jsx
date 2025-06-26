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
        className={`card shadow-sm card-md ${
          isLight ? "bg-base-100" : "bg-[#191E24]"
        }`}
      >
        <div className="card-body">
          {/* common text color class */}
          {(() => {
            const textColor = isLight ? "text-black" : "text-white";
            const iconTextClass = `${textColor} flex place-items-center gap-2`;
            const descriptionClass = `${textColor} line-clamp-2 overflow-hidden text-ellipsis`;

            return (
              <>
                <h2 className={`card-title ${textColor}`}>
                  {singleData.title}
                </h2>

                <p className={iconTextClass}>
                  <ImLocation color="#FF4C4C" />
                  {singleData.Location}
                </p>

                <p className={iconTextClass}>
                  <TbCoinTakaFilled color="#23BE0A" />
                  {singleData.amount}
                </p>

                <p className={iconTextClass}>
                  <BsHouseFill color="#1E90FF" />
                  {singleData.roomType}
                </p>

                <p className={iconTextClass}>
                  <GoCheckCircleFill color="#23BE0A" />
                  {singleData.availability}
                </p>

                <p className={descriptionClass}>{singleData.description}</p>

                <div className="justify-end card-actions">
                  <Link
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    to={`/roommateDetails/${singleData._id}`}
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
    </div>
  );
};

export default AvailableRoommate;
