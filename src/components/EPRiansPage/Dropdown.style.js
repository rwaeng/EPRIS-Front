import styled from 'styled-components';
import { reg24, m_reg24 } from '../../styles/font';

export const S = {};

S.Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

S.DropdownButton = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0.625rem 0.625rem 0.625rem 1.25rem;
  gap: 0.25rem;
  box-sizing: border-box;

  border-radius: 5rem;
  border: 2px solid var(--grey300);

  cursor: pointer;
`;

S.Gen = styled.div`
  ${reg24}
  color: var(--grey300);
  text-align: center;

  @media (max-width: 1279px) {
    ${m_reg24}
  }
`;

S.Icon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

S.DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  border-radius: 1rem;
  width: 100%;

  position: absolute;
  top: 110%;
  overflow-y: auto;
  z-index: 10;
  max-height: 13rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1279px) {
    max-height: 11rem;
  }
`;

S.DropdownItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 0.625rem 1.25rem;

  ${reg24}
  color: var(--white);
  background-color: var(--grey300);

  cursor: pointer;

  @media (max-width: 1279px) {
    ${m_reg24}
  }
`;
