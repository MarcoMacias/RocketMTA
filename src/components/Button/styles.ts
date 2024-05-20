import styled from "styled-components";

export const Container = styled.div`
  min-width: 160px;

  height: 37px;

  border-radius: 3px;

  transition: all ease-in-out 0.4s;

  .button {
    width: 100%;
    height: 44px;
    align-items: center;
    justify-content: center;
    padding: 15px 16px;

    color: #fff;
    font-size: 0.735rem;
    font-weight: 500;
    transition: 0.5s;
    background-color: #4f4fcf;
    border-radius: 5px;

    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    transition: all ease-in-out 0.4s;

    &.save {
      background-color: #7159c1;
    }

    &.cancel {
      &:hover {
        background-color: #7159c1;
      }
    }
  }
`;
