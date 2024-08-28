import { S } from './CorporateCard.style';
import { forwardRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getCorporate } from '../../api/corporate';
import { getLogos } from '../../api/logo';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import Carousel from './Carousel';
import { getClassinfo } from '../../api/classinfo';

const CorporateCard = ({ $isVisible, id }, ref) => {
  const url =
    'https://www.digitaltoday.co.kr/news/articleView.html?idxno=524565';
  const isSmall = useMediaQuery({ query: '(max-width: 749px)' });
  const isMedium = useMediaQuery({
    query: '(min-width: 750px) and (max-width: 1279px)',
  });
  const isBetweenMediumLarge = useMediaQuery({
    query: '(min-width: 1280px) and (max-width: 1439px)',
  });
  const animation = useScrollFadeIn({ initialOffset: '10%' });
  const [newsUrl, setNewsUrl] = useState('');
  const [info, setInfo] = useState('');
  const [imgList, setImgList] = useState([]);
  const [projectImgList, setProjectImgList] = useState([]);

  const readLogo = async () => {
    try {
      const res = await getLogos('project');
      setImgList(res);
    } catch (e) {
      console.error(e);
    }
  };

  const readCorporate = async () => {
    try {
      const res = await getCorporate();
      setInfo(res.projectInfo);
      setProjectImgList(res.imageList);
    } catch (e) {
      console.error(e);
    }
  };

  // EPRian News 버튼에 연결될 url 주소 가져오기
  const readNewsUrl = async () => {
    try {
      const res = await getClassinfo();
      setNewsUrl(res.newsLink);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    readCorporate();
    readLogo();
    readNewsUrl();
  }, []);

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
              : isBetweenMediumLarge
              ? Math.ceil(imgList.length / 6)
              : Math.ceil(imgList.length / 8)
          }
          leftItem={
            isSmall
              ? Math.round((imgList.length % 2) / 2)
              : isMedium
              ? Math.round((imgList.length % 4) / 2)
              : isBetweenMediumLarge
              ? Math.round((imgList.length % 6) / 2)
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
        <S.Button onClick={() => window.open(newsUrl, '_blank')}>
          EPRIS News <S.Arrow />
        </S.Button>
      </S.Container>
    </S.Layout>
  );
};

export default forwardRef(CorporateCard);
