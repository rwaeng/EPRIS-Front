import styled from 'styled-components';
import * as font from '../../styles/font';

export const S = {};

S.Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 36rem;

  @media (max-width: 1279px) {
    width: 100%;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

S.Qnum = styled.div`
  width: 2.6rem;
  ${font.bold24}
  color: var(--grey100);

  @media (max-width: 1279px) {
    width: 2rem;
    ${font.m_bold24}
  }
`;

S.QnA = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.15rem;

  @media (max-width: 1279px) {
    width: 18rem;
  }
`;

S.Q = styled.div`
  width: 100%;
  ${font.bold24}
  color: var(--grey100);

  margin-bottom: 1.5rem;

  @media (max-width: 1279px) {
    ${font.m_bold24}
    margin-bottom: 0.5rem;
  }
`;

S.A = styled.div`
  width: 100%;
  ${font.reg18}
  color: var(--grey300);

  white-space: pre-wrap;
  @media (max-width: 1279px) {
    ${font.m_reg18}
  }
`;
