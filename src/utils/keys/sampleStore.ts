import storeType from "../../types/store";
import img from "../../resources/images/preview_bigsurgraphic.webp";

const sampleStore: storeType = {
  profile: {
    current: null,
    forecast: null,
  },
  resume: {
    current: null,
    forecast: null,
  },
  contactus: {
    current: null,
    forecast: null,
  },
  about: {
    current: null,
    forecast: null,
  },
  exp: {
    current: null,
    forecast: null,
  },
  projs: {
    current: null,
    forecast: null,
  },
  query: "s",
  loading: false,
  section: "s",
  dockItem: undefined,
  date: ["Mon Apr 23", "11:00 AM"],
  selected: undefined,
  failed: false,
  booting: false,
  onTop: "s",
  soundPlayed: false,
  settings: {
    open: false,
    animation: false,
    color: "s",
    notch: false,
    airdrop: false,
    wallpaper: {
      open: true,
      src: "s",
      preview: "s",
      name: img,
      surname: "s",
    },
  },
  wallpaperWindow: {
    wallpaperClose: true,
    wallpaperOpen: true,
    wallpaperMinimize: false,
    wallpaperStretch: false,
  },
  vscodeWindow: {
    vscodeClose: false,
    vscodeOpen: true,
    vscodeMinimize: false,
  },
  profileWindow: {
    profileClose: true,
    profileOpen: false,
    profileMinimize: false,
    profileStretch: false,
  },
  resumeWindow: {
    resumeClose: true,
    resumeOpen: false,
    resumeMinimize: false,
    resumeStretch: false,
  },
  contactusWindow: {
    contactusClose: true,
    contactusOpen: false,
    contactusMinimize: false,
    contactusStretch: false,
  },
  aboutWindow: {
    aboutClose: true,
    aboutOpen: false,
    aboutMinimize: false,
    aboutStretch: false,
  },
  expWindow: {
    expClose: true,
    expOpen: false,
    expMinimize: false,
    expStretch: false,
  },
  projsWindow: {
    projsClose: true,
    projsOpen: false,
    projsMinimize: false,
    projsStretch: false,
  },
  float: {
    profileBoard: false,
    wallpaperBoard: false,
    resumeBoard: false,
    contactusBoard: false,
    aboutBoard: false,
    expBoard: false,
    projsBoard: false,
  },
  finderCloseOpen: false,
  city: "New York",
  currentColor: "lightblue",
};

export default sampleStore;
