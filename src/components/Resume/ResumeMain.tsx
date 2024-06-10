import React, { useEffect, useState } from "react";
import resume from "../../assets/Sumit_Resume.pdf";
import { Box } from "@chakra-ui/react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const ResumeMain = () => {
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
    <div style={{ height: "100%" }}>
      <span className="tags">
        &lt;html&gt;
        <br />
        <span className="lower">&lt;body&gt;</span>
      </span>

      <Box className="text__zonee" style={{ marginLeft: "10px" }}>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"My Resume".split("")}
            idx={15}
          />
        </h1>
      </Box>

      <iframe
        src={resume}
        style={{
          width: "100%",
          height: "100%",
          marginTop: "60px",
          marginBottom: "60px",
        }}
      />
      <span className="tags">
        <span className="lower">&lt;/body&gt;</span>
        <br />
        <span>&lt;/html&gt;</span>
      </span>
    </div>
  );
};

export default ResumeMain;
