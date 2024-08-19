import { S } from './CorporateCard.style';
import { forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import Carousel from './Carousel';

const info =
  '매 학기 다양한 기업과 산학협력을 진행합니다.\n\n기업이 제시한 과제를 바탕으로 논리적이고 창의적인 PR/마케팅 전략을 제시합니다. 내부 경쟁 PT를 거쳐 기획서의 완성도를 높이며, 진행 과정 및 최종 PT에서 실무진의 피드백을 통해 실무역량을 기릅니다.';
const CorporateCard = (
  {
    imgList = [
      {
        imageId: 1,
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt',
      },
      {
        imageId: 2,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 3,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 4,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 5,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 6,
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt',
      },
      {
        imageId: 7,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 8,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 9,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: -1,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
    ],
    projectImgList = [
      {
        imageId: 11,
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt',
      },
      {
        imageId: 12,
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt',
      },
      {
        imageId: -3,
        imageUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt',
      },
    ],
    $isVisible,
    id,
  },
  ref,
) => {
  const isSmall = useMediaQuery({ query: '(max-width: 749px)' });
  const isMedium = useMediaQuery({
    query: '(min-width: 750px) and (max-width: 1280px)',
  });
  const animation = useScrollFadeIn({ initialOffset: '10%' });

  return (
    <S.Layout id={id} $isVisible={$isVisible} {...animation}>
      <S.TitleWrapper ref={ref}>Corporate Project</S.TitleWrapper>
      <S.Container>
        <Carousel
          type='small'
          imgList={imgList}
          pageLength={
            isSmall
              ? Math.ceil(imgList.length / 2)
              : isMedium
              ? Math.ceil(imgList.length / 4)
              : Math.ceil(imgList.length / 8)
          }
          leftItem={
            isSmall
              ? Math.round((imgList.length % 2) / 2)
              : isMedium
              ? Math.round((imgList.length % 4) / 2)
              : Math.round((imgList.length % 8) / 2)
          }
        >
          {imgList.map(it => (
            <S.ImgWrapper key={it.imageId + 'img'}>
              <S.Img src={it.imageUrl} />
            </S.ImgWrapper>
          ))}
        </Carousel>
        <S.InfoWrapper>{info}</S.InfoWrapper>
        <Carousel pageLength={projectImgList.length}>
          {projectImgList.map(it => (
            <S.BigImgWrapper key={it.imageId}>
              <S.BigImg src={it.imageUrl} />
            </S.BigImgWrapper>
          ))}
        </Carousel>
        <S.Button>
          EPRIS News <S.Arrow />
        </S.Button>
      </S.Container>
    </S.Layout>
  );
};

export default forwardRef(CorporateCard);
