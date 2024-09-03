import { S } from './CorporateCard.style';
import { forwardRef, useEffect, useState } from 'react';
import { getCorporate } from '../../api/corporate';
import { getLogos } from '../../api/logo';
import { getClassinfo } from '../../api/classinfo';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import Carousel from './Carousel';

const CorporateCard = ({ $isVisible, id }, ref) => {
  const animation = useScrollFadeIn({ initialOffset: '10%' });
  const [newsUrl, setNewsUrl] = useState('');
  const [info, setInfo] = useState('');
  const [imgList, setImgList] = useState([]);
  const [projectImgList, setProjectImgList] = useState([]);

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
        <Carousel type='small' imgList={imgList}>
          {imgList.map(it => (
            <S.ImgWrapper key={it.imageId + 'img'}>
              <S.Img src={it.imageUrl} alt='logoImg' />
            </S.ImgWrapper>
          ))}
        </Carousel>
        <S.InfoWrapper>{info}</S.InfoWrapper>
        <Carousel imgList={projectImgList}>
          {projectImgList.map(it => (
            <S.BigImgWrapper key={it.imageId}>
              <S.BigImg src={it.imageUrl} alt='projectImg' />
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
