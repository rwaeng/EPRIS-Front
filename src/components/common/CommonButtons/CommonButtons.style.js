import styled from 'styled-components';
import { bold24, m_bold24 } from '../../../styles/font';

export const S = {};

S.JoinUsContainer = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 2.5rem 1rem 3.75rem;
  gap: 0.625rem;

  border-radius: 5rem;
  background-color: ${({ $bgColor }) => ($bgColor ? $bgColor : 'var(--red)')};
  border: ${({ $border }) => ($border ? $border : '0')};

  .btn-text {
    ${bold24};
    color: ${({ $color }) => ($color ? $color : 'var(--black)')};
  }

  .image {
    width: 2.25rem;
    height: 2.25rem;
  }

  @media screen and (max-width: 1280px) {
    padding: 0.5rem 1.25rem 0.5rem 1.875rem;

    .btn-text {
      ${m_bold24}
    }
    .image {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

S.Span = styled.span`
  ${bold24};
  color: ${({ $color }) => ($color ? $color : 'var(--black)')};
`;

S.UpdateContainer = styled.button`
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
`;
