import React from "react";
import { Link } from "react-router";

const AvailableRoommate = ({ singleData }) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Card Title
            <div className="badge badge-secondary">
              {singleData.availability}
            </div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
        <Link to={`/roommateDetails/${singleData._id}`} className="btn">
          details
        </Link>
      </div>
    </div>
  );
};

export default AvailableRoommate;
