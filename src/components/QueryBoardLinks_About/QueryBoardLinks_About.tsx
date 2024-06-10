import React, { useContext } from "react";
import { store } from "../../App";
import "./QueryBoardlinks_About.scss";

import { GrFormClose, GrFormSubtract } from "react-icons/gr";
import { CgExpand } from "react-icons/cg";

const QueryBoardLinks_About = () => {
  const [_state, dispatch] = useContext(store);

  const closeWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Weather");
    dispatch({
      type: "about/CLOSE",
    });
  };

  const minimizeWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Weather");
    dispatch({
      type: "about/MINI",
    });
  };

  const stretchWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Weather");
    dispatch({
      type: "about/STRETCH",
    });
  };

  return (
    <div className="links">
      <div className="dots">
        <div className="dot red" id="dot1w" onClick={closeWindow}>
          <GrFormClose className="close" />
        </div>
        <div className="dot yellow" id="dot2w" onClick={minimizeWindow}>
          <GrFormSubtract className="minimize" />
        </div>
        <div className="dot green" id="dot3w" onClick={stretchWindow}>
          <CgExpand className="stretch" />
        </div>
      </div>
    </div>
  );
};

export default QueryBoardLinks_About;
