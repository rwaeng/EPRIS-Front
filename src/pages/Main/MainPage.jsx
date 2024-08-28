import { S } from './MainPage.style.js';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../../components/common/NavigatonBar';
import Down from '../../assets/Main/arrow_down_circle.svg';
import Logo from '../../assets/Main/logo.svg';
import arrowIcon from '../../assets/Main/arrow_right.svg';
import Greetings from '../../components/Main/Greetings.jsx';
import { TextIconButton } from '../../components/common/CommonButtons/CommonButtons.jsx';
import {
  getStatsInfo,
  getGreetingCards,
  getClassInfo,
} from '../../api/main.js';
import { getRecruitment } from '../../api/recruitment.js';
import useScrollFadeIn from '../../hooks/useScrollFadeIn.js';

const MainPage = () => {
  const [data, setData] = useState(null);
  const [greetingCards, setGreetingCards] = useState(null);
  const [classInfo, setClassInfo] = useState(null);
  const [recruitmentInfo, setRecruitmentInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const bodyRef = useRef(null);
  const navigate = useNavigate();
  const animation = useScrollFadeIn();
  const animation1 = useScrollFadeIn();
  const animation2 = useScrollFadeIn();
  const animation3 = useScrollFadeIn();
  const animation4 = useScrollFadeIn();
  const animation5 = useScrollFadeIn();
  const animation6 = useScrollFadeIn();
  const animation7 = useScrollFadeIn({ initialOffset: '10%' });
  const animation8 = useScrollFadeIn();
  const animation9 = useScrollFadeIn();
  const animation10 = useScrollFadeIn();
  const animation11 = useScrollFadeIn();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, greetingCardData, classData, recruitmentData] =
          await Promise.all([
            getStatsInfo(),
            getGreetingCards(),
            getClassInfo(),
            getRecruitment(),
          ]);
        setData(statsData.data);
        setGreetingCards(greetingCardData.data);
        setClassInfo(classData.data);
        setRecruitmentInfo(recruitmentData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleScrollToBody = () => {
    if (bodyRef.current) {
      bodyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinUsClick = () => {
    navigate('/joinus');
  };

  if (isLoading) {
    return <S.MainLayout></S.MainLayout>; // 로딩 중 표시
  }
  return (
    <S.MainLayout>
      <S.TopContainer>
        <NavigationBar />
        <S.HeadContainer>
          <S.TitleWrapper
            {...animation9}
          >{`PR의 시각으로 \n세상을 보다`}</S.TitleWrapper>
          <S.SubWrapper {...animation10}>
            {`이화여자대학교 교내 유일 PR 학회\n EPRIS를 소개합니다`}
          </S.SubWrapper>
          <S.DownBtn src={Down} onClick={handleScrollToBody} {...animation11} />
        </S.HeadContainer>
      </S.TopContainer>
      <S.BodyContainer ref={bodyRef}>
        <S.ValueContainer {...animation}>
          <S.LogoWrapper src={Logo} />
          <S.TextContainer>
            <S.LittleLogoWrapper>
              <S.Red>E</S.Red>
              WHA <S.Red>P</S.Red>UBLIC <S.Red>R</S.Red>ELATIONS
              <S.Red> I</S.Red>N <S.Red>S</S.Red>TUDY
            </S.LittleLogoWrapper>
            {`EPRIS는 2000년부터 시작된 교내 유일 PR학회로서 실전 경험을 바탕으로, PR을 통해 다양한 분야에서 리더십과 팔로워십을 발휘할 수 있는 인재를 양성합니다.\n\n더 넓은 시각으로 세상을 변화시킬 첫걸음, \nEPRIS와 함께하세요.`}
          </S.TextContainer>
        </S.ValueContainer>
        <S.ContentContainer>
          <S.ValueContainer>
            <S.BlackBoxContainer {...animation1}>
              <S.BlackTitle>설립년도</S.BlackTitle>
              <S.BlackText>2000년</S.BlackText>
            </S.BlackBoxContainer>
            <S.BlackBoxContainer {...animation2}>
              <S.BlackTitle>산학프로젝트</S.BlackTitle>
              <S.BlackText>{data ? `${data.projectNum}개` : 'N/A'}</S.BlackText>
            </S.BlackBoxContainer>
            <S.BlackBoxContainer {...animation3}>
              <S.BlackTitle>수상이력</S.BlackTitle>
              <S.BlackText>{data ? `${data.awardsNum}회` : 'N/A'}</S.BlackText>
            </S.BlackBoxContainer>
          </S.ValueContainer>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.TitleText>Key Values</S.TitleText>
          <S.SubText>주요 가치</S.SubText>
          <S.ValueContainer>
            <S.GreyBoxContainer {...animation4}>
              <S.GreyTitle>분석력</S.GreyTitle>
              <S.GreyText>
                다양한 시각으로 현상 및 문제를 체계적으로 분석하여 효과적인
                커뮤니케이션을 위한 인사이트를 도출합니다. 이를 통해 효과적인
                전략을 수립하고, 변화하는 환경에 빠르게 대응할 수 있는 기반을
                마련합니다.
              </S.GreyText>
            </S.GreyBoxContainer>
            <S.GreyBoxContainer {...animation5}>
              <S.GreyTitle>창의력</S.GreyTitle>
              <S.GreyText>
                새로운 아이디어와 혁신적인 접근 방식은 PR 활동의 핵심
                요소입니다. 다양한 관점을 수용하고, 창의적인 해결책을
                모색함으로써 차별화된 가치를 제공합니다.
              </S.GreyText>
            </S.GreyBoxContainer>
            <S.GreyBoxContainer {...animation6}>
              <S.GreyTitle>성실성</S.GreyTitle>
              <S.GreyText>
                성실은 학회 활동의 기본 원칙으로 신뢰를 구축하는 데 필수입니다.
                EPRian은 다른 학회원과 함께 동반의 성장을 이루며 열정적인 태도로
                공동의 프로젝트에 임합니다.
              </S.GreyText>
            </S.GreyBoxContainer>
          </S.ValueContainer>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.TitleText>Greetings</S.TitleText>
          <S.SubText>인사말</S.SubText>
          <S.GreetingsContainer>
            {greetingCards && greetingCards.length > 0 ? (
              greetingCards.map(greetingCard => (
                <Greetings
                  key={greetingCard.cardId}
                  greetingCard={greetingCard}
                />
              ))
            ) : (
              <div></div>
            )}
          </S.GreetingsContainer>
        </S.ContentContainer>
        <S.ContentContainer>
          <S.TitleText>Administrators</S.TitleText>
          <S.SubText>현 임원진</S.SubText>
          <S.ValueContainer>
            {classInfo && classInfo.adminImg ? (
              <S.AdministratorPhoto src={classInfo.adminImg} {...animation7} />
            ) : (
              <div></div>
            )}
          </S.ValueContainer>
        </S.ContentContainer>
        <S.BottomContainer {...animation8}>
          <TextIconButton
            text='Join us'
            icon={arrowIcon}
            border='80px'
            onClick={handleJoinUsClick}
          />
          <S.AnnounceText>
            {recruitmentInfo ? recruitmentInfo.notice : ''}
          </S.AnnounceText>
        </S.BottomContainer>
      </S.BodyContainer>
    </S.MainLayout>
  );
};

export default MainPage;
