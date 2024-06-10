import React, { useContext } from "react";
import { store } from "../../App";

import "./Queryboard_Exp.scss";
import QueryBoardLinks_Exp from "../QueryBoardLinks_Exp/QueryBoardLinks_Exp";

const Queryboard_Exp = () => {
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
      <QueryBoardLinks_Exp />
    </div>
  );
};

export default Queryboard_Exp;
