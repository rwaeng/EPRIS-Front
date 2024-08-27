import { TextButton } from '../../components/common/CommonButtons/CommonButtons';
import { UploadComponent } from '../../components/common/UploadComponent/UploadComponent';
import { S } from './ClassInfoPage.style';
const ClassInfoPage = () => {
  return (
    <S.Layout>
      <S.ClassInfoContainer>
        <S.InfoContainer>
          <S.InformationTypeWrapper>현 기수</S.InformationTypeWrapper>
          <S.InfoInput />
        </S.InfoContainer>
        <S.InfoContainer>
          <S.InformationTypeWrapper>Contact</S.InformationTypeWrapper>
          <S.ContactInfoInputContainer>
            <S.InfoInput placeholder='전화번호' />
            <S.InfoInput placeholder='전화번호 정보' />
          </S.ContactInfoInputContainer>
          <S.PersonalInfoTypeContainer>
            <S.PersonalInfoTypeWrapper>E-mail</S.PersonalInfoTypeWrapper>
            <S.InfoInput placeholder='주소' />
          </S.PersonalInfoTypeContainer>
          <S.PersonalInfoTypeContainer>
            <S.PersonalInfoTypeWrapper>Instagram</S.PersonalInfoTypeWrapper>
            <S.InfoInput placeholder='주소' />
          </S.PersonalInfoTypeContainer>
          <S.PersonalInfoTypeContainer>
            <S.PersonalInfoTypeWrapper>Blog</S.PersonalInfoTypeWrapper>
            <S.InfoInput placeholder='주소' />
          </S.PersonalInfoTypeContainer>
          <S.PersonalInfoTypeContainer>
            <S.PersonalInfoTypeWrapper>EPRian News</S.PersonalInfoTypeWrapper>
            <S.InfoInput placeholder='주소' />
          </S.PersonalInfoTypeContainer>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.InformationTypeWrapper>
            Administrators Photo
          </S.InformationTypeWrapper>
          <UploadComponent />
        </S.InfoContainer>
      </S.ClassInfoContainer>

      <TextButton text={'업데이트'}></TextButton>
    </S.Layout>
  );
};

export default ClassInfoPage;
