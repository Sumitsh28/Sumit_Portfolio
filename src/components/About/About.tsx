import { useContext, useEffect } from "react";
import "./About.scss";
import { store } from "../../App";
import Queryboard_About from "../Queryboard_About/Queryboard_About";

import Draggable from "react-draggable";
import Details1 from "../Details1/Details1";

const About = () => {
  const [state, _dispatch] = useContext(store);

  useEffect(() => {
    const aboutWindow = document.getElementById("about-window");
    if (state.float.aboutBoard && aboutWindow) {
      aboutWindow.style.zIndex = "8";
    } else {
      if (aboutWindow) aboutWindow.style.zIndex = "3";
    }
  }, [state.float.aboutBoard]);

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
          ${state.aboutWindow.aboutOpen ? "openAbout" : ""}
          ${state.aboutWindow.aboutClose ? "closedAbout" : ""}
          ${state.aboutWindow.aboutMinimize ? "minimizedAbout" : ""}
          ${state.aboutWindow.aboutStretch ? "stretchedAbout" : ""}
        `}
        id="about-window"
      >
        <Queryboard_About />
        <div className="details">
          <Details1 />
        </div>
      </div>
    </Draggable>
  );
};

export default About;
