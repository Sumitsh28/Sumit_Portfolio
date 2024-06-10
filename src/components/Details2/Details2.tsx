import "./Details2.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const Details2 = () => {
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState("text__animate");
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
      {loading ? (
        <Loader type="pacman" />
      ) : (
        <div className="about__ctn">
          <div className="about__inner">
            <div className="flex__ctn">
              <div className="text__zone">
                <h1>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"About me".split("")}
                    idx={15}
                  />
                </h1>
                <p>I&apos;m Sumit Shandillya, student at IIT-BHU,Varanasi.</p>

                <p>
                  I&apos;m a full stack web developer and a ML Enthusiast with a
                  passion for creating beautiful and functional websites with
                  technologies like React, Nextjs, Redux, Nodejs, Express,
                  MongoDB, Typescript, Styled Component, SASS etc.
                </p>
                <p>
                  I&apos;m very ambitious and I&apos;m looking for a role as a
                  Software Developer with the oportunity to work with the latest
                  technologies on challenging and diverse projects.
                </p>
                <p>
                  I&apos;m quite confident, naturally curious and pertually
                  working on improving my skills one step at a time.
                </p>
              </div>

              <div className="skills__cube">
                <div className="cube__spinner">
                  <div className="face__1">
                    <FontAwesomeIcon icon={faReact} color="#61dafb" size="3x" />
                  </div>
                  <div className="face__2">
                    <FontAwesomeIcon
                      icon={faCss3}
                      color="
                #264de4"
                      size="3x"
                    />
                  </div>
                  <div className="face__3">
                    <FontAwesomeIcon
                      icon={faHtml5}
                      color="
                #e34c26"
                      size="3x"
                    />
                  </div>
                  <div className="face__4">
                    <FontAwesomeIcon
                      icon={faJsSquare}
                      color="
                #f0db4f"
                      size="3x"
                    />
                  </div>
                  <div className="face__5">
                    <FontAwesomeIcon
                      icon={faNodeJs}
                      color="
                #3c873a"
                      size="3x"
                    />
                  </div>
                  <div className="face__6">
                    <FontAwesomeIcon icon={faSass} color="#cc6699" size="3x" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details2;
