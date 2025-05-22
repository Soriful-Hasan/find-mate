import React, { useContext } from "react";
import { userContext } from "../../Authentication/AuthProvider";

const UserSay = () => {
  const { theme } = useContext(userContext);
  const light = theme == "light";
  console.log(light);
  const data = [
    {
      review:
        "I was really stressed about finding a roommate, but this platform made it so simple. Within 24 hours, I connected with someone who was a great fit. The process was smooth and super user-friendly!",
      name: "don jo",
      position: "senior manager",
      img: "https://img.freepik.com/free-psd/portrait-man-teenager-isolated_23-2151745771.jpg?semt=ais_hybrid&w=740",
    },
    {
      review:
        "Posting my shared room took less than five minutes, and I started receiving responses almost immediately. The interface is clean, and everything feels secure and professional.",
      name: "Jihad rof",
      position: "senior manager",
      img: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    },
    {
      review:
        "What I loved most was the filtering options. I could search by lifestyle, budget, and location—made it so easy to find someone who matched my preferences perfectly.",
      name: "Junayed Hok",
      position: "senior manager",
      img: "https://media.istockphoto.com/id/1253034955/photo/portrait-of-young-handsome-smiling-man-dressed-in-shirt-and-eyeglasses-standing-with-arms.jpg?s=612x612&w=0&k=20&c=PoGofmoSzId2NOMpEzXWgiZMK6y-VGKgIKa6awPT4qM=",
    },
    {
      review:
        "I was worried about safety, but this website made me feel confident throughout. Everyone I interacted with was verified, and the support team was responsive and friendly.",
      name: "Isfak Hok",
      position: "senior manager",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      review:
        "This site honestly exceeded my expectations. It’s better than most other roommate apps I’ve tried. Great design, fast loading, and real users looking for real connections.",
      name: "Jisan Hasan",
      position: "senior manager",
      img: "https://t3.ftcdn.net/jpg/10/42/56/90/360_F_1042569030_ftNnbSjmc647kFj3aVxc9IPG06sb2FaY.jpg",
    },
    {
      review:
        "I met my current roommate here and we've been sharing an apartment happily for 3 months now. It’s a reliable site and made the whole roommate-finding process stress-free!",
      name: "Isfak jihan",
      position: "senior manager",
      img: "https://t3.ftcdn.net/jpg/01/70/55/14/360_F_170551453_pyOx70HmcDXgP5sLUBUQ5ReeaWDIEaut.jpg",
    },
  ];

  return (
    <div className=" my-8 mt-20">
      <div
        className={`${
          light ? "text-center mb-8" : "text-center mb-8 text-white"
        }`}
      >
        <h1 className="text-2xl font-bold">What Our Users Say</h1>
        <p>Genuine Reviews from job Seekers and Employers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((info) => (
          <div
            className={`${
              light ? "card bg-base-100  shadow-sm" : "bg-[#191E24]"
            }`}
          >
            <div className="card-body space-y-4">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label="2 star"
                  defaultChecked
                />
              </div>
              <p className={`${light ? "text-gray-700" : "text-white"}`}>
                {info.review}
              </p>
              <div className="">
                <div className=" flex gap-4">
                  <div className="avatar">
                    <div className=" w-10 rounded-full ring-2 ">
                      <img src={info.img} />
                    </div>
                  </div>
                  <div className={`${light ? "" : "text-white"}`}>
                    <h2 className=" font-bold w-full">{info.name}</h2>
                    <p className={`${light ? "text-gray-600" : "text-white"}`}>
                      {info.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSay;
