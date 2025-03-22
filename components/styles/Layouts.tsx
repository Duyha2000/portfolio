import styled from "styled-components";

interface Props {
  padding?: string;
}

export const MainLayout = styled.div<Props>`
  padding: ${(props) => props.padding || "5rem"};
  margin-left: 16.3rem;

  @media screen and (max-width: 642px) {
    padding: 4rem;
  }

  @media screen and (max-width: 571px) {
    padding: 2rem 0.4rem;
  }
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
export const InnerLayout = styled.div`
  padding: 5rem 0;
`;
