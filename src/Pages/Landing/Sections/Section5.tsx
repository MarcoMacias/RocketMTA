import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa";

import Jornada from "@/assets/JornadaBg.webp";
import devLog from "@/assets/devLogBg.webp";
import Updates from "@/assets/UpdatesBg.webp";
import policeUpdates from "@/assets/newUpdatesBg.webp";

import { Bounce, Fade, Flip, Slide, Zoom } from "react-awesome-reveal";

export const Section5: React.FC = () => {
  return (
    <Container>
      <Fade cascade damping={0.3} duration={1500}>
        <div className="Wrapper">
          <h1 className="Title">
            <Fade cascade damping={0.01} style={{ whiteSpace: "normal" }}>
              Acompanhe nosso Newswire
            </Fade>
          </h1>
          <Fade
            direction="up"
            cascade
            damping={0.05}
            style={{ whiteSpace: "normal" }}
          >
            <div className="ContentServer">
              <div className="Informations">
                <span>Servidor</span>
                <p>
                  Mantenha seus sonhos vivos, a Rocket está chegando com tudo..
                </p>
                <div className="ReadMore">
                  <a href="https://discord.gg/rocketrp">
                    Continuar para Discord
                  </a>
                  <FaArrowRight color="white" size={14} />
                </div>
              </div>
              <img
                className="ContentImage"
                src={
                  "https://cdn.discordapp.com/attachments/669349508831772683/1056511415353094185/wallpaperdiscord.png"
                }
                alt="Nova Jornada"
              />
            </div>
            <div className="WrapperNews">
              <div className="ContentNews">
                <div className="DescNews">
                  <span>Devlog</span>
                  <p>
                    <Fade
                      cascade
                      damping={0.03}
                      style={{ whiteSpace: "normal" }}
                    >
                      Já viu como tudo é feito aqui dentro? Veja nosso Devlog!
                    </Fade>
                  </p>
                </div>
                <img src={devLog} alt="DevLog Background" />
              </div>
              <div className="ContentNews">
                <div className="DescNews">
                  <span>Atualização</span>
                  <p>
                    <Fade
                      cascade
                      damping={0.03}
                      style={{ whiteSpace: "normal" }}
                    >
                      Cuidado onde pisa, quando você menos esperar poderá estar
                      dentro de um territorio inimigo.
                    </Fade>
                  </p>
                </div>
                <img src={Updates} alt="Updates Background" />
              </div>
              <div className="ContentNews">
                <div className="DescNews">
                  <span>Atualização</span>
                  <p>
                    <Fade
                      cascade
                      damping={0.03}
                      style={{ whiteSpace: "normal" }}
                    >
                      Não fuja das regras, o policiamento altamente capacitado
                      da cidade está de olho em você.
                    </Fade>
                  </p>
                </div>
                <img src={policeUpdates} alt="Police Upgrades" />
              </div>
            </div>
          </Fade>
        </div>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto 0px;
  padding: 100px 120px;
  background-color: #0c0c0d;

  .Wrapper {
    width: 100%;
    max-width: 1024px;
    display: flex;
    gap: 30px;
    flex-direction: column;

    .Title {
      width: 350px;
      font-family: "Manrope", sans-serif;
      color: #e1e1e6;
      font-weight: 800;
      font-size: 2.125em;
      margin-bottom: 66px;
    }

    .ContentServer {
      display: flex;
      height: auto;
      justify-content: space-between;
      border: 2px solid #353438;
      border-radius: 5px;
      background-color: #121214;
      transition: 0.2s ease-in;
      cursor: default;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
          rgb(51, 51, 51) 0px 0px 0px 3px;
      }

      .ContentImage {
        max-width: 407px;
        max-height: 270px;
      }

      .Informations {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 20px 0px 20px 20px;

        .ReadMore {
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }

        & > span {
          font-family: "Manrope", sans-serif;
          font-size: 0.75em;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.72);
          text-transform: uppercase;
        }

        & > p {
          font-family: "Manrope", sans-serif;
          font-size: 1.5em;
          font-weight: 700;
          color: rgba(255, 255, 255, 1);
        }

        a {
          font-family: "Manrope", sans-serif;
          font-size: 0.875em;
          font-weight: 600;
          color: white;
        }
      }
    }

    .WrapperNews {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      gap: 40px;

      .ContentNews {
        width: 30%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        border-radius: 5px;
        background-color: #121214;
        gap: 24px;
        transition: 0.2s ease-in;
        cursor: default;

        &:hover {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px,
            rgb(51, 51, 51) 0px 0px 0px 3px;
        }

        .DescNews {
          display: flex;
          height: 100%;
          flex-direction: column;
          padding: 15px;
          gap: 24px;

          & > span {
            font-family: "Manrope", sans-serif;
            font-size: 0.625em;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.72);
            text-transform: uppercase;
          }

          & > p {
            font-family: "Manrope", sans-serif;
            font-size: 1.25em;
            font-weight: 700;
            color: white;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1050px) {
    padding: 100px 80px;

    .Wrapper {
      .ContentServer {
        max-width: 100%;

        img {
          width: 50%;
        }

        .Informations {
          margin: 25px;

          & > p {
            font-size: 1.125em;
          }
        }
      }
      .WrapperNews {
        gap: 25px;
        height: auto;
        flex-direction: column;

        .ContentNews {
          width: 100%;
          flex-direction: row;

          img {
            width: 40%;
          }

          .DescNews {
            gap: 24px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 100px 40px;
    .Wrapper {
      .ContentServer {
        & > img {
          width: 50%;
        }
        .Informations {
          gap: 10px;
          margin: 25px;
          & > p {
            font-size: 1em;
          }
        }
      }
      .WrapperNews {
        height: auto;
        gap: 25px;
        display: flex;
        flex-direction: column;

        .ContentNews {
          width: 100%;
          flex-direction: row;

          & > img {
            width: 50%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 628px) {
    padding: 100px 60px;

    .Wrapper {
      width: 100%;
      align-items: center;

      .Title {
        text-align: center;
      }
      .ContentServer {
        max-width: 100%;
        gap: 0px;
        flex-direction: column;

        img {
          width: 100%;
        }

        .ContentImage {
          max-width: 100%;
        }

        .Informations {
          height: 100%;
          gap: 15px;
          margin: 20px;

          & > p {
            font-size: 1.375em;
          }
        }
      }
      .WrapperNews {
        height: auto;
        gap: 25px;
        align-items: center;
        flex-direction: column;

        .ContentNews {
          flex-direction: column;
          width: 100%;

          & > img {
            width: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 80px 16px;

    .Wrapper {
      width: 100%;
      align-items: center;

      .Title {
        width: auto;
      }
      .ContentServer {
        max-width: 100%;
        gap: 0px;
        flex-direction: column;

        img {
          width: 100%;
        }

        .Informations {
          height: 100%;
          gap: 15px;
          margin: 20px;

          & > p {
            font-size: 1.125em;
          }
        }
      }
      .WrapperNews {
        height: auto;
        gap: 25px;
        align-items: center;
        flex-direction: column;

        .ContentNews {
          flex-direction: column;
          gap: 24px;

          & > img {
            width: 100%;
          }
        }
      }
    }
  }
`;
