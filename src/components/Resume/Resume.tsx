import { useContext, useEffect, useState } from "react";
import "./Resume.scss";
import { store } from "../../App";
import Draggable from "react-draggable";
import Queryboard_Resume from "../Queryboard_Resume/Queryboard_Resume";
import ResumeMain from "./ResumeMain";

const Resume = () => {
  const [state, _dispatch] = useContext(store);

  useEffect(() => {
    const resumeWindow = document.getElementById("resume-window");
    if (state.float.resumeBoard && resumeWindow) {
      resumeWindow.style.zIndex = "8";
    } else {
      if (resumeWindow) resumeWindow.style.zIndex = "3";
    }
  }, [state.float.resumeBoard]);

  return (
    <Draggable
      handle="#handle"
      onStart={(e: any) => {
        if (e.target.id !== "handle") {
          return false;
        }
      }}
    >
      <div
        className={`window weather-window
          ${state.resumeWindow.resumeOpen ? "openResume" : ""}
          ${state.resumeWindow.resumeClose ? "closedResume" : ""}
          ${state.resumeWindow.resumeMinimize ? "minimizedResume" : ""}
          ${state.resumeWindow.resumeStretch ? "stretchedResume" : ""}
        `}
        id="resume-window"
      >
        <Queryboard_Resume />
        <div className="resume">
          <ResumeMain />
        </div>
      </div>
    </Draggable>
  );
};

export default Resume;
