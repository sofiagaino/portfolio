import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Businnes Software Developer",
          "Studentessa di JobAcademy",
          "Studentessa di UniNettuno"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        color: "red"
      }}
    />
  );
}

export default Type;
