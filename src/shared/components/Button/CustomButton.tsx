import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FunctionComponent, SyntheticEvent } from "react";
export interface ButtonProps {
  children: string | JSX.Element;
  onClick: (e: SyntheticEvent) => Promise<void>;
  fullWidth?: boolean;
}

const CustomButton: FunctionComponent<ButtonProps> = ({
  onClick,
  children,
    fullWidth
}) => {
  return (
    <Button variant="contained" fullWidth={fullWidth} onClick={onClick}>
      {children}
    </Button>
  );
};
export default CustomButton;
