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
    justify-content: flex-start;
    gap: 7.75rem;
    @media (max-width: 1279px) {
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
  `,
  PhotoWrapper: styled.img`
    width: 16.1875rem;
    height: 21.5833rem;
    border-radius: 1rem;
    background: lightgray 50% / cover no-repeat;
    @media (max-width: 1279px) {
      width: 20.9375rem;
      height: 28.25rem;
    }
  `,
  MemberContainer: styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 1279px) {
      align-items: center;
    }
  `,
  NameText: styled.div`
    margin-bottom: 0.5rem;
    color: var(--grey100);
    ${bold24}
    @media (max-width: 1279px) {
      margin-bottom: 0.3125rem;
      ${m_bold24}
    }
  `,
  RoleText: styled.div`
    margin-bottom: 3rem;
    color: var(--grey100);
    ${bold18};
    @media (max-width: 1279px) {
      margin-bottom: 1.5rem;
      ${m_bold18}
    }
  `,
  InfoText: styled.div`
    color: var(--grey100);
    ${reg18};
    white-space: pre-line;
    @media (max-width: 1279px) {
      ${m_reg18}
    }
  `,
};

export { S };
