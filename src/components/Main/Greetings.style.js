import styled from 'styled-components';
import {
  bold24,
  bold18,
  reg18,
  m_bold24,
  m_bold18,
  m_reg18,
} from '../../styles/font';

const S = {
  GreetingsLayout: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 124px;
    @media (max-width: 1279px) {
      flex-direction: column;
      gap: 24px;
    }
  `,
  PhotoWrapper: styled.img`
    width: 259px;
    height: 345.333px;
    flex-shrink: 0;
    border-radius: var(--xxs, 16px);
    background: lightgray 50% / cover no-repeat;
    @media (max-width: 1279px) {
      width: 335px;
      height: 452px;
    }
  `,
  MemberContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  NameText: styled.div`
    color: var(--grey100, #cfd1da);
    ${bold24}
    margin-bottom:8px;
    @media (max-width: 1279px) {
      ${m_bold24}
      margin-bottom:5px;
    }
  `,
  RoleText: styled.div`
    color: var(--grey100, #cfd1da);
    ${bold18};
    margin-bottom: 48px;
    @media (max-width: 1279px) {
      ${m_bold18}
      margin-bottom: 24px;
    }
  `,
  InfoText: styled.div`
    color: var(--grey100, #cfd1da);
    ${reg18};
    white-space: pre-line;
    @media (max-width: 1279px) {
      ${m_reg18}
    }
  `,
};

export { S };
