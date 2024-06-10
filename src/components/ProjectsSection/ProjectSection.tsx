import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { projects } from "./DataList";
import { FaGithub } from "react-icons/fa";
import "./ProjectSection.scss";
import { MdArrowOutward } from "react-icons/md";

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const ProjectSection = () => {
  const [letterClass, setLetterClass] = useState("text__animate");
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text__animate__hover");
    }, 6000);
  }, []);

  return (
    <>
      <span className="tags">
        &lt;html&gt;
        <br />
        <span className="lower">&lt;body&gt;</span>
      </span>
      <div className="project__wrapper">
        <div className="project__inner">
          <div className="lhs">
            <div className="text__zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={"My Projects".split("")}
                  idx={15}
                />
              </h1>
              <p>List of projects I&apos;ve worked on.</p>
            </div>
          </div>

          <div className="projects__list">
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  gh_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        style={{
          backgroundColor: "#5119c7",
          padding: "10px",
          borderRadius: "16px",
          width: "100%",
          marginTop: "10px",
        }}
      >
        <div style={{ width: "100%", height: "230px", position: "relative" }}>
          <img
            src={image}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              objectFit: "fill",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "0px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              margin: "12px",
              gap: "20px",
            }}
          >
            <div
              onClick={() => window.open(gh_link, "_blank")}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "9999px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              className="black-gradient"
            >
              <FaGithub
                style={{
                  width: "50%",
                  height: "50%",
                  objectFit: "contain",
                  color: "#fff",
                }}
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "9999px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              className="black-gradient"
            >
              <MdArrowOutward
                style={{
                  width: "50%",
                  height: "50%",
                  objectFit: "contain",
                  color: "#fff",
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#fff", fontWeight: "bold", fontSize: "24px" }}>
            {name}
          </h3>
          <p
            className="text-secondary"
            style={{ marginTop: "8px", fontSize: "14px" }}
          >
            {description}
          </p>
        </div>

        <div
          style={{
            marginTop: "16px",
            fontSize: "14px",
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectSection;
