import styled from "styled-components";

export const Container = styled.div`
  width: 320px;

  * {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    transition: 0.1s;
  }

  .box {
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px solid #29292e;
    transition: all ease-in-out 0.4s;
    position: relative;

    &.feedback {
      border: 1px solid #ff5343;
    }

    &.icon {
      input {
        padding-left: 32px;
      }

      &.active svg {
        color: #6e42e5;
      }

      svg {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translate(-50%, -50%);
        color: #616161;
        transition: 0.2s ease-in-out;
      }
    }
  }

  input {
    width: 100%;
    height: 40px;
    padding: 10px 20px;
    font-size: 1em;
    background: none;
    outline: none;
    color: #d2d2d2;
    border-radius: 4px;

    &:focus {
      border: 2px solid #7159c1;
    }

    &::placeholder {
      color: #505059;
      font-weight: 400;
      font-size: 14px;
    }
  }

  .feedback {
    margin-top: 5px;
    font-size: 0.75em;
    font-weight: 500;
    display: flex;
    gap: 5px;

    &:focus {
      border: 2px solid #ff5343;
    }

    svg {
      font-size: 1.1em;
    }

    &.error {
      color: #ff5343;
    }
  }
`;
