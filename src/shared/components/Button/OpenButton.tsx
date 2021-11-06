import React, {FunctionComponent, useCallback, useState} from "react";
import { Button } from "@mui/material";
import {ArrowLeftRounded, ArrowRightRounded} from "@mui/icons-material";
export interface OpenButtonProps {
  onClick: () => void;
  children?: JSX.Element | string;
}

const OpenButton: FunctionComponent<OpenButtonProps> = ({
  onClick,
  children,
}) => {
    const [active, setActive] = useState<boolean>(false)

  const toggleArrow = useCallback(() =>{
      setActive(!active)
      onClick()
  },[active, onClick])
  return (<Button onClick={toggleArrow}>
      { !active ? "open" : "close"}
      { !active ? <ArrowRightRounded/> : <ArrowLeftRounded/>}

  </Button>)
};

export default OpenButton;
