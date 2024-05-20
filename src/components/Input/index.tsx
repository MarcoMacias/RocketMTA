import {
  forwardRef,
  HtmlHTMLAttributes,
  HTMLInputTypeAttribute,
  LegacyRef,
  ReactNode,
  useState,
} from "react";
import { Container } from "./styles";
import { FaUserAlt } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { FieldError } from "react-hook-form";

type InputProps = {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  masked: boolean;
  sx?: object;
  maxLength?: number;
  focus?: boolean;
  disabled?: boolean;
  value?: string;
  error?: FieldError;
  onChange?: any;
  icon?: "user" | "password" | ReactNode;
};

export function InputComponent(
  {
    id,
    icon,
    name,
    focus,
    masked,
    placeholder,
    disabled,
    error,
    value,
    maxLength,
    sx,
    onChange,
    ...rest
  }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) {
  const [refValue, setValue] = useState(value);

  return (
    <Container style={sx}>
      <div
        className={`box ${icon && "icon"} ${focus && "active"} ${
          error && "feedback"
        }`}
      >
        {icon === "user" ? (
          <FaUserAlt size={14} />
        ) : icon === "password" ? (
          <FaUnlock size={14} />
        ) : (
          icon
        )}
        <input
          name={name}
          id={id}
          type={masked ? "password" : "text"}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
          onChange={(e) => setValue(e.target.value)}
          value={refValue}
          // style={sx}
          {...rest}
          ref={ref}
        />
      </div>

      {!!error && (
        <label htmlFor={id} className="feedback error">
          <MdErrorOutline />
          {error.message}
        </label>
      )}
    </Container>
  );
}

export const Input = forwardRef(InputComponent);
