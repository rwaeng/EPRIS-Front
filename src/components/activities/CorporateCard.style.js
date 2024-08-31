import styled from 'styled-components';
import { bold18, bold24, m_bold24, m_reg18, reg18 } from '../../styles/font';
import { flexCenter } from '../../styles/common';
import { ReactComponent as ArrowRight } from '../../assets/activity/right.svg';

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    padding: 3rem;
    max-width: 52.0625rem;

    border-radius: 1rem;
    background-color: #e3e6f0;

    @media screen and (max-width: 1279px) {
      display: ${({ $isVisible }) => !$isVisible && 'none'};
      gap: 2rem;

      padding: 1.5rem;
    }
  `,
  TitleWrapper: styled.span`
    ${bold24}
    color: var(--red);

    @media screen and (max-width: 1279px) {
      ${m_bold24}
    }
  `,
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  `,
  ImgWrapper: styled.div`
    ${flexCenter}
    padding: 1rem;

    border-radius: 0.75rem;
    background-color: var(--white);

    @media screen and (max-width: 749px) {
      padding: 0 1rem;
    }
  `,
  Img: styled.img`
    width: 9.1875rem;
    height: 4.25rem;
    object-fit: contain;

    @media screen and (max-width: 749px) {
      width: 5.5rem;
      height: 4.125rem;
    }
  `,
  InfoWrapper: styled.p`
    width: 46.0625rem;

    ${reg18}
    color: var(--black);
    white-space: pre-line;
    @media screen and (max-width: 1279px) {
      width: auto;

      ${m_reg18}
    }
  `,
  BigImgWrapper: styled.div`
    min-width: 100%;
    aspect-ratio: 3.25/2;
  `,
  BigImg: styled.img`
    max-width: 46.0625rem;
    max-height: 28.3416rem;
    width: 100%;
    height: 100%;
    object-fit: cover;

    box-shadow: 0px 7px 29px 0px rgba(100, 100, 111, 0.2);
  `,
  Button: styled.button`
    ${flexCenter}
    gap: 0.25rem;

    padding: 0.5rem 1.25rem;

    background-color: transparent;

    ${bold18}
    color: var(--grey300);
    text-align: center;
  `,
  Arrow: styled(ArrowRight)`
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--grey300);
  `,
};

export { S };
