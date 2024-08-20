import { useState } from 'react';
import NavigationBar from '../../components/common/NavigatonBar';
import { S } from './ContactPage.style';

const ContactPage = () => {
  const [toast, setToast] = useState('');

  const clickCopy = text => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setToast(`클립보드에 복사되었습니다`);

        setTimeout(() => {
          setToast('');
        }, 3000);
      })
      .catch(err => {
        console.err('클립보드 복사 실패:', err);
      });
  };

  return (
    <>
      <NavigationBar />
      <S.Layout>
        <S.BackgroundImageContainer>
          <S.Ellipse1 />
          <S.Ellipse2 />
        </S.BackgroundImageContainer>
        <S.TitleContainer>
          <S.Title>Contact</S.Title>
          <S.SubTitle>연락 정보</S.SubTitle>
        </S.TitleContainer>
        <S.CardContainer>
          <S.ContactCardContainer onClick={() => clickCopy('010-4598-2934')}>
            <S.PhoneIcon />
            <S.CopySubTitle>37th 회장 전유나</S.CopySubTitle>
            <S.Content>010-4598-2934</S.Content>
          </S.ContactCardContainer>
          <S.ContactCardContainer
            onClick={() => clickCopy('ewha_epris@naver.com')}
          >
            <S.EmailIcon />
            <S.CopySubTitle>E-mail</S.CopySubTitle>
            <S.Content>ewha_epris@naver.com</S.Content>
          </S.ContactCardContainer>
          <S.ContactCardContainer onClick={() => clickCopy('@epris_ewha')}>
            <S.InstagramIcon />
            <S.CopySubTitle>Instagram</S.CopySubTitle>
            <S.Content>@epris_ewha</S.Content>
          </S.ContactCardContainer>
          <S.ContactCardContainer onClick={() => clickCopy('ewhaepris')}>
            <S.BlogIcon />
            <S.CopySubTitle>Blog</S.CopySubTitle>
            <S.Content>ewhaepris</S.Content>
          </S.ContactCardContainer>
        </S.CardContainer>
        {toast && (
          <S.ToastContainer>
            <S.ToastIcon />
            <S.ToastText>{toast}</S.ToastText>
          </S.ToastContainer>
        )}
      </S.Layout>
    </>
  );
};

export default ContactPage;
