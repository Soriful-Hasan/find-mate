import React from "react";

const AboutUs = () => {
  return (
    <section className="min-h-screen px-4 py-10 md:px-20 ">
      {/* Our Mission */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-purple-800 mb-3">Our Mission</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our mission is to make finding the perfect roommate simple and
          stress-free. We help you connect with like-minded individuals,
          ensuring a safe and friendly living environment. With our growing
          community and smart match system, you can easily find someone who fits
          your lifestyle.
        </p>
      </div>

      {/* Mission Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        <img
          src="/image1.jpg"
          alt="Mission Image 1"
          className="rounded-lg shadow"
        />
        <img
          src="/image2.jpg"
          alt="Mission Image 2"
          className="rounded-lg shadow"
        />
        <img
          src="/image3.jpg"
          alt="Mission Image 3"
          className="rounded-lg shadow"
        />
        <img
          src="/image4.jpg"
          alt="Mission Image 4"
          className="rounded-lg shadow"
        />
        <img
          src="/image5.jpg"
          alt="Mission Image 5"
          className="rounded-lg shadow"
        />
        <img
          src="/image6.jpg"
          alt="Mission Image 5"
          className="rounded-lg shadow"
        />
      </div>

      {/* What is Baselance? */}

      <div className=" md:gap-8  ">
        <div className="text-center mt-10 mb-10">
          <h3 className="text-2xl font-bold text-purple-800 mb-3">
            What is RoomMateFinder?
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full flex-1  text-gray-600 space-y-4">
            <p>
              RoomMateFinder is a platform dedicated to helping people find
              compatible roommates and affordable living spaces. Launched in
              2020, we’ve been helping users connect based on preferences,
              budget, and location.
            </p>
            <p>
              We provide powerful search filters, profile matching, and verified
              listings to make your roommate search hassle-free. Whether you are
              a student, a working professional, or just moving to a new city,
              RoomMateFinder is here to help.
            </p>
            <p>
              Besides finding roommates, we also host community events, safety
              tips, and provide rental guides to ensure you have a smooth
              shared-living experience.
            </p>
            <p>
              At RoomMateFinder, our mission is to simplify the roommate search
              process and help people build meaningful and safe living
              arrangements. We understand how challenging it can be to find the
              right roommate in a new city or even within your own town.
            </p>
            <p>
              At RoomMateFinder, our mission is to simplify the roommate search
              process and help people build meaningful and safe living
              arrangements. We understand how challenging it can be to find the
              right roommate in a new city or even within your own town.
            </p>
          </div>
          <div className="flex-1">
            <img src="/aboutlocation.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
