import { useEffect, useState } from 'react';
import { S, M } from './ContactPage.style';
import { getClassinfo } from '../../api/classinfo';
import NavigationBar from '../../components/common/NavigationBar/NavigatonBar';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

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

  const clickOpen = url => {
    window.open(url, '_blank');
  };

  const [classInfo, setClassInfo] = useState({
    num: '',
    phoneNum: '',
    phoneNumInfo: '',
    email: '',
    instaLink: '',
    blogLink: '',
    newsLink: '',
    adminImg: '',
  });

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await getClassinfo();
        setClassInfo(res);
      } catch (error) {
        console.error(error);
      }
    };
    getInfo();
  }, []);

  const animationTitle = useScrollFadeIn();
  const animation = useScrollFadeIn();

  const mobileAnimation1 = useScrollFadeIn();
  const mobileAnimation2 = useScrollFadeIn();
  const mobileAnimation3 = useScrollFadeIn();
  const mobileAnimation4 = useScrollFadeIn();

  return (
    <>
      <NavigationBar />
      <S.Layout>
        <S.BackgroundImageContainer>
          <S.Ellipse31 />
          <S.Ellipse32 />
        </S.BackgroundImageContainer>
        <S.TitleContainer {...animationTitle}>
          <S.Title>Contact</S.Title>
          <S.SubTitle>연락 정보</S.SubTitle>
        </S.TitleContainer>
        <S.CardContainer {...animation}>
          <S.ContactCardContainer onClick={() => clickCopy(classInfo.phoneNum)}>
            <S.PhoneIcon />
            <S.CopySubTitle>{classInfo.phoneNumInfo}</S.CopySubTitle>
            <S.Content>{classInfo.phoneNum}</S.Content>
          </S.ContactCardContainer>
          <S.ContactCardContainer onClick={() => clickCopy(classInfo.email)}>
            <S.EmailIcon />
            <S.CopySubTitle>E-mail</S.CopySubTitle>
            <S.Content>{classInfo.email}</S.Content>
          </S.ContactCardContainer>
          <S.ContactCardContainer
            onClick={() => clickOpen(classInfo.instaLink)}
          >
            <S.InstagramIcon />
            <S.CopySubTitle>Instagram</S.CopySubTitle>
            <S.Content>@epris_ewha</S.Content>
          </S.ContactCardContainer>
          <S.ContactCardContainer onClick={() => clickOpen(classInfo.blogLink)}>
            <S.BlogIcon />
            <S.CopySubTitle>Blog</S.CopySubTitle>
            <S.Content>ewhaepris</S.Content>
          </S.ContactCardContainer>
        </S.CardContainer>
        <M.CardContainer>
          <S.ContactCardContainer
            {...mobileAnimation1}
            onClick={() => clickCopy(classInfo.phoneNum)}
          >
            <S.PhoneIcon />
            <S.CopySubTitle>{classInfo.phoneNumInfo}</S.CopySubTitle>
            <S.Content>{classInfo.phoneNum}</S.Content>
          </S.ContactCardContainer>
          <S.ContactCardContainer
            {...mobileAnimation2}
            onClick={() => clickCopy(classInfo.email)}
          >
            <S.EmailIcon />
            <S.CopySubTitle>E-mail</S.CopySubTitle>
            <S.Content>{classInfo.email}</S.Content>
          </S.ContactCardContainer>
          <S.ContactCardContainer
            {...mobileAnimation3}
            onClick={() => clickOpen(classInfo.instaLink)}
          >
            <S.InstagramIcon />
            <S.CopySubTitle>Instagram</S.CopySubTitle>
            <S.Content>@epris_ewha</S.Content>
          </S.ContactCardContainer>
          <S.ContactCardContainer
            {...mobileAnimation4}
            onClick={() => clickOpen(classInfo.blogLink)}
          >
            <S.BlogIcon />
            <S.CopySubTitle>Blog</S.CopySubTitle>
            <S.Content>ewhaepris</S.Content>
          </S.ContactCardContainer>
        </M.CardContainer>
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
