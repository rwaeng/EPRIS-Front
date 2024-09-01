import { S } from './JoinusPage.style';
import { useEffect, useState, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getRecruitment } from '../../api/recruitment';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import { TextIconButton } from '../../components/common/CommonButtons/CommonButtons';
import ProcessBox from '../../components/Joinus/ProcessBox';
import NavigationBar from '../../components/common/NavigationBar/NavigatonBar';
import Question from '../../components/Joinus/Question';
import downloadIcon from '../../assets/JoinusPage/download.svg';
import useHorizontalScroll from '../../hooks/useHorizontalScroll';

const JoinusPage = () => {
  const [recruitment, setRecruitment] = useState({});
  const aniTitle = useScrollFadeIn();
  const aniSubtitle = useScrollFadeIn();
  const aniTimeline = useScrollFadeIn();
  const aniPoster = useScrollFadeIn();
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
  const scrollRef = useHorizontalScroll();

  useEffect(() => {
    const getRecruitmentInfo = async () => {
      try {
        const res = await getRecruitment();
        setRecruitment(res);
      } catch (err) {
        console.error(err);
      }
    };

    getRecruitmentInfo();
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!isDesktop && container) {
      container.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [isDesktop]);

  const handleWheel = e => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaX * 0.4;
      e.preventDefault();
    }
  };

  const handleDownloadFile = () => {
    const link = document.createElement('a');
    link.href = recruitment.doc;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <NavigationBar />
      <S.Layout>
        <S.TitleContainer>
          <S.Ellipse31 />
          <S.Ellipse32 />
          <S.MainTitle {...aniTitle}>Join EPRIS</S.MainTitle>
          <S.SubtitleContainer {...aniSubtitle}>
            <S.MainSubtitle>지원 자격</S.MainSubtitle>
            <S.MainDescription>
              전공무관, 연속 2학기
              <br />
              활동 가능한 학부생
            </S.MainDescription>
          </S.SubtitleContainer>

          <TextIconButton
            text='지원서 다운로드'
            icon={downloadIcon}
            onClick={handleDownloadFile}
          />
        </S.TitleContainer>
        <S.ContentContainer>
          <S.TimelineContainer>
            <S.Title>Timeline</S.Title>
            <S.Description>모집 일정</S.Description>
            <S.ProcessContainer ref={scrollRef} {...(isDesktop && aniTimeline)}>
              <ProcessBox title='1. 지원서 접수' desc={recruitment.deadline} />
              <ProcessBox title='2. 면접' desc={recruitment.interview} />
              <ProcessBox
                title='3. 합격자 발표'
                desc={recruitment.announcement}
              />
              <ProcessBox
                title='4. 오리엔테이션'
                desc={recruitment.orientation}
                isLast={true}
              />
            </S.ProcessContainer>
            <S.TimelineComment>가로로 스크롤해주세요</S.TimelineComment>
            <S.Poster src={recruitment.poster} {...aniPoster} alt='poster' />
          </S.TimelineContainer>

          <S.FAQContainer>
            <S.Title>FAQ</S.Title>
            <S.Description>자주 묻는 질문</S.Description>
            <S.FAQ>
              <Question
                Qnum='Q1'
                Q='시험 기간에도 세션이 진행되나요?'
                A='EPRIS는 시험 기간 2주 동안 정규 세션을 진행하지 않습니다.'
              />
              <Question
                Qnum='Q2'
                Q='PR 관련 지식과 활동 경험이 없어도 지원할 수 있나요?'
                A='학회에서 PR 스터디를 진행한 후 프로젝트 단계에 진입하기에 관련 경험이 없어도 PR 및 마케팅에 대한 높은 관심과 열정이 있다면 누구나 지원 가능합니다.'
              />
              <Question
                Qnum='Q3'
                Q='타 대외활동과 학회 활동 병행이 가능한가요?'
                A='각종 세션 및 산학협력 프로젝트에 많은 시간과 노력이 필요하기에 학기 중 타 대외활동 병행은 지양하고 있습니다. EPRIS를 1순위로 삼고 학회 활동에 성실히 참여할 수 있는 열정적인 예비 EPRian의 많은 지원을 기다리겠습니다.'
              />
              <Question
                Qnum='Q4'
                Q='최종 선발 인원과 경쟁률이 궁금합니다.'
                A='선발 인원과 경쟁률은 회칙 상 공개가 어렵습니다.'
              />
              <Question
                Qnum='Q5'
                Q='활동을 1학기만 해도 되나요?'
                A='연속 2학기 활동을 이수한 학회원을 대상으로 수료증을 발급해드리고 있습니다. 한 학기만 활동하게 될 경우, 중도 퇴회로 간주되며 수료증 발급이 어렵습니다.'
              />
              <Question
                Qnum='Q6'
                Q='방학에도 활동을 하나요?'
                A={`EPRIS는 방학에 정규 세션을 진행하지 않습니다.\n다만, 산학협력 일정에 따라 종강 이후에도 몇 차례의 추가적인 세션을 진행할 수 있다는 점 참고 바랍니다.`}
              />
            </S.FAQ>
          </S.FAQContainer>
        </S.ContentContainer>
      </S.Layout>
    </>
  );
};

export default JoinusPage;
