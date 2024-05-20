import styled from "styled-components";
import ShieldIcon from "@/assets/shield.webp";
import SmileEmoji from "@/assets/smileyEmoji.webp";
import DocumentEmoji from "@/assets/document.webp";

import Section2MainBg from "@/assets/section2MainBg.webp";

import { Bounce, Fade, Flip, Slide, Zoom } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

export const Section3 = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="sectionTop">
        <Fade direction="down" cascade damping={0.3} duration={1500}>
          <h1 className="sectionTitle">
            <Fade cascade damping={0.02} style={{ whiteSpace: "normal" }}>
              Por que escolher a plataforma da Rocket?
            </Fade>
          </h1>

          <div className="sectionTopContent">
            <div className="sectionItem">
              <div className="sectionItemLeft">
                <img className="shieldIcon" src={ShieldIcon} />
              </div>

              <div className="sectionItemRight">
                <h1 className="sectionItemRightText">
                  Segurança de ponta com criptografia.
                </h1>
              </div>
            </div>

            <div className="sectionItem">
              <div className="sectionItemLeft">
                <img className="smileEmoji" src={SmileEmoji} />
              </div>

              <div className="sectionItemRight">
                <h1 className="sectionItemRightText">
                  Uma experiência incrível para os jogadores
                </h1>
              </div>
            </div>

            <div className="sectionItem">
              <div className="sectionItemLeft">
                <img className="documentEmoji" src={DocumentEmoji} />
              </div>

              <div className="sectionItemRight">
                <h1 className="sectionItemRightText">
                  Suporte de alto nível com atendimento 24/7.
                </h1>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <Fade direction="right" cascade damping={0.01} duration={1400}>
        <div className="sectionMid">
          <div className="sectionMidLeft">
            <img className="sectionMidMainBg" src={Section2MainBg} alt='sectionMidMainBg' />
          </div>
          <div className="sectionMidRight">
            <h3 className="h3MidRight">
              <Fade style={{ whiteSpace: "normal" }}>
                PODER DE ESCOLHA
              </Fade>
            </h3>
            <h1 className="titleMidRight">
              <Fade style={{ whiteSpace: "normal" }}>
                Seja uma pessoa de negócios dentro da Rocket
              </Fade>
            </h1>
            <p className="descMidRight">
              <Fade style={{ whiteSpace: "normal" }}>
                Nossa cidade gira a economia de forma independente. Com isso,
                você pode comprar novas empresas e se tornar uma pessoa de
                negócios, criando uma simples loja de roupas ou até mesmo uma
                fábrica.
              </Fade>
            </p>
            <button
              onClick={() => navigate("/home")}
              className="buttonMidRight"
            >
              Criar um negócio
            </button>
          </div>
        </div>
      </Fade>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  padding-bottom: 50px;
  background: #0c0c0d;

  color: #e1e1e6;

  gap: 80px;

  border-bottom: 1px solid #353438;

  .sectionTop {
    margin-top: 100px;

    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 24px;

    .sectionTopContent {
      display: flex;
      flex-direction: row;
    }

    .sectionTitle {
      width: 411.54px;

      font-family: "Manrope";
      font-weight: 800;
      font-size: 2.125em;

      color: #e1e1e6;
    }

    .sectionItem {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 22px;

      .sectionItemLeft {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 74.6px;
        height: 72px;

        background: rgba(235, 236, 232, 0.08);
        border-radius: 5px;

        .shieldIcon,
        .smileEmoji,
        .documentEmoji {
          width: 30px;
          height: 30px;
        }
      }

      .sectionItemRight {
        .sectionItemRightText {
          width: 208px;
          font-family: "Manrope";
          line-height: 29px;
          font-size: 1em;

          color: #a3a3a8;
        }
      }
    }
  }

  .sectionMid {
    display: flex;
    flex-direction: row;
    align-items: center;

    .sectionMidLeft {
      width: 55%;
    }

    .sectionMidRight {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .h3MidRight {
        font-family: "Manrope";
        font-style: normal;
        font-weight: 800;
        font-size: 17px;
        line-height: 25px;
        /* identical to box height */

        text-transform: uppercase;

        color: #09d361;
      }

      .titleMidRight {
        width: 373px;

        font-family: "Manrope";
        font-weight: 700;
        font-size: 2.5em;

        color: #ffffff;
      }

      .descMidRight {
        width: 437px;

        font-family: "Manrope";
        font-size: 17px;
        font-weight: 700;
        line-height: 26px;

        color: #757095;
      }

      .buttonMidRight {
        width: 200px;
        height: 60px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        font-size: 15px;
        background: #3734a9;
        border-radius: 7px;
        color: #ffffff;

        transition: all 0.5s;

        &:hover {
          background: #2c2a7e;
        }
      }
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
    .sectionTop {
      justify-content: center;

      .sectionTopContent {
        width: 100%;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
        gap: 24px;
        margin-left: 30px;
        align-items: flex-start;
      }

      .sectionItem {
        .sectionItemLeft {
          width: 55px;
          height: 55px;

          .shieldIcon,
          .smileEmoji,
          .documentEmoji {
            width: 25px;
            height: 25px;
          }
        }

        .sectionItemRight {
          .sectionItemRightText {
            line-height: 19px;
            font-size: 0.9em;
          }
        }
      }

      .sectionTitle {
        margin-left: 30px;
        width: auto;
        font-size: 1.7em;
      }
    }

    .sectionMid {
      .sectionMidRight {
        gap: 14px;

        .titleMidRight {
          font-size: 1.8em;
        }

        .h3MidRight {
          font-size: 14px;
        }

        .descMidRight {
          font-size: 15.5px;
          line-height: 19px;
        }

        .buttonMidRight {
          width: 145px;
          height: 50px;
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .sectionTop {
      justify-content: center;

      .sectionTopContent {
        width: 100%;
        justify-content: space-around;
        align-items: center;
        display: flex;
        gap: 16px;
        align-items: center;
        flex-wrap: wrap;
      }

      .sectionItem {
        .sectionItemLeft {
          width: 55px;
          height: 55px;

          .shieldIcon,
          .smileEmoji,
          .documentEmoji {
            width: 25px;
            height: 25px;
          }
        }

        .sectionItemRight {
          .sectionItemRightText {
            line-height: 19px;
            font-size: 0.9em;
          }
        }
      }

      .sectionTitle {
        margin-left: 30px;
        width: auto;
        font-size: 1.7em;
      }
    }

    .sectionMid {
      .sectionMidRight {
        gap: 14px;

        .titleMidRight {
          font-size: 1.8em;
        }

        .h3MidRight {
          font-size: 14px;
        }

        .descMidRight {
          font-size: 15.5px;
          line-height: 19px;
        }

        .buttonMidRight {
          width: 145px;
          height: 50px;
          font-size: 14px;
        }
      }
    }

    .sectionMidLeft {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .sectionTop {
      justify-content: center;

      .sectionTopContent {
        width: 100%;
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-left: 30px;
        align-items: flex-start;
      }

      .sectionItem {
        .sectionItemLeft {
          width: 55px;
          height: 55px;

          .shieldIcon,
          .smileEmoji,
          .documentEmoji {
            width: 25px;
            height: 25px;
          }
        }

        .sectionItemRight {
          .sectionItemRightText {
            line-height: 19px;
            font-size: 0.9em;
          }
        }
      }

      .sectionTitle {
        margin-left: 30px;
        width: auto;
        font-size: 1.7em;
      }
    }

    .sectionMid {
      .sectionMidRight {
        gap: 14px;

        .titleMidRight {
          font-size: 1.8em;
        }

        .h3MidRight {
          font-size: 14px;
        }

        .descMidRight {
          font-size: 15.5px;
          line-height: 19px;
        }

        .buttonMidRight {
          width: 145px;
          height: 50px;
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 576px) {
    .sectionTop {
      justify-content: center;

      .sectionTopContent {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin-left: 0;
        align-items: flex-start;
      }

      .sectionItem {
        .sectionItemLeft {
          width: 55px;
          height: 55px;

          .shieldIcon,
          .smileEmoji,
          .documentEmoji {
            width: 25px;
            height: 25px;
          }
        }

        .sectionItemRight {
          .sectionItemRightText {
            line-height: 19px;
            font-size: 0.9em;
          }
        }
      }

      .sectionTitle {
        margin-left: 0;
        width: auto;
        font-size: 1.7em;
      }
    }

    .sectionMid {
      .sectionMidRight {
        gap: 14px;

        .titleMidRight {
          width: 270px;
          font-size: 1.8em;
        }

        .h3MidRight {
          width: fit-content;
          font-size: 14px;
        }

        .descMidRight {
          width: fit-content;
          font-size: 15.5px;
          line-height: 19px;
        }

        .buttonMidRight {
          width: 145px;
          height: 50px;
          font-size: 14px;
        }
      }
    }
  }

  @media (max-width: 420px) {
    .sectionTop {
      .sectionTitle,
      .sectionTopContent {
        margin: 0;
      }
      .sectionItem .sectionItemRight .sectionItemRightText {
        width: 100%;
      }
    }

    .sectionMid .sectionMidRight {
      margin: 0;
      .titleMidRight {
        width: 100%;
      }
    }
  }
`;
