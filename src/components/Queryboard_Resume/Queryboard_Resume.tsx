import React, { useContext } from "react";
import { store } from "../../App";

import "./Queryboard_Resume.scss";
import QueryBoardLinks_Resume from "../QueryBoardLinks_Resume/QueryBoardLinks_Resume";

const Queryboard_Resume = () => {
  const [_state, dispatch] = useContext(store);

  const floatWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Wallpaper");
    dispatch({
      type: "weather/Z-SELECT",
    });
  };
  return (
    <div className="queryboard" id="handle" onClick={floatWindow}>
      <QueryBoardLinks_Resume />
    </div>
  );
};

export default Queryboard_Resume;
