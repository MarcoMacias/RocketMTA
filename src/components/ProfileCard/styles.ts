import styled from "styled-components";

type ContainerProps = {
  bgUrl?: string;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-width: 220px;
  max-width: 240px;
  background: #19191c;
  text-align: center;
  position: relative;
  border: 1px solid #282830;
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  color: #f8f9fa;
  font-family: "Inter", sans-serif;

  &::before {
    content: "";
    background-image: ${({ bgUrl }) => `url(${bgUrl})`};
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.15;
    z-index: -1;
  }

  .profileCard--country {
    width: 18px;
    position: absolute;
    top: 6px;
    left: 8px;
  }

  .profileCard--username {
    margin-top: 4px;
    display: flex;
    align-items: flex-start;
    gap: 4px;
    font-size: 1.25em;
    font-family: "FranckerW01", sans-serif;
    letter-spacing: 1.25px;
  }

  .profileCard--desc {
    width: 90%;
    height: 30px;
    color: #e1e1e6;
    font-size: 0.875em;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .profileCard--local {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    font-size: 0.875em;
    color: #87868b;
  }

  .profileCard--badges {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;

    img {
      width: 32px;
    }
  }

  .profileCard--follow {
    width: 100%;
    background: #8257e6;
    padding: 8px;
    border-radius: 4px;
    color: #f8f9fa;
    display: flex;
    justify-content: center;
    letter-spacing: 0.75px;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
