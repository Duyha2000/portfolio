import React from "react";
import styled from "styled-components";
const MainContent = () => {
  return (
    <MainContentStyled>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>
    </MainContentStyled>
  );
};

const MainContentStyled = styled.main`
  position: relative;
  min-height: 100vh;
  z-index: -1;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 2px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;
export default MainContent;
