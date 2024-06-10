import { useEffect, useContext } from "react";
import "./BootingLoader.scss";
import { store } from "../../App";
import useAudioPlayer from "../../utils/helpers/useAudioPlayer";
import chime from "../../assets/chime.mp3";
import AppleLogo from "../AppleLogo";

const BootingLoader = () => {
  const [_state, _dispatch] = useContext(store);
  const { play } = useAudioPlayer(chime, 0, 0.1);

  useEffect(() => {
    setTimeout(() => {
      const bootUpWindow = document.getElementById("boot");
      bootUpWindow!.classList.remove("booting-loader");
      bootUpWindow!.classList.add("vanished");
    }, 4500);

    setTimeout(() => {
      play();
    }, 1000);
  }, []);

  return (
    <div className="booting-loader boot" id="boot">
      <AppleLogo className="bootMask applogo z-50" />
      <AppleLogo fill="#141414" className="applogo2" />
    </div>
  );
};

export default BootingLoader;
