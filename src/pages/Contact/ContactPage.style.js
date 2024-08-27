import styled from 'styled-components';
import {
  bold18,
  bold56,
  m_bold56,
  m_reg24,
  reg18,
  reg24,
} from '../../styles/font';
import { ReactComponent as Phone } from '../../assets/ContactPage/phone.svg';
import { ReactComponent as Mail } from '../../assets/ContactPage/mail.svg';
import { ReactComponent as Instagram } from '../../assets/ContactPage/instagram.svg';
import { ReactComponent as Blog } from '../../assets/ContactPage/blog.svg';
import { ReactComponent as Toast } from '../../assets/ContactPage/Group 21.svg';
import Ellipse31 from '../../assets/ContactPage/Ellipse31.svg';
import Ellipse32 from '../../assets/ContactPage/Ellipse32.svg';

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media (max-width: 749px) {
      width: calc(100% - 2.5rem);
      padding: 1rem 1.25rem;
    }

    @media (min-width: 750px) and (max-width: 1279px) {
      max-width: 750px;
      width: 100%;
      padding: 1rem 1.25rem;
      margin: 0 auto;
    }
    @media (min-width: 1440px) {
      margin: 0 auto;
    }
  `,

  BackgroundImageContainer: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    @media (max-width: 1279px) {
      display: none;
    }
  `,

  Ellipse1: styled.div`
    position: absolute;
    width: 35rem;
    height: 35rem;
    background-image: url(${Ellipse31});
    background-repeat: no-repeat;
    background-size: contain;
  `,

  Ellipse2: styled.div`
    position: absolute;
    bottom: 3rem;
    right: -10rem;
    width: 25rem;
    height: 25rem;
    background-image: url(${Ellipse32});
    background-repeat: no-repeat;
    background-size: contain;
  `,

  TitleContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10rem 0rem;
    gap: 0.5rem;
    @media (max-width: 1279px) {
      margin-bottom: 5rem;
    }
  `,
  Title: styled.div`
    ${bold56};
    color: var(--grey100);
    @media (max-width: 1279px) {
      ${m_bold56};
    }
  `,
  SubTitle: styled.div`
    ${reg24};
    color: var(--grey300);
    @media (max-width: 1279px) {
      ${m_reg24}
    }
  `,
  CardContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 70rem;
    margin-bottom: 10rem;
    z-index: 1;
    @media (max-width: 1279px) {
      display: none;
    }
  `,
  ContactCardContainer: styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 16.125rem;
    height: 17.5rem;
    border-radius: 1.5rem;
    background: var(--grey500);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
    @media (max-width: 1279px) {
      width: 20.9375rem;
    }
  `,

  PhoneIcon: styled(Phone)`
    width: 3rem;
    height: 3rem;
    margin-bottom: 1.75rem;
  `,

  EmailIcon: styled(Mail)`
    width: 3rem;
    height: 3rem;
    margin-bottom: 1.75rem;
  `,

  InstagramIcon: styled(Instagram)`
    width: 3rem;
    height: 3rem;
    margin-bottom: 1.75rem;
  `,

  BlogIcon: styled(Blog)`
    width: 3rem;
    height: 3rem;
    margin-bottom: 1.75rem;
  `,

  CopySubTitle: styled.div`
    ${reg18};
    color: var(--grey300);
    margin-bottom: 0.5rem;
  `,
  Content: styled.div`
    display: flex;
    justify-content: center;
    width: 85%;
    ${bold18};
    color: var(--grey100);
  `,

  ToastContainer: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 46.0625rem;
    padding: 0.625rem 2.5rem;
    border-radius: 1.625rem;
    background: var(--white);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.4);
    gap: 1.25rem;

    @media (max-width: 1279px) {
      width: calc(100% - 2.5rem);
    }
  `,

  ToastIcon: styled(Toast)`
    width: 2rem;
    height: 2rem;
  `,

  ToastText: styled.div`
    ${reg18};
    color: var(--black);
    text-align: center;
  `,
};

const M = {
  CardContainer: styled.div`
    display: none;
    z-index: 1;
    @media (max-width: 1279px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 20.9375rem;
      margin-bottom: 4.69rem;
      gap: 1.75rem;
    }
  `,
};

export { S, M };
