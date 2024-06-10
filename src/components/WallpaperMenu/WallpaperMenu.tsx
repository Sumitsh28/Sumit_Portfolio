import React, { useContext, useEffect } from "react";
import "./WallpaperMenu.scss";
import { store } from "../../App";
import { GrFormClose, GrFormSubtract } from "react-icons/gr";
import { CgExpand } from "react-icons/cg";
import Draggable from "react-draggable";
import {
  catalina,
  preview_catalina,
  ventura,
  preview_ventura,
  dome,
  preview_dome,
  lake,
  preview_lake,
  bigsur,
  preview_bigsur,
  bigsurgraphic,
  preview_bigsurgraphic,
  iridescence,
  preview_iridescence,
  mojave,
  preview_mojave,
  monterey,
  preview_monterey,
  solargrad,
  preview_solargrad,
  peak,
  preview_peak,
  thedesert,
  preview_thedesert,
} from "../../resources";

const WallpaperMenu = () => {
  const [state, dispatch] = useContext(store);

  const wallPaper = [
    [bigsur, preview_bigsur, "Bigsur"],
    [bigsurgraphic, preview_bigsurgraphic, "Bigsurgraphic"],
    [catalina, preview_catalina, "Catalina"],
    [dome, preview_dome, "Dome"],
    [iridescence, preview_iridescence, "Iridescence"],
    [lake, preview_lake, "Lake"],
    [mojave, preview_mojave, "Mojave"],
    [monterey, preview_monterey, "Monterey"],
    [solargrad, preview_solargrad, "Solargrad"],
    [peak, preview_peak, "Peak"],
    [thedesert, preview_thedesert, "The Desert"],
    [ventura, preview_ventura, "Ventura"],
  ];

  const changeWallper = (e: React.MouseEvent<HTMLElement>, wally: string[]) => {
    e.preventDefault();

    console.log(wally[0]);

    dispatch({
      type: "wallpaper/CHANGE",
      payload: wally[0],
    });
  };

  const closeWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Wallpaper");
    dispatch({
      type: "wallpaper/CLOSE",
    });
  };

  const minimizeWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Wallpaper");
    dispatch({
      type: "wallpaper/MINI",
    });
  };

  const stretchWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Wallpaper");
    dispatch({
      type: "wallpaper/STRETCH",
    });
  };

  const floatWindow = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("button clicked!! Wallpaper");
    dispatch({
      type: "wallpaper/Z-SELECT",
    });
  };

  useEffect(() => {
    const wallpaperMenu = document.getElementById("wallpaper-menu");
    const dot1 = document.getElementById("dot1");
    const dot2 = document.getElementById("dot2");
    const dot3 = document.getElementById("dot3");
    const dots = [dot1, dot2, dot3];

    const dot1w = document.getElementById("dot1w");
    const dot2w = document.getElementById("dot2w");
    const dot3w = document.getElementById("dot3w");
    const dotsw = [dot1w, dot2w, dot3w];
    if (state.float.wallpaperBoard && wallpaperMenu) {
      wallpaperMenu.style.zIndex = "8";
      dots.forEach((dot) => dot!.classList.remove("notActive-mode"));
      dotsw.forEach((dot) => dot!.classList.add("notActive-mode"));
    } else {
      if (wallpaperMenu) wallpaperMenu.style.zIndex = "4";
      dots.forEach((dot) => dot!.classList.add("notActive-mode"));
      dotsw.forEach((dot) => dot!.classList.remove("notActive-mode"));
    }
  }, [state.float.wallpaperBoard, state.float.profileBoard]);

  return (
    <Draggable handle="#wallpaper-handle">
      <div
        className={`wallpaper-menu wallp 
                        ${
                          state.wallpaperWindow.wallpaperOpen
                            ? "openWallpaper"
                            : ""
                        }
                        ${
                          state.wallpaperWindow.wallpaperClose
                            ? "closedWallpaper"
                            : ""
                        }
                        ${
                          state.wallpaperWindow.wallpaperMinimize
                            ? "minimizedWallpaper"
                            : ""
                        }
                        ${
                          state.wallpaperWindow.wallpaperStretch
                            ? "stretchedWallpaper"
                            : ""
                        }

                        `}
        id="wallpaper-menu"
        onClick={floatWindow}
      >
        <section className="handle" id="wallpaper-handle">
          <div className="dots1">
            <div className="dot red" id="dot1" onClick={closeWindow}>
              <GrFormClose className="close" />
            </div>

            <div className="dot yellow" id="dot2" onClick={minimizeWindow}>
              <GrFormSubtract className="minimize" />
            </div>

            <div className="dot green" id="dot3" onClick={stretchWindow}>
              <CgExpand className="stretch" />
            </div>
          </div>
          <div className="title-wallpaper">
            <h1>Wallpaper</h1>
          </div>
        </section>

        <section className="selection">
          <div className="prev">
            <img
              id="check"
              src={state.settings.wallpaper.name}
              alt="Current Wallpaper"
              className="current"
            />
            <h1>Current Wallpaper</h1>
          </div>

          <div className="wallpaper-selector">
            <h1>Wallpapers</h1>
            <div className="grid">
              {wallPaper.map((wally, i) => {
                return (
                  <div className="item-container">
                    <img
                      key={i}
                      src={wally[1]}
                      alt="wallpaper"
                      className="image-wrapper iw"
                      onClick={(e) => changeWallper(e, wally)}
                    />
                    <h2>{wally[2]}</h2>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Draggable>
  );
};

export default WallpaperMenu;
