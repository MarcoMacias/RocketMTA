import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & > header {
    background: #202024;
    padding: 16px 60px;
  }

  .main {
    flex-grow: 1;
    padding: 2em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4em;

    .blackHl {
      border-radius: 1%;
      height: 65vh;
      max-height: 420px;
    }

    .content {
      max-width: 320px;
      padding: 2em 0;
      display: flex;
      flex-direction: column;
      /* gap: 8px; */
      align-items: flex-start;
      color: #f8f9fa;

      h1 {
        font-size: 5em;
        line-height: 1.125em;
        color: #8257e5;
      }

      h2 {
        font-weight: 600;
        margin-bottom: 1em;
      }

      label {
        font-size: 0.75em;
        font-weight: 600;
        margin-bottom: 8px;
        color: #08d361;
      }

      p {
        font-size: 0.75em;
        line-height: 1.75em;
      }

      a {
        background: #8257e5;
        color: #f8f9fa;
        border-radius: 4px;
        padding: 12px 16px;
        font-size: 0.75em;
        font-weight: 500;
        margin-top: 16px;
      }
    }

    .content--logo {
      width: 240px;
      margin-bottom: 2em;
    }

    @media screen and (max-width: 840px) {
      /* flex-direction: column; */

      .blackHl {
        height: auto;
        width: 45%;
        max-height: none;
      }
    }
    @media screen and (max-width: 700px) {
      flex-direction: column;

      .blackHl {
        order: 2;
        width: 80%;
      }

      .content {
        max-width: 360px;
        padding: 2em 1em;
      }
    }
  }
`;
