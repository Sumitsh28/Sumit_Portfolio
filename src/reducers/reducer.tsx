// import { AnyAction } from "@reduxjs/toolkit";
import sampleStore from "../utils/keys/sampleStore";
import getDate from "../utils/helpers/getDate";
import storeType from "../types/store";
import { Reducer, AnyAction } from "@reduxjs/toolkit";

const reducer: Reducer<storeType, AnyAction> = (
  state = sampleStore,
  action
) => {
  switch (action.type) {
    case "section/SELECT":
      // eslint-disable-next-line no-case-declarations
      console.log(action.payload);
      // eslint-disable-next-line no-case-declarations
      const updatedSection = {
        ...state,
        section: action.payload,
      };
      return updatedSection;

    case "section/RESET":
      // eslint-disable-next-line no-case-declarations
      // console.log(action.payload);
      // eslint-disable-next-line no-case-declarations
      const resetSection = {
        ...state,
        section: "none",
      };
      return resetSection;

    case "settings/CLOSE":
      // eslint-disable-next-line no-case-declarations
      const closedSettings = {
        ...state,
        settings: {
          ...state.settings,
          open: false,
        },
      };
      return closedSettings;
    case "settings/OPEN":
      // eslint-disable-next-line no-case-declarations
      const openedSettings = {
        ...state,
        settings: {
          ...state.settings,
          open: true,
        },
      };
      return openedSettings;

    case "date/SET":
      // eslint-disable-next-line no-case-declarations
      const date = getDate();
      // eslint-disable-next-line no-case-declarations
      const updateDate = {
        ...state,
        date: date,
      };
      return updateDate;

    case "wallpaper/CHANGE":
      // eslint-disable-next-line no-case-declarations
      const updateWallpaper = {
        ...state,
        settings: {
          ...state.settings,
          wallpaper: {
            ...state.settings.wallpaper,
            name: action.payload,
          },
        },
      };
      return updateWallpaper;

    case "profile/CLOSE":
      // eslint-disable-next-line no-case-declarations
      console.log("Close Profile");
      // eslint-disable-next-line no-case-declarations
      const closeProfile = {
        ...state,
        profileWindow: {
          profileClose: true,
          profileOpen: false,
          profileMinimize: false,
          profileStretch: false,
        },
      };
      return closeProfile;

    case "profile/OPEN":
      // eslint-disable-next-line no-case-declarations
      console.log("Open Profile");
      // eslint-disable-next-line no-case-declarations
      const openProfile = {
        ...state,
        profileWindow: {
          profileClose: false,
          profileOpen: true,
          profileMinimize: false,
          profileStretch: false,
        },
      };
      return openProfile;

    case "profile/MINI":
      // eslint-disable-next-line no-case-declarations
      console.log("Minimize Profile");
      // eslint-disable-next-line no-case-declarations
      const minimizeProfile = {
        ...state,
        profileWindow: {
          profileClose: false,
          profileOpen: false,
          profileMinimize: true,
          profileStretch: false,
        },
      };
      return minimizeProfile;

    case "profile/STRETCH":
      // eslint-disable-next-line no-case-declarations
      console.log("Expand Profile");
      // eslint-disable-next-line no-case-declarations
      const stretchProfile = {
        ...state,
        profileWindow: {
          profileClose: false,
          profileOpen: false,
          profileMinimize: false,
          profileStretch: true,
        },
      };
      return stretchProfile;

    case "resume/CLOSE":
      // eslint-disable-next-line no-case-declarations
      console.log("Close Resume");
      // eslint-disable-next-line no-case-declarations
      const closeResume = {
        ...state,
        resumeWindow: {
          resumeClose: true,
          resumeOpen: false,
          resumeMinimize: false,
          resumeStretch: false,
        },
      };
      return closeResume;

    case "resume/OPEN":
      // eslint-disable-next-line no-case-declarations
      console.log("Open Resume");
      // eslint-disable-next-line no-case-declarations
      const openResume = {
        ...state,
        resumeWindow: {
          resumeClose: false,
          resumeOpen: true,
          resumeMinimize: false,
          resumeStretch: false,
        },
      };
      return openResume;

    case "resume/MINI":
      // eslint-disable-next-line no-case-declarations
      console.log("Minimize Resume");
      // eslint-disable-next-line no-case-declarations
      const minimizeResume = {
        ...state,
        resumeWindow: {
          resumeClose: false,
          resumeOpen: false,
          resumeMinimize: true,
          resumeStretch: false,
        },
      };
      return minimizeResume;

    case "resume/STRETCH":
      // eslint-disable-next-line no-case-declarations
      console.log("Expand Resume");
      // eslint-disable-next-line no-case-declarations
      const stretchResume = {
        ...state,
        resumeWindow: {
          resumeClose: false,
          resumeOpen: false,
          resumeMinimize: false,
          resumeStretch: true,
        },
      };
      return stretchResume;

    case "contactus/CLOSE":
      // eslint-disable-next-line no-case-declarations
      console.log("Close Contactus");
      // eslint-disable-next-line no-case-declarations
      const closeContactus = {
        ...state,
        contactusWindow: {
          contactusClose: true,
          contactusOpen: false,
          contactusMinimize: false,
          contactusStretch: false,
        },
      };
      return closeContactus;

    case "contactus/OPEN":
      // eslint-disable-next-line no-case-declarations
      console.log("Open Contactus");
      // eslint-disable-next-line no-case-declarations
      const openContactus = {
        ...state,
        contactusWindow: {
          contactusClose: false,
          contactusOpen: true,
          contactusMinimize: false,
          contactusStretch: false,
        },
      };
      return openContactus;

    case "contactus/MINI":
      // eslint-disable-next-line no-case-declarations
      console.log("Minimize Contactus");
      // eslint-disable-next-line no-case-declarations
      const minimizeContactus = {
        ...state,
        contactusWindow: {
          contactusClose: false,
          contactusOpen: false,
          contactusMinimize: true,
          contactusStretch: false,
        },
      };
      return minimizeContactus;

    case "contactus/STRETCH":
      // eslint-disable-next-line no-case-declarations
      console.log("Expand Contactus");
      // eslint-disable-next-line no-case-declarations
      const stretchContactus = {
        ...state,
        contactusWindow: {
          contactusClose: false,
          contactusOpen: false,
          contactusMinimize: false,
          contactusStretch: true,
        },
      };
      return stretchContactus;

    case "about/CLOSE":
      // eslint-disable-next-line no-case-declarations
      console.log("Close About");
      // eslint-disable-next-line no-case-declarations
      const closeAbout = {
        ...state,
        aboutWindow: {
          aboutClose: true,
          aboutOpen: false,
          aboutMinimize: false,
          aboutStretch: false,
        },
      };
      return closeAbout;

    case "about/OPEN":
      // eslint-disable-next-line no-case-declarations
      console.log("Open About");
      // eslint-disable-next-line no-case-declarations
      const openAbout = {
        ...state,
        aboutWindow: {
          aboutClose: false,
          aboutOpen: true,
          aboutMinimize: false,
          aboutStretch: false,
        },
      };
      return openAbout;

    case "about/MINI":
      // eslint-disable-next-line no-case-declarations
      console.log("Minimize About");
      // eslint-disable-next-line no-case-declarations
      const minimizeAbout = {
        ...state,
        aboutWindow: {
          aboutClose: false,
          aboutOpen: false,
          aboutMinimize: true,
          aboutStretch: false,
        },
      };
      return minimizeAbout;

    case "about/STRETCH":
      // eslint-disable-next-line no-case-declarations
      console.log("Expand About");
      // eslint-disable-next-line no-case-declarations
      const stretchAbout = {
        ...state,
        aboutWindow: {
          aboutClose: false,
          aboutOpen: false,
          aboutMinimize: false,
          aboutStretch: true,
        },
      };
      return stretchAbout;

    case "exp/CLOSE":
      // eslint-disable-next-line no-case-declarations
      console.log("Close Exp");
      // eslint-disable-next-line no-case-declarations
      const closeExp = {
        ...state,
        expWindow: {
          expClose: true,
          expOpen: false,
          expMinimize: false,
          expStretch: false,
        },
      };
      return closeExp;

    case "exp/OPEN":
      // eslint-disable-next-line no-case-declarations
      console.log("Open Exp");
      // eslint-disable-next-line no-case-declarations
      const openExp = {
        ...state,
        expWindow: {
          expClose: false,
          expOpen: true,
          expMinimize: false,
          expStretch: false,
        },
      };
      return openExp;

    case "exp/MINI":
      // eslint-disable-next-line no-case-declarations
      console.log("Minimize Exp");
      // eslint-disable-next-line no-case-declarations
      const minimizeExp = {
        ...state,
        expWindow: {
          expClose: false,
          expOpen: false,
          expMinimize: true,
          expStretch: false,
        },
      };
      return minimizeExp;

    case "exp/STRETCH":
      // eslint-disable-next-line no-case-declarations
      console.log("Expand Exp");
      // eslint-disable-next-line no-case-declarations
      const stretchExp = {
        ...state,
        expWindow: {
          expClose: false,
          expOpen: false,
          expMinimize: false,
          expStretch: true,
        },
      };
      return stretchExp;

    case "projs/CLOSE":
      // eslint-disable-next-line no-case-declarations
      console.log("Close Projs");
      // eslint-disable-next-line no-case-declarations
      const closeProjs = {
        ...state,
        projsWindow: {
          projsClose: true,
          projsOpen: false,
          projsMinimize: false,
          projsStretch: false,
        },
      };
      return closeProjs;

    case "projs/OPEN":
      // eslint-disable-next-line no-case-declarations
      console.log("Open Projs");
      // eslint-disable-next-line no-case-declarations
      const openProjs = {
        ...state,
        projsWindow: {
          projsClose: false,
          projsOpen: true,
          projsMinimize: false,
          projsStretch: false,
        },
      };
      return openProjs;

    case "projs/MINI":
      // eslint-disable-next-line no-case-declarations
      console.log("Minimize Projs");
      // eslint-disable-next-line no-case-declarations
      const minimizeProjs = {
        ...state,
        projsWindow: {
          projsClose: false,
          projsOpen: false,
          projsMinimize: true,
          projsStretch: false,
        },
      };
      return minimizeProjs;

    case "projs/STRETCH":
      // eslint-disable-next-line no-case-declarations
      console.log("Expand Projs");
      // eslint-disable-next-line no-case-declarations
      const stretchProjs = {
        ...state,
        projsWindow: {
          projsClose: false,
          projsOpen: false,
          projsMinimize: false,
          projsStretch: true,
        },
      };
      return stretchProjs;

    case "wallpaper/CLOSE":
      // eslint-disable-next-line no-case-declarations
      const closeWallpaper = {
        ...state,
        wallpaperWindow: {
          wallpaperClose: true,
          wallpaperOpen: false,
          wallpaperMinimize: false,
          wallpaperStretch: false,
        },
      };
      return closeWallpaper;

    case "wallpaper/OPEN":
      // eslint-disable-next-line no-case-declarations
      const openWallpaper = {
        ...state,
        wallpaperWindow: {
          wallpaperClose: false,
          wallpaperOpen: true,
          wallpaperMinimize: false,
          wallpaperStretch: false,
        },
      };
      return openWallpaper;

    case "wallpaper/MINI":
      // eslint-disable-next-line no-case-declarations
      const minimizeWallpaper = {
        ...state,
        wallpaperWindow: {
          wallpaperClose: false,
          wallpaperOpen: false,
          wallpaperMinimize: true,
          wallpaperStretch: false,
        },
      };
      return minimizeWallpaper;

    case "wallpaper/STRETCH":
      // eslint-disable-next-line no-case-declarations
      const strecthWallpaper = {
        ...state,
        wallpaperWindow: {
          wallpaperClose: false,
          wallpaperOpen: false,
          wallpaperMinimize: false,
          wallpaperStretch: true,
        },
      };
      return strecthWallpaper;

    case "wallpaper/Z-SELECT":
      // eslint-disable-next-line no-case-declarations

      // eslint-disable-next-line no-case-declarations
      const wallpaperZSelect = {
        ...state,
        float: {
          profileBoard: false,
          wallpaperBoard: true,
          resumeBoard: false,
          contactusBoard: false,
          aboutBoard: false,
          expBoard: false,
          projsBoard: false,
        },
      };
      return wallpaperZSelect;

    case "weather/Z-SELECT":
      // eslint-disable-next-line no-case-declarations

      // eslint-disable-next-line no-case-declarations
      const weatherZSelect = {
        ...state,
        float: {
          profileBoard: false,
          wallpaperBoard: false,
          resumeBoard: false,
          contactusBoard: false,
          aboutBoard: false,
          expBoard: false,
          projsBoard: false,
        },
      };
      return weatherZSelect;

    case "finder/OPEN":
      // eslint-disable-next-line no-case-declarations
      const openFinder = {
        ...state,
        finderCloseOpen: !state.finderCloseOpen,
      };
      return openFinder;

    case "city/CHANGE":
      // eslint-disable-next-line no-case-declarations
      const changeCity = {
        ...state,
        city: action.payload,
      };
      return changeCity;

    case "color/CHANGE":
      // eslint-disable-next-line no-case-declarations
      const changeColor = {
        ...state,
        currentColor: action.payload,
      };
      return changeColor;

    default:
      console.log("Error no dispatch found in Reducer");

      return state;
  }
};

export default reducer;
