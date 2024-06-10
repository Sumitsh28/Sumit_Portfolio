import { useContext, useEffect } from "react";
import "./Exp.scss";
import { store } from "../../App";
import Queryboard_Exp from "../Queryboard_Exp/Queryboard_Exp";
import Draggable from "react-draggable";
import Experience from "./Experience";
import Timeline from "./Timeline";

const Exp = () => {
  const [state, _dispatch] = useContext(store);

  useEffect(() => {
    const expWindow = document.getElementById("exp-window");
    if (state.float.expBoard && expWindow) {
      expWindow.style.zIndex = "8";
    } else {
      if (expWindow) expWindow.style.zIndex = "3";
    }
  }, [state.float.expBoard]);

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
          ${state.expWindow.expOpen ? "openExp" : ""}
          ${state.expWindow.expClose ? "closedExp" : ""}
          ${state.expWindow.expMinimize ? "minimizedExp" : ""}
          ${state.expWindow.expStretch ? "stretchedExp" : ""}
        `}
        id="exp-window"
      >
        <Queryboard_Exp />
        <div className="exp">
          <Timeline />
        </div>
      </div>
    </Draggable>
  );
};

export default Exp;
