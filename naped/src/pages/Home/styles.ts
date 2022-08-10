import styled from "styled-components";

export const Main = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  margin-top: 7.125rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

export const FirstSection = styled.section`
  h1 {
    font-size: 3rem;
    line-height: 60px;
    margin-bottom: 0.688rem;
    max-width: 303px;
  }

  span {
    font-size: 1.25rem;
    line-height: 32px;
    max-width: 492px;
    display: block;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }

    span {
      font-size: 0.875rem;
      line-height: 19.6px;
    }
  }
`;

export const Highlights = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.25rem;
  margin-top: 5rem;

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    grid-template-columns: 1fr;
    > div:last-child {
      display: none;
    }
  }
`;

export const NewsList = styled.section`
  margin-top: 3.125rem;

  display: grid;
  grid-template-columns: 761px 1fr;
  gap: 1.25rem;
  ul {
    list-style: none;

    max-width: 761px;
    max-height: 895px;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--gray-200);
    }

    ::-webkit-scrollbar-thumb {
      background: var(--purple-light);
      border: 2px solid var(--gray-200);
    }
  }

  aside {
    > div + div {
      margin-top: 2.5rem;
    }

    > h2 {
      position: relative;
      font-size: 1.5rem;
      margin-bottom: 1.875rem;
      display: inline-block;

      &:after {
        content: "";
        width: 130%;
        bottom: -13px;
        left: 0;
        height: 2px;
        background-color: var(--purple-light);
        position: absolute;
      }
    }
  }

  @media (max-width: 1200px) {
    grid-template-columns: 2fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    aside {
      display: none;
    }
  }
`;

export const RecentNews = styled.section`
  margin-top: 6.188rem;

  > h2 {
    position: relative;
    font-size: 1.5rem;
    margin-bottom: 3.438rem;
    display: inline-block;

    &:after {
      content: "";
      width: 90%;
      bottom: -13px;
      left: 0;
      height: 2px;
      background-color: var(--purple-light);
      position: absolute;
    }
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3.25rem;
    row-gap: 2rem;
  }

  @media (max-width: 1200px) {
    > div {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 768px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  margin-top: 5.938rem;
  padding-bottom: 40px;

  span {
    color: var(--purple-light);
    font-size: 1.5rem;
    user-select: none;
  }
  p {
    max-width: 500px;
    margin: 0 auto;
    margin-top: 1rem;
    line-height: 24px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 0.875rem;
      line-height: 19.6px;
    }
  }
`;
