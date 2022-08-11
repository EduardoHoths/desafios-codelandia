import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root{
    --purple-light: #8257E6;

    --white: #FEFBFB;
    --white-200:#C4C4C4;

    --gray-200: #282830;
    
    --dark: #13131F;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: 'Inter', sans-serif;
    background-color: var(--dark);
    color: var(--white-200);

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--gray-200);
      
    }

    ::-webkit-scrollbar-thumb {
      background: var(--purple-light);
      border: 2px solid var(--gray-200);
      border-radius: 20px;
    }
  }

  h1, h2, h3, h4, h5, h6{
    font-family: 'Lexend Deca', sans-serif;
    color: var(--white);
    font-weight: 400;
  }

  input{
    background-color: var(--gray-200);
    font-family: 'Inter', sans-serif;
    color: var(--white);
    border: none;
    outline: none;
    font-size: 1.25rem;

    ::placeholder{
      color: #989898;
      font-size: 1.25rem;
    }
  }
  button{
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    color: var(--white);
    background-color: transparent;
    border: 0;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  main{
    max-width: 1120px;
  margin: 0 auto;
  margin-top: 7.125rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
  }
  
`;
