import { createContext, useReducer } from "react";
import NavBar from "./components/NavBar/NavBar";
import Page from "./components/Page/Page";
import Dock from "./components/Dock/Dock.tsx";
import WallpaperMenu from "./components/WallpaperMenu/WallpaperMenu.tsx";
import Profile from "./components/Profile/Profile.tsx";
import "./App.scss";
import { ChakraProvider } from "@chakra-ui/react";
import reducer from "./reducers/reducer";
import sampleStore from "./utils/keys/sampleStore.ts";
import ContextMenu from "./components/ContextMenu/ContextMenu.tsx";
import Resume from "./components/Resume/Resume.tsx";
import Contactus from "./components/Contactus/Contactus.tsx";
import About from "./components/About/About.tsx";
import Exp from "./components/Exp/Exp.tsx";
import Projs from "./components/Projs/Projs.tsx";
// import storeType from './types/store.ts';

// eslint-disable-next-line react-refresh/only-export-components
export const store = createContext<any>(null);

const StoreProvider = ({ children }: any) => (
  <store.Provider value={useReducer(reducer, sampleStore)}>
    {children}
  </store.Provider>
);

const App = () => {
  return (
    <>
      <ChakraProvider>
        <StoreProvider>
          <Page>
            <NavBar />
            <Dock />
            <Profile />
            <Resume />
            <Contactus />
            <About />
            <Exp />
            <Projs />
            <WallpaperMenu />

            <ContextMenu />
          </Page>
        </StoreProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
