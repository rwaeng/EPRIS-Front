import { useState } from 'react';
import { M, S } from './AboutPage.style';
import NavigationBar from '../../components/common/NavigatonBar';

const AboutPage = () => {
  const cardData = [
    {
      title: '기획부장',
      subtitle: '기획부 총괄',
      departmentname: '기획부',
      mainDescription: '학회 전반의 커리큘럼 및 네트워킹 행사를 기획합니다',
      details: [
        {
          title: 'Networking·Alumni DB 관리',
          description: `Career Lecture (1학기) / 홈커밍데이(2학기) 기획
EPRIS Alumni DB 관리 및 선배님 컨택 진행`,
        },
        {
          title: '커리큘럼 및 세션 진행 관리',
          description: `세션 활동 안내 PPT 제작 및 다음 세션 공지
산학 협력 세션 활동 및 팀별 상호 평가지 제작 및 관리
학기말 활동 학회원 대상 커리큘럼 만족도 설문조사`,
        },
      ],
    },

    {
      title: '운영부장',
      subtitle: '운영부 총괄',
      departmentname: '운영부',
      mainDescription: '학회원 명단 및 학회의 재정, 세션 운영을 관리합니다',
      details: [
        {
          title: '학회원 명단 관리',
          description: `출결 및 세션 과제물 업로드 관리
네임택 및 수료증 제작`,
        },
        {
          title: '세션 운영 관리',
          description: `케이스 스터디, 이슈/트렌드 브리핑
세션 활동 평가지 제작 및 관리
행사 및 세션 진행 장소 대여`,
        },
        {
          title: '재정 관리',
          description: `학회 예산 및 회계 내역 관리 및 공유`,
        },
      ],
    },
    {
      title: '홍보부장',
      subtitle: '홍보부 총괄',
      departmentname: '홍보부',
      mainDescription:
        'SNS 채널 및 리크루팅 운영을 관리하며, 활동 내역을 아카이빙합니다',
      details: [
        {
          title: 'SNS 채널 운영 관리',
          description: `활동 사진 촬영 및 아카이빙
세션 활동 카드뉴스 제작 및 SNS 업로드
네이버 카페, 네이버 블로그, 인스타그램 운영
SNS 채널 활성화 및 팔로워 유입 방안 고안`,
        },
        {
          title: '리쿠르팅 운영 관리',
          description: `리쿠르팅 홍보자료(카드뉴스· 포스터) 제작
리쿠르팅 진행 및 홍보물 업로드 관리`,
        },
      ],
    },
    { title: '회장', subtitle: '학회 총괄' },
  ];

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

  return (
    <S.Layout>
      <S.BcakgroundImageContainer>
        <S.AboutTextContainer>
          <S.TitleWrapper>About</S.TitleWrapper>
          <S.BackgroundSubTitleWrapper>
            "PR의 시각으로 세상을 보다."
          </S.BackgroundSubTitleWrapper>
          <S.IntroductionTextWrapper>
            다양한 실전경험을 바탕으로, PR을 통해 다양한 분야에서 리더십과
            팔로워십을 발휘할 수 있는 인재를 양성합니다.
          </S.IntroductionTextWrapper>
        </S.AboutTextContainer>
      </S.BcakgroundImageContainer>
      <S.IntroducctionContainer>
        <S.AboutContainer>
          <S.LogoWrapper />
          <S.AboutPRContainer>
            <S.NameWrapper>
              <S.RedTextWrapper>E</S.RedTextWrapper>WHA{' '}
              <S.RedTextWrapper>P</S.RedTextWrapper>UBLIC{' '}
              <S.RedTextWrapper>R</S.RedTextWrapper>ELATIONS{' '}
              <S.RedTextWrapper>I</S.RedTextWrapper>N{' '}
              <S.RedTextWrapper>S</S.RedTextWrapper>TUDY
            </S.NameWrapper>
            <S.HistoryWrapper>
              EPRIS는
              <S.RedTextWrapper>
                EWHA PUBLIC RELATIONS IN STUDY
              </S.RedTextWrapper>
              의 약자로, 2000년도에 신문방송대학원 과정의 석/박사 선배님들에
              의해 창립된 커뮤니케이션·미디어학부 소속 교내 유일 PR 학회입니다.
              학회원들은 매주 1회 정기모임에서 스터디와 PT를 통해 PR에 관하여
              학습하고, 산학협력 프로젝트로 PR 관련 실무 경험까지 함께합니다.
            </S.HistoryWrapper>
          </S.AboutPRContainer>
        </S.AboutContainer>

        <S.SubTitleContainer>
          <S.SubTitleContentContainer>
            <S.SubTitleWrapper>Members</S.SubTitleWrapper>
            <S.SubTitleKrWrapper>학회원</S.SubTitleKrWrapper>
          </S.SubTitleContentContainer>
          <S.AboutContainer>
            <S.CardContainer>
              <S.CardContentContainer>
                <S.CardNameWrapper>YB</S.CardNameWrapper>
                <S.SubTitleKrWrapper>신입 학회원</S.SubTitleKrWrapper>
              </S.CardContentContainer>
              <S.CardContentContainer>
                <S.CardNameWrapper>OB</S.CardNameWrapper>
                <S.SubTitleKrWrapper>한 학기 수료 학회원</S.SubTitleKrWrapper>
              </S.CardContentContainer>
              <S.CardContentContainer>
                <S.CardNameWrapper>Alumni</S.CardNameWrapper>
                <S.SubTitleKrWrapper>수료 학회원</S.SubTitleKrWrapper>
              </S.CardContentContainer>
            </S.CardContainer>
            <S.TextWrapper>
              {`EPRIS의 활동 멤버는 OB와 YB로 구성됩니다. 모든 학회원은 2학기 연속 활동을 원칙으로 합니다.

EPRIS는 기획부, 운영부, 홍보부로 구성되어 운영됩니다. 각 부서는 부장과 부원들로 구성되며, 활동 멤버 전원은 하나의 부서에 소속되어 활동합니다.

EPRIS의 임원진은 회장, 기획부장, 운영부장, 홍보부장의 4인 체제로 구성됩니다. 임원진은 한 학기 이상 활동을 수료한 회원으로 구성됩니다.`}
            </S.TextWrapper>
          </S.AboutContainer>
        </S.SubTitleContainer>

        <S.SubTitleContainer>
          <S.SubTitleContentContainer>
            <S.SubTitleWrapper>Administrating Team</S.SubTitleWrapper>
            <S.SubTitleKrWrapper>부서 소개</S.SubTitleKrWrapper>
          </S.SubTitleContentContainer>
          <S.DepartmentContainer>
            <S.HiddenCardContainer>
              <S.CardContentContainer>
                <S.CardNameWrapper>기획부장</S.CardNameWrapper>
                <S.SubTitleKrWrapper>기획부 총괄</S.SubTitleKrWrapper>
              </S.CardContentContainer>
              <S.CardContentContainer>
                <S.CardNameWrapper>운영부장</S.CardNameWrapper>
                <S.SubTitleKrWrapper>운영부 총괄</S.SubTitleKrWrapper>
              </S.CardContentContainer>
              <S.CardContentContainer>
                <S.CardNameWrapper>홍보부장</S.CardNameWrapper>
                <S.SubTitleKrWrapper>홍보부 총괄</S.SubTitleKrWrapper>
              </S.CardContentContainer>
              <S.CardContentContainer>
                <S.CardNameWrapper>회장</S.CardNameWrapper>
                <S.SubTitleKrWrapper>학회 총괄</S.SubTitleKrWrapper>
              </S.CardContentContainer>
            </S.HiddenCardContainer>
            <M.CardContainer>
              <M.CardButtonContainer>
                <M.LeftArrow onClick={handlePrevClick} />
                <M.CardContentContainer>
                  <S.CardNameWrapper>
                    {cardData[currentCardIndex].title}
                  </S.CardNameWrapper>
                  <S.SubTitleKrWrapper>
                    {cardData[currentCardIndex].subtitle}
                  </S.SubTitleKrWrapper>
                </M.CardContentContainer>
                <M.RightArrow onClick={handelNextClick} />
              </M.CardButtonContainer>
            </M.CardContainer>
            <S.Conatiner>
              <S.Triangle />
              <S.DepartmentContentContainer>
                <S.DepartmentNameWrapper>기획부</S.DepartmentNameWrapper>
                <S.DepartmentMainDescriptionWrapper>
                  학회 전반의 커리큘럼 및 네트워킹 행사를 기획합니다
                </S.DepartmentMainDescriptionWrapper>
                <S.DepartmentDescriptionContainer>
                  <S.DepartmentDetailsContainer>
                    <S.DepartmentDetailsTitleWrapper>
                      Networking·Alumni DB 관리
                    </S.DepartmentDetailsTitleWrapper>
                    <S.DepartmentDetailsWrapper>{`Career Lecture (1학기) / 홈커밍데이(2학기) 기획
EPRIS Alumni DB 관리 및 선배님 컨택 진행`}</S.DepartmentDetailsWrapper>
                  </S.DepartmentDetailsContainer>
                  <S.DepartmentDetailsContainer>
                    <S.DepartmentDetailsTitleWrapper>
                      커리큘럼 및 세션 진행 관리
                    </S.DepartmentDetailsTitleWrapper>
                    <S.DepartmentDetailsWrapper>{`세션 활동 안내 PPT 제작 및 다음 세션 공지
산학 협력 세션 활동 및 팀별 상호 평가지 제작 및 관리
학기말 활동 학회원 대상 커리큘럼 만족도 설문조사`}</S.DepartmentDetailsWrapper>
                  </S.DepartmentDetailsContainer>
                </S.DepartmentDescriptionContainer>
              </S.DepartmentContentContainer>

              <S.Triangle marginLeft='12.25rem' />
              <S.DepartmentContentContainer marginLeft='12.25rem'>
                <S.DepartmentNameWrapper>운영부</S.DepartmentNameWrapper>
                <S.DepartmentMainDescriptionWrapper>
                  학회원 명단 및 학회의 재정, 세션 운영을 관리합니다
                </S.DepartmentMainDescriptionWrapper>
                <S.DepartmentDescriptionContainer>
                  <S.DepartmentDetailsContainer>
                    <S.DepartmentDetailsTitleWrapper>
                      학회원 명단 관리
                    </S.DepartmentDetailsTitleWrapper>
                    <S.DepartmentDetailsWrapper>{`출결 및 세션 과제물 업로드 관리
네임택 및 수료증 제작`}</S.DepartmentDetailsWrapper>
                  </S.DepartmentDetailsContainer>
                  <S.DepartmentDetailsContainer>
                    <S.DepartmentDetailsTitleWrapper>
                      세션 운영 관리
                    </S.DepartmentDetailsTitleWrapper>
                    <S.DepartmentDetailsWrapper>{`케이스 스터디, 이슈/트렌드 브리핑
세션 활동 평가지 제작 및 관리
행사 및 세션 진행 장소 대여`}</S.DepartmentDetailsWrapper>
                  </S.DepartmentDetailsContainer>
                  <S.DepartmentDetailsContainer>
                    <S.DepartmentDetailsTitleWrapper>
                      재정 관리
                    </S.DepartmentDetailsTitleWrapper>
                    <S.DepartmentDetailsWrapper>
                      학회 예산 및 회계 내역 관리 및 공유
                    </S.DepartmentDetailsWrapper>
                  </S.DepartmentDetailsContainer>
                </S.DepartmentDescriptionContainer>
              </S.DepartmentContentContainer>
              <S.Triangle marginLeft='24.5rem' />
              <S.DepartmentContentContainer marginLeft='25.5rem'>
                <S.DepartmentNameWrapper>홍보부</S.DepartmentNameWrapper>
                <S.DepartmentMainDescriptionWrapper>
                  SNS 채널 및 리크루팅 운영을 관리하며, 활동 내역을
                  아카이빙합니다
                </S.DepartmentMainDescriptionWrapper>
                <S.DepartmentDescriptionContainer>
                  <S.DepartmentDetailsContainer>
                    <S.DepartmentDetailsTitleWrapper>
                      SNS 채널 운영 관리
                    </S.DepartmentDetailsTitleWrapper>
                    <S.DepartmentDetailsWrapper>{`활동 사진 촬영 및 아카이빙
세션 활동 카드뉴스 제작 및 SNS 업로드
네이버 카페, 네이버 블로그, 인스타그램 운영
SNS 채널 활성화 및 팔로워 유입 방안 고안`}</S.DepartmentDetailsWrapper>
                  </S.DepartmentDetailsContainer>
                  <S.DepartmentDetailsContainer>
                    <S.DepartmentDetailsTitleWrapper>
                      리쿠르팅 운영 관리
                    </S.DepartmentDetailsTitleWrapper>
                    <S.DepartmentDetailsWrapper>{`리쿠르팅 홍보자료(카드뉴스· 포스터) 제작
리쿠르팅 진행 및 홍보물 업로드 관리`}</S.DepartmentDetailsWrapper>
                  </S.DepartmentDetailsContainer>
                </S.DepartmentDescriptionContainer>
              </S.DepartmentContentContainer>
            </S.Conatiner>

            <M.Conatiner>
              {currentCard.departmentname && (
                <>
                  <S.Triangle />
                  <M.DepartmentContentContainer>
                    <S.DepartmentNameWrapper>
                      {currentCard.departmentname}
                    </S.DepartmentNameWrapper>
                    <S.DepartmentMainDescriptionWrapper>
                      {currentCard.mainDescription}
                    </S.DepartmentMainDescriptionWrapper>
                    <S.DepartmentDescriptionContainer>
                      {currentCard.details &&
                        currentCard.details.map((detail, index) => (
                          <S.DepartmentDetailsContainer key={index}>
                            <S.DepartmentDetailsTitleWrapper>
                              {detail.title}
                            </S.DepartmentDetailsTitleWrapper>
                            <S.DepartmentDetailsWrapper>
                              {detail.description}
                            </S.DepartmentDetailsWrapper>
                          </S.DepartmentDetailsContainer>
                        ))}
                    </S.DepartmentDescriptionContainer>
                  </M.DepartmentContentContainer>{' '}
                </>
              )}
            </M.Conatiner>
          </S.DepartmentContainer>
        </S.SubTitleContainer>
      </S.IntroducctionContainer>
    </S.Layout>
  );
};

export default AboutPage;
