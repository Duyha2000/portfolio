import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  icon: any;
}
const SmallTitle: React.FC<Props> = ({ icon, title }) => {
  return (
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  );
};

interface TitleProps {
  mb?: string;
}
const SmallTitleStyled = styled.div<TitleProps>`
  display: flex;
  align-items: center;
  p {
    padding-right: 1rem;
    svg {
      font-size: 3rem;
    }
  }
  h3 {
    color: var(--white-color);
    font-size: 2rem;
  }
`;

export default SmallTitle;
