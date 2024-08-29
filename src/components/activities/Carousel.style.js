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
    width: 2.25rem;
    height: 2.25rem;
    transform: rotate(180deg);
  `,
  RightButton,
  ImgHidingContainer: styled.div`
    max-width: 46.3125rem;

    overflow: hidden;

    @media screen and (max-width: 749px) {
      width: 10.6875rem;
    }
    @media screen and (min-width: 750px) and (max-width: 1279px) {
      width: 21.3rem;
    }
    @media screen and (min-width: 1280px) and (max-width: 1439px) {
      width: 34.7rem;
    }
  `,
  ImgContainer: styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 7px;

    height: 12.9375rem;
    
    transition: transform 0.3s ease-in-out;
    
    transform: ${({ $currentPage, $pageLength, $leftItem }) => {
      return $pageLength - 1 === $currentPage
        ? `translateX(calc(-${$currentPage - 1}00% - ${$leftItem} * 25%))`
        : `translateX(-${$currentPage}00%)`;
    }};
    @media screen and (max-width: 749px) {
      transform: ${({ $currentPage }) => `translateX(-${$currentPage}00%)`};
    }
    @media screen and (min-width: 750px) and (max-width: 1279px) {
      transform: ${({ $currentPage, $pageLength, $leftItem }) => {
        return $pageLength - 1 === $currentPage
          ? `translateX(calc(-${$currentPage - 1}00% - ${$leftItem} *50%))`
          : `translateX(-${$currentPage}00%)`;
      }};
    }
    @media screen and (min-width: 1280px) and (max-width: 1439px) {
      transform: ${({ $currentPage, $pageLength, $leftItem }) => {
        return $pageLength - 1 === $currentPage
          ? `translateX(calc(-${$currentPage - 1}00% - ${$leftItem} * 33.333%))`
          : `translateX(-${$currentPage}00%)`;
      }};
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
