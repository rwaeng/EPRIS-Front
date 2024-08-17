import styled from 'styled-components';
import { ReactComponent as Right } from '../../assets/activity/right.svg';

const RightButton = styled(Right)`
  width: 2.25rem;
  height: 2.25rem;

  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};

  cursor: pointer;
`;
const S = {
  Layout: styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    @media screen and (max-width: 1279px) {
      gap: 0;
    }
  `,
  LeftButton: styled(RightButton)`
    transform: rotate(180deg);
  `,
  RightButton,
  ImgHidingContainer: styled.div`
    width: 46.0625rem;

    overflow: hidden;

    @media screen and (max-width: 749px) {
      width: 10.6875rem;
    }

    @media screen and (min-width: 750px) and (max-width: 1279px) {
      width: 21.3rem;
    }
  `,
  ImgContainer: styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 7px;

    height: 12.9375rem;

    transform: ${({ $currentPage, $leftItem }) =>
      `translateX(calc(${$currentPage} * -${$leftItem} * 25%))`};

    transition: transform 0.3s ease-in-out;

    @media screen and (max-width: 749px) {
      transform: ${({ $currentPage }) => `translateX(-${$currentPage}00%)`};
    }
    @media screen and (min-width: 750px) and (max-width: 1279px) {
      transform: ${({ $currentPage, $leftItem }) =>
        `translateX(calc(${$currentPage} * -${$leftItem} * 50%))`};
    }
  `,
  BigImgHidingContainer: styled.div`
    max-width: 46.0625rem;
    max-height: 28.3416rem;
    width: 100%;

    overflow: hidden;
    aspect-ratio: 3.25/2;

    @media screen and (max-width: 749px) {
      min-width: 13.4375rem;
    }
  `,
  BigImgContainer: styled.div`
    display: flex;

    transform: ${({ $currentPage }) => `translateX(-${$currentPage}00%)`};
    transition: transform 0.3s ease-in-out;
  `,
};

export { S };
