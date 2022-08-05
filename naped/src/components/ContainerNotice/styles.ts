import styled from "styled-components";

export const Notice = styled.li`
  display: flex;
  gap: 1.125rem;

  > div:last-child {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-around;

    h3 {
      font-size: 0.875rem;
      max-width: 394px;
    }
    span {
      font-size: 0.75rem;
      max-width: 330px;

      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    data {
      font-size: 0.625rem;
      color: var(--white);
    }

    a {
      background-color: var(--purple-light);
      color: var(--white);
      font-size: 0.75rem;
      padding: 0.188rem 1.375rem;
      border-radius: 3px;
      transition: 0.2s;

      &:hover {
        filter: brightness(1.1);
      }
    }
  }

  & + li {
    margin-top: 2.188rem;
  }
`;

export const ImageContainer = styled.div`
  width: 200px;
  height: 151px;
  position: relative;

  span {
    position: absolute;
    top: 0.625rem;
    left: 0.625rem;

    background-color: var(--purple-light);
    color: var(--white);
    padding: 1px 1rem;
    border-radius: 3px;
    font-size: 0.75rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
