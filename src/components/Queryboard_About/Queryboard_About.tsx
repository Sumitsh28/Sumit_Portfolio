import React, { useContext } from "react";
import { store } from "../../App";

import "./Queryboard_About.scss";
import QueryBoardLinks_About from "../QueryBoardLinks_About/QueryBoardLinks_About";

const Queryboard_About = () => {
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
      <QueryBoardLinks_About />
    </div>
  );
};

export default Queryboard_About;
