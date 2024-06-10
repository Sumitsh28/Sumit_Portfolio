import React, { useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "./Carousel.scss";


import { EffectCards, Pagination, Navigation, Autoplay } from "swiper/modules";

import Arrow from "./assets/Arrow.svg";

import { profiles } from "./assets/constants";

const Carousel = () => {
  const buttonStyle = {
    color: "#ffffff",
    background: "transparent",
    border: "1px solid #ffffff",
    fontSize: "1.2rem",
    fontWeight: 300,
    letterSpacing: "3px",
    padding: "0.5em 2em",
    borderRadius: "5px",
    fontFamily: '"Nunito", sans-serif',
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    marginTop: "2rem",
    position: "relative",
    zIndex: 4,
    overflow: "hidden",
  };

  const buttonAfterStyle = {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background: "#ffffff",
    zIndex: -1,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease-in-out",
  };

  const buttonHoverStyle = {
    color: "#000",
  };

  const buttonHoverAfterStyle = {
    transform: "scaleX(1)",
    transformOrigin: "right",
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        scrollbar={{
          draggable: true,
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={profiles[0].logo}
                alt="The Weirdos"
                style={{ width: "100px", height: "100px" }}
              />
              <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                {profiles[0].name}
              </h1>
            </div>

            <div>
              <h1 style={{ fontSize: "30px" }}>{profiles[0].id}</h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[0].max_Rating}
              </h1>
              <h1>
                {"("}Max Rating{")"}
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[0].curr_Rating}
              </h1>
              <h1>
                {"("}Current Rating{")"}
              </h1>
            </div>

            <div
              style={{
                ...buttonStyle,
                ...(isHovered && buttonHoverStyle),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.open(profiles[0].link, "_blank")}
            >
              <span
                style={{
                  ...buttonAfterStyle,
                  ...(isHovered && buttonHoverAfterStyle),
                }}
              ></span>
              Visit
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={profiles[1].logo}
                alt="The Weirdos"
                style={{ width: "100px", height: "100px" }}
              />
              <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                {profiles[1].name}
              </h1>
            </div>

            <div>
              <h1 style={{ fontSize: "30px" }}>{profiles[1].id}</h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[1].max_Rating}
              </h1>
              <h1>
                {"("}Max Rating{")"}
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[1].curr_Rating}
              </h1>
              <h1>
                {"("}Current Rating{")"}
              </h1>
            </div>

            <div
              style={{
                ...buttonStyle,
                ...(isHovered && buttonHoverStyle),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.open(profiles[1].link, "_blank")}
            >
              <span
                style={{
                  ...buttonAfterStyle,
                  ...(isHovered && buttonHoverAfterStyle),
                }}
              ></span>
              Visit
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={profiles[2].logo}
                alt="The Weirdos"
                style={{ width: "100px", height: "100px" }}
              />
              <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                {profiles[2].name}
              </h1>
            </div>

            <div>
              <h1 style={{ fontSize: "30px" }}>{profiles[2].id}</h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[2].max_Rating}
              </h1>
              <h1>
                {"("}Max Rating{")"}
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[2].curr_Rating}
              </h1>
              <h1>
                {"("}Current Rating{")"}
              </h1>
            </div>

            <div
              style={{
                ...buttonStyle,
                ...(isHovered && buttonHoverStyle),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.open(profiles[2].link, "_blank")}
            >
              <span
                style={{
                  ...buttonAfterStyle,
                  ...(isHovered && buttonHoverAfterStyle),
                }}
              ></span>
              Visit
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={profiles[3].logo}
                alt="The Weirdos"
                style={{ width: "100px", height: "100px" }}
              />
              <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                {profiles[3].name}
              </h1>
            </div>

            <div>
              <h1 style={{ fontSize: "30px" }}>{profiles[3].id}</h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[3].max_Rating}
              </h1>
              <h1>
                {"("}Max Rating{")"}
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[3].curr_Rating}
              </h1>
              <h1>
                {"("}Current Rating{")"}
              </h1>
            </div>

            <div
              style={{
                ...buttonStyle,
                ...(isHovered && buttonHoverStyle),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.open(profiles[3].link, "_blank")}
            >
              <span
                style={{
                  ...buttonAfterStyle,
                  ...(isHovered && buttonHoverAfterStyle),
                }}
              ></span>
              Visit
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={profiles[0].logo}
                alt="The Weirdos"
                style={{ width: "100px", height: "100px" }}
              />
              <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                {profiles[0].name}
              </h1>
            </div>

            <div>
              <h1 style={{ fontSize: "30px" }}>{profiles[0].id}</h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[0].max_Rating}
              </h1>
              <h1>
                {"("}Max Rating{")"}
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[0].curr_Rating}
              </h1>
              <h1>
                {"("}Current Rating{")"}
              </h1>
            </div>

            <div
              style={{
                ...buttonStyle,
                ...(isHovered && buttonHoverStyle),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.open(profiles[0].link, "_blank")}
            >
              <span
                style={{
                  ...buttonAfterStyle,
                  ...(isHovered && buttonHoverAfterStyle),
                }}
              ></span>
              Visit
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={profiles[1].logo}
                alt="The Weirdos"
                style={{ width: "100px", height: "100px" }}
              />
              <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                {profiles[1].name}
              </h1>
            </div>

            <div>
              <h1 style={{ fontSize: "30px" }}>{profiles[1].id}</h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[1].max_Rating}
              </h1>
              <h1>
                {"("}Max Rating{")"}
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[1].curr_Rating}
              </h1>
              <h1>
                {"("}Current Rating{")"}
              </h1>
            </div>

            <div
              style={{
                ...buttonStyle,
                ...(isHovered && buttonHoverStyle),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.open(profiles[1].link, "_blank")}
            >
              <span
                style={{
                  ...buttonAfterStyle,
                  ...(isHovered && buttonHoverAfterStyle),
                }}
              ></span>
              Visit
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={profiles[2].logo}
                alt="The Weirdos"
                style={{ width: "100px", height: "100px" }}
              />
              <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                {profiles[2].name}
              </h1>
            </div>

            <div>
              <h1 style={{ fontSize: "30px" }}>{profiles[2].id}</h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[2].max_Rating}
              </h1>
              <h1>
                {"("}Max Rating{")"}
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[2].curr_Rating}
              </h1>
              <h1>
                {"("}Current Rating{")"}
              </h1>
            </div>

            <div
              style={{
                ...buttonStyle,
                ...(isHovered && buttonHoverStyle),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.open(profiles[2].link, "_blank")}
            >
              <span
                style={{
                  ...buttonAfterStyle,
                  ...(isHovered && buttonHoverAfterStyle),
                }}
              ></span>
              Visit
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                gap: "10px",
              }}
            >
              <img
                src={profiles[3].logo}
                alt="The Weirdos"
                style={{ width: "100px", height: "100px" }}
              />
              <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                {profiles[3].name}
              </h1>
            </div>

            <div>
              <h1 style={{ fontSize: "30px" }}>{profiles[3].id}</h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[3].max_Rating}
              </h1>
              <h1>
                {"("}Max Rating{")"}
              </h1>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <h1 style={{ fontSize: "70px", fontWeight: "bold" }}>
                {profiles[3].curr_Rating}
              </h1>
              <h1>
                {"("}Current Rating{")"}
              </h1>
            </div>

            <div
              style={{
                ...buttonStyle,
                ...(isHovered && buttonHoverStyle),
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => window.open(profiles[3].link, "_blank")}
            >
              <span
                style={{
                  ...buttonAfterStyle,
                  ...(isHovered && buttonHoverAfterStyle),
                }}
              ></span>
              Visit
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    height: 100%;
    width: 100%;

    &-slide {
      background-color: #5119c7;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    &-button-next {
      width: 4rem;
      right: 0;
      top: 60%;
      color: ${(props) => props.theme.text};
      background-image: url(${Arrow});
      background-position: center;
      background-size: cover;

      &::after {
        display: none;
      }

      @media (max-width: 64em) {
        width: 3rem;
      }

      @media (max-width: 30em) {
        width: 2rem;
      }
    }

    &-button-prev {
      width: 4rem;
      left: 0;
      top: 60%;
      color: ${(props) => props.theme.text};
      transform: rotate(180deg);
      background-image: url(${Arrow});
      background-position: center;
      background-size: cover;

      &::after {
        display: none;
      }

      @media (max-width: 64em) {
        width: 3rem;
      }

      @media (max-width: 30em) {
        width: 2rem;
      }
    }
  }
`;

export default Carousel;
