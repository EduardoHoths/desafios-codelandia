import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
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
  div {
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
    &:hover{
      color: var(--white);
      &::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    }

    &.active {
      &::after{
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
`;
