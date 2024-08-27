import styled from 'styled-components';
import { bold18, m_bold18, reg14 } from '../../styles/font';

const S = {
  FooterLayout: styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    padding: 2.5rem 10rem 6.25rem 10rem;

    border-top: 1px solid var(--grey500);
    background: var(--black);

    @media (min-width: 750px) and (max-width: 1279px) {
      width: 44.375rem;
      margin: 0 auto;
    }
    @media (max-width: 1279px) {
      flex-direction: column;
      padding: 1.25rem 1.25rem 3.125rem 1.25rem;
    }
    @media (min-width: 1440px) {
      width: 70rem;
      margin: 0 auto;
    }
  `,
  FooterContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,
  LogoWrapper: styled.div`
    width: 4.375rem;
    height: 4.375rem;
    flex-shrink: 0;
  `,
  InfoContainer: styled.div`
    margin-right: auto;
    margin-left: 1.75rem;
    @media (max-width: 1279px) {
      margin-left: 0.8844rem;
    }
  `,
  NameWrapper: styled.div`
    margin-top: 0.625rem;

    color: var(--grey100, #cfd1da);
    ${bold18}
    white-space: pre-line;

    @media (max-width: 1279px) {
      ${m_bold18}
    }
  `,
  InfoWrapper: styled.div`
    margin-top: 2rem;

    color: var(--grey100, #cfd1da);
    ${reg14}
    white-space: pre-line;

    @media (max-width: 1279px) {
      font-size: 0.75rem;
      font-weight: 300;
      line-height: 132%;
    }
  `,
  IconContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.25rem;
    @media (max-width: 1279px) {
      padding-left: 5rem;
      padding-top: 2rem;
    }
  `,
  IconWrapper: styled.a`
    display: inline-block;
    width: 3rem;
    height: 3rem;

    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
    @media (max-width: 1279px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  `,
};

export { S };
