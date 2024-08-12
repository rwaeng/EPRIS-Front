import { S } from './Footer.style.js';
import { ReactComponent as Logo } from '../../assets/Footer/logo_circle.svg';
import Instagram from '../../assets/Footer/instagram.svg';
import Mail from '../../assets/Footer/mail.svg';
import Blog from '../../assets/Footer/blog.svg';

const Footer = () => {
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
        <S.IconWrapper src={Instagram} />
        <S.IconWrapper src={Mail} />
        <S.IconWrapper src={Blog} />
      </S.IconContainer>
    </S.FooterLayout>
  );
};

export default Footer;
