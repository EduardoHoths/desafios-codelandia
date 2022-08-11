import styled from "styled-components";

export const FirstSection = styled.section`
  background: linear-gradient(to left, rgba(19, 19, 31, 0), rgba(19, 19, 31, 1)),
    url("https://s3-alpha-sig.figma.com/img/f943/62af/cd5758921eb58e4c445d596e8d41ba44?Expires=1661126400&Signature=LPvc5YW9XcyDX-jOrwR5nNOhsdhcdPWPdg8WjgekMN3FORfZaoRfatOQCsGZlPrGMz8hF0xqcs9l3rbxOJj2ZBWUCxUZrWNwvJ-cKHQElS~XPgMordRRD-3InVv-dKT5r10RxpzpynzSUbtNTZ1ncucp80IxW7LF~6Zq9QDxhbbnRiFF4B4ULLEB2NhAFxowT0fE2XvSc-emz3r~fvj56q1VEifl~v2-9C82c4KkVqrgXT76JjF7aXu8R35Am51kpOlxzE0Y4M5JKM9iKJwL21EUkFBtdry4ftcTqT41YGcYQpPgqe5rZCAhUzYTjqGHKQNcfN3o0e4-RAkP0NSVwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")
      center center no-repeat;

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
    h1{
      font-size: 1.5rem;
      line-height: 16px;
    }
    span{
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
    input{
      font-size: 1rem;
      ::placeholder{
        font-size: 1rem;
      }
    }

    button svg{
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
    grid-template-columns: 1fr ;
  }
`;
