import styled from 'styled-components';
import * as font from '../../styles/font';
import backgroundImg from '../../assets/EPRiansPage/background_img.svg';

export const S = {};

S.Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 750px) and (max-width: 1279px) {
    width: 46.875rem; //750px
    margin: 0 auto;
  }
`;

S.TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 90rem;
  height: 32rem;

  background-image: url(${backgroundImg});
  background-size: cover;

  @media (max-width: 1279px) {
    max-width: 46.875rem;
    height: 15.95444rem;
  }
`;

S.MainTitle = styled.div`
  ${font.bold56}
  color: var(--white);

  margin-bottom: 2rem;

  @media (max-width: 1279px) {
    ${font.m_bold36}
    margin-bottom: 1rem;
  }
`;

S.Ellipse31 = styled.img``;

S.Ellipse32 = styled.img``;

S.Gen = styled.div`
  ${font.bold36}
  color: var(--white);

  @media (max-width: 1279px) {
    ${font.m_bold24}
  }
`;

S.ActingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  width: 90rem;
  box-sizing: border-box;
  padding: 10rem;

  background-color: var(--black);

  @media (max-width: 1279px) {
    width: 100%;
    padding: 5rem 1.25rem;
  }
`;

S.Title = styled.div`
  ${font.bold36}
  color: ${props => props.$color};

  @media (max-width: 1279px) {
    ${font.m_bold36}
  }
`;

S.Subtitle = styled.div`
  ${font.reg18}
  color: var(--grey300);

  @media (max-width: 1279px) {
    ${font.m_reg18}
  }
`;

S.AlumniContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  width: 90rem;
  box-sizing: border-box;
  padding: 10rem;

  background-color: var(--white);

  @media (max-width: 1279px) {
    width: 100%;
    align-items: center;
    padding: 5rem 1.25rem 8.94rem;
  }
`;

S.SubtitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 100%;
`;

S.DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 4rem;

  @media (max-width: 1279px) {
    margin-top: 2rem;
  }
`;

S.Description = styled.div`
  ${font.reg18};

  @media (max-width: 1279px) {
    ${font.m_reg18}
  }
`;

S.MemberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 70rem;
  gap: 1.75rem;

  margin-top: ${props => (props.$member === 'alumni' ? '3rem' : '4rem')};
  margin-bottom: ${props => (props.$member === 'alumni' ? '10rem' : '7.5rem')};

  @media (max-width: 1279px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 5rem;
  }
`;

S.RowLine = styled.div`
  width: 70rem;
  height: 0.0625rem;
  background-color: var(--grey500);

  margin: 3rem 0;

  @media (max-width: 1279px) {
    display: none;
  }
`;

S.BrandContainer = styled.div`
  width: 70.25rem;
  row-gap: 1rem;
  align-items: center;
  justify-items: center;
  justify-content: center;

  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media (max-width: 1279px) {
    width: 100%;

    grid-template-columns: repeat(
      auto-fill,
      10.25rem
    ); // 모바일에서는 자동으로 조정
    gap: 0.25rem;

    margin-bottom: 1.5rem;
  }
`;

S.BrandCard = styled.img`
  width: 10.25rem;
  height: 6.15rem;
  padding: 1rem;

  box-sizing: border-box;
  border-radius: 0.75rem;
  background: var(--white);

  box-shadow: 0px 0px 32px 0px rgba(130, 130, 143, 0.1);

  object-fit: contain;
`;
