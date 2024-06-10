import React, { useContext } from "react";
import { store } from "../../App";
import "./Dock.scss";
import {
  cv,
  man,
  suitcase,
  contact,
  github,
  projects,
  linkedin,
  twitter,
  youtube,
  code,
} from "../../resources";

const Dock = () => {
  const [state, dispatch] = useContext(store);
  // const [ isDock, setIsDock ] = useState(false);

  const openWallpaper = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "wallpaper/OPEN" });
  };
  const openProfile = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "profile/OPEN" });
  };
  const openVSCode = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "vscode/OPEN" });
  };

  const openResume = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "resume/OPEN" });
  };

  const openContactus = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "contactus/OPEN" });
  };

  const openAbout = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "about/OPEN" });
  };

  const openExp = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "exp/OPEN" });
  };

  const openProjs = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "projs/OPEN" });
  };

  // const openFinder = (e: React.MouseEvent<HTMLDivElement>) => {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     const finderWindow = document.getElementById('finder-window');
  //     if(finderWindow && finderWindow.classList.contains('finder-close') ){
  //         finderWindow.classList.remove('finder-close');
  //     }
  //     console.log(finderWindow);
  // };

  // useEffect(() => {
  //     setIsDock((prev) => !prev)
  // }, [state.weatherWindow.weatherStretch]);
  return (
    <>
      <div className={`dock`}>
        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""}
                ${
                  state.dockItem === 1
                    ? "distance-1"
                    : state.dockItem === 2
                    ? "distance-2"
                    : ""
                }`}
          id="0"
          // onMouseEnter = {() => {}}
          // onMouseLeave = {() => {}}
          onClick={openResume}
        >
          <div className="tool-tip">Resume</div>
          <img src={cv} alt="Finder" className="dock-icon" />
        </div>

        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""}
                ${
                  state.dockItem === 1
                    ? "distance-1"
                    : state.dockItem === 2
                    ? "distance-2"
                    : state.dockItem === 3
                    ? "distance-3"
                    : ""
                }`}
          id="1"
          onClick={openAbout}
        >
          <div className="tool-tip">About Me</div>
          <img src={man} alt="Calculator" className="dock-icon" />
          <div className="point" />
        </div>
        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""}
                ${
                  state.dockItem === 1
                    ? "distance-1"
                    : state.dockItem === 2
                    ? "distance-2"
                    : state.dockItem === 3
                    ? "distance-3"
                    : ""
                }`}
          id="2"
          // onMouseEnter = {() => {}}
          // onMouseLeave = {() => {}}
          onClick={openExp}
        >
          <div className="tool-tip">Experience</div>
          <img src={suitcase} alt="Photos" className="dock-icon calculator" />
          <div className="point" />
        </div>
        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""}
                ${
                  state.dockItem === 1
                    ? "distance-1"
                    : state.dockItem === 2
                    ? "distance-2"
                    : state.dockItem === 3
                    ? "distance-3"
                    : ""
                }`}
          id="3"
          onClick={openProjs}
        >
          <div className="tool-tip">Projects</div>
          <img src={projects} alt="Calendar" className="dock-icon calculator" />
        </div>
        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""}
                ${
                  state.dockItem === 1
                    ? "distance-1"
                    : state.dockItem === 2
                    ? "distance-2"
                    : state.dockItem === 3
                    ? "distance-3"
                    : ""
                }`}
          id="4"
          onClick={openContactus}
        >
          <div className="tool-tip">Contact Me</div>
          <img src={contact} alt="Discord" className="dock-icon calculator" />
        </div>
        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""}
                ${
                  state.dockItem === 1
                    ? "distance-1"
                    : state.dockItem === 2
                    ? "distance-2"
                    : state.dockItem === 3
                    ? "distance-3"
                    : ""
                }`}
          id="5"
          onClick={() => window.open("https://github.com/Sumitsh28", "_blank")}
        >
          <div className="tool-tip">Github</div>
          <img src={github} alt="Github" className="dock-icon calculator" />
        </div>

        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""}
                ${
                  state.dockItem === 1
                    ? "distance-1"
                    : state.dockItem === 2
                    ? "distance-2"
                    : state.dockItem === 3
                    ? "distance-3"
                    : ""
                }`}
          id="8"
          onClick={() =>
            window.open("https://www.linkedin.com/in/sumitsh28/", "_blank")
          }
        >
          <div className="tool-tip">LinkedIn</div>
          <img src={linkedin} alt="Spotify" className="dock-icon calculator" />
        </div>
        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""}
                ${
                  state.dockItem === 1
                    ? "distance-1"
                    : state.dockItem === 2
                    ? "distance-2"
                    : state.dockItem === 3
                    ? "distance-3"
                    : ""
                }`}
          id="9"
          // onMouseEnter = {() => {}}
          // onMouseLeave = {() => {}}
          onClick={() => window.open("https://twitter.com/SumitSh28", "_blank")}
        >
          <div className="tool-tip">Twitter</div>
          <img src={twitter} alt="VS Code" className="dock-icon calculator" />
        </div>

        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""}
                ${
                  state.dockItem === 1
                    ? "distance-1"
                    : state.dockItem === 2
                    ? "distance-2"
                    : state.dockItem === 3
                    ? "distance-3"
                    : ""
                }`}
          id="10"
          // onMouseEnter = {() => {}}
          // onMouseLeave = {() => {}}
          onClick={() =>
            window.open(
              "https://www.youtube.com/channel/UCx7qK9UZVwBATPHzVS1Sb1w",
              "_blank"
            )
          }
        >
          <div className="tool-tip">Youtube</div>
          <img src={youtube} alt="Weather" className="dock-icon calculator" />
        </div>

        <div
          className={`dock-item ${state.dockItem === 0 ? "hovered" : ""}
                ${
                  state.dockItem === 1
                    ? "distance-1"
                    : state.dockItem === 2
                    ? "distance-2"
                    : state.dockItem === 3
                    ? "distance-3"
                    : ""
                } bin`}
          id="10"
          // onMouseEnter = {() => {}}
          // onMouseLeave = {() => {}}
          onClick={openProfile}
        >
          <div className="tool-tip">Coding Profiles</div>
          <img src={code} alt="Weather" className="dock-icon calculator" />
        </div>
      </div>
    </>
  );
};

export default Dock;
