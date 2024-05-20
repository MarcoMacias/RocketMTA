import { Container } from "./styles";
import { CircularProgress } from "@mui/material";
import { HtmlHTMLAttributes } from "react";

type ButtonProps = {
  loading?: boolean;
  active?: boolean;
  disabled?: boolean;
  cancel?: boolean;
  sx?: object;
  type?: "button" | "reset" | "submit" | undefined;
};

export const Button = ({
  loading = false,
  active = false,
  cancel = false,
  type,
  sx,
  disabled,
  ...rest
}: ButtonProps & HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Container>
      <button
        style={sx}
        className={`button ${cancel ? "cancel" : "save"}`}
        {...rest}
        type={type}
      >
        {loading && <CircularProgress size={24} sx={{ color: "white" }} />}
        {!loading && <span>{rest.children}</span>}
      </button>
    </Container>
  );
};
