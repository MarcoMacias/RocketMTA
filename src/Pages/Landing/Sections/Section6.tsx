import styled from "styled-components";
import Feedbacks from "@/assets/RocketFeedBack.webp";
import FeedbackVertical from "@/assets/MembersAtRocket.webp";

import { Bounce, Fade, Flip, Slide, Zoom } from "react-awesome-reveal";

export const Section6: React.FC = () => {
  return (
    <Container>
      <Fade cascade damping={0.1}>

        <div className="Wrapper">
          <div className="Headline">
            <h1>
              <Fade
                cascade damping={0.03} style={{ whiteSpace: "normal" }}
              >
                Cada vez mais pessoas conhecem
              </Fade>
              <br />
              <Fade
                 delay={1000} cascade damping={0.03} style={{ whiteSpace: "normal" }}
              >
                o projeto!
              </Fade>
            </h1>
          </div>
          <Fade
                cascade damping={0.03} style={{ whiteSpace: "normal" }}
              >

          <img
            className="Feedback"
            src={Feedbacks}
            alt="Beautifull Members Rocket"
            />
          <img
            className="FeedbackVertical"
            src={FeedbackVertical}
            alt="Beautifull Members Rocket"
            />
            </Fade>
        </div>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  border-top: 1px solid #353438;
  background-color: #121214;

  .Wrapper {
    padding: 147px;

    .FeedbackVertical {
      display: none;
    }
  }

  .Headline {
    margin-bottom: 66px;
    h1 {
      font-size: 2.125em;
      font-weight: 800;
      font-family: "Manrope", sans-serif;
      color: white;
    }
  }

  @media (max-width: 1200px) {
    .Wrapper {
      padding: 100px 80px;

      .FeedbackVertical {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    .Wrapper {
      padding: 100px 40px;

      .Feedback {
        display: none;
      }

      .FeedbackVertical {
        display: initial;
      }
    }
    .Headline {
      h1 {
        font-size: 1.5em;
      }
    }
  }

  @media (max-width: 480px) {
    .Wrapper {
      padding: 120px 16px;
    }
    .Headline {
      h1 {
        font-size: 1.125em;
      }
    }
  }
`;
