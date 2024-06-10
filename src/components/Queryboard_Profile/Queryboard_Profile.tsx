import React, { useContext } from "react";
import { store } from "../../App";

import "./Queryboard_Profile.scss";
import QueryBoardLinks_Profile from "../QueryBoardLinks_Profile/QueryBoardLinks_Profile";

const Queryboard_Profile = () => {
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
      <QueryBoardLinks_Profile />
    </div>
  );
};

export default Queryboard_Profile;
