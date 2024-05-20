import styled from "styled-components";

export const Sticky = styled.div`
  width: 100%;
  padding: 12px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  background: linear-gradient(180deg, #015f43 0%, #015f43 100%);
  color: #fff;
  font-size: 0.9rem;
  position: relative;

  button {
    border: 1px solid #fff;
    border-radius: 4px;
    padding: 5px 8px;
    font-size: 0.9rem;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
  }

  .close {
    border: none;
    position: absolute;
    right: 12px;
  }

  @media screen and (max-width: 650px) {
    p {
      display: none;
    }

    .wlBtn {
      padding: 6px 24px;
    }
  }

  @media screen and (max-width: 435px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #121214;
  color: #202024;

  .menu {
    width: 100%;

    &.sticky {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 200;
    }
  }

  & > :nth-child(2) {
    flex-grow: 1;
  }

  &.sticky > :nth-child(2) {
    padding-top: 70px;
  }

  &.sticky.stickyWl > :nth-child(2) {
    padding-top: 124px;
  }

  .menu > header {
    background: #202024;
    padding: 10px 60px;
  }

  .whitelist {
    width: 100%;
    padding: 12px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background: linear-gradient(180deg, #015f43 0%, #015f43 100%);
    color: #fff;
    font-size: 0.9rem;
    position: relative;

    button {
      border: 1px solid #fff;
      border-radius: 4px;
      padding: 5px 8px;
      font-size: 0.9rem;
      color: #fff;
      font-weight: 500;
      cursor: pointer;
    }

    .close {
      border: none;
      position: absolute;
      right: 12px;
    }

    @media screen and (max-width: 650px) {
      p {
        display: none;
      }

      .wlBtn {
        padding: 6px 24px;
      }
    }

    @media screen and (max-width: 435px) {
      flex-direction: column;
      gap: 8px;
    }
  }
`;
