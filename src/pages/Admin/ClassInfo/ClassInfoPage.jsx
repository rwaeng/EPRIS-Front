import { useEffect, useState } from 'react';
import { S } from './ClassInfoPage.style';
import { getClassinfo, updateClassinfo } from '../../../api/classinfo';
import { TextButton } from '../../../components/common/CommonButtons/CommonButtons';
import { UploadComponent } from '../../../components/common/UploadComponent/UploadComponent';
import { uploadImages } from '../../../api/fileUpload';

const ClassInfoPage = () => {
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

  useEffect(() => {
    const hasChanges =
      classInfo.num !== originalClassInfo.num ||
      classInfo.phoneNum !== originalClassInfo.phoneNum ||
      classInfo.phoneNumInfo !== originalClassInfo.phoneNumInfo ||
      classInfo.email != originalClassInfo.email ||
      classInfo.instaLink !== originalClassInfo.instaLink ||
      classInfo.blogLink !== originalClassInfo.blogLink ||
      classInfo.newsLink !== originalClassInfo.newsLink ||
      imgPreview[0] !== originalClassInfo.adminImg;

    const isFormValid =
      classInfo.num.trim() !== '' &&
      classInfo.phoneNum.trim() !== '' &&
      classInfo.phoneNumInfo.trim() !== '' &&
      classInfo.email.trim() !== '' &&
      classInfo.instaLink.trim() !== '' &&
      classInfo.blogLink.trim() !== '' &&
      classInfo.newsLink.trim() !== '' &&
      imgPreview.length > 0;

    setIsChanged(hasChanges && isFormValid);
  }, [imgPreview, classInfo, originalClassInfo]);

  const getClassInfo = async () => {
    try {
      const res = await getClassinfo();
      setOriginalClassInfo(res);
      setClassInfo(res);
      if (res.adminImg) {
        setImgPreview([res.adminImg]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClassInfo();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setClassInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClickUpdate = async () => {
    try {
      if (imgPreview.length === 0 && !classInfo.adminImg) {
        alert('업로드된 사진이 없습니다.');
        return;
      }

      if (isChanged && imgFile.length > 0) {
        const uploadedImages = await uploadImages(imgFile);
        const imageUrl = uploadedImages[0].imageUrl;
        classInfo.adminImg = imageUrl;
      }

      const res = await updateClassinfo(classInfo);
      if (res) {
        alert('저장되었습니다.');
        setOriginalClassInfo(classInfo);
        setClassInfo(classInfo);
        getClassInfo();
      }
    } catch (error) {
      console.error(error);
      alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.Layout>
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
        text={'저장'}
        onClick={handleClickUpdate}
      />
    </S.Layout>
  );
};

export default ClassInfoPage;
