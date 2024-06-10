import "./Details1.scss";
import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect } from "react";
import Logo from "../Logo/Logo";
import Details2 from "../Details2/Details2";
import Showcase from "../Showcase";

const Details1 = () => {
  const [letterClass, setLetterClass] = useState("text__animate");
  const nameArray = "umit".split("");
  const jobArray = " A Web Developer".split("");
  const spaceBetween = { marginRight: "25px" };

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text__animate__hover");
    }, 5000);
  }, []);
  return (
    <>
      <span className="tags">
        &lt;html&gt;
        <br />
        <span className="lower">&lt;body&gt;</span>
      </span>

      <div className="home__wrapper">
        <div className="home__inner">
          <div className="text__zone">
            <h1>
              <span className={letterClass}>नमस्ते</span>
              , <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>’</span>
              <span className={`${letterClass} _15`}>m</span>
              {"  "}
              <span className="name">S</span>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              ,
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={22}
              />
              <span>.</span>
            </h1>
            <h2>Full Stack Web Developer & ML Enthusiast</h2>
            <p>
              EAT
              <span className="span1" style={spaceBetween}>
                ();
              </span>{" "}
              CODE
              <span className="span2" style={spaceBetween}>
                ();
              </span>{" "}
              CREATE
              <span className="span3" style={spaceBetween}>
                ();
              </span>{" "}
              SLEEP
              <span className="span4" style={spaceBetween}>
                ();
              </span>{" "}
              REPEAT
              <span className="span5" style={spaceBetween}>
                ();
              </span>
            </p>
          </div>

          <div className="image__zone">
            <Logo />
          </div>
        </div>
        <div>
          <Details2 />
        </div>

        <div className="showcase">
          <Showcase />
        </div>
      </div>

      <span className="tags">
        <span className="lower">&lt;/body&gt;</span>
        <br />
        <span>&lt;/html&gt;</span>
      </span>
    </>
  );
};

export default Details1;
