import { useState } from 'react';
import { S } from './Carousel.style';
import { useMediaQuery } from 'react-responsive';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';

const Carousel = ({ type, children, imgList = [] }) => {
  const isSmall = useMediaQuery({ query: '(max-width: 749px)' });
  const isMedium = useMediaQuery({
    query: '(min-width: 750px) and (max-width: 1439px)',
  });
  const scrollRef = useHorizontalScroll('carousel');
  const [currentPage, setCurrentPage] = useState(0);

  // 캐러셀 화면 이동에 필요한 변수 계산
  const calculatePageLength = (imgListLength, itemsPerPage) => {
    if (type === 'small') {
      return Math.ceil(imgListLength / itemsPerPage);
    } else {
      return imgList.length;
    }
  };

  const calculateLeftItem = (imgListLength, itemsPerPage) =>
    Math.round((imgListLength % itemsPerPage) / 2);

  const itemsPerPage = isSmall ? 2 : isMedium ? 6 : 8;

  // 페이지 수 계산
  const pageLength = calculatePageLength(imgList.length, itemsPerPage);
  // 마지막 페이지의 남은 아이템 수 계산
  const leftItem = calculateLeftItem(imgList.length, itemsPerPage);

  const handleClickRightArrow = () => {
    if (currentPage < pageLength) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleClickLeftArrow = () => {
    if (currentPage >= 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <S.Layout>
      <S.LeftButton
        $donotDisplay={isSmall && type == 'small'}
        $isVisible={currentPage}
        onClick={handleClickLeftArrow}
      />
      {type === 'small' ? (
        <>
          {isSmall && <S.GradientDiv $left={true} />}
          <S.ImgHidingContainer ref={scrollRef}>
            <S.ImgContainer
              $currentPage={currentPage}
              $pageLength={pageLength}
              $leftItem={leftItem}
            >
              {isSmall && <S.BlankDiv />}
              {children}
              {isSmall && <S.BlankDiv />}
            </S.ImgContainer>
          </S.ImgHidingContainer>
          {isSmall && <S.GradientDiv />}
        </>
      ) : (
        <S.BigImgHidingContainer>
          <S.BigImgContainer $currentPage={currentPage}>
            {children}
          </S.BigImgContainer>
        </S.BigImgHidingContainer>
      )}
      <S.RightButton
        $donotDisplay={isSmall && type == 'small'}
        $isVisible={pageLength > 1 && currentPage !== pageLength - 1}
        onClick={handleClickRightArrow}
      />
    </S.Layout>
  );
};

export default Carousel;
