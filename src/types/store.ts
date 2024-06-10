import sortedIntervalType from "./sortedInterval";

interface Profile {
  current: null | any;
  forecast: null | any;
}

interface Resume {
  current: null | any;
  forecast: null | any;
}

interface Contactus {
  current: null | any;
  forecast: null | any;
}

interface About {
  current: null | any;
  forecast: null | any;
}

interface Exp {
  current: null | any;
  forecast: null | any;
}

interface Projs {
  current: null | any;
  forecast: null | any;
}

interface Wallpaper {
  open: boolean;
  src: null | any;
  preview: null | any;
  name: string;
  surname: null | any;
}

interface Settings {
  open: boolean;
  animation: boolean;
  color: null | any;
  notch: boolean;
  airdrop: boolean;
  wallpaper: Wallpaper;
}

interface WallpaperWindow {
  wallpaperClose: boolean;
  wallpaperOpen: boolean;
  wallpaperMinimize: boolean;
  wallpaperStretch: boolean;
}

interface VSCodeWindow {
  vscodeClose: boolean;
  vscodeOpen: boolean;
  vscodeMinimize: boolean;
}

interface Float {
  profileBoard: boolean;
  wallpaperBoard: boolean;
  resumeBoard: boolean;
  contactusBoard: boolean;
  aboutBoard: boolean;
  expBoard: boolean;
  projsBoard: boolean;
}

interface storeType {
  profile: Profile;
  resume: Resume;
  contactus: Contactus;
  about: About;
  exp: Exp;
  projs: Projs;
  query: null | any;
  loading: boolean;
  section: null | any;
  dockItem: undefined;
  date: string[];
  selected: undefined | sortedIntervalType;
  failed: boolean;
  booting: boolean;
  onTop: null | any;
  soundPlayed: boolean;
  settings: Settings;
  wallpaperWindow: WallpaperWindow;
  vscodeWindow: VSCodeWindow;
  resumeWindow: any;
  contactusWindow: any;
  aboutWindow: any;
  expWindow: any;
  ProjsWindow: any;
  profileWindow: any; // Update this with the actual type
  float: Float;

  finderCloseOpen: boolean;
  city: string;
  currentColor: string;
}

export default storeType;
