import styled from "styled-components";

import Astronaut from "@/assets/AstronautBg.webp";
import Acordeon from "@/components/Accordion";

import { Bounce, Fade, Flip, Slide, Zoom } from "react-awesome-reveal";

export const Section8: React.FC = () => {
  return (
    <Container>
      <Fade cascade damping={0.1}>

      <img src={Astronaut} alt="Astronaut at Rocket" />
      <div className="Accordeon">
        <h1 className="Title">FAQ</h1>
        <Acordeon />
      </div>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto 0px;
  justify-content: center;
  display: flex;
  padding: 100px 120px;
  gap: 24px;

  img {
    max-width: 420px;
    height: 420px;
    /* position: relative; */
  }

  .Accordeon {
    width: 100%;
    max-width: 836px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 100px;

    .Title {
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 2.3125em;
      color: #e1e1e6;
      margin-bottom: 17px;
    }
  }
  @media screen and (max-width: 1200px) {
    .Accordeon {
      margin: 0;
    }
  }
  @media screen and (max-width: 1060px) {
    padding: 110px 100px;
    height: auto;

    .Accordeon {
      display: flex;
      justify-content: flex-start;
    }

    img {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 110px 40px;
    height: auto;

    .Accordeon {
      margin: 0;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 100px 16px;
    height: auto;

    .Accordeon {
      display: flex;
      justify-content: flex-start;
      margin: 0;
    }

    img {
      display: none;
    }
  }
`;
