import { S } from '../Activity/ActivityPage.style';
import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getProject } from '../../api/project.js';
import { getAwards } from '../../api/award.js';
import { getSession } from '../../api/session.js';
import { getNetwork } from '../../api/network.js';
import useScroll from '../../hooks/useScroll.js';
import AwardCard from '../../components/Activities/AwardCard.jsx';
import ProjectCard from '../../components/Activities/ProjectCard.jsx';
import ActivityCard from '../../components/Activities/ActivityCard.jsx';
import NavigationBar from '../../components/common/NavigationBar/NavigatonBar.jsx';
import CorporateCard from '../../components/Activities/CorporateCard.jsx';
import FloatingButton from '../../components/Activities/FloatingButton.jsx';

const ActivityPage = () => {
  const [projectList, setProjectList] = useState([]);
  const [awardsData, setAwardsData] = useState('');
  const [prData, setPrData] = useState({});
  const [issueData, setIssueData] = useState({});
  const [trendData, setTrendData] = useState({});
  const [networkData, setNetworkData] = useState([]);

  const isBig = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  const { state } = useScroll();
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

  const getAbsoluteLocation = element => {
    if (!element) return null;

    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return rect.top + scrollTop;
  };

  useEffect(() => {
    if (!isBig) return;

    const updateLocations = () => {
      const locations = [
        'sessionContainer',
        'corporateContainer',
        'networkContainer',
      ].reduce((acc, id) => {
        const element = document.getElementById(id);
        acc[id.replace('Container', '')] = getAbsoluteLocation(element);
        return acc;
      }, {});

      setLocations(locations);
    };

    updateLocations();
  }, [isBig, state]);

  const readProject = async () => {
    try {
      const res = await getProject();
      setProjectList(res.sort((a, b) => a.year - b.year).reverse());
    } catch (e) {
      console.error(e);
    }
  };

  const readAward = async () => {
    try {
      const res = await getAwards();
      setAwardsData(res.awardsInfo);
    } catch (e) {
      console.error(e);
    }
  };

  const readSession = async () => {
    try {
      const res = await Promise.all(
        ['pr', 'issue', 'trend'].map(async type => {
          const res = await getSession(type);
          return res;
        }),
      );
      setPrData(res[0]);
      setIssueData(res[1]);
      setTrendData(res[2]);
    } catch (e) {
      console.error(e);
    }
  };

  const readNetwork = async () => {
    try {
      const res = await getNetwork();
      setNetworkData(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    readProject();
    readAward();
    readSession();
    readNetwork();
  }, []);

  return (
    <S.TotalLayout>
      <NavigationBar />
      <S.ImgContainer>
        <S.H1>Activities</S.H1>
      </S.ImgContainer>
      <S.Layout>
        <S.Container>
          <S.TitleContainer>
            <S.H2>Achievement</S.H2>
            <S.Reg18>성과</S.Reg18>
          </S.TitleContainer>
          <S.CardContainer>
            <S.ProjectContainer>
              <S.H3 $isRed={true}>프로젝트</S.H3>
              <S.CardWrapper>
                {projectList.map((it, idx) => (
                  <ProjectCard
                    key={idx + 'project'}
                    year={it.year}
                    info={it.info}
                    isRed={idx === 0}
                  />
                ))}
              </S.CardWrapper>
            </S.ProjectContainer>
            <S.ProjectContainer>
              <S.H3>수상 이력</S.H3>
              <AwardCard info={awardsData} />
            </S.ProjectContainer>
          </S.CardContainer>
        </S.Container>
        <S.BottomContainer>
          <S.TitleContainer>
            <S.H2>Activities</S.H2>
            <S.Reg18>활동 내용</S.Reg18>
          </S.TitleContainer>
          <S.ContentContainer>
            <FloatingButton
              locations={locations}
              clicked={clicked}
              setClicked={setClicked}
              handleClickFloatingBtn={handleClickFloatingBtn}
              onFocusCorporate={onFocusCorporate}
              onFocusNetwork={onFocusNetwork}
              onFocusSession={onFocusSession}
            />
            <S.CardContainer>
              <S.SessionCardWrapper
                id='sessionContainer'
                ref={sessionRef}
                $isVisible={clicked === 'session'}
              >
                <ActivityCard
                  smallTitle='Session 1'
                  title='PR Case Study'
                  info={prData.sessionInfo}
                  imgList={prData.imageList}
                />
                <ActivityCard
                  smallTitle='Session 2'
                  title='Issue Briefing'
                  info={issueData.sessionInfo}
                  imgList={issueData.imageList}
                />
                <ActivityCard
                  smallTitle='Session 3'
                  title='Trend Briefing'
                  info={trendData.sessionInfo}
                  imgList={trendData.imageList}
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
                  info={networkData.length > 0 && networkData[0].networkInfo}
                  imgList={networkData.length > 0 && networkData[0].networkImg}
                />
                <ActivityCard
                  smallTitle='Network'
                  title='EPRIS Career Lecture'
                  info={networkData.length > 0 && networkData[1].networkInfo}
                  imgList={networkData.length > 0 && networkData[1].networkImg}
                />
              </S.NetworkCardWrapper>
            </S.CardContainer>
          </S.ContentContainer>
        </S.BottomContainer>
      </S.Layout>
    </S.TotalLayout>
  );
};

export default ActivityPage;
