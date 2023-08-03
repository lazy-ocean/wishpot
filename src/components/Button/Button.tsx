import React, { ReactChildren, ReactElement } from "react";
import { Button as StyledButton } from "./Button.styled";

export const Button = ({
  label,
  onClick,
  type,
  children,
}: {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: ReactElement;
}) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {label}
      {children}
    </StyledButton>
  );
};
