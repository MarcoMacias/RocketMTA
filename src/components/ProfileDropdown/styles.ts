import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-left: auto;

  .dropdown {
    position: relative;

    & > button {
      display: flex;
      align-items: center;

      svg {
        transition: 0.2s linear;
        flex-shrink: 0;
      }

      svg.open {
        transform: rotate(180deg);
      }
    }
  }

  h3 {
    font-family: "Whitney";
    font-weight: 500;
    font-style: normal;
    font-size: 16px;
    color: #e1e1e6;
    padding-right: 15px;
  }

  .bell {
    padding-right: 10px;
  }

  .dropdown--menu {
    position: absolute;
    top: 48px;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    background: #202128;
    color: #f8f9fa;
    text-align: start;
    white-space: nowrap;
    padding: 8px 0;
    border-radius: 6px;
    border: 1px solid #5b5c62;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: default;
    z-index: 100;

    .divisor {
      width: 100%;
      height: 1px;
      background: #5b5c62;
      opacity: 0.6;
    }

    p,
    button {
      width: 100%;
      padding: 4px 16px;
      font-size: 0.75em;
    }

    p {
      color: #ced4da;
      user-select: text;
    }

    button {
      color: inherit;
      font-weight: 300;

      &:hover {
        background: #6e42e5;
      }
    }

    .signOut:hover {
      background: #d73628;
    }
  }
`;
