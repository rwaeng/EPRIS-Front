import styled from 'styled-components';
import { flexCenter } from '../../styles/common';
import { bold56, bold18, m_bold18, reg14 } from '../../styles/font';

const S = {
  FooterLayout: styled.div`
    display: flex;
    /* width: 1440px; */
    padding: 2.5rem var(--XL, 10rem) 6.25rem var(--XL, 10rem);
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1px solid var(--grey500, #30303b);
    background: var(--black, #17171b);

    @media (max-width: 749px) {
      flex-direction: column;
    }
  `,
  FooterContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,
  LogoWrapper: styled.div`
    width: 70px;
    height: 70px;
    flex-shrink: 0;
  `,
  InfoContainer: styled.div`
    margin-right: auto;
    margin-left: 1.75rem;
    @media (max-width: 749px) {
      margin-left: 0.8844rem;
    }
  `,
  NameWrapper: styled.div`
    color: var(--grey100, #cfd1da);
    /* bold18 */
    font-family: Pretendard;
    ${bold18}
    font-style: normal;
    margin-top: 0.625rem;

    @media (max-width: 749px) {
      ${m_bold18}
    }
  `,
  InfoWrapper: styled.div`
    color: var(--grey100, #cfd1da);
    ${reg14}
    font-family: Pretendard;
    font-style: normal;
    margin-top: 2rem;

    @media (max-width: 749px) {
      font-size: 0.75rem;
      line-height: 132%;
    }
  `,
  IconContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.25rem;
    @media (max-width: 749px) {
      padding-left: 5rem;
      padding-top: 2rem;
    }
  `,
  IconWrapper: styled.div`
    width: var(--R, 3rem);
    height: var(--R, 3rem);
    /* padding-left: 1.25rem; */
    @media (max-width: 749px) {
      width: var(--xs, 1.5rem);
      height: var(--xs, 1.5rem);
      /* padding-left: 0.3125rem; */
    }
  `,
};

S.Wrapper = styled.span`
  ${flexCenter}
  ${bold56}
  color: var(--white);
`;

export { S };
