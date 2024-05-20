import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 16px;
  background: #17181c;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  .head {
    width: 100%;
    display: flex;
    align-items: center;

    .head--userClick {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-right: auto;
    }

    .head--middle {
      display: flex;
      flex-direction: column;
      gap: 2px;

      h4 {
        font-weight: 400;
        font-size: 0.875em;
        color: #f8f9fa;
      }

      small {
        color: #87868b;
        font-size: 0.75em;
      }
    }
  }

  .post--desc {
    font-size: 0.875em;
    font-weight: 400;
    color: #ced4da;
  }

  .post--img {
    width: 100%;
    border-radius: 8px;
  }

  .post--actions {
    display: flex;
    align-items: center;
    gap: 16px;

    button {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #585858;
      font-size: 0.875em;
      font-weight: 600;
    }

    .liked {
      animation: like 0.3s ease;
    }

    @keyframes like {
      0% {
        transform: scale(1);
        opacity: 0.6;
      }
      50% {
        transform: scale(0.6);
        opacity: 1;
      }

      100% {
        transform: scale(1);
      }
    }
  }

  .post--comment {
    margin-top: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .commentList {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    .comment--item {
      width: 100%;
      display: flex;
      align-items: flex-start;
      gap: 8px;

      .wrap {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .head {
        width: 100%;
        padding: 0 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
          display: flex;
          flex-direction: column;
        }

        strong {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: 0.875em;
        }

        small {
          font-size: 0.625em;
          color: #87868b;
        }
      }

      .content {
        background: #202024;
        padding: 12px;
        border-radius: 8px;
        font-family: "Poppins", sans-serif;
        color: #adb5bd;
        font-size: 0.875em;
        animation: commentItem 0.4s ease-in;
      }
    }

    .more {
      color: #6c757d;
      font-size: 0.875rem;
      font-weight: 500;
    }

    @keyframes commentItem {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .comment--input {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    background: #26262c;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      width: 80%;
      margin-right: auto;
      color: #ced4da;
      font-size: 0.875em;
      font-weight: 500;
    }

    svg {
      transition: 0.2s ease-in;
    }

    button:hover svg {
      color: #ced4da !important;
    }
  }

  @media screen and (max-width: 425px) {
    .post--comment .avatar {
      display: none;
    }
  }
`;
