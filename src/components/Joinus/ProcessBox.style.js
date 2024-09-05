import styled from 'styled-components';
import * as font from '../../styles/font';

export const S = {};

S.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1279px) {
    flex-direction: column;
    margin-bottom: -0.5rem;
  }
`;

S.Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 14.93206rem;
  height: 11.75rem;
  box-sizing: border-box;
  padding: 2.5rem;
  border-radius: 1rem;
  background-color: var(--grey500);

  @media (max-width: 1279px) {
    width: 100%;
    height: 8.75rem;
    align-items: center;
    justify-content: unset;
    gap: 1.5rem;
    padding: 1.5rem 0;
  }
`;

S.Arrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 1.7rem solid transparent;
  border-top: 1.7rem solid transparent;
  border-left: 1.7rem solid var(--grey500);
  border-right: 1.7rem solid transparent;

  @media (max-width: 1279px) {
    border-bottom: 1.7rem solid transparent;
    border-top: 1.7rem solid var(--grey500);
    border-left: 1.7rem solid transparent;
    border-right: 1.7rem solid transparent;
  }
`;

S.Title = styled.div`
  align-self: flex-start;
  ${font.bold24}
  color: var(--white);

  @media (max-width: 1279px) {
    ${font.m_bold24}
    align-self: auto;
  }
`;

S.Desc = styled.div`
  ${font.reg18}
  color: var(--grey300);

  margin-left: 1.5rem;
  white-space: pre-wrap;

  @media (max-width: 1279px) {
    ${font.m_reg18}
    text-align: center;
    margin-left: 0;
  }
`;
