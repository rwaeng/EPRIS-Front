import NavigationBar from '../../components/common/NavigatonBar';
import { S } from './EPRiansPage.style';
import Dropdown from '../../components/EPRiansPage/Dropdown';

import profileBasic from '../../assets/EPRiansPage/profile_basic.png';
import brandExample from '../../assets/EPRiansPage/brand_example.svg';
import arrowDown from '../../assets/EPRiansPage/arrow_downward.svg';
import arrowUp from '../../assets/EPRiansPage/arrow_upward.svg';
import ViewMoreButton from '../../components/EPRiansPage/ViewMoreButton';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ActingCard, AlumniCard } from '../../components/EPRiansPage/Card';

const brandDummyArr = [
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
  brandExample,
];

const executiveDummyArr = [1, 1, 1, 1];
const actingDummyArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const alumniDummyArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const EPRiansPage = () => {
  const [brandList, setBrandList] = useState([]);
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [hasMoreBrands, setHasMoreBrands] = useState(true);
  const brandsPerPage = 12;

  const [actingList, setActingList] = useState([]);
  const [currentActingIndex, setCurrentActingIndex] = useState(0);
  const [hasMoreActing, setHasMoreActing] = useState(true);
  const actingPerPage = 4;

  const [alumniList, setAlumniList] = useState([]);
  const [currentAlumniIndex, setCurrentAlumniIndex] = useState(0);
  const [hasMoreAlumni, setHasMoreAlumni] = useState(true);
  const AlumniPerPage = 4;

  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  useEffect(() => {
    handleBrandViewMore();
    handleAlumniViewMore();
  }, []);

  // 브랜드 목록을 업데이트하는 함수
  const updateBrandList = () => {
    const newBrands = brandDummyArr.slice(0, currentBrandIndex + brandsPerPage);
    setBrandList(newBrands);
  };

  const handleBrandViewMore = () => {
    const newIndex = currentBrandIndex + brandsPerPage;
    // 현재 페이지의 끝에 도달했는지 확인
    if (newIndex < brandDummyArr.length) {
      // 더 많은 브랜드를 로드
      setHasMoreBrands(true);
      setCurrentBrandIndex(newIndex);
      updateBrandList();
    } else {
      // 더 이상 브랜드가 없으면 페이지를 초기화
      setHasMoreBrands(false);
      setCurrentBrandIndex(0);
      updateBrandList();
    }
  };

  const updateActingList = () => {
    const newActing = actingDummyArr.slice(
      0,
      currentActingIndex + actingPerPage,
    );
    setActingList(newActing);
  };

  const handleActingViewMore = () => {
    const newIndex = currentActingIndex + actingPerPage;
    // 현재 페이지의 끝에 도달했는지 확인
    if (newIndex < actingDummyArr.length) {
      // 더 많은 브랜드를 로드
      setHasMoreActing(true);
      setCurrentActingIndex(newIndex);
      updateActingList();
    } else {
      // 더 이상 브랜드가 없으면 페이지를 초기화
      setHasMoreActing(false);
      setCurrentActingIndex(-4);
      updateActingList();
    }
  };

  const updateAlumniList = () => {
    const newAlumni = alumniDummyArr.slice(
      0,
      currentAlumniIndex + AlumniPerPage,
    );
    setAlumniList(newAlumni);
  };

  const handleAlumniViewMore = () => {
    const newIndex = currentAlumniIndex + AlumniPerPage;
    // 현재 페이지의 끝에 도달했는지 확인
    if (newIndex < alumniDummyArr.length) {
      // 더 많은 브랜드를 로드
      setHasMoreAlumni(true);
      setCurrentAlumniIndex(newIndex);
      updateAlumniList();
    } else {
      // 더 이상 브랜드가 없으면 페이지를 초기화
      setHasMoreAlumni(false);
      setCurrentAlumniIndex(0);
      updateAlumniList();
    }
  };

  return (
    <S.Layout>
      <NavigationBar />
      <S.TitleContainer>
        <S.MainTitle>EPRians</S.MainTitle>
        <S.Gen>Now 37th</S.Gen>
      </S.TitleContainer>
      <S.ActingContainer>
        <S.Title $color='var(--grey100)'>Acting Members</S.Title>
        <S.Subtitle>활동 학회원</S.Subtitle>

        <S.MemberContainer className='acting'>
          {executiveDummyArr.map((_, index) => (
            <ActingCard
              key={index}
              profImg={profileBasic}
              role='직위'
              name='이름'
              info='학번 및 소속'
              $color='var(--red)'
            />
          ))}
          {isMobile &&
            actingList.map((_, index) => (
              <ActingCard
                key={index}
                profImg={profileBasic}
                role='직위'
                name='이름'
                info='학번 및 소속'
              />
            ))}

          <S.RowLine />
          {isDesktop &&
            actingDummyArr.map((_, index) => (
              <ActingCard
                key={index}
                profImg={profileBasic}
                role='직위'
                name='이름'
                info='학번 및 소속'
              />
            ))}
          {isMobile && (
            <ViewMoreButton
              onClick={handleActingViewMore}
              text={hasMoreActing ? 'view more' : 'close'}
              icon={hasMoreActing ? arrowDown : arrowUp}
            />
          )}
        </S.MemberContainer>
      </S.ActingContainer>
      <S.AlumniContainer>
        <S.SubtitleContainer>
          <div>
            <S.Title $color='var(--black)'>Alumni</S.Title>
            <S.Subtitle>수료 학회원</S.Subtitle>
          </div>
          {isMobile && <Dropdown />}
        </S.SubtitleContainer>
        <S.DropdownContainer>
          <S.Description>
            EPRIS가 배출한 선배님들은 학회 활동을 통해 축적한 역량을 대기업,
            외국계, 학업/학계 등 다양한 분야에서 발휘하고 계십니다.
            <br />
            EPRIS Alumni는 EPRIS만이 가질 수 있는 강력한 경쟁력으로 학회원들의
            소중한 길잡이가 되어줍니다.
          </S.Description>
          {isDesktop && <Dropdown />}
        </S.DropdownContainer>
        <S.MemberContainer $member='alumni'>
          {isMobile &&
            alumniList.map((_, index) => (
              <AlumniCard
                key={index}
                profImg={profileBasic}
                role='직위'
                name='이름'
                info='학번 및 소속'
              />
            ))}

          {isDesktop &&
            alumniDummyArr.map((_, index) => (
              <AlumniCard
                key={index}
                profImg={profileBasic}
                role='직위'
                name='이름'
                info='학번 및 소속'
              />
            ))}
          {isMobile && (
            <ViewMoreButton
              onClick={handleAlumniViewMore}
              text={hasMoreAlumni ? 'view more' : 'close'}
              icon={hasMoreAlumni ? arrowDown : arrowUp}
            />
          )}
        </S.MemberContainer>
        <S.BrandContainer>
          {brandList.map((brand, index) => (
            <S.BrandCard key={index} src={brand} />
          ))}
        </S.BrandContainer>
        {brandDummyArr.length > 12 && (
          <ViewMoreButton
            onClick={handleBrandViewMore}
            text={hasMoreBrands ? 'view more' : 'close'}
            icon={hasMoreBrands ? arrowDown : arrowUp}
          />
        )}
      </S.AlumniContainer>
    </S.Layout>
  );
};

export default EPRiansPage;
