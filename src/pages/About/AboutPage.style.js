import styled from 'styled-components';
import backgroundImage from '../../assets/AboutPage/about_background_img.svg';
import { ReactComponent as Logo } from '../../assets/logo/Logo.svg';
import {
  bold18,
  bold24,
  bold36,
  bold56,
  reg14,
  reg18,
} from '../../styles/font';

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  BcakgroundImageContainer: styled.div`
    position: relative;
    width: 90rem;
    height: 32rem;
    margin-bottom: 17.5rem;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
  `,
  AboutTextContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 10rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50rem;
    color: var(--white);
  `,
  TitleWrapper: styled.div`
    margin-bottom: 4rem;
    ${bold56}
  `,
  BackgroundSubTitleWrapper: styled.div`
    margin-bottom: 1.53rem;
    ${bold36}
  `,

  IntroductionTextWrapper: styled.div`
    ${reg18}
  `,

  IntroducctionContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  AboutContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 70rem;
  `,
  LogoWrapper: styled(Logo)`
    width: 28.12488rem;
    height: 7.97rem;
  `,
  AboutPRContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
  `,
  RedTextWrapper: styled.span`
    color: var(--red);
  `,
  NameWrapper: styled.div`
    ${bold24}
    color: var(--white);
  `,
  HistoryWrapper: styled.div`
    width: 34.125rem;
    margin-bottom: 17.5rem;
    ${reg18};
    color: var(--white);
  `,
  SubTitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 70rem;
    gap: 3rem;
  `,

  TextWrapper: styled.div`
    width: 16.1875rem;
    text-align: start;
    white-space: pre-wrap;
    ${reg18};
    color: var(--white);
  `,

  SubTitleContentContainer: styled.div`
    gap: 0.5rem;
  `,
  SubTitleWrapper: styled.div`
    ${bold36}
    color: var(--grey100);
  `,
  SubTitleKrWrapper: styled.div`
    ${reg18}
    color: var(--grey300);
  `,
  CardContainer: styled.div`
    display: flex;
    gap: 1.75rem;
  `,
  CardContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10.5rem;
    height: 10.5rem;
    border-radius: 1rem;
    background-color: var(--grey500);
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
  `,
  CardNameWrapper: styled.div`
    ${bold24}
    color:var(--white);
  `,
  DepartmentContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  DepartmentContentContainer: styled.div`
    display: flex;
    flex-direction: column;
    width: 46.0625rem;
    margin-left: ${props => props.marginLeft || '0'};
    padding: 2.5rem 3rem;
    border-radius: 1rem;
    background: #e3e6f0;
  `,
  DepartmentNameWrapper: styled.div`
    ${bold24};
    color: var(--black);
    margin-bottom: 0.52rem;
  `,
  DepartmentMainDescriptionWrapper: styled.div`
    margin-bottom: 1.5rem;
    ${bold18};
    color: var(--red);
  `,
  DepartmentDescriptionContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  DepartmentDetailsContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  `,
  DepartmentDetailsTitleWrapper: styled.div`
    ${bold18};
    color: var(--black);
  `,
  DepartmentDetailsWrapper: styled.div`
    white-space: pre-wrap;
    ${reg14};
    color: var(--black);
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
  `,
};

export { S };
