import React, { useContext } from "react";
import { store } from "../../App";
import "./QueryBoardlinks_Resume.scss";

import { GrFormClose, GrFormSubtract } from "react-icons/gr";
import { CgExpand } from "react-icons/cg";
import { MdDownload } from "react-icons/md";
import resume from "../../assets/Sumit_Resume.pdf";

const QueryBoardLinks_Resume = () => {
  const [_state, dispatch] = useContext(store);

  const closeWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Weather");
    dispatch({
      type: "resume/CLOSE",
    });
  };

  const minimizeWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Weather");
    dispatch({
      type: "resume/MINI",
    });
  };

  const stretchWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Weather");
    dispatch({
      type: "resume/STRETCH",
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

      <button>
        <a href={resume} target="_blank" download>
          <MdDownload size={20} color="white" />
        </a>
      </button>
    </div>
  );
};

export default QueryBoardLinks_Resume;
