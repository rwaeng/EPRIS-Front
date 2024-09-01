import styled from 'styled-components';
import { flexCenter } from '../../styles/common';
import {
  bold24,
  bold36,
  bold56,
  m_bold24,
  m_bold36,
  m_reg18,
  reg18,
} from '../../styles/font';
import backgroundImg from '../../assets/activity/background.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4rem;

  height: auto;

  @media screen and (max-width: 1279px) {
    gap: 5rem;
  }
`;

const S = {
  TotalLayout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ImgContainer: styled.div`
    ${flexCenter}
    position: relative;

    max-height: 32rem;
    margin: 0 auto;
    width: 100%;
    aspect-ratio: 3/2;

    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: 80% 0%;

    @media (max-width: 1279px) {
      height: 15.95444rem;
    }
  `,
  H1: styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${bold56}
    color: var(--white);

    @media screen and (max-width: 1279px) {
      ${m_bold36}
    }
  `,
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 17.5rem;

    padding: 10rem 10rem 10rem 9.2312rem;

    @media screen and (min-width: 750px) and (max-width: 1279px) {
      width: 44.375rem;
      padding: 5rem 1.25rem 16.125rem 1.25rem;
      margin: 0 auto;
    }
    @media screen and (max-width: 1279px) {
      gap: 10rem;
      padding: 5rem 1.25rem 16.125rem 1.25rem;
    }
    @media screen and (min-width: 1440px) {
      width: 70rem;
      margin: 0 auto;
    }
  `,
  Container,
  BottomContainer: styled(Container)`
    @media screen and (max-width: 1279px) {
      gap: 2rem;
    }
  `,
  TitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  H2: styled.h2`
    ${bold36}
    color: var(--grey100);

    @media screen and (max-width: 1279px) {
      ${m_bold36}
    }
  `,
  Reg18: styled.span`
    ${reg18}
    color: var(--grey300);

    @media screen and (max-width: 1279px) {
      ${m_reg18}
    }
  `,
  CardContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10rem;

    @media screen and (max-width: 1279px) {
      gap: 5rem;
    }
  `,
  ProjectContainer: styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: 750px) and (max-width: 1279px) {
      align-items: center;
    }
    @media screen and (max-width: 1279px) {
      flex-direction: column;
      gap: 2rem;
    }
  `,
  H3: styled.h3`
    ${bold24}
    color: ${({ $isRed }) => ($isRed ? 'var(--red)' : 'var(--white)')};

    @media screen and (max-width: 1279px) {
      ${m_bold24}
      text-align: center;
    }
  `,
  CardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 1279px) {
      gap: 2rem;
    }
  `,
  BtnAndCardContainer: styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    height: auto;
    overflow: hidden;

    @media screen and (max-width: 1279px) {
      flex-direction: column;
      gap: 2rem;
    }
  `,
  SessionCardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.375rem;

    @media screen and (max-width: 1279px) {
      display: ${({ $isVisible }) => !$isVisible && 'none'};
    }
  `,
  NetworkCardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media screen and (max-width: 1279px) {
      display: ${({ $isVisible }) => !$isVisible && 'none'};
    }
  `,
};

export { S };
