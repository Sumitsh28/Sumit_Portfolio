import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "./constants";
import SectionWrapper from "./SectionWrapper";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <img
          src={experience.icon}
          alt={experience.company_name}
          style={{ width: "100%", height: "100%", borderRadius: "100%" }}
        />
      </div>
    }
  >
    <div>
      <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: "bold" }}>
        {experience.title}
      </h3>
      <p
        style={{
          margin: 0,
          fontSize: "16px",
          fontWeight: "semi-bold",
          color: "#ffffff5d",
          marginBottom: "10px",
        }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul style={{ marginLeft: "20px" }}>
      {experience.points.map((point, index) => (
        <li
          key={`experience-poin-${index}`}
          style={{ fontSize: "14px", paddingLeft: "10px" }}
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <div
        className="mt-20 flex flex-col"
        style={{ marginTop: "40px", display: "flex", flexDirection: "column" }}
      >
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
