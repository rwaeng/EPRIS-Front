import styled from 'styled-components';
import {
  bold56,
  reg24,
  bold24,
  reg18,
  bold36,
  m_bold56,
  m_reg24,
  m_bold24,
  m_bold36,
  m_reg18,
} from '../../styles/font';
import BackImg from '../../assets/Main/background_img.svg';
import m_BackImg from '../../assets/Main/m_background_img.svg';

const S = {
  MainLayout: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 1279px) {
      max-width: 46.875rem;
      margin: 0 auto;
    }
    @media (min-width: 1440px) {
      margin: 0 auto;
    }
  `,
  TopContainer: styled.div`
    position: relative;

    height: 64rem;

    background: linear-gradient(
        180deg,
        rgba(23, 23, 27, 0) 75.1%,
        #17171b 96.49%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 24.71%, rgba(0, 0, 0, 0.6) 100%),
      url(${BackImg}) no-repeat center center;
    @media (max-width: 375px) {
      background: url(${m_BackImg}) no-repeat center center;
    }
    @media (min-width: 750px) and (max-width: 1279px) {
      margin: 0 auto;
    }
    @media (max-width: 1279px) {
      max-width: 46.875rem;
      height: 50.75rem;
    }
    @media (min-width: 1440px) {
      margin: 0 auto;
    }
  `,
  HeadContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10rem;
    padding-top: 5rem;
    @media (min-width: 750px) and (max-width: 1279px) {
      margin: 0 auto;
    }
    @media (max-width: 1279px) {
      padding-left: 1.25rem;
      padding-top: 3.75rem;
    }
    @media (min-width: 1440px) {
      margin: 0 auto;
    }
  `,
  TitleWrapper: styled.div`
    color: var(--white);
    ${bold56}
    @media (max-width: 1279px) {
      ${m_bold56};
      white-space: pre-line;
    }
  `,
  SubWrapper: styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;

    color: var(--white);
    ${reg24}
    white-space: pre-line;
    @media (max-width: 1279px) {
      margin-bottom: 1.5rem;
      ${m_reg24};
    }
  `,
  DownBtn: styled.img`
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    @media (max-width: 1279px) {
      width: 2rem;
      height: 2rem;
    }
  `,
  BodyContainer: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 90rem;
    padding: 10rem;
    @media (max-width: 1279px) {
      align-items: center;
      padding: 5rem 1.25rem 5rem 1.25rem;
    }
    @media (min-width: 1440px) {
      margin: 0 auto;
    }
  `,
  LogoWrapper: styled.img`
    width: 28.125rem;
    height: 6.75rem;
    @media (max-width: 1279px) {
      width: 20.9375rem;
      height: 5.2813rem;
    }
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2.5rem;

    color: var(--grey100);
    ${reg18}

    white-space: pre-line;
    @media (max-width: 1279px) {
      margin-top: 3.25rem;
      padding-bottom: 0rem;
      ${m_reg24};
    }
    @media (min-width: 1280px) {
      max-width: 34.125rem;
      padding-left: 6.875rem;
    }
  `,
  LittleLogoWrapper: styled.div`
    margin-bottom: 4rem;
    color: var(--grey100);
    ${bold24}

    @media (max-width: 1279px) {
      margin-bottom: 2rem;
      ${m_bold24}
    }
  `,
  Red: styled.span`
    color: var(--red);
  `,
  ContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7.5rem;
    padding-bottom: 10rem;

    @media (max-width: 1279px) {
      width: 100%;
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  `,
  ValueContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.75rem;
    @media (min-width: 750px) and (max-width: 1279px) {
      margin: 0 auto;
    }
    @media (max-width: 1279px) {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  `,
  BlackBoxContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 3rem 2.5rem;

    border-radius: 1rem;
    border: 0.6px solid var(--grey500);
    background: var(--black);

    box-shadow: -4px -4px 10px 2px rgba(125, 125, 125, 0.16),
      10px 10px 40px 4px rgba(0, 0, 0, 0.4);
    gap: 1.5rem;
    box-sizing: border-box;
    flex: 1 0 0;
    @media (max-width: 1279px) {
      width: 100%;
    }
  `,
  BlackTitle: styled.div`
    color: var(--grey100);
    ${bold24}
  `,
  BlackText: styled.div`
    align-self: stretch;
    color: var(--grey100);
    text-align: center;
    ${bold56}
  `,
  GreyBoxContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 2.5rem 1.5rem;

    border-radius: 1rem;
    background: var(--grey500);

    gap: 1.5rem;
    flex: 1 0 0;
    align-self: stretch;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
  `,
  GreyTitle: styled.div`
    color: var(--white);
    ${bold24}
  `,
  GreyText: styled.div`
    color: var(--white);
    ${reg18}
    align-self: stretch;
    text-align: center;
    @media (max-width: 1279px) {
      ${m_reg18}
    }
  `,
  TitleText: styled.div`
    color: var(--grey100);
    ${bold36}
    margin-bottom: 0.5rem;
    @media (max-width: 1279px) {
      ${m_bold36}
    }
  `,
  SubText: styled.div`
    margin-bottom: 4rem;
    color: var(--grey300);
    ${reg18}
    @media (max-width: 1279px) {
      margin-bottom: 2rem;
      ${m_reg18}
    }
  `,
  GreetingsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10rem;
    @media (max-width: 1279px) {
      gap: 5rem;
    }
  `,
  AdministratorPhoto: styled.img`
    max-width: 70rem;
    width: 100%;

    border-radius: 16px;
    background: lightgray 50% / cover no-repeat;
    @media (max-width: 1279px) {
      width: 100%;
    }
  `,
  BottomContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    @media (max-width: 1279px) {
      gap: 1.5rem;
    }
  `,
  AnnounceText: styled.div`
    color: var(--grey100);
    ${reg24};
    @media (max-width: 1279px) {
      ${m_reg24}
    }
  `,
};

export { S };
