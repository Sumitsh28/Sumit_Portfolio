import { Suspense, lazy, useContext, useEffect, useState } from "react";
import "./Contactus.scss";
import { store } from "../../App";
import Draggable from "react-draggable";
import Queryboard_Contactus from "../Queryboard_Contactus/Queryboard_Contactus";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import ContactForm from "../Form/ContactForm";

const Map = lazy(() => import("../Map"));

const Contactus = () => {
  const [state, _dispatch] = useContext(store);
  const [letterClass, setLetterClass] = useState("text__animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text__animate__hover");
    }, 6000);
  }, []);

  useEffect(() => {
    const contactusWindow = document.getElementById("contactus-window");
    if (state.float.contactusBoard && contactusWindow) {
      contactusWindow.style.zIndex = "8";
    } else {
      if (contactusWindow) contactusWindow.style.zIndex = "3";
    }
  }, [state.float.contactusBoard]);

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
          ${state.contactusWindow.contactusOpen ? "openContactus" : ""}
          ${state.contactusWindow.contactusClose ? "closedContactus" : ""}
          ${state.contactusWindow.contactusMinimize ? "minimizedContactus" : ""}
          ${state.contactusWindow.contactusStretch ? "stretchedContactus" : ""}
        `}
        id="contactus-window"
      >
        <Queryboard_Contactus />
        <div className="contact">
          <span className="tags">
            &lt;html&gt;
            <br />
            <span className="lower">&lt;body&gt;</span>
          </span>
          <div className="contact__wrapper" style={{ marginBottom: "10px" }}>
            <div className="contact__inner">
              <div className="lhs">
                <div className="text__zone">
                  <h1>
                    <AnimatedLetters
                      letterClass={letterClass}
                      strArray={"Contact me".split("")}
                      idx={15}
                    />
                  </h1>
                  <p>
                    I&apos;m intrested in opportunities - especially ambitious
                    or large projects. However, if you have other request or
                    question, don&apos;t hesitate to contact me using the form
                    below.
                  </p>
                </div>
                <ContactForm />
              </div>

              <div className="rhs">
                <Suspense fallback={<div>Loading...</div>}>
                  <Map />
                </Suspense>
              </div>
            </div>
          </div>
          <span className="tags">
            <span className="lower">&lt;/body&gt;</span>
            <br />
            <span>&lt;/html&gt;</span>
          </span>
        </div>
      </div>
    </Draggable>
  );
};

export default Contactus;
