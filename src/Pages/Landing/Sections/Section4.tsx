import styled from "styled-components";
import ComputerIcon from "@/assets/computerIcon.webp";
import coreIcon from "@/assets/coreIcon.webp";

import Section4Bg from "@/assets/Section4Bg.webp";

import { Bounce, Fade, Flip, Slide, Zoom } from "react-awesome-reveal";

export const Section4 = () => {
  return (
    <Container>
      <Fade cascade damping={0.3} duration={1500}>
        <div className="container">
          <div className="leftSide">
            <Fade direction="left">
              <div className="leftSideTop">
                <h3 className="leftSideTopTittle">
                  <Fade cascade damping={0.02} style={{ whiteSpace: "normal" }}>
                    Sistemas de alto nível
                  </Fade>
                </h3>
                <p className="leftSideTopDesc">
                  <Fade
                    cascade
                    damping={0.002}
                    style={{ whiteSpace: "normal" }}
                  >
                    Todos os nossos sistemas são desenvolvidos com as últimas e
                    mais avançadas tecnologias do mercado.
                  </Fade>
                </p>
              </div>

              <div className="leftSideBottom">
                <div className="leftSideBottomItem">
                  <div className="bottomItemLeft">
                    <img
                      className="bottomItemLeftIcon"
                      src={coreIcon}
                      alt="coreIcon"
                    />
                  </div>

                  <div className="bottomItemRight">
                    <Fade
                      cascade
                      damping={0.03}
                      style={{ whiteSpace: "normal" }}
                    >
                      <h1 className="bottomItemRightTittle">Experiência</h1>
                      <p className="bottomItemRightDesc">
                        A reunião de talentos especializados em suas respectivas
                        áreas, torna o nosso todo mais completo e mais
                        capacitado para chegar até a satisfação dos nossos
                        jogadores através de nosso conhecimento.
                      </p>
                    </Fade>
                  </div>
                </div>

                <div className="leftSideBottomItem">
                  <div className="bottomItemLeft">
                    <img
                      className="bottomItemLeftIcon"
                      src={ComputerIcon}
                      alt="ComputerIcon"
                    />
                  </div>

                  <div className="bottomItemRight">
                    <Fade
                      cascade
                      damping={0.03}
                      style={{ whiteSpace: "normal" }}
                    >
                      <h1 className="bottomItemRightTittle">Foco</h1>
                      <p className="bottomItemRightDesc">
                        Somos uma equipe de entusiastas e nosso foco principal
                        em cada sistema é entregar sempre o melhor do melhor.
                        Antes mesmo de serem publicados, todos os sistemas
                        passam por uma rigorosa camada de verificação e
                        qualidade.
                      </p>
                    </Fade>
                  </div>
                </div>
              </div>
            </Fade>
          </div>

          <div className="rightSide">
            <Fade
              direction="right"
              cascade
              damping={0.01}
              style={{ whiteSpace: "normal" }}
            >
              <img className="rightSideImg" src={Section4Bg} alt="Section4Bg" />
            </Fade>
          </div>
        </div>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
  background: #121214;

  color: #e1e1e6;

  border-bottom: 1px solid #353438;

  .container {
    display: flex;
    align-items: center;
    gap: 80px;
    padding: 48px;
    background: url("/sec4back.png") no-repeat;
    background-size: contain;

    .leftSide {
      display: flex;
      flex-direction: column;
      gap: 50px;

      .leftSideTop {
        width: 688px;

        display: flex;
        gap: 10px;
        flex-direction: column;

        .leftSideTopTittle {
          color: #e8f2ff;
          font-size: 2.125em;
        }

        .leftSideTopDesc {
          color: #a3a3a8;
          font-size: 1em;
        }
      }

      .leftSideBottom {
        display: flex;
        gap: 40px;
        flex-direction: column;

        .leftSideBottomItem {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 16px;

          &:first-child .bottomItemLeft {
            filter: drop-shadow(0 0 16px rgba(219, 0, 255, 0.6));
          }

          &:nth-child(2) .bottomItemLeft {
            filter: drop-shadow(0 0 16px rgba(142, 47, 48, 0.73));
          }

          .bottomItemRight {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .bottomItemRightTittle {
              font-size: 20px;
            }

            .bottomItemRightDesc {
              width: 607px;
              color: #adb5bd;
              font-size: 0.875em;
            }
          }
        }
      }
    }

    .rightSide {
      max-width: 400px;
      width: 40%;
    }
  }

  /*
xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
*/

  // responsivity

  @media (max-width: 1200px) {
    .container {
      background-size: cover;

      .rightSide {
        display: none;
      }
    }
  }

  @media (max-width: 992px) {
    .container {
      .leftSide {
        .leftSideTop {
          width: auto;

          .leftSideTopTittle {
            font-size: 1.7em;
          }

          .leftSideTopDesc {
            font-size: 1em;
            width: 350px;
          }
        }

        .leftSideBottom {
          .leftSideBottomItem {
            .bottomItemRight {
              .bottomItemRightDesc {
                width: 300px;
              }
            }
          }
        }
      }

      .rightSide {
        display: none;
      }
    }
  }

  @media (max-width: 576px) {
    .container {
      background: none;
      padding: 0 24px;
    }
  }

  @media (max-width: 425px) {
    padding-top: 64px;
    .container .leftSide .leftSideBottom .leftSideBottomItem {
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;

      .bottomItemRight .bottomItemRightDesc {
        width: 100%;
      }
    }
    .container .leftSide .leftSideTop .leftSideTopDesc {
      width: 100%;
    }
  }
`;
