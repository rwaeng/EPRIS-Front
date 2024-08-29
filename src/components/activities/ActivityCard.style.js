import styled from 'styled-components';
import {
  bold18,
  bold24,
  m_bold18,
  m_bold24,
  m_reg18,
  reg18,
} from '../../styles/font';

const S = {
  Layout: styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    padding: 3rem;

    border-radius: 1rem;
    background-color: var(--grey500);

    @media screen and (max-width: 1279px) {
      gap: 2rem;

      padding: 1.5rem;
    }
  `,
  TitleContainer: styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1279px) {
      gap: 0.375rem;
    }
  `,
  Bold18: styled.span`
    ${bold18}
    color: var(--red);

    @media screen and (max-width: 1279px) {
      ${m_bold18}
    }
  `,
  H3: styled.h3`
    ${bold24}
    color: var(--white);

    @media screen and (max-width: 1279px) {
      ${m_bold24}
    }
  `,
  Container: styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1279px) {
      flex-direction: column;
      gap: 2rem;
    }
  `,
  InfoWrapper: styled.p`
    display: flex;
    flex: 1 0 0;

    max-width: 17.4375rem;

    ${reg18}
    color: var(--white);

    white-space: pre-line;

    @media screen and (max-width: 1279px) {
      ${m_reg18}
      max-width: 100%;
    }
  `,
  ImgWrapper: styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    width: 34rem;

    @media screen and (max-width: 1279px) {
      position: relative;

      max-width: 33.125rem;
      min-width: 12.9375rem;
      width: 100%;
      margin: 0 auto;
      aspect-ratio: 3.06/2;
    }
  `,
  ImgContainer: styled.div`
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 0.25rem;

    width: 33.75rem;

    @media screen and (max-width: 749px) {
      flex-direction: column;
      align-items: center;

      width: auto;
    }
    @media screen and (min-width: 750px) and (max-width: 1279px) {
      margin: 0 auto;
    }
  `,
  Img: styled.img`
    width: 16.25rem;
    height: 9.75rem;
    object-fit: contain;
  `,
  BigImg: styled.img`
    display: flex;

    width: 33.125rem;
    height: 21.62rem;

    object-fit: cover;

    @media screen and (max-width: 749px) {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 1279px) {
      maring: 0 auto;
    }
  `,
};

export { S };
