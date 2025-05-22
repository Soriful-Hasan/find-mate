import React from "react";
import { Typewriter } from "react-simple-typewriter";
const TypRiter = () => {
  return (
    <div className="App">
      <h1
        style={{ paddingTop: "5rem", margin: "auto 0", fontWeight: "normal" }}
      >
        <span style={{ color: "green-500", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[
              "Easy to find Roommate on our website",
              "Our website is best solution for finding roommate",
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypRiter;
