import styled from "styled-components";
import Carousel from "./Carousel";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import "./About.scss";

const About_Profile = () => {
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
      <Section id="about">
        <Box className="text__zonee">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"My Coding Profiles".split("")}
              idx={15}
            />
          </h1>
        </Box>
        <div style={{ scale: "80%" }}>
          <Carousel />
        </div>
      </Section>
    </>
  );
};

const Section = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Box = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

export default About_Profile;
