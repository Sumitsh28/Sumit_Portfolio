import { useContext, useEffect } from "react";
import "./Profile.scss";
import { store } from "../../App";
import Queryboard_Profile from "../Queryboard_Profile/Queryboard_Profile";

import Draggable from "react-draggable";
import About_Profile from "./About";

const Profile = () => {
  const [state, _dispatch] = useContext(store);

  useEffect(() => {
    const profileWindow = document.getElementById("profile-window");
    if (state.float.profileBoard && profileWindow) {
      profileWindow.style.zIndex = "8";
    } else {
      if (profileWindow) profileWindow.style.zIndex = "3";
    }
  }, [state.float.profileBoard]);

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
          ${state.profileWindow.profileOpen ? "openProfile" : ""}
          ${state.profileWindow.profileClose ? "closedProfile" : ""}
          ${state.profileWindow.profileMinimize ? "minimizedProfile" : ""}
          ${state.profileWindow.profileStretch ? "stretchedProfile" : ""}
        `}
        id="profile-window"
      >
        <Queryboard_Profile />
        <div className="card">
          <About_Profile />
        </div>
      </div>
    </Draggable>
  );
};

export default Profile;
