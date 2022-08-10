import styled from "styled-components";

export const Main = styled.main`
  margin-top: 5.563rem;
  h1 {
    font-size: 2.25rem;
    line-height: 55px;
  }

  > span {
    font-size: 1.2rem;
    margin: 0.75rem 0;
    line-height: 40px;
  }

  time {
    display: block;
    font-size: 1.125rem;
    line-height: 55px;
  }

  > p {
    margin-top: 2.688rem;
    line-height: 40px;
  }
  > img {
    width: 100%;
    object-fit: cover;
    margin-top: 2.688rem;
  }
  > h2 {
    margin-top: 2.688rem;
  }
  > a {
    display: inline-block;
    margin-top: 2.688rem;
    color: var(--purple-light);
    transition: 0.2s;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FrontCover = styled.div`
  width: 100%;
  height: 450px;
  position: relative;
  margin-top: 0.75rem;
  span {
    position: absolute;
    top: 0.875rem;
    left: 0.875rem;
    padding: 4px 22px;
    background-color: var(--purple-light);
    border-radius: 3px;
    color: var(--white);
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const RecentNews = styled.section`
  margin-top: 3.188rem;

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
