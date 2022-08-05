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

  button{
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    color: var(--white);
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  
`;
