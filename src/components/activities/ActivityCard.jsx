import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import { S } from './ActivityCard.style';

// session, network 카드
const ActivityCard = ({ smallTitle, title, info, imgList = [] }) => {
  const animation = useScrollFadeIn();

  return (
    <S.Layout {...animation}>
      <S.TitleContainer>
        <S.Bold18>{smallTitle}</S.Bold18>
        <S.H3>{title}</S.H3>
      </S.TitleContainer>
      <S.Container>
        <S.InfoWrapper>{info}</S.InfoWrapper>
        {smallTitle === 'Network' ? (
          <S.ImgWrapper>
            <S.BigImg src={imgList || []} alt='networkImg' />
          </S.ImgWrapper>
        ) : (
          <S.ImgContainer>
            {imgList.map(it => (
              <S.Img key={it.imageId} src={it.imageUrl} alt='sessionImg' />
            ))}
          </S.ImgContainer>
        )}
      </S.Container>
    </S.Layout>
  );
};

export default ActivityCard;
