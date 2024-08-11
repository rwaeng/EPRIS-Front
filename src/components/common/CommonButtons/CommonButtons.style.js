import styled from 'styled-components';
import { bold24, m_bold24 } from '../../../styles/font';

export const S = {};

S.JoinUsContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 2.5rem 1rem 3.75rem;
  gap: 0.625rem;

  border-radius: 5rem;
  background-color: var(--red);

  .btn-text {
    ${bold24};
    color: var(--black);
  }

  .image {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media screen and (max-width: 1280px) {
    padding: 0.75rem 2.25rem 0.75rem 3.375rem;

    .btn-text {
      ${m_bold24}
    }
    .image {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

S.UpdateContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 3.75rem;
  gap: 0.625rem;

  border-radius: 5rem;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--red)' : 'var(--grey300)'};

  .btn-text {
    ${bold24};
    color: var(--black);
  }

  .image {
    width: 2.25rem;
    height: 2.25rem;
  }
`;
