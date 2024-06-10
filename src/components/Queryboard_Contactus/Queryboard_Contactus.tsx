import React, { useContext } from "react";
import { store } from "../../App";

import "./Queryboard_Contactus.scss";
import QueryBoardLinks_Contactus from "../QueryBoardLinks_Contactus/QueryBoardLinks_Contactus";

const Queryboard_Contactus = () => {
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
      <QueryBoardLinks_Contactus />
    </div>
  );
};

export default Queryboard_Contactus;
