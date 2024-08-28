import { S } from './CorporateCard.style';
import { forwardRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getCorporate } from '../../api/corporate';
import { getLogos } from '../../api/logo';
import { getClassinfo } from '../../api/classinfo';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import Carousel from './Carousel';

const CorporateCard = ({ $isVisible, id }, ref) => {
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

  // 캐러셀 화면 이동에 필요한 변수 계산
  const calculatePageLength = (imgListLength, itemsPerPage) =>
    Math.ceil(imgListLength / itemsPerPage);
  const calculateLeftItem = (imgListLength, itemsPerPage) =>
    Math.round((imgListLength % itemsPerPage) / 2);

  const itemsPerPage = isSmall
    ? 2
    : isMedium
    ? 4
    : isBetweenMediumLarge
    ? 6
    : 8;
    
  // 페이지 수 계산
  const pageLength = calculatePageLength(imgList.length, itemsPerPage);
  // 마지막 페이지의 남은 아이템 수 계산
  const leftItem = calculateLeftItem(imgList.length, itemsPerPage);

  // 데이터 fetching
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
          pageLength={pageLength}
          leftItem={leftItem}
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
