import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #adb5bd;
  padding: 30px 200px;
  z-index: 100;

  .account {
    display: flex;
    gap: 20px;
    align-items: center;

    & > p {
      cursor: pointer !important;
      color: #fff;
      font-size: 0.735rem;
      font-weight: 500;
      transition: 0.5s;
    }

    button {
      width: 100%;
      height: 34px;
      align-items: center;
      justify-content: center;
      padding: 15px 16px;

      color: #fff;
      font-size: 0.735rem;
      font-weight: 500;
      transition: 0.5s;
      border: 1px solid #4f4fcf;
      border-radius: 5px;

      font-weight: 500;

      text-transform: uppercase;
      transition: all ease-in-out 0.4s;

      &:hover {
        background-color: #4f4fcf;
      }
    }
  }
  .logo {
    width: 20%;
    min-width: 200px;
    flex-shrink: 0;
  }

  nav {
    margin: 0 auto 0 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    font-family: "Poppins", sans-serif;
  }

  a {
    font-size: 0.875em;
    transition: 0.2s ease-in-out;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    transition: all 0.3s;
    font-weight: 300;
    color: #a8a8b3;

    &:hover {
      color: #e1e1e6;
    }

    &.active {
      color: #ced4da;
      font-weight: 500;
    }
  }

  & > div:first-child {
    display: none;
  }

  .bm-burger-button {
    position: relative;
    z-index: 200 !important;
  }

  .bm-menu-wrap {
    position: fixed;
    /* height: 100% !important; */
    top: 0;
    left: 0;
  }

  .bm-overlay {
    top: 0;
    left: 0;
    background: none !important;
  }

  .bm-menu {
    background: #1b1a1a;
    padding: 2em;
    font-size: 1.15em;
    z-index: 100;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .bm-item-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    margin: 0;

    .logo {
      margin-left: -8px;
    }
  }

  @media screen and (max-width: 980px) {
    gap: 8px;
    padding: 10px 40px !important;

    nav {
      margin: 0;
    }
  }

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;

    & > div:first-child {
      display: flex;
      align-items: center;
    }

    .logo,
    & > nav {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 16px !important;

    nav {
      display: none;
    }

    .bm-menu-wrap {
      width: 65% !important;
    }

    .bm-menu {
      padding: 1em;
      padding-top: 2em;
    }
  }
`;
