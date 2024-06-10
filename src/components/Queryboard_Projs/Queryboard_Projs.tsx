import React, { useContext } from "react";
import { store } from "../../App";

import "./Queryboard_Projs.scss";
import QueryBoardLinks_Projs from "../QueryBoardLinks_Projs/QueryBoardLinks_Projs";

const Queryboard_Projs = () => {
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
      <QueryBoardLinks_Projs />
    </div>
  );
};

export default Queryboard_Projs;
