import { useState } from 'react';
import { S } from './Carousel.style';

const Carousel = ({ type, children, pageLength, leftItem }) => {
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
      <S.LeftButton $isVisible={currentPage} onClick={handleClickLeftArrow} />
      {type === 'small' ? (
        <S.ImgHidingContainer>
          <S.ImgContainer $currentPage={currentPage} $leftItem={leftItem}>
            {children}
          </S.ImgContainer>
        </S.ImgHidingContainer>
      ) : (
        <S.BigImgHidingContainer>
          <S.BigImgContainer $currentPage={currentPage}>
            {children}
          </S.BigImgContainer>
        </S.BigImgHidingContainer>
      )}
      <S.RightButton
        $isVisible={pageLength > 1 && currentPage !== pageLength - 1}
        onClick={handleClickRightArrow}
      />
    </S.Layout>
  );
};

export default Carousel;
