import { useEffect, useState } from 'react';
import { S } from './ClassInfoPage.style';
import { getClassinfo, updateClassinfo } from '../../../api/classinfo';
import InbAdmin from '../../../components/common/Inb/InbAdmin';
import { TextButton } from '../../../components/common/CommonButtons/CommonButtons';
import { UploadComponent } from '../../../components/common/UploadComponent/UploadComponent';
import ClassInfo2Page from './ClassInfo2Page';

const ClassInfoPage = () => {
  const menuList = ['기수 정보', 'Greeting Card'];
  const [clicked, setClicked] = useState(menuList[0]);

  const [imgFile, setImgFile] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);
  const [imageUrlList, setImageUrlList] = useState([]);
  const [isChanged, setIsChanged] = useState(false);

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

  const [originalClassInfo, setOriginalClassInfo] = useState({});

  const getClassInfo = async () => {
    try {
      const res = await getClassinfo();
      setClassInfo(res);
      setOriginalClassInfo(res);
      if (res.adminImg) {
        setImgPreview([res.adminImg]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (clicked === '기수 정보') {
      getClassInfo();
    }
  }, [clicked]);

  const handleChange = e => {
    const { name, value } = e.target;
    setClassInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
    checkIfChanged({ ...classInfo, [name]: value });
  };

  const checkIfChanged = updatedClassInfo => {
    const isDataChanged =
      JSON.stringify(updatedClassInfo) !== JSON.stringify(originalClassInfo);

    const isImageChanged = imgFile.length > 0 || imgPreview.length > 0;
    setIsChanged(isDataChanged || (imgFile.length > 0 && isImageChanged));
  };

  const handleClickUpdate = async () => {
    if (imgFile.length === 0 && !classInfo.adminImg) {
      alert('업로드된 사진이 없습니다.');
      return;
    }
    try {
      await updateClassinfo(classInfo);
      alert('저장되었습니다.');
      setIsChanged(false);
      getClassInfo();
    } catch (error) {
      console.error(error);
      alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  useEffect(() => {
    checkIfChanged(classInfo);
  }, [classInfo, imgFile, imgPreview]);

  return (
    <S.Layout>
      <InbAdmin menuList={menuList} clicked={clicked} setClicked={setClicked} />
      {clicked === '기수 정보' && (
        <>
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
                <S.PersonalInfoTypeWrapper>
                  EPRian News
                </S.PersonalInfoTypeWrapper>
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
              <UploadComponent
                ratio='4:3'
                imageNum={1}
                imgFile={imgFile}
                setImgFile={setImgFile}
                imgPreview={imgPreview}
                setImgPreview={setImgPreview}
                setImageUrlList={setImageUrlList}
                setIsChanged={setIsChanged}
              />
            </S.InfoContainer>
          </S.ClassInfoContainer>
          <TextButton
            isActive={isChanged}
            text={'업데이트'}
            onClick={handleClickUpdate}
          />
        </>
      )}
      {clicked === 'Greeting Card' && <ClassInfo2Page />}
    </S.Layout>
  );
};

export default ClassInfoPage;
