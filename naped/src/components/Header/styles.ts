import styled, { keyframes } from "styled-components";

interface ContainerProps {
  active: boolean;
}

interface MenuActiveProps {
  active: boolean;
}

const animeLeft = keyframes`
  from{
    right: -300px;
  }
  to{
    right: 0;
  }
`;

export const Container = styled.header`
  width: 100%;

  ${({ active }: ContainerProps) =>
    active &&
    `
    position: fixed;
    top: 0;
    left: 0;
    background: var(--gray-200);
    z-index: 99999;
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.625rem 1rem;
  max-width: 1120px;
  margin: 0 auto;

  span {
    color: var(--purple-light);
    font-size: 1.5rem;
    user-select: none;
  }
  > div {
    display: flex;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 3.75rem;
  }
  a {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: var(--purple-light);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.25s ease-out;
    }
    &:hover {
      color: var(--white);
      &::after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }

    &.active {
      &::after {
        transform: scaleX(0);
      }
      color: var(--white);
      border-bottom: 2px solid var(--purple-light);
    }
  }

  button {
    margin-left: 5.25rem;
    background-color: transparent;
    border: 1px solid var(--purple-light);
    padding: 0.313rem 1.25rem;
    border-radius: 30px;
    transition: 0.4s;

    &:hover {
      background-color: var(--purple-light);
    }
  }

  @media (max-width: 900px) {
    nav {
      gap: 2rem;
    }
    button {
      margin-left: 3rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    align-items: flex-start;
    height: 100px;

    nav {
      position: fixed;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 99999;

      padding: 1rem;
      top: 0;
      right: -300px;
      background-color: var(--dark);
      height: 100%;
      width: 250px;

      display: none;
      
      &.menuActive {
        display: flex;
        animation: ${animeLeft} 0.4s forwards;
      }
      svg{
        cursor: pointer;
        position: absolute;
        top: 2rem;
        right: 2rem;
      }
    }
    img{
      cursor: pointer;
    }
    button{
      position: absolute;
      width: calc(100% - 2rem);
      height: 34px;
      top: 3.5rem;
      left: 50%;
      transform: translateX(-50%);
      margin: 0;
      z-index: -1;
    }
    
  }
`;

export const FadeModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: none;

  &.menuActive{
    display: block;
  }
`;
