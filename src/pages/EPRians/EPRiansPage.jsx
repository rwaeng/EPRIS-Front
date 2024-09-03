import { S } from './EPRiansPage.style';
import NavigationBar from '../../components/common/NavigationBar/NavigatonBar';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { getLogos } from '../../api/logo';
import { getMembers, getMembersActive, getMembersExe } from '../../api/member';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import Dropdown from '../../components/EPRians/Dropdown';
import ViewMoreButton from '../../components/EPRians/ViewMoreButton';
import { ActingCard, AlumniCard } from '../../components/EPRians/Card';
import arrowDown from '../../assets/EPRiansPage/arrow_downward.svg';
import arrowUp from '../../assets/EPRiansPage/arrow_upward.svg';
import { getClassinfo } from '../../api/classinfo';

const EPRiansPage = () => {
  const [brandList, setBrandList] = useState([]);
  const [pagedBrandList, setPagedBrandList] = useState([]); //한 페이지에 들어갈 브랜드 리스트
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);
  const [hasMoreBrands, setHasMoreBrands] = useState(true);
  const brandsPerPage = 12;

  const [genList, setGenList] = useState([]); //기수 리스트

  const [executiveList, setExecutiveList] = useState([]); //운영진 리스트

  const [actingList, setActingList] = useState([]); //활동회원 리스트
  const [pagedActingList, setPagedActingList] = useState([]); //한 페이지에 들어갈 활동회원 리스트
  const [currentActingIndex, setCurrentActingIndex] = useState(0);
  const [hasMoreActing, setHasMoreActing] = useState(true);
  const actingPerPage = 4;

  const [alumniList, setAlumniList] = useState([]); //수료회원 리스트
  const [pagedAlumniList, setPagedAlumniList] = useState([]); //한 페이지에 들어갈 수료회원 리스트
  const [currentAlumniIndex, setCurrentAlumniIndex] = useState(0);
  const [hasMoreAlumni, setHasMoreAlumni] = useState(true);
  const AlumniPerPage = 4;

  const [gen, setGen] = useState();

  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });

  const aniExecutive = useScrollFadeIn();
  const aniActing = useScrollFadeIn();
  const aniAlumni = useScrollFadeIn();
  const aniBrand = useScrollFadeIn();
  const aniLine = useScrollFadeIn();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // API 호출
        const [memberRes, executiveRes, actingRes, brandRes, classRes] =
          await Promise.all([
            getMembers(),
            getMembersExe(),
            getMembersActive(),
            getLogos(),
            getClassinfo(),
          ]);

        const sortedGen = memberRes
          .map(item => item.num)
          .sort((a, b) => {
            const numA = parseInt(a.replace('th', ''), 10);
            const numB = parseInt(b.replace('th', ''), 10);
            return numB - numA; // 내림차순 정렬
          });

        // 데이터 설정
        setGenList(sortedGen);
        setExecutiveList(executiveRes);
        setActingList(
          actingRes.sort((a, b) => {
            return a.name.localeCompare(b.name);
          }),
        );
        setBrandList(brandRes);
        setGen(classRes.num);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (brandList.length > 0) {
      handleBrandViewMore();
    }
  }, [brandList]);

  useEffect(() => {
    if (alumniList.length > 0) {
      handleAlumniViewMore();
    }
  }, [alumniList]);

  // 브랜드 목록을 업데이트하는 함수
  const updateBrandList = () => {
    const newBrands = brandList.slice(0, currentBrandIndex + brandsPerPage);
    setPagedBrandList(newBrands);
  };

  const handleBrandViewMore = () => {
    const newIndex = currentBrandIndex + brandsPerPage;
    // 현재 페이지의 끝에 도달했는지 확인
    if (newIndex < brandList.length) {
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
    const newActing = actingList.slice(0, currentActingIndex + actingPerPage);
    setPagedActingList(newActing);
  };

  const handleActingViewMore = () => {
    const newIndex = currentActingIndex + actingPerPage;
    // 현재 페이지의 끝에 도달했는지 확인
    if (newIndex < actingList.length) {
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
    const newAlumni = alumniList.slice(0, currentAlumniIndex + AlumniPerPage);
    setPagedAlumniList(newAlumni);
  };

  const handleAlumniViewMore = () => {
    const newIndex = currentAlumniIndex + AlumniPerPage;
    // 현재 페이지의 끝에 도달했는지 확인
    if (newIndex < alumniList.length) {
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
    <>
      <NavigationBar />
      <S.Layout>
        <S.TitleContainer>
          <S.MainTitle>EPRians</S.MainTitle>
          <S.Gen>Now {gen}</S.Gen>
        </S.TitleContainer>
        <S.ActingContainer>
          <S.Title $color='var(--grey100)'>Acting Members</S.Title>
          <S.Subtitle>활동 학회원</S.Subtitle>
          <S.MemberContainer {...(isDesktop && aniExecutive)}>
            {executiveList.map(mem => (
              <ActingCard
                key={mem.memberId}
                profImg={mem.profileUrl}
                role={mem.position}
                name={mem.name}
                info={mem.memberInfo}
                $color='var(--red)'
              />
            ))}
          </S.MemberContainer>
          <S.RowLine {...aniLine} />
          <S.MemberContainer {...(isDesktop && aniActing)}>
            {isMobile &&
              pagedActingList.map(mem => (
                <ActingCard
                  key={mem.memberId}
                  profImg={mem.profileUrl}
                  role={mem.position}
                  name={mem.name}
                  info={mem.memberInfo}
                />
              ))}
            {isMobile && executiveList.length > 0 && (
              <ViewMoreButton
                onClick={handleActingViewMore}
                text={hasMoreActing ? 'view more' : 'close'}
                icon={hasMoreActing ? arrowDown : arrowUp}
              />
            )}
            {isDesktop &&
              actingList.map(mem => (
                <ActingCard
                  key={mem.memberId}
                  profImg={mem.profileUrl}
                  role={mem.position}
                  name={mem.name}
                  info={mem.memberInfo}
                />
              ))}
          </S.MemberContainer>
        </S.ActingContainer>
      </S.Layout>
      <S.AlumniBackground>
        <S.Layout>
          <S.AlumniContainer>
            <S.SubtitleContainer>
              <div>
                <S.Title $color='var(--black)'>Alumni</S.Title>
                <S.Subtitle>수료 학회원</S.Subtitle>
              </div>
              {isMobile && (
                <Dropdown
                  options={genList.slice(2)}
                  setAlumniList={setAlumniList}
                />
              )}
            </S.SubtitleContainer>
            <S.DropdownContainer>
              <S.Description>
                EPRIS가 배출한 선배님들은 학회 활동을 통해 축적한 역량을 대기업,
                외국계, 학업/학계 등 다양한 분야에서 발휘하고 계십니다.
                <br />
                EPRIS Alumni는 EPRIS만이 가질 수 있는 강력한 경쟁력으로
                학회원들의 소중한 길잡이가 되어줍니다.
              </S.Description>
              {isDesktop && (
                <Dropdown
                  options={genList.slice(2)}
                  setAlumniList={setAlumniList}
                />
              )}
            </S.DropdownContainer>
            <S.MemberContainer $member='alumni' {...(isDesktop && aniAlumni)}>
              {isMobile &&
                pagedAlumniList.map(mem => (
                  <AlumniCard
                    key={mem.memberId}
                    profImg={mem.profileUrl}
                    role={mem.position}
                    name={mem.name}
                    info={mem.memberInfo}
                  />
                ))}

              {isDesktop &&
                alumniList.map(mem => (
                  <AlumniCard
                    key={mem.memberId}
                    profImg={mem.profileUrl}
                    role={mem.position}
                    name={mem.name}
                    info={mem.memberInfo}
                  />
                ))}
              {isMobile && alumniList.length > 4 && (
                <ViewMoreButton
                  onClick={handleAlumniViewMore}
                  text={hasMoreAlumni ? 'view more' : 'close'}
                  icon={hasMoreAlumni ? arrowDown : arrowUp}
                />
              )}
            </S.MemberContainer>
            <S.BrandContainer {...aniBrand}>
              {pagedBrandList.map((brand, index) => (
                <S.BrandCard key={index} src={brand.imageUrl} alt='brand' />
              ))}
            </S.BrandContainer>
            {brandList.length > 12 && (
              <ViewMoreButton
                onClick={handleBrandViewMore}
                text={hasMoreBrands ? 'view more' : 'close'}
                icon={hasMoreBrands ? arrowDown : arrowUp}
              />
            )}
          </S.AlumniContainer>
        </S.Layout>
      </S.AlumniBackground>
    </>
  );
};

export default EPRiansPage;
