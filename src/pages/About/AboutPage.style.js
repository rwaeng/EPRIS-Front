import styled from 'styled-components';
import {
  bold18,
  bold24,
  bold36,
  bold56,
  m_bold18,
  m_bold24,
  m_bold36,
  m_reg18,
  reg14,
  reg18,
} from '../../styles/font';
import { ReactComponent as Logo } from '../../assets/logo/Logo.svg';
import { ReactComponent as LeftArrow } from '../../assets/AboutPage/left.svg';
import { ReactComponent as RightArrow } from '../../assets/AboutPage/right.svg';
import backgroundImage from '../../assets/AboutPage/about_background_img.svg';

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 749px) {
      width: calc(100% - 2.5rem);
      padding: 1rem 1.25rem;
    }
    @media (min-width: 750px) and (max-width: 1279px) {
      width: calc(100% - 2.5rem);
      padding: 1rem 1.25rem;
      margin: 0 auto;
    }
    @media (min-width: 1280px) {
      padding-bottom: 10rem;
    }
    @media (min-width: 1440px) {
      width: 70rem;
      margin: 0 auto;
    }
  `,
  BcakgroundImageContainer: styled.div`
    position: relative;
    width: 100%;
    height: auto;
    padding-top: 35.56%;
    margin-bottom: 17.5rem;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    @media (max-width: 1279px) {
      width: 100%;
      margin-bottom: 5rem;
    }
  `,
  AboutTextContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50rem;
    color: var(--white);
  `,
  Title: styled.div`
    margin-bottom: 4rem;
    ${bold56}
    @media (max-width: 1279px) {
      margin-bottom: 2rem;
      ${m_bold36}
    }
  `,
  BackgroundSubTitle: styled.div`
    margin-bottom: 1.53rem;
    ${bold36}
    @media (max-width: 1279px) {
      margin-bottom: 0.5rem;
      ${m_bold24}
    }
  `,

  IntroductionText: styled.div`
    ${reg18}
    @media (max-width: 1279px) {
      width: 20rem;
      text-align: center;
      ${m_reg18}
    }
  `,

  IntroducctionContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  AboutContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  `,
  LogoWrapper: styled(Logo)`
    width: 100%;
    height: auto;
    @media (max-width: 1279px) {
      box-sizing: border-box;
      padding: 0 1.5rem;
      margin-bottom: 5rem;
    }
  `,
  AboutPRContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media (max-width: 1279px) {
      align-items: center;
      width: 100%;
      gap: 2rem;
    }
  `,
  RedText: styled.span`
    color: var(--red);
  `,
  NameWrapper: styled.div`
    ${bold24}
    color: var(--grey100);
    @media (max-width: 1279px) {
      display: flex;
      width: 100%;
      ${m_bold24}
    }
  `,
  HistoryWrapper: styled.div`
    width: 34.125rem;
    margin-bottom: 17.5rem;
    ${reg18};
    color: var(--grey100);
    @media (max-width: 1279px) {
      width: 100%;
      margin-bottom: 0rem;
      ${m_reg18}
    }
  `,
  SubTitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      gap: 2rem;
    }

    align-items: start;
  `,

  TextWrapper: styled.div`
    width: 16.1875rem;
    text-align: start;
    white-space: pre-wrap;
    ${reg18};
    color: var(--grey100);
    @media (max-width: 1279px) {
      width: 100%;
      margin-top: 2rem;
      ${m_reg18}
    }
  `,

  SubTitleContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    @media (max-width: 1279px) {
      width: 100%;
    }
  `,
  SubTitle: styled.div`
    ${bold36}
    color: var(--grey100);
    @media (max-width: 1279px) {
      width: 100%;
      margin-top: 10rem;
      ${m_bold36}
    }
  `,
  SubTitleKr: styled.div`
    ${reg18}
    color: var(--grey300);
    @media (max-width: 1279px) {
      ${m_reg18}
    }
  `,
  CardContainer: styled.div`
    display: flex;
    gap: 1.75rem;
    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `,

  HiddenCardContainer: styled.div`
    display: flex;
    gap: 1.75rem;
    @media (max-width: 1279px) {
      display: none;
    }
  `,

  CardContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10.1875rem;
    height: 10.1875rem;
    border-radius: 1rem;
    background-color: var(--grey500);
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
    @media (max-width: 1279px) {
      width: 100%;
      padding: 2.5rem 3.75rem;
    }
  `,
  CardName: styled.div`
    ${bold24}
    color:var(--white);
  `,
  DepartmentContainer: styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 1279px) {
      width: 100%;
    }
  `,
  DepartmentContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    max-width: 46.0625rem;
    width: 40.0625rem;
    margin-left: ${props => props.marginLeft || '0'};
    padding: 2.5rem 3rem;
    border-radius: 1rem;
    background: #e3e6f0;
  `,
  DepartmentName: styled.div`
    ${bold24};
    color: var(--black);
    margin-bottom: 0.52rem;
    @media (max-width: 1279px) {
      ${m_bold24};
      width: 100%;
    }
  `,
  DepartmentMainDescription: styled.div`
    margin-bottom: 1.5rem;
    ${bold18};
    color: var(--red);
    @media (max-width: 1279px) {
      ${m_bold18};
      width: 100%;
    }
  `,
  DepartmentDescriptionContainer: styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1279px) {
      flex-direction: column;
      justify-content: start;
      width: 100%;

      gap: 1rem;
    }
  `,
  DepartmentDetailsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    @media (max-width: 1279px) {
      width: 100%;
      gap: 0rem;
    }
  `,
  DepartmentDetailsTitle: styled.div`
    ${bold18};
    color: var(--black);
    @media (max-width: 1279px) {
      ${m_bold18};
    }
  `,
  DepartmentDetails: styled.div`
    white-space: pre-wrap;
    ${reg14};
    color: var(--black);
    @media (max-width: 1279px) {
      ${m_reg18};
    }
  `,
  Triangle: styled.div`
    width: 0;
    height: 0;
    margin-top: 1.4rem;
    margin-left: ${props =>
      props.marginLeft ? `calc(3.425rem + ${props.marginLeft})` : '3.425rem'};
    border-left: 1.875rem solid transparent;
    border-right: 1.875rem solid transparent;
    border-bottom: 1.875rem solid #e3e6f0;
    @media (max-width: 1279px) {
      margin-left: 0rem;
      align-self: center;
      border-left: 0.9375rem solid transparent;
      border-right: 0.9375rem solid transparent;
      border-bottom: 0.9375rem solid #e3e6f0;
    }
  `,
  Conatiner: styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 1279px) {
      display: none;
    }
  `,
};

const M = {
  Conatiner: styled.div`
    display: none;
    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 5rem;
    }
  `,
  CardContainer: styled.div`
    display: none;

    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `,
  CardContentContainer: styled.div`
    display: none;
    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `,
  CardButtonContainer: styled.div`
    display: none;
    @media (max-width: 1279px) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      border-radius: 1rem;
      background-color: var(--grey500);
      box-sizing: border-box;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);

      padding: 2.5rem 0rem;
    }
  `,
  LeftArrow: styled(LeftArrow)`
    display: none;
    @media (max-width: 1279px) {
      display: flex;
      width: 2.25rem;
      height: 2.25rem;
      background: none;
      border: none;
      cursor: pointer;
    }
  `,
  RightArrow: styled(RightArrow)`
    display: none;
    @media (max-width: 1279px) {
      display: flex;
      width: 2.25rem;
      height: 2.25rem;
      background: none;
      border: none;
      cursor: pointer;
    }
  `,
  DepartmentContentContainer: styled.div`
    display: none;
    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-left: 0rem;
      padding: 1.25rem 1.5rem;
      box-sizing: border-box;
      border-radius: 1rem;
      background: #e3e6f0;
    }
  `,
};
export { S, M };
