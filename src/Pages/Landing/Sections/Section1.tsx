import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

export const Section1 = () => {
  return (
    <Container>
      <Fade
        style={{
          transform: "translateY(-65%)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <iframe
          className="announc"
          src="https://www.youtube.com/embed/b41tcmKzcuo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #121214;

  .announc {
    margin-bottom: -10%;
    /* margin-top: -7%; */
    /* transform: translateY(-50%); */
    width: 80%;
    height: 75vh;

    aspect-ratio: 1.75;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 2px, rgb(51, 51, 51) 0px 0px 0px 2px;
    z-index: 200;
  }

  @media screen and (max-width: 1024px) {
    padding: 16px 32px;
    margin-bottom: 0;
    .announc {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 16px;
    .announc {
      width: 100%;
      height: auto;
      aspect-ratio: 1.75;
    }
  }
`;
