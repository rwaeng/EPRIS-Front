import styled from 'styled-components';
import * as font from '../../styles/font';

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

  position: relative;

  width: 100%;
  padding-top: 10rem;
  padding-bottom: 5.62rem;

  @media (max-width: 1279px) {
    padding-top: 5rem;
    padding-bottom: 3rem;
  }

  @media (min-width: 1440px) {
    width: 90rem;
  }
`;

S.Ellipse31 = styled.div`
  width: 22.125rem;
  height: 22.125rem;
  border-radius: 22.125rem;
  background: linear-gradient(
    170deg,
    rgba(238, 61, 89, 0.3) 7.62%,
    rgba(141, 184, 250, 0.3) 104.96%
  );

  filter: blur(150px);

  position: absolute;
  top: 8.12rem;
  left: -4.56rem;

  @media (max-width: 1279px) {
    display: none;
  }
`;

S.Ellipse32 = styled.div`
  width: 14.25rem;
  height: 14.25rem;
  transform: rotate(90deg);

  background: linear-gradient(
    180deg,
    rgba(238, 61, 89, 0.3) 0%,
    rgba(141, 184, 250, 0.3) 111.25%
  );

  filter: blur(100px);

  position: absolute;
  top: 29.25rem;
  right: -2.19rem;

  @media (max-width: 1279px) {
    display: none;
  }
`;

S.MainTitle = styled.div`
  margin-bottom: 3rem;

  ${font.bold56}
  color: var(--grey100);

  @media (max-width: 1279px) {
    ${font.m_bold56}
  }
`;

S.SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

S.MainSubtitle = styled.div`
  margin-bottom: 1.5rem;

  ${font.bold24}
  color: var(--grey100);

  @media (max-width: 1279px) {
    ${font.m_bold24}
    margin-bottom: 1rem;
  }
`;

S.MainDescription = styled.div`
  margin-bottom: 3rem;
  ${font.reg18}
  color: var(--grey100);
  text-align: center;

  @media (max-width: 1279px) {
    ${font.m_reg18}
  }
`;

S.ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70rem;

  @media (max-width: 1279px) {
    width: 100%;
    box-sizing: border-box;
    padding: 0 1.25rem;
  }
`;

S.TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  margin-top: 5rem;
  margin-bottom: 17.5rem;

  @media (max-width: 1279px) {
    margin-top: 6rem;
    margin-bottom: 10rem;
  }
`;

S.Title = styled.div`
  ${font.bold36}
  color: var(--grey100);

  @media (max-width: 1279px) {
    ${font.m_bold36}
    margin-bottom: 0.5rem;
  }
`;

S.Description = styled.div`
  ${font.reg18}
  color: var(--grey300);

  @media (max-width: 1279px) {
    ${font.m_reg18}
  }
`;

S.ProcessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 4rem 0;

  @media (max-width: 1279px) {
    overflow-x: scroll;
    margin-top: 2rem;
    margin-bottom: 5rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

S.Poster = styled.img`
  width: 100%;
`;

S.FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10rem;
`;

S.FAQ = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  gap: 5rem;

  @media (max-width: 1279px) {
    margin-top: 2rem;
    margin-left: 0;
    gap: 2rem;
  }
`;
