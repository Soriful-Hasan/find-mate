import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const TypeWriter = () => {
  const [text] = useTypewriter({
    words: [
      " Find the right roommate in just a few clicks",
      " Simplifying your search for a perfect co-living partner",
      " Safe, smart, and stress-free roommate matching",
      " A better way to share your space starts here",
    ],
    loop: 0,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
  return (
    <div className="App">
      <span>{text}</span>
      <Cursor cursorColor="red" />
    </div>
  );
};

export default TypeWriter;
