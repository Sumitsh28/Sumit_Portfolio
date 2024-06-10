import React, { useContext, useEffect } from "react";
import { store } from "../../App";
import "./NavBar.scss";
import DropdownContent from "../DropdownContent/DropdownContent";
import SettingsDropdown from "../SettingsDropdown/SettingsDropdown";
import { IconContext } from "react-icons";
import { AiFillApple, AiOutlineApple } from "react-icons/ai";
import { BsToggles } from "react-icons/bs";
import { FaBluetoothB } from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { TiWiFi } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";

const NavBar = () => {
  const [state, dispatch] = useContext(store);

  const dispatchAction = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    console.log("apple icon selected");
    const selectedSection = e.target as HTMLElement;
    if (selectedSection.classList.contains("dd")) {
      return;
    }
    dispatch({
      type: "section/SELECT",
      payload: selectedSection.id,
    });
  };

  const toggleSettings = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (state.settings.open) {
      dispatch({
        type: "settings/CLOSE",
      });
    } else {
      dispatch({
        type: "settings/OPEN",
      });
    }
  };
  useEffect(() => {
    dispatch({
      type: "date/SET",
    });
  }, [dispatch]);

  setInterval(() => {
    dispatch({
      type: "date/SET",
    });
  }, 60000);

  return (
    <>
      <div className="filter" />
      <div className="nav-bar">
        <div className="logo section">
          <AiFillApple size={18} id="logo" onClick={dispatchAction} />
          {/* <img src="" alt="Apple Logo" /> */}
          <div
            className={`${
              state.section === "logo" ? "selected-logo" : "not-selected"
            } cur`}
          ></div>
          {state.section === "logo" ? <DropdownContent /> : null}
        </div>

        <div className="finder section" id="finder" onClick={dispatchAction}>
          Finder
          <div
            className={`${
              state.section === "finder" ? "selected-finder" : "not-selected"
            }`}
          ></div>
          {state.section === "finder" ? <DropdownContent /> : null}
        </div>

        <div className="file section" id="file" onClick={dispatchAction}>
          File
          <div
            className={`${
              state.section === "file" ? "selected-file" : "not-selected"
            }`}
          ></div>
          {state.section === "file" ? <DropdownContent /> : null}
        </div>
        <div className="edit section" id="edit" onClick={dispatchAction}>
          Edit
          <div
            className={`${
              state.section === "edit" ? "selected-edit" : "not-selected"
            }`}
          ></div>
          {state.section === "edit" ? <DropdownContent /> : null}
        </div>
        <div className="view section" id="view" onClick={dispatchAction}>
          View
          <div
            className={`${
              state.section === "view" ? "selected-view" : "not-selected"
            }`}
          ></div>
          {state.section === "view" ? <DropdownContent /> : null}
        </div>
        <div className="go section" id="go" onClick={dispatchAction}>
          Go
          <div
            className={`${
              state.section === "go" ? "selected-go" : "not-selected"
            }`}
          ></div>
          {state.section === "go" ? <DropdownContent /> : null}
        </div>

        <div className="help section" id="help" onClick={dispatchAction}>
          Help
          <div
            className={`${
              state.section === "help" ? "selected-help" : "not-selected"
            }`}
          ></div>
          {state.section === "help" ? <DropdownContent /> : null}
        </div>

        <div className="right">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyItems: "center",
              gap: "10px",
            }}
          >
            <IconContext.Provider
              value={{ color: "white", className: "settings set" }}
            >
              <FaBluetoothB size={15} />
              <IoIosBatteryFull size={20} />
              <TiWiFi size={18} />
              <IoSearchSharp size={18} />

              <BsToggles size={15} onClick={toggleSettings} />
            </IconContext.Provider>
            {state.settings.open && <SettingsDropdown />}
          </div>
          <h3 className="date">{state.date[0]}</h3>
          <h3 className="date">{state.date[1]}</h3>
        </div>
      </div>
    </>
  );
};

export default NavBar;
