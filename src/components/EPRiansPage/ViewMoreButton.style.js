import styled from 'styled-components';
import * as font from '../../styles/font';

export const S = {};

S.Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  margin-top: 1rem;
  margin-left: auto;
  padding: 0.5rem 1.25rem;

  gap: 0.25rem;

  background-color: inherit;

  @media (min-width: 1280px) {
    &.mobile-only {
      display: none;
    }
  }
  @media (max-width: 1279px) {
    margin: 0;
  }
`;

S.Text = styled.div`
  ${font.bold18}
  text-align: center;
  color: var(--grey100);
`;

S.Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
