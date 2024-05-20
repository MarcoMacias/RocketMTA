import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px 147px;
  background-color: #121214;

  .Wrapper {
    width: 1630px;
    display: flex;
    flex-direction: column;

    .divisor {
      border-top: 1px solid #353438;
    }

    .ContentTop {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 16px;
      justify-content: space-between;

      ul {
        display: flex;
        gap: 26px;

        a {
          transition: all 0.4s;
        }

        a:hover {
          transition: all 0.4s;
          color: #b0b0b0;
        }
      }

      a {
        font-family: "Roboto", sans-serif;
        font-size: 0.75em;
        font-weight: 500;
        color: white;
      }
    }

    .ContentBottom {
      display: flex;
      align-items: center;
      height: auto;
      margin-top: 36px;
      justify-content: space-between;

      a {
        transition: all 0.4s;
      }

      a:hover {
        transition: all 0.4s;
        transform: translateY(-10px);
      }

      .WrapperBottom {
        display: flex;
        align-items: center;

        .Social {
          display: flex;
          align-items: center;
          gap: 10px;

          .Twitter {
            display: inline-flex;
            width: 32px;
            height: 32px;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #243fe2;
          }

          .Instagram {
            display: inline-flex;
            width: 32px;
            height: 32px;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #15181d;
          }

          .Facebook {
            display: inline-flex;
            width: 32px;
            height: 32px;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: #15181d;
          }
        }
      }

      .RightDivisor {
        height: 54px;
        border-right: 1px solid #353438;
        margin-left: 21px;
      }

      .AddressCopyright {
        display: flex;
        flex-direction: column;
        margin-left: 21px;

        .Address {
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          font-size: 0.875em;
          color: #86898b;
        }

        .Copyright {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: 0.75em;
          color: #86898b;

          a:hover {
            color: white;
          }
        }
      }

      .NineYears {
        display: flex;
        justify-content: flex-end;
        font-family: "Roboto", sans-serif;
        font-size: 0.75em;
        font-weight: 500;
        color: white;
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 0;

    .Wrapper {
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0;

    .Wrapper {
      padding: 0 20px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0;
    height: auto;

    .Wrapper {
      padding: 0 20px 17px;
      .ContentTop {
        flex-direction: column;
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 20px 0;
    height: auto;

    .Wrapper {
      .ContentTop {
        flex-direction: column;
      }
      .ContentBottom {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 20px;
        flex-direction: column;

        .AddressCopyright {
          margin-left: 0px;
        }
      }
      .WrapperBottom {
        margin: 0;
        align-items: center;
        gap: 10px;
        justify-content: center;
        flex-direction: column;

        .Social {
          margin-right: 0;
        }
      }
      .RightDivisor {
        display: none;
      }
    }
  }

  @media screen and (max-width: 384px) {
    .Wrapper {
      padding: 0 8px;
      .ContentTop {
        display: flex;
        text-align: center;
        flex-direction: column;

        ul {
          gap: 8px;
          flex-direction: column;
        }
      }
    }
  }
`;
