import styled from 'styled-components';
import { ReactComponent as Right } from '../../assets/activity/right.svg';

const RightButton = styled(Right)`
  width: 2.25rem;
  height: 2.25rem;

  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};

  cursor: pointer;

  @media screen and (max-width: 749px) {
    width: 1.5rem;
  }
`;
const S = {
  Layout: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;

    @media screen and (max-width: 749px) {
      gap: 0;
    }
  `,
  LeftButton: styled(RightButton)`
    transform: rotate(180deg);
  `,
  RightButton,
  ImgHidingContainer: styled.div`
    display: flex;
    max-width: 46.3125rem;

    overflow: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
    @media screen and (max-width: 749px) {
      position: absolute;
      top: 5rem;
      left: 0;
      overflow: scroll;

      width: 100%;
    }
    @media screen and (min-width: 750px) and (max-width: 1439px) {
      width: 34.7rem;
    }
  `,
  GradientDiv: styled.div`
    position: absolute;
    top: 4.25rem;
    ${props => (props.$left ? 'left: 0' : 'right: 0')};
    z-index: 1000;

    width: 3.75rem;
    height: 5.5rem;

    background: linear-gradient(90deg, rgba(227, 230, 240, 0) 0%, #e3e6f0 100%);
    transform: ${props => props.$left && 'rotate(180deg)'};
  `,
  ImgContainer: styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 0.4375rem;

    height: 12.9375rem;

    transition: transform 0.3s ease-in-out;

    transform: ${({ $currentPage, $pageLength, $leftItem }) => {
      return $pageLength - 1 === $currentPage
        ? `translateX(calc(-${$currentPage - 1}00% - ${$leftItem} * 25%))`
        : `translateX(-${$currentPage}00%)`;
    }};
    @media screen and (max-width: 749px) {
      gap: 0.625rem;
      width: calc(100% + 1rem);
      height: 4rem;
      transform: ${({ $currentPage }) => `translateX(-${$currentPage}00%)`};
    }
    @media screen and (min-width: 750px) and (max-width: 1439px) {
      transform: ${({ $currentPage, $pageLength, $leftItem }) => {
        return $pageLength - 1 === $currentPage
          ? `translateX(calc(-${$currentPage - 1}00% - ${$leftItem} * 33.333%))`
          : `translateX(-${$currentPage}00%)`;
      }};
    }
  `,
  BlankDiv: styled.div`
    width: 1rem;
    height: 4rem;
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
