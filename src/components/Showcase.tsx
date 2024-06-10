import React, { useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

import img1 from "../assets/imgs/c.svg";
import img2 from "../assets/imgs/d.svg";
import img3 from "../assets/imgs/e.svg";
import img4 from "../assets/imgs/f.svg";
import img5 from "../assets/imgs/g.svg";
import img6 from "../assets/imgs/m.svg";
import img7 from "../assets/imgs/n.svg";
import img8 from "../assets/imgs/s.svg";
import img9 from "../assets/imgs/t.svg";
import img10 from "../assets/imgs/type.svg";
import img11 from "../assets/imgs/p.svg";
import img12 from "../assets/imgs/redux.svg";
import img13 from "../assets/imgs/num.svg";
import img14 from "../assets/imgs/Redis.svg";
import img15 from "../assets/imgs/postman.png";
import img16 from "../assets/imgs/chakra.svg";
import img17 from "../assets/imgs/python.svg";
import img18 from "../assets/imgs/Matplotlib.svg";
import img19 from "../assets/imgs/AWS.svg";
import img20 from "../assets/imgs/boot.svg";

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase">
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={img1} passRef={Row1Ref} />
        <NftItem img={img2} passRef={Row1Ref} />
        <NftItem img={img3} passRef={Row1Ref} />
        <NftItem img={img4} passRef={Row1Ref} />
        <NftItem img={img5} passRef={Row1Ref} />
        <NftItem img={img11} passRef={Row1Ref} />
        <NftItem img={img12} passRef={Row1Ref} />
        <NftItem img={img13} passRef={Row1Ref} />
        <NftItem img={img14} passRef={Row1Ref} />
        <NftItem img={img15} passRef={Row1Ref} />
      </Row>

      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={img6} passRef={Row2Ref} />
        <NftItem img={img7} passRef={Row2Ref} />
        <NftItem img={img8} passRef={Row2Ref} />
        <NftItem img={img9} passRef={Row2Ref} />
        <NftItem img={img10} passRef={Row2Ref} />
        <NftItem img={img16} passRef={Row2Ref} />
        <NftItem img={img17} passRef={Row2Ref} />
        <NftItem img={img18} passRef={Row2Ref} />
        <NftItem img={img19} passRef={Row2Ref} />
        <NftItem img={img20} passRef={Row2Ref} />
      </Row>
    </Section>
  );
};

const NftItem = ({ img, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };

  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="Tech Stacks" />
    </ImgContainer>
  );
};

const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.text};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }

  & > *:last-child {
    animation-duration: 15s;

    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const move = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(-100%);
  }
`;

const Row = styled.div`
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;
  animation: ${move} linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }

  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 50%;
    height: auto;
  }
`;

export default Showcase;
