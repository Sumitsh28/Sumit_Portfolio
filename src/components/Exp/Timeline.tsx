import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Experience from "./Experience";
import "./Timeline.scss";
import Education from "./Education";

const Timeline = () => {
  const [letterClass, setLetterClass] = useState("text__animate");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);

    setTimeout(() => {
      setLetterClass("text__animate__hover");
    }, 6000);
  }, []);
  return (
    <>
      <span className="tags">
        &lt;html&gt;
        <br />
        <span className="lower">&lt;body&gt;</span>
      </span>

      <div className="text__zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"My Work Experience".split("")}
            idx={15}
          />
        </h1>
      </div>

      <Experience />

      <div className="text__zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"My Education".split("")}
            idx={15}
          />
        </h1>
      </div>

      <Education />

      <span className="tags">
        <span className="lower">&lt;/body&gt;</span>
        <br />
        <span>&lt;/html&gt;</span>
      </span>
    </>
  );
};

export default Timeline;
