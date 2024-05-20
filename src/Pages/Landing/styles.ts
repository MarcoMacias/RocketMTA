import styled from "styled-components";

import Background from "@/assets/nevoaBg.webp";
import CirclesBg from "@/assets/circlesBg.webp";

export const Container = styled.div`
  width: 100%;
  background: #0c0c0d;
  overflow-x: hidden;

  .mainSec {
    background: url(${Background}) no-repeat,
      radial-gradient(ellipse at top, rgba(99, 59, 188, 0.4) -100%, transparent)
        no-repeat,
      linear-gradient(#191623, #191623) no-repeat;
    background-size: 100% 50%, 100%, 100%;
    width: 100%;
    min-height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #f8f9fa;

    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: url(${CirclesBg}) no-repeat;
      background-size: 125% 80%;
      background-position: center bottom;

      @media screen and (max-width: 1024px) {
        background-size: 150% 75%;
      }

      @media screen and (max-width: 768px) {
        background-size: 150% 60%;
      }

      @media screen and (max-width: 425px) {
        background: none;
      }
    }

    .content {
      margin: -15vh 0 25vh;
      max-width: 720px;
      width: 100%;
      height: 95vh;
      padding: 0 32px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      text-align: center;

      h1 {
        font-family: "Cabinet Grotesk", sans-serif;
        font-weight: 900;
        font-size: 3.5em;
        line-height: 1em;
      }

      p {
        font-size: 1em;
      }

      button {
        margin-top: 16px;
        background: #6e42e5;
        color: #f8f9fa;
        padding: 12px 48px;
        font-size: 1.125em;
        font-weight: 500;
        border-radius: 8px;
        transition: all 0.5s;
        cursor: pointer;

        &:hover {
          background: #5d37c2;
        }
      }

      @media screen and (max-width: 1024px) {
        margin-bottom: 15vh;
      }

      @media screen and (max-width: 768px) {
        margin-bottom: 5vh;
        h1 {
          font-size: 2.5em;
        }

        p {
          font-size: 0.875em;
        }

        button {
          font-size: 1em;
        }
      }
    }

    /* .circles {
      .circle {
        max-width: none;
        width: 110%;
        position: absolute;
        bottom: -140%;
        margin-left: -5%;
      }

      .circle:nth-child(2) {
        width: 100%;
        margin-left: 0%;
      }
      .circle:nth-child(3) {
        width: 90%;
        margin-left: 5%;
      }
      .circle:nth-child(4) {
        width: 80%;
        margin-left: 10%;
      }
      .circle:nth-child(5) {
        width: 70%;
        margin-left: 15%;
      }
    } */

    @media screen and (max-width: 768px) {
      background-size: auto 50%, 100%, 100%;
      background-position: top center;
    }
  }
`;
