import styled from 'styled-components'

export const FooterStyles = styled.footer`
  text-align: center;
  margin-top: 5.938rem;
  padding: 0 1rem;
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
