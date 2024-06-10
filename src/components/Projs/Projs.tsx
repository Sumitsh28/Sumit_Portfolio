import { useContext, useEffect } from "react";
import "./Projs.scss";
import { store } from "../../App";
import Queryboard_Projs from "../Queryboard_Projs/Queryboard_Projs";
import Draggable from "react-draggable";
import ProjectSection from "../ProjectsSection/ProjectSection";

const Projs = () => {
  const [state, _dispatch] = useContext(store);

  useEffect(() => {
    const projsWindow = document.getElementById("projs-window");
    if (state.float.projsBoard && projsWindow) {
      projsWindow.style.zIndex = "8";
    } else {
      if (projsWindow) projsWindow.style.zIndex = "3";
    }
  }, [state.float.projsBoard]);

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
          ${state.projsWindow.projsOpen ? "openProjs" : ""}
          ${state.projsWindow.projsClose ? "closedProjs" : ""}
          ${state.projsWindow.projsMinimize ? "minimizedProjs" : ""}
          ${state.projsWindow.projsStretch ? "stretchedProjs" : ""}
        `}
        id="projs-window"
      >
        <Queryboard_Projs />
        <div className="projs">
          <ProjectSection />
        </div>
      </div>
    </Draggable>
  );
};

export default Projs;
