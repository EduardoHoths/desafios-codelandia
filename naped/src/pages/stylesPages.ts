import styled from "styled-components";

interface FirstSectionProps {
  url: string;
  backgroundPosition?: string;
}

export const FirstSection = styled.section`
  background: linear-gradient(to left, rgba(19, 19, 31, 0), rgba(19, 19, 31, 1)),
    ${({ url, backgroundPosition = "center center" }: FirstSectionProps) =>
        `url(${url}) ${backgroundPosition}`}
      no-repeat;

  background-size: cover;
  height: 300px;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 15px;

  h1 {
    font-size: 3rem;
    line-height: 55px;
  }
  span {
    display: inline-block;
    font-size: 1.25rem;
    line-height: 32px;
    max-width: 492px;
  }

  @media (max-width: 768px) {
    background-size: 120%;
    justify-content: end;
    h1 {
      font-size: 1.5rem;
      line-height: 16px;
    }
    span {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
`;

export const SearchBar = styled.div`
  position: relative;
  margin-top: 2.625rem;

  input {
    width: 100%;
    padding: 17px 25px;
    border: 1px solid transparent;
    transition: 0.2s;

    :focus {
      border: 1px solid var(--purple-light);
    }
  }

  button {
    position: absolute;
    right: 25px;
    top: 50%;

    transform: translateY(-50%);
  }

  @media (max-width: 768px) {
    input {
      font-size: 1rem;
      ::placeholder {
        font-size: 1rem;
      }
    }

    button svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const NoticesGrid = styled.ul`
  max-width: 1120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2.125rem;
  column-gap: 2rem;
  list-style: none;

  margin-top: 6.25rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    margin-top: 3.5rem;
    grid-template-columns: 1fr;
  }
`;
