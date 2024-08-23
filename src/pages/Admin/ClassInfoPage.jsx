import { useEffect, useState } from 'react';

import InbAdmin from '../../components/common/InbAdmin';
import NavigationBar from '../../components/common/NavigatonBar';

import { TextButton } from '../../components/common/CommonButtons/CommonButtons';
import { UploadComponent } from '../../components/common/UploadComponent/UploadComponent';
import { S } from './ClassInfoPage.style';

import { getClassinfo, updateClassinfo } from '../../api/classinfo';

const ClassInfoPage = () => {
  const menuList = ['기수 정보', 'Greeting Card'];
  const [clicked, setClicked] = useState(menuList[0]);

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
    const getClassInfo = async () => {
      try {
        const res = await getClassinfo();
        setClassInfo(res);
      } catch (error) {
        console.error(error);
      }
    };
    getClassInfo();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setClassInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handelClickUpdate = async () => {
    try {
      await updateClassinfo(classInfo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.Layout>
      <NavigationBar />
      <InbAdmin menuList={menuList} clicked={clicked} setClicked={setClicked} />
      <S.ClassInfoContainer>
        <S.InfoContainer>
          <S.InformationTypeWrapper>현 기수</S.InformationTypeWrapper>
          <S.InfoInput
            name='num'
            value={classInfo.num}
            onChange={handleChange}
          />
        </S.InfoContainer>
        <S.InfoContainer>
          <S.InformationTypeWrapper>Contact</S.InformationTypeWrapper>
          <S.ContactInfoInputContainer>
            <S.InfoInput
              name='phoneNum'
              value={classInfo.phoneNum}
              onChange={handleChange}
            />
            <S.InfoInput
              name='phoneNumInfo'
              value={classInfo.phoneNumInfo}
              onChange={handleChange}
            />
          </S.ContactInfoInputContainer>
          <S.PersonalInfoTypeContainer>
            <S.PersonalInfoTypeWrapper>E-mail</S.PersonalInfoTypeWrapper>
            <S.InfoInput
              name='email'
              value={classInfo.email}
              onChange={handleChange}
            />
          </S.PersonalInfoTypeContainer>
          <S.PersonalInfoTypeContainer>
            <S.PersonalInfoTypeWrapper>Instagram</S.PersonalInfoTypeWrapper>
            <S.InfoInput
              name='instaLink'
              value={classInfo.instaLink}
              onChange={handleChange}
            />
          </S.PersonalInfoTypeContainer>
          <S.PersonalInfoTypeContainer>
            <S.PersonalInfoTypeWrapper>Blog</S.PersonalInfoTypeWrapper>
            <S.InfoInput
              name='blogLink'
              value={classInfo.blogLink}
              onChange={handleChange}
            />
          </S.PersonalInfoTypeContainer>
          <S.PersonalInfoTypeContainer>
            <S.PersonalInfoTypeWrapper>EPRian News</S.PersonalInfoTypeWrapper>
            <S.InfoInput
              name='newsLink'
              value={classInfo.newsLink}
              onChange={handleChange}
            />
          </S.PersonalInfoTypeContainer>
        </S.InfoContainer>
        <S.InfoContainer>
          <S.InformationTypeWrapper>
            Administrators Photo
          </S.InformationTypeWrapper>
          <UploadComponent />
        </S.InfoContainer>
      </S.ClassInfoContainer>
      <TextButton
        isActive={true}
        text={'업데이트'}
        onClick={handelClickUpdate}
      ></TextButton>
    </S.Layout>
  );
};

export default ClassInfoPage;
