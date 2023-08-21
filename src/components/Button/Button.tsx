import React, { ReactElement } from "react";
import { Button as StyledButton } from "./Button.styled";

export enum ButtonSize {
  s = "s",
  l = "l",
  m = "m",
}

export const Button = ({
  label,
  onClick,
  type,
  children,
  size = ButtonSize.m,
}: {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: ReactElement;
  size?: ButtonSize;
}) => {
  return (
    <StyledButton type={type} onClick={onClick} size={size}>
      {label}
      {children}
    </StyledButton>
  );
};
