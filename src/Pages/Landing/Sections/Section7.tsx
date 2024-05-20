import styled from "styled-components";

import VitorCTO from "@/assets/VitorRibCTO.webp";
import KonimaCEO from "@/assets/CEOKonima.webp";
import BrenoSUP from "@/assets/SupBreno.webp";
import MelzinhaBus from "@/assets/BusMelzinha.webp";
import NatashaSupport from "@/assets/natasha.webp";
import GabrielFerreira from "@/assets/GabrielFerreira.webp";
import ViniciusLDesigner from "@/assets/ViniciusSLDesigner.webp";
import NicoleAccessory from "@/assets/NicoleAccessory.webp";
import Avatar from "@/assets/Avatar.webp";

import { Bounce, Fade, Flip, Slide, Zoom } from "react-awesome-reveal";

export const Section7: React.FC = () => {
  return (
    <Container>
      <Fade cascade damping={0.1}>
        <div className="Wrapper">
          <div className="Headline">
            <h1>
              <Fade cascade damping={0.03} style={{ whiteSpace: "normal" }}>
                Uma escolha de mentes brilhantes para
              </Fade>
              <br />
              <Fade
                delay={1200}
                cascade
                damping={0.05}
                style={{ whiteSpace: "normal" }}
              >
                entregar sempre o melhor
              </Fade>
            </h1>
            <p>
              <Fade cascade damping={0.01} style={{ whiteSpace: "normal" }}>
                São mais de 7 anos como equipe. Não só no MTA, mas também como
                empresa. Trazendo assim a experiência, dedicação e carinho para
                transformar a Rocket em uma experiência única.
              </Fade>
              <br />
              <Fade
                delay={1100}
                cascade
                damping={0.03}
                style={{ whiteSpace: "normal" }}
              >
                carinho para transformar a Rocket em uma experiência única.
              </Fade>
            </p>
            <hr className="divider" />
          </div>
          <div className="Wrapper_Staff">
            <Fade
              direction="up"
              cascade
              damping={0.03}
              style={{ whiteSpace: "normal" }}
            >
              <div className="Content_Staff">
                <div className="Staff">
                  <Fade cascade damping={0.1} style={{ whiteSpace: "normal" }}>
                    <img src={VitorCTO} alt="CTO at Rocket" />
                    <div className="Description">
                      <span className="Name">Vitor Ribeiro</span>
                      <span className="Office">CTO &amp; Founder</span>
                    </div>
                  </Fade>
                </div>
                <div className="Staff">
                  <Fade cascade damping={0.2} style={{ whiteSpace: "normal" }}>
                    <img src={KonimaCEO} alt="CEO at Rocket" />
                    <div className="Description">
                      <span className="Name">Vinicius Emanuel</span>
                      <span className="Office">CEO &amp; Founder</span>
                    </div>
                  </Fade>
                </div>
                <div className="Staff">
                  <Fade cascade damping={0.4} style={{ whiteSpace: "normal" }}>
                    <img src= {BrenoSUP}
                      width={82}
                      height={82}
                      alt="Support Leader"
                    />
                    <div className="Description">
                      <span className="Name">Breno Souto</span>
                      <span className="Office">Co-founder</span>
                    </div>
                  </Fade>
                </div>
                <div className="Staff">
                  <Fade cascade damping={0.3} style={{ whiteSpace: "normal" }}>
                    <img src={MelzinhaBus} alt="Bussiness Manager" />
                    <div className="Description">
                      <span className="Name">Mellany Romão</span>
                      <span className="Office">Bussiness Manager</span>
                    </div>
                  </Fade>
                </div>

                <div className="Staff">
                  <Fade cascade damping={0.5} style={{ whiteSpace: "normal" }}>
                    <img src={NatashaSupport} alt="User Experience" />
                    <div className="Description">
                      <span className="Name">Natasha Kahri</span>
                      <span className="Office">User Support</span>
                    </div>
                  </Fade>
                </div>
              </div>

              <div className="Content_Staff">
                <div className="Staff">
                  <Fade cascade damping={0.2} style={{ whiteSpace: "normal" }}>
                    <img src={Avatar} alt="Front-end Developer" />
                    <div className="Description">
                      <span className="Name">Marco Macias</span>
                      <span className="Office">Front-end Developer</span>
                    </div>
                  </Fade>
                </div>
                <div className="Staff">
                  <Fade cascade damping={0.3} style={{ whiteSpace: "normal" }}>
                    <img src={Avatar} alt="Front-end Director" />
                    <div className="Description">
                      <span className="Name">Vinicius Oliveira</span>
                      <span className="Office">Front-end Director</span>
                    </div>
                  </Fade>
                </div>
                <div className="Staff">
                  <Fade cascade damping={0.4} style={{ whiteSpace: "normal" }}>
                    <img src={Avatar} alt="Level Designer" />
                    <div className="Description">
                      <span className="Name">Henrique Lopes</span>
                      <span className="Office">Level Designer</span>
                    </div>
                  </Fade>
                </div>
                <div className="Staff">
                  <Fade cascade damping={0.5} style={{ whiteSpace: "normal" }}>
                    <img src={Avatar} alt="Front-end Developer" />
                    <div className="Description">
                      <span className="Name">Vinicius da Rosa</span>
                      <span className="Office">Front-end Developer</span>
                    </div>
                  </Fade>
                </div>
              </div>

              <div className="Content_Staff">
                <div className="Staff">
                  <Fade cascade damping={0.1} style={{ whiteSpace: "normal" }}>
                    <img src={Avatar} alt="Lua Engineer" />
                    <div className="Description">
                      <span className="Name">Pedro Villas</span>
                      <span className="Office">Lua Engineer</span>
                    </div>
                  </Fade>
                </div>
                <div className="Staff">
                  <Fade cascade damping={0.2} style={{ whiteSpace: "normal" }}>
                    <img src={GabrielFerreira} alt="Conceptual Designer" />
                    <div className="Description">
                      <span className="Name">Gabriel Ferreira</span>
                      <span className="Office">Conceptual Designer</span>
                    </div>
                  </Fade>
                </div>
                <div className="Staff">
                  <Fade cascade damping={0.3} style={{ whiteSpace: "normal" }}>
                    <img
                      src={
                        "https://cdn.discordapp.com/attachments/1046951488154509392/1057075469624811551/Avatar.png"
                      }
                      alt="Community Manager"
                    />
                    <div className="Description">
                      <span className="Name">Malaquias Naum</span>
                      <span className="Office">Production Designer</span>
                    </div>
                  </Fade>
                </div>
                <div className="Staff">
                  <Fade cascade damping={0.4} style={{ whiteSpace: "normal" }}>
                    <img src={ViniciusLDesigner} alt="Level Designer" />
                    <div className="Description">
                      <span className="Name">Vinicius Santos</span>
                      <span className="Office">Modeler</span>
                    </div>
                  </Fade>
                </div>
                <div className="Staff">
                  <Fade cascade damping={0.5} style={{ whiteSpace: "normal" }}>
                    <img src={NicoleAccessory} alt="Accessory" />
                    <div className="Description">
                      <span className="Name">Nicole Silva</span>
                      <span className="Office">Accessory</span>
                    </div>
                  </Fade>
                </div>
              </div>
              <p className="Recruit">
                Estamos contratando! Envie-nos um e-mail para
                contact@rocketmta.com <b>contact@rocketmta.com</b>
              </p>
            </Fade>
          </div>
        </div>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0px 147px 50px 147px;
  background-color: #121214;

  .Wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    flex-direction: column;

    .Headline {
      display: flex;
      width: 100%;
      flex-direction: column;
      gap: 39px;

      & > h1 {
        font-family: "Poppins", sans-serif;
        font-size: 2.25em;
        text-align: center;
        font-weight: 700;
        color: white;
      }

      & > p {
        font-family: "Roboto", sans-serif;
        text-align: center;
        font-weight: 400;
        line-height: 27px;
        font-size: 0.9375em;
        color: #a3a3a8;
      }

      .divider {
        border-top: 1px solid #353438;
        margin-bottom: 120px;
      }
    }

    .Wrapper_Staff {
      display: flex;
      align-items: center;
      flex: 1;
      flex-direction: column;
      gap: 46px;
      margin: 0 110px;

      .Recruit {
        font-family: "Roboto", sans-serif;
        font-size: 1em;
        font-weight: 400;
        color: #a3a3a8;
        margin-top: 64px;
      }

      .Content_Staff {
        display: flex;
        flex-wrap: nowrap;
        gap: 20px;
        width: 100%;
        /* height: 20px; */

        .Staff {
          display: flex;
          width: 164px;
          /* height: auto; */
          align-items: center;
          gap: 12px;
          flex-direction: column;

          & > img {
            width: 82px;
            height: 82px;
          }

          .Description {
            display: flex;
            width: 100%;
            text-align: center;
            gap: 8px;
            align-items: center;
            flex-direction: column;

            .Name {
              font-family: "inter", sans-serif;
              font-weight: 700;
              font-size: 1.125em;
              color: white;
            }

            .Office {
              font-family: "inter", sans-serif;
              font-weight: 400;
              font-size: 0.875em;
              color: #9ca3af;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 0;
    .Wrapper {
      width: 100%;
      margin: 0 80px 80px 80px;

      /* .Headline{
        background-color: blue;
        h1{
          font-size: 1.8125em;
          color: white;
        }
        p{
          font-size: 0.8125em;
          line-height: 20px;
          text-align: center;
        }
      } */
      .Wrapper_Staff {
        display: flex;
        width: 100%;
        justify-content: center;
        text-align: center;
        margin: 0;

        .Content_Staff {
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;
    .Wrapper {
      margin: 0px 40px 60px 40px;

      .Headline {
        h1 {
          font-size: 1.8125em;
          color: white;
        }
        p {
          font-size: 0.8125em;
          line-height: 20px;
          text-align: center;
        }
      }
      .Wrapper_Staff {
        display: flex;
        width: 100%;
        justify-content: center;
        text-align: center;
        margin: 0;

        .Content_Staff {
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    .Wrapper {
      margin: 0 40px 80px 0px;

      .Headline {
        h1 {
          font-size: 1.5em;
        }
        span {
          font-size: 0.8125em;
          line-height: 20px;
        }
      }
      .Wrapper_Staff {
        display: flex;
        width: 100%;
        justify-content: center;
        text-align: center;
        margin: 0;

        .Content_Staff {
          width: 100%;
          flex-wrap: wrap;
          justify-content: center;
          display: flex;

          .Staff {
            width: 30%;

            .Description {
              .Name {
                font-size: 0.875em;
              }
              .Office {
                font-size: 0.75em;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 0;
    .Wrapper {
      margin: 0 16px 80px 0px;
      padding: 0;

      .Headline {
        h1 {
          font-size: 1.125em;
        }

        .divider {
          margin-bottom: 80px;
        }
      }
      .Wrapper_Staff {
        display: flex;
        justify-content: center;
        /* flex-direction: row; */
        width: 100%;
        margin: 0;

        .Recruit {
          text-align: center;
        }

        .Content_Staff {
          display: flex;
          /* align-items: center; */
          flex-wrap: wrap;
          justify-content: center;
          width: 100%;

          .Staff {
            width: 28%;

            .Description {
              .Name {
                font-size: 0.875em;
                /* color: red; */
              }
              .Office {
                font-size: 0.75em;
              }
            }
          }
        }
      }
    }
  }
`;
