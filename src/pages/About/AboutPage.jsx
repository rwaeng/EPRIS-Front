import { useState } from 'react';
import { M, S } from './AboutPage.style';
import NavigationBar from '../../components/common/NavigationBar/NavigatonBar';
import {
  CardContent,
  cardData,
  MCardContent,
} from '../../components/About/CardContent';
import { DepartmentCard } from '../../components/About/DepartmentCard';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const AboutPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentCardIndex(prevIndex =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1,
    );
  };

  const handelNextClick = () => {
    setCurrentCardIndex(prevIndex =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const currentCard = cardData[currentCardIndex];

  const animationHistory = useScrollFadeIn();
  const animationText = useScrollFadeIn();
  const mAnimationName = useScrollFadeIn();
  const mAnimationHistory = useScrollFadeIn();

  return (
    <S.Layout>
      <NavigationBar />
      <S.BcakgroundImageContainer>
        <S.AboutTextContainer>
          <S.Title>About</S.Title>
          <S.BackgroundSubTitle>
            "PR의 시각으로 세상을 보다."
          </S.BackgroundSubTitle>
          <S.IntroductionText>
            다양한 실전경험을 바탕으로, PR을 통해 다양한 분야에서 리더십과
            팔로워십을 발휘할 수 있는 인재를 양성합니다.
          </S.IntroductionText>
        </S.AboutTextContainer>
      </S.BcakgroundImageContainer>
      <S.IntroductionContainer>
        <S.AboutContainer {...animationHistory}>
          <S.LogoWrapper />
          <S.AboutPRContainer>
            <S.NameWrapper>
              <S.RedText>E</S.RedText>WHA&nbsp;<S.RedText>P</S.RedText>
              UBLIC&nbsp;<S.RedText>R</S.RedText>ELATIONS&nbsp;
              <S.RedText>I</S.RedText>N&nbsp;<S.RedText>S</S.RedText>TUDY
            </S.NameWrapper>
            <M.NameWrapper {...mAnimationName}>
              <S.RedText>E</S.RedText>WHA&nbsp;<S.RedText>P</S.RedText>
              UBLIC&nbsp;<S.RedText>R</S.RedText>ELATIONS&nbsp;
              <S.RedText>I</S.RedText>N&nbsp;<S.RedText>S</S.RedText>TUDY
            </M.NameWrapper>
            <S.HistoryWrapper {...mAnimationHistory}>
              EPRIS는 <S.RedText>EWHA PUBLIC RELATIONS IN STUDY</S.RedText>의
              약자로, 2000년도에 신문방송대학원 과정의 석/박사 선배님들에 의해
              창립된 커뮤니케이션·미디어학부 소속 교내 유일 PR 학회입니다.
              학회원들은 매주 1회 정기모임에서 스터디와 PT를 통해 PR에 관하여
              학습하고, 산학협력 프로젝트로 PR 관련 실무 경험까지 함께합니다.
            </S.HistoryWrapper>
          </S.AboutPRContainer>
        </S.AboutContainer>

        <S.SubTitleContainer>
          <S.SubTitleContentContainer>
            <S.SubTitle>Members</S.SubTitle>
            <S.SubTitleKr>학회원</S.SubTitleKr>
          </S.SubTitleContentContainer>
          <S.AboutContainer>
            <S.CardContainer>
              <CardContent name='YB' subTitle='신입 학회원' />
              <CardContent name='OB' subTitle='한 학기 수료 학회원' />
              <CardContent name='Alumni' subTitle='수료 학회원' />
            </S.CardContainer>
            <M.CardContainer>
              <MCardContent name='YB' subTitle='신입 학회원' />
              <MCardContent name='OB' subTitle='한 학기 수료 학회원' />
              <MCardContent name='Alumni' subTitle='수료 학회원' />
            </M.CardContainer>
            <S.TextWrapper {...animationText}>
              {`EPRIS의 활동 멤버는 OB와 YB로 구성됩니다. 모든 학회원은 2학기 연속 활동을 원칙으로 합니다.

EPRIS는 기획부, 운영부, 홍보부로 구성되어 운영됩니다. 각 부서는 부장과 부원들로 구성되며, 활동 멤버 전원은 하나의 부서에 소속되어 활동합니다.

EPRIS의 임원진은 회장, 기획부장, 운영부장, 홍보부장의 4인 체제로 구성됩니다. 임원진은 한 학기 이상 활동을 수료한 회원으로 구성됩니다.`}
            </S.TextWrapper>
          </S.AboutContainer>
        </S.SubTitleContainer>

        <S.SubTitleContainer>
          <S.SubTitleContentContainer>
            <S.SubTitle>Administrating Team</S.SubTitle>
            <S.SubTitleKr>부서 소개</S.SubTitleKr>
          </S.SubTitleContentContainer>
          <S.DepartmentContainer>
            <S.HiddenCardContainer>
              <S.CardContentContainer>
                <S.CardName>기획부장</S.CardName>
                <S.SubTitleKr>기획부 총괄</S.SubTitleKr>
              </S.CardContentContainer>
              <S.CardContentContainer>
                <S.CardName>운영부장</S.CardName>
                <S.SubTitleKr>운영부 총괄</S.SubTitleKr>
              </S.CardContentContainer>
              <S.CardContentContainer>
                <S.CardName>홍보부장</S.CardName>
                <S.SubTitleKr>홍보부 총괄</S.SubTitleKr>
              </S.CardContentContainer>
              <S.CardContentContainer>
                <S.CardName>회장</S.CardName>
                <S.SubTitleKr>학회 총괄</S.SubTitleKr>
              </S.CardContentContainer>
            </S.HiddenCardContainer>
            <M.CardContainer>
              <M.CardButtonContainer>
                <M.LeftArrow onClick={handlePrevClick} />
                <M.CardContentContainer>
                  <S.CardName>{cardData[currentCardIndex].title}</S.CardName>
                  <S.SubTitleKr>
                    {cardData[currentCardIndex].subtitle}
                  </S.SubTitleKr>
                </M.CardContentContainer>
                <M.RightArrow onClick={handelNextClick} />
              </M.CardButtonContainer>
            </M.CardContainer>
            <DepartmentCard />
            <M.Container>
              {currentCard.departmentname && (
                <>
                  <S.Triangle />
                  <M.DepartmentContentContainer>
                    <S.DepartmentName>
                      {currentCard.departmentname}
                    </S.DepartmentName>
                    <S.DepartmentMainDescription>
                      {currentCard.mainDescription}
                    </S.DepartmentMainDescription>
                    <S.DepartmentDescriptionContainer>
                      {currentCard.details &&
                        currentCard.details.map((detail, index) => (
                          <S.DepartmentDetailsContainer key={index}>
                            <S.DepartmentDetailsTitle>
                              {detail.title}
                            </S.DepartmentDetailsTitle>
                            <S.DepartmentDetails>
                              {detail.description}
                            </S.DepartmentDetails>
                          </S.DepartmentDetailsContainer>
                        ))}
                    </S.DepartmentDescriptionContainer>
                  </M.DepartmentContentContainer>{' '}
                </>
              )}
            </M.Container>
          </S.DepartmentContainer>
        </S.SubTitleContainer>
      </S.IntroductionContainer>
    </S.Layout>
  );
};

export default AboutPage;
