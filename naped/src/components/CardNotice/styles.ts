import styled from "styled-components";

interface ContainerProps {
  width: string;
  height: string;
}

export const Container = styled.div`
  position: relative;
  border: 1px solid transparent;
  height: ${({height})=> `${parseInt(height) + 2}px` };
  transition: 0.2s;

  &:hover{
    border: 1px solid var(--purple-light);
  }

  span {
    font-family: "Lexend Deca";
    font-size:${({ width }: ContainerProps) => (width > "338" ? "0.875rem" : "0.75rem")}  ;
    padding: ${({ width }: ContainerProps) => (width > "338" ? "0.25rem 1.125rem" : "0.188rem 1rem")} ;
    background-color: var(--purple-light);
    border-radius: 3px;
    color: var(--white);
    position: absolute;
    top: 1.125rem;
    left: 1.875rem;
    z-index: 999;
  }

  img {
    width: ${({ width }: ContainerProps) => `${width}px`};
    height: ${({ height }: ContainerProps) => `${height}px`};
    object-fit: cover;
    filter: brightness(0.6);
  }

  h2 {
    position: absolute;
    bottom: 0.938rem;
    left: 1.875rem;
    max-width: 701px;
    font-size: ${({ width }: ContainerProps) => (width > "338" ? "1.5rem" : "0.813rem")};
    line-height: ${({ width }: ContainerProps) => (width > "338" ? "34px" : "20px")};
  }
`;
