import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { educations } from "./constants";
import SectionWrapper from "./SectionWrapper";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={education.date}
    iconStyle={{ background: education.iconBg }}
    icon={
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <img
          src={education.icon}
          alt={education.company_name}
          style={{ width: "100%", height: "100%", borderRadius: "100%" }}
        />
      </div>
    }
  >
    <div>
      <h3 style={{ color: "#ffffff", fontSize: "24px", fontWeight: "bold" }}>
        {education.title}
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
        {education.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <>
      <div
        className="mt-20 flex flex-col"
        style={{ marginTop: "40px", display: "flex", flexDirection: "column" }}
      >
        <VerticalTimeline>
          {educations.map((education, index) => (
            <EducationCard key={index} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "work");
