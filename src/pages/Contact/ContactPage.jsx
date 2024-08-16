import NavigationBar from '../../components/common/NavigatonBar';
import { S } from './ContactPage.style';

const ContactPage = () => {
  return (
    <S.Layout>
      <S.BackgroundImageContainer>
        <S.Ellipse1Wrapper />
        <S.Ellipse2Wrapper />
      </S.BackgroundImageContainer>
      <S.TitleContainer>
        <S.TitleWrapper>Contact</S.TitleWrapper>
        <S.SubTitleWrapper>연락 정보</S.SubTitleWrapper>
      </S.TitleContainer>
      <S.CardContainer>
        <S.ContactCardContainer>
          <S.PhoneIcon />
          <S.SubTitleWrapper>37th 회장 전유나</S.SubTitleWrapper>
          <S.ContentWrapper>010-4598-2934</S.ContentWrapper>
        </S.ContactCardContainer>
        <S.ContactCardContainer>
          <S.EmailIcon />
          <S.SubTitleWrapper>E-mail</S.SubTitleWrapper>
          <S.ContentWrapper>ewha_epris@naver.com</S.ContentWrapper>
        </S.ContactCardContainer>
        <S.ContactCardContainer>
          <S.InstagramIcon />
          <S.SubTitleWrapper>Instagram</S.SubTitleWrapper>
          <S.ContentWrapper>@epris_ewha</S.ContentWrapper>
        </S.ContactCardContainer>
        <S.ContactCardContainer>
          <S.BlogIcon />
          <S.SubTitleWrapper>Blog</S.SubTitleWrapper>
          <S.ContentWrapper>ewhaepris</S.ContentWrapper>
        </S.ContactCardContainer>
      </S.CardContainer>
    </S.Layout>
  );
};

export default ContactPage;
