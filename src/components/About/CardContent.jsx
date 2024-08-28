import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import { S } from '../../pages/About/AboutPage.style';

export const cardData = [
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

export const CardContent = ({ name, subTitle }) => {
  return (
    <S.CardContentContainer>
      <S.CardName>{name}</S.CardName>
      <S.SubTitleKr>{subTitle}</S.SubTitleKr>
    </S.CardContentContainer>
  );
};

export const MCardContent = ({ name, subTitle }) => {
  const animationCard = useScrollFadeIn();
  return (
    <S.CardContentContainer {...animationCard}>
      <S.CardName>{name}</S.CardName>
      <S.SubTitleKr>{subTitle}</S.SubTitleKr>
    </S.CardContentContainer>
  );
};

export const departmentData = [
  {
    depname: '기획부',
    description: '학회 전반의 커리큘럼 및 네트워킹 행사를 기획합니다',
    depdetails: [
      {
        title: 'Networking·Alumni DB 관리',
        content: `Career Lecture (1학기) / 홈커밍데이(2학기) 기획
  EPRIS Alumni DB 관리 및 선배님 컨택 진행`,
      },
      {
        title: '커리큘럼 및 세션 진행 관리',
        content: `세션 활동 안내 PPT 제작 및 다음 세션 공지
  산학 협력 세션 활동 및 팀별 상호 평가지 제작 및 관리
  학기말 활동 학회원 대상 커리큘럼 만족도 설문조사`,
      },
    ],
    marginLeft: '0rem',
  },
  {
    depname: '운영부',
    description: '학회원 명단 및 학회의 재정, 세션 운영을 관리합니다',
    depdetails: [
      {
        title: '학회원 명단 관리',
        content: `출결 및 세션 과제물 업로드 관리
  네임택 및 수료증 제작`,
      },
      {
        title: '세션 운영 관리',
        content: `케이스 스터디, 이슈/트렌드 브리핑
  세션 활동 평가지 제작 및 관리
  행사 및 세션 진행 장소 대여`,
      },
      {
        title: '재정 관리',
        content: '학회 예산 및 회계 내역 관리 및 공유',
      },
    ],
    marginLeft: '12.25rem',
  },
  {
    depname: '홍보부',
    description:
      'SNS 채널 및 리크루팅 운영을 관리하며, 활동 내역을 아카이빙합니다',
    depdetails: [
      {
        title: 'SNS 채널 운영 관리',
        content: `활동 사진 촬영 및 아카이빙
  세션 활동 카드뉴스 제작 및 SNS 업로드
  네이버 카페, 네이버 블로그, 인스타그램 운영
  SNS 채널 활성화 및 팔로워 유입 방안 고안`,
      },
      {
        title: '리쿠르팅 운영 관리',
        content: `리쿠르팅 홍보자료(카드뉴스· 포스터) 제작
  리쿠르팅 진행 및 홍보물 업로드 관리`,
      },
    ],
    marginLeft: '25.5rem',
  },
];

export const DepartmentCardContent = ({
  depname,
  description,
  depdetails = [],
  marginLeft,
}) => {
  return (
    <S.DepartmentContentContainer style={{ marginLeft }}>
      <S.DepartmentName>{depname}</S.DepartmentName>
      <S.DepartmentMainDescription>{description}</S.DepartmentMainDescription>
      <S.DepartmentDescriptionContainer>
        {depdetails.map((depdetails, index) => (
          <S.DepartmentDetailsContainer key={index}>
            <S.DepartmentDetailsTitle>
              {depdetails.title}
            </S.DepartmentDetailsTitle>
            <S.DepartmentDetails>{depdetails.content}</S.DepartmentDetails>
          </S.DepartmentDetailsContainer>
        ))}
      </S.DepartmentDescriptionContainer>
    </S.DepartmentContentContainer>
  );
};
