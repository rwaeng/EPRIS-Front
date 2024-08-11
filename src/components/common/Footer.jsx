import { S } from './Footer.style.js';
import { ReactComponent as Logo } from '../../assets/Footer/logo_circle.svg';
import { ReactComponent as Instagram } from '../../assets/Footer/instagram.svg';
import { ReactComponent as Mail } from '../../assets/Footer/mail.svg';
import { ReactComponent as Blog } from '../../assets/Footer/blog.svg';
import { ReactComponent as SmallMail } from '../../assets/Footer/mail_small.svg';
import { ReactComponent as SmallBlog } from '../../assets/Footer/blog_small.svg';
import { ReactComponent as SmallInstagram } from '../../assets/Footer/instagram_small.svg';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 749 });

  return (
    <S.FooterLayout>
      <S.FooterContainer>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>

        <S.InfoContainer>
          <S.NameWrapper>
            이화여자대학교 유일 PR 학회
            <br />
            EPRIS
          </S.NameWrapper>
          <S.InfoWrapper>
            Copyright 2024. EPRIS. All rights reserved.
            <br />
            Developed by EFUB 4th as a collaborative project.
          </S.InfoWrapper>
        </S.InfoContainer>
      </S.FooterContainer>

      <S.IconContainer>
        <S.IconWrapper>
          {isMobile ? <SmallInstagram /> : <Instagram />}
        </S.IconWrapper>
        <S.IconWrapper>{isMobile ? <SmallMail /> : <Mail />}</S.IconWrapper>
        <S.IconWrapper>{isMobile ? <SmallBlog /> : <Blog />}</S.IconWrapper>
      </S.IconContainer>
    </S.FooterLayout>
  );
};

export default Footer;
