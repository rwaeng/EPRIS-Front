import { S } from '../Activity/ActivityPage.style';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import AwardCard from '../../components/activities/AwardCard.jsx';
import ProjectCard from '../../components/activities/ProjectCard.jsx';
import ActivityCard from '../../components/activities/ActivityCard.jsx';
import NavigationBar from '../../components/common/NavigatonBar.jsx';
import CorporateCard from '../../components/activities/CorporateCard.jsx';
import FloatingButton from '../../components/activities/FloatingButton.jsx';

const ActivityPage = () => {
  const [achievementList, setAchievementList] = useState([
    {
      year: '~2022',
      info: `대통령 직속청년위원회 축제기획
          해프닝 소셜 앱 PR 프로젝트 기획
          여의도 IFC MALL PR 전략기획
          대구경북과학 DGIST 프로젝트 기획
          나눔 BLOOM 패션전시회 PR 기획 및 실행
          이화 52번가 홍보프로젝트
          WOOZOO PR 프로젝트 참여
          KPR 공모전출품
          2018 이화여대 SNS PR 전략프로젝트
          2022 IKEA sleepover event 기획
          2022 DCA 대학생광고대상 공모전출품
          2022 듀라셀리튬코인배터리 PR 기획
          2022 네이버ZX슈퍼캣 메타버스 Zep 전략기획`,
    },
    {
      year: '2023',
      info: `네이버Z 제페토 산학협력 : 제페토 USP 셀링 마케팅 기획
          프리닉스 산학협력 : Kodak 포토프린터 브랜딩 IMC 기획
          교보라이프플래닛생명 산학협력 : 디지털마케팅 전략 기획
          초이스포우먼_리무브 산학협력 : 스킨브라 브랜딩 IMC 기획
          대한적십자사 산학협력 : 브랜드 캠페인 기획`,
    },
    {
      year: '2024',
      info: '빙그레 산학협력 : 부라보콘 매출 증대 및 포지셔닝 강화 기획\n넥서스 산학협력 : 도서 시리즈 및 프로그램 전략 기획\n우버택시 산학협력 : 국내 인지도 강화 및 포지셔닝 확립 캠페인 기획',
    },
  ]);
  const [awardData, setAwardData] =
    useState(`<신정부 정책 전략회> 정부주제 대회 ‘대상’
                  KEB하나은행 마케팅크루 ‘대상‘
                  대학생 공공커뮤니케이션 콘테스트 ‘최우수상’
                  KPR 대학생 PR 아이디어 공모전 ‘우수상’
                  파크랜드 대학생마케팅공모전 ‘장려상‘
                  2021 대한민국 대학생광고대회 ‘파이널리스트’`);
  const [prData, setPrData] = useState({
    studyinfo:
      '매 학기 초, PR CASE STUDY를 통해 학회원들과 함께 PR에 대한 이해를 높이는 활동을 하고 있습니다.\n\n언론PR, 정부PR, 위기관리PR, 국제PR, 마케팅PR, CSR 등 다양한 PR의 이론을 실제 사례를 통해 명확히 이해하고, 활용 가능한 지식으로 발전시키고자 합니다.',
    imgList: [
      {
        imageId: 11,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 12,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 11,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 12,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
    ],
  });
  const [issueData, setIssueData] = useState({
    imgList: [
      {
        imageId: 11,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 12,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
    ],
  });
  const [trendData, setTrendData] = useState({
    imgList: [
      {
        imageId: 11,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
      {
        imageId: 12,
        imageUrl:
          'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
      },
    ],
  });
  const [networkData, setNetworkData] = useState([
    {
      networkId: 1,
      networkType: 'night',
      networkInfo: '매 학기 초, 학회원들과 함께~',
      networkImg:
        'https://s3.ap-northeast-2.amazonaws.com//image/7f47796a-8dd2-41e0-97f5-cae9c7f13652.jpg',
    },
    {
      networkId: 2,
      networkType: 'lecture',
      networkInfo: '매 학기 초, 학회원들과 함께~',
      networkImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt',
    },
  ]);

  const isMedium = useMediaQuery({
    query: '(min-width: 750px) and (max-width: 1279px)',
  });
  const isBig = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const [clicked, setClicked] = useState('session');
  const sessionRef = useRef(null);
  const corporateRef = useRef(null);
  const networkRef = useRef(null);
  const [locations, setLocations] = useState({
    container: null,
    session: null,
    corporate: null,
    network: null,
  });

  const onFocusSession = () => {
    sessionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onFocusCorporate = () => {
    corporateRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onFocusNetwork = () => {
    networkRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClickFloatingBtn = e => {
    setClicked(e.target.id);
  };

  // const getAbsoluteLocation = element => {
  //   if (!element) return null;

  //   const rect = element.getBoundingClientRect();
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //   return rect.top + scrollTop;
  // }

  // useEffect(() => {
  //   if (isBig) {
  //     const container = document.getElementById('container');
  //     const session = document.getElementById('sessionContainer');
  //     const corporate = document.getElementById('corporateContainer');
  //     const network = document.getElementById('networkContainer');
  //     const title = document.getElementById('title');

  //     setLocations({
  //       container: getAbsoluteLocation(container),
  //       session: getAbsoluteLocation(session),
  //       corporate: getAbsoluteLocation(corporate),
  //       network: getAbsoluteLocation(network),
  //       title: getAbsoluteLocation(title),
  //     });
  //   }
  // }, [isBig]);

  return (
    <>
      <NavigationBar />
      {!isMedium && (
        <S.ImgContainer>
          <S.H1>Activities</S.H1>
        </S.ImgContainer>
      )}
      <S.Layout>
        {isMedium && (
          <S.ImgContainer>
            <S.H1>Activities</S.H1>
          </S.ImgContainer>
        )}
        <S.Container>
          <S.TitleContainer>
            <S.H2>Achievement</S.H2>
            <S.Reg18>성과</S.Reg18>
          </S.TitleContainer>
          <S.CardContainer>
            <S.ProjectContainer>
              <S.H3 $isRed={true}>프로젝트</S.H3>
              <S.CardWrapper>
                {achievementList.reverse().map((it, idx) => (
                  <ProjectCard
                    year={it.year}
                    info={it.info}
                    isRed={idx === 0}
                  />
                ))}
              </S.CardWrapper>
            </S.ProjectContainer>
            <S.ProjectContainer>
              <S.H3>수상 이력</S.H3>
              <AwardCard info={awardData} />
            </S.ProjectContainer>
          </S.CardContainer>
        </S.Container>
        <S.Container>
          <S.TitleContainer id='title'>
            <S.H2>Activities</S.H2>
            <S.Reg18>활동 내용</S.Reg18>
          </S.TitleContainer>
          <S.ContentContainer>
            <FloatingButton
              locations={locations}
              containerTop={locations.container}
              clicked={clicked}
              setClicked={setClicked}
              handleClickFloatingBtn={handleClickFloatingBtn}
              onFocusCorporate={onFocusCorporate}
              onFocusNetwork={onFocusNetwork}
              onFocusSession={onFocusSession}
            />
            <S.CardContainer id='container'>
              <S.SessionCardWrapper
                id='sessionContainer'
                ref={sessionRef}
                $isVisible={clicked === 'session'}
              >
                <ActivityCard
                  smallTitle='Session 1'
                  title='PR Case Study'
                  info={prData.studyinfo}
                  imgList={prData.imgList}
                />
                <ActivityCard
                  smallTitle='Session 2'
                  title='Issue Briefing'
                  info={issueData.studyinfo}
                  imgList={issueData.imgList}
                />
                <ActivityCard
                  smallTitle='Session 3'
                  title='Trend Briefing'
                  info={trendData.studyinfo}
                  imgList={trendData.imgList}
                />
              </S.SessionCardWrapper>
              <CorporateCard
                id='corporateContainer'
                ref={corporateRef}
                $isVisible={clicked === 'corporate'}
              />
              <S.NetworkCardWrapper
                id='networkContainer'
                ref={networkRef}
                $isVisible={clicked === 'network'}
              >
                <ActivityCard
                  smallTitle='Network'
                  title='EPRian의 밤'
                  info={networkData[0].networkInfo}
                  imgList={networkData[0].networkImg}
                />
                <ActivityCard
                  smallTitle='Network'
                  title='EPRIS Career Lecture'
                  info={networkData[1].networkInfo}
                  imgList={networkData[1].networkImg}
                />
              </S.NetworkCardWrapper>
            </S.CardContainer>
          </S.ContentContainer>
        </S.Container>
      </S.Layout>
    </>
  );
};

export default ActivityPage;
