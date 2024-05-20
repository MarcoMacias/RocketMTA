import styled from "styled-components";
import Section2Img from "@/assets/section2Img.webp";
import Arrow from "@/assets/arrow.webp";
import { Bounce, Fade, Flip, Slide, Zoom } from "react-awesome-reveal";

export const Section2 = () => {
  return (
    <Container>
      <Fade>
        <img className="down" src={Arrow} alt='arrow pointing down'/>
      </Fade>

      <div className="sectionTop">
        <Fade direction="up" cascade damping={0.3}>
          <h1 className="sectionTitle">
            Somos um ecossistema completo para sua diversão.
          </h1>

          <p className="sectionDesc">
            A Rocket Community é um projeto de alto nível voltado para a
            plataforma do MTA, que apresenta aspectos únicos e que se difere de
            outros servidores do mesmo segmento.
          </p>
        </Fade>
      </div>

      <div className="divisor"></div>

      <div className="sectionBottom">
        <div className="leftSectionBottom">
          <Fade direction="up" cascade damping={0.25}>
            <div className="sectionBottomItem">
              <div className="leftBottom2">1</div>

              <div className="rightBottom">
                <p className="bottomTitle">Crie uma conta</p>
                <p className="bottomDesc">
                  Criar uma conta na Rocket é muito simples: basta um e-mail,
                  senha e nome de usuário. Você também pode escolher um método
                  de cadastro automático como Google ou Facebook.
                </p>
              </div>
            </div>

            <div className="sectionBottomItem">
              <div className="leftBottom">2</div>

              <div className="rightBottom">
                <p className="bottomTitle">Whitelist</p>
                <p className="bottomDesc">
                  Após criar a sua conta, você será submetido a uma whitelist de
                  texto com algumas perguntas basicas referente ao Roleplay, não
                  se preocupe. Não é nada impossivel
                </p>
              </div>
            </div>

            <div className="sectionBottomItem">
              <div className="leftBottom">3</div>

              <div className="rightBottom">
                <p className="bottomTitle">Entrevista</p>
                <p className="bottomDesc">
                  Por fim, mostre para um entrevistador que você tem todo o
                  conhecimento necessário para fazer um bom Roleplay. Não fique
                  com medo, somos todos amigáveis!
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <div className="rightSectionBottom">
          <Fade direction="right" cascade damping={0.25}>
            <img src={Section2Img} alt="section2" />
          </Fade>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  background: #121214;

  color: #e1e1e6;

  gap: 64px;

  padding-bottom: 50px;
  border-bottom: 1px solid #353438;

  margin-top: -80px;

  .down {
    animation: slideDown 4s linear infinite;
  }

  @keyframes slideDown {
    0% {
      transform: translateY(-50%);
    }
    50% {
      transform: translateY(5%);
    }
    100% {
      transform: translateY(-50%);
    }
  }

  .divisor {
    width: 70%;
    height: 2px;
    background: #353438;
  }

  .sectionTop {
    max-width: 812px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    .sectionTitle {
      text-align: center;
      font-family: "Poppins";
      font-size: 2.5em;
    }

    .sectionDesc {
      text-align: center;
      font-size: 0.875em;
      color: #a3a3a8;
    }
  }

  .sectionBottom {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 150px;

    .leftSectionBottom {
      display: flex;
      flex-direction: column;
      gap: 50px;

      .sectionBottomItem {
        display: flex;
        flex-direction: row;
        gap: 25px;

        .leftBottom {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          width: 64px;
          height: 64px;
          border-radius: 100%;
          background: #1b1c31;

          font-weight: 700;
          font-size: 1.9em;
          color: #e8f2ff;

          flex-shrink: 0;
        }

        .leftBottom2 {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          width: 64px;
          height: 64px;
          border-radius: 100%;
          background: #5e3ea7;

          font-weight: 700;
          font-size: 1.9em;
          color: #e8f2ff;

          flex-shrink: 0;
        }

        .rightBottom {
          display: flex;
          flex-direction: column;
          gap: 7px;

          .bottomTitle {
            font-weight: 600;
            font-size: 1.5em;
            color: #e8f2ff;
          }

          .bottomDesc {
            max-width: 389px;
            font-weight: 400;
            font-size: 0.75em;
            color: #adb5bd;
          }
        }
      }
    }

    .rightSectionBottom {
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

  @media (max-width: 992px) {
    .sectionTop {
      .sectionTitle {
        max-width: 350px;
        font-size: 1.7em;
      }

      .sectionDesc {
        font-size: 14px;
        width: 300px;
      }
    }

    .sectionBottom {
      .leftSectionBottom {
        .sectionBottomItem {
          .rightBottom {
            .bottomTitle {
              font-size: 1.3em;
            }

            .bottomDesc {
              font-size: 0.75em;
              width: 270px;
            }
          }

          .leftBottom2,
          .leftBottom {
            font-size: 1.5em;
            width: 56px;
            height: 56px;
          }
        }
      }

      .rightSectionBottom {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    .sectionTop {
      .sectionTitle {
        max-width: 350px;
        font-size: 1.7em;
      }

      .sectionDesc {
        font-size: 14px;
        width: 300px;
      }
    }

    .sectionBottom {
      .leftSectionBottom {
        .sectionBottomItem {
          .rightBottom {
            .bottomTitle {
              font-size: 1.3em;
            }

            .bottomDesc {
              font-size: 0.75em;
              width: 270px;
            }
          }
        }
      }

      .rightSectionBottom {
        display: none;
      }
    }
  }

  @media (max-width: 576px) {
    margin-top: -10px;

    .sectionTop {
      .sectionTitle {
        max-width: 350px;
        font-size: 1.7em;
      }

      .sectionDesc {
        font-size: 14px;
        width: 300px;
      }
    }

    .sectionBottom {
      .leftSectionBottom {
        .sectionBottomItem {
          .rightBottom {
            .bottomTitle {
              font-size: 1.3em;
            }

            .bottomDesc {
              font-size: 0.75em;
              width: 270px;
            }
          }
        }
      }

      .rightSectionBottom {
        display: none;
      }
    }
  }

  @media (max-width: 420px) {
    .sectionTop .sectionDesc {
      width: 100%;
    }
    .sectionBottom .leftSectionBottom .sectionBottomItem {
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;

      .rightBottom .bottomDesc {
        width: 100%;
      }
    }
  }
`;
