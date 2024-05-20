import styled from "styled-components";

type avatarProps = {
  size: number;
  img: string;
};

export const Container = styled.div<avatarProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
  flex-shrink: 0;

  &.click {
    cursor: pointer;
  }

  & > img {
    width: 100%;
    height: 100%;
    border-radius: 100%;
    background-size: cover;
  }
`;
