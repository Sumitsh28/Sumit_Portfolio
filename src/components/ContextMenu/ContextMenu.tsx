import { useContext } from "react";
import "./ContextMenu.scss";
import { store } from "../../App";

const ContextMenu = () => {
  const [state, dispatch] = useContext(store);
  const openWallpaper = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "wallpaper/OPEN" });
  };
  return (
    <div className="context-menu" id="context-menu">
      <div className="context-item first">New Folder</div>

      <div className="context-divider" />

      <div className="context-item">Get Info</div>
      <div className="context-item" onClick={openWallpaper}>
        Change Desktop BackGround
      </div>

      <div className="context-divider" />

      <div className="context-item">Use Stacks</div>
      <div className="context-item">Sort By</div>
      <div className="context-item">Clean Up</div>
      <div className="context-item">Clean Up By</div>
      <div className="context-item">Show View Options</div>
    </div>
  );
};

export default ContextMenu;
