import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import { S } from './ActivityCard.style';

// session, network 카드
const ActivityCard = ({ smallTitle, title, info, imgList = [] }) => {
  const animation = useScrollFadeIn();

  return (
    <S.Layout {...animation}>
      <S.TitleContainer>
        <S.Bold18>{smallTitle}</S.Bold18>
        <S.Bold24>{title}</S.Bold24>
      </S.TitleContainer>
      <S.Container>
        <S.InfoWrapper>{info}</S.InfoWrapper>
        {smallTitle === 'Network' ? (
          <S.ImgWrapper>
            <S.BigImg src={imgList} />
          </S.ImgWrapper>
        ) : (
          <S.ImgContainer>
            {imgList.map(it => (
              <S.Img key={it.imageId} src={it.imageUrl} />
            ))}
          </S.ImgContainer>
        )}
      </S.Container>
    </S.Layout>
  );
};

export default ActivityCard;
