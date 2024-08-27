import { S } from './Footer.style.js';
import { useEffect, useState } from 'react';
import { getClassInfo } from '../../../api/main.js';
import { ReactComponent as Logo } from '../../../assets/Footer/logo_circle.svg';
import Instagram from '../../../assets/Footer/instagram.svg';
import Mail from '../../../assets/Footer/mail.svg';
import Blog from '../../../assets/Footer/blog.svg';

const Footer = () => {
  const [classInfo, setClassInfo] = useState(null);
  useEffect(() => {
    const fetchClassInfo = async () => {
      try {
        const classData = await getClassInfo();
        console.log('Fetched class data:', classData); // 디버깅용 로그
        setClassInfo(classData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchClassInfo();
  }, []);
  if (!classInfo) {
    return null; // 데이터가 로딩되기 전에는 아무것도 렌더링하지 않음
  }
  return (
    <S.FooterLayout>
      <S.FooterContainer>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>

        <S.InfoContainer>
          <S.NameWrapper>{`이화여자대학교 유일 PR 학회\nEPRIS`}</S.NameWrapper>
          <S.InfoWrapper>
            {`Copyright 2024. EPRIS. All rights reserved.\nDeveloped by EFUB 4th as a collaborative project.`}
          </S.InfoWrapper>
        </S.InfoContainer>
      </S.FooterContainer>
      <S.IconContainer>
        <S.IconWrapper
          href={classInfo.instaLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Instagram} alt='Instagram' />
        </S.IconWrapper>
        <S.IconWrapper
          href={`mailto:${classInfo.email}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Mail} alt='Email' />
        </S.IconWrapper>
        <S.IconWrapper
          href={classInfo.blogLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={Blog} alt='Blog' />
        </S.IconWrapper>
      </S.IconContainer>
    </S.FooterLayout>
  );
};

export default Footer;
