import { useState } from 'react';
import { S } from './Carousel.style';
import { useMediaQuery } from 'react-responsive';

const Carousel = ({ type, children, pageLength, leftItem }) => {
  const isSmall = useMediaQuery({ query: '(max-width: 749px)' });
  const [currentPage, setCurrentPage] = useState(0);

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
        $isVisible={
          (isSmall && type !== 'small' && currentPage) ||
          (!isSmall && currentPage)
        }
        onClick={handleClickLeftArrow}
      />
      {type === 'small' ? (
        <>
          {isSmall && <S.GradientDiv $left={true} />}
          <S.ImgHidingContainer>
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
        $isVisible={
          (isSmall &&
            type !== 'small' &&
            pageLength > 1 &&
            currentPage !== pageLength - 1) ||
          (!isSmall && pageLength > 1 && currentPage !== pageLength - 1)
        }
        onClick={handleClickRightArrow}
      />
    </S.Layout>
  );
};

export default Carousel;
