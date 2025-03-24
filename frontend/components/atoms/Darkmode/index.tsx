import React, { useState } from "react";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";
import Switch from "@mui/material/Switch";
import styled from "styled-components";
import { useEffect } from "react";

const Darkmode = () => {
  const [theme, setTheme] = useState<string>("dark-theme");

  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };
  return (
    <DarkmodeStyled>
      <div className="left-content">
        <BrightnessMediumIcon />
      </div>
      <div className="right-content">
        <Switch
          value=""
          size="medium"
          checked={checked}
          inputProps={{ "aria-label": "" }}
          onClick={themeToggler}
        ></Switch>
      </div>
    </DarkmodeStyled>
  );
};

const DarkmodeStyled = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  background-color: var(--background-light-color-2);
  width: 6.5rem;
  height: 2.5rem;
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    color: var(--white-color);
  }
`;

export default Darkmode;
