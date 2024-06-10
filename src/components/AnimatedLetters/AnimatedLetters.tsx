import React from "react";
import "./AnimatedLetters.scss";

const AnimatedLetters = ({ strArray, idx }) => {
  return (
    <span>
      {strArray.map((letter, index) => {
        return (
          <span key={index} className={`text__animate _${index + idx}`}>
            {letter}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedLetters;
