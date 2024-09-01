import { S } from './RecruitmentPage.style';
import { useEffect, useState } from 'react';
import { getRecruitment, putRecruitment } from '../../../api/recruitment';
import { postPresignedURL, putPresignedURL } from '../../../api/fileUpload';
import { TextButton } from '../../../components/common/CommonButtons/CommonButtons';
import { UploadComponent } from '../../../components/common/UploadComponent/UploadComponent';
import FileUploadComponent from '../../../components/Admin_RecruitmentPage/FileUploadComponent';

const RecruitmentPage = () => {
  const [recruitment, setRecruitment] = useState({
    doc: '',
    poster: '',
    notice: '',
    deadline: '',
    interview: '',
    announcement: '',
    orientation: '',
  });

  const [isUpdated, setIsUpdated] = useState(false);
  const [imgFile, setImgFile] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);
  const [imageUrlList, setImageUrlList] = useState([]);

  const [applyFile, setApplyFile] = useState(null);

  useEffect(() => {
    const getPrevInfo = async () => {
      try {
        const res = await getRecruitment();
        setImgPreview([res.poster]);
        setImageUrlList([{ imageUrl: res.poster }]);

        setRecruitment(res);
      } catch (error) {
        console.error(error);
      }
    };

    getPrevInfo();
  }, []);

  useEffect(() => {
    if (imgPreview.length < 1 || !allFieldsFilled(recruitment)) {
      setIsUpdated(false);
    }
  }, [recruitment, imgPreview]);

  const allFieldsFilled = obj =>
    Object.values(obj).every(field => field.trim() !== '');

  const handleChangeText = e => {
    const { name, value } = e.target;
    setRecruitment({ ...recruitment, [name]: value });
    setIsUpdated(true);
  };

  const getPresignedURL = async file => {
    try {
      const res = await postPresignedURL(file);
      await putPresignedURL(res.data, file);

      const url = res.data.split('?')[0];
      return url;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveButton = async () => {
    try {
      const updatedRecruitment = { ...recruitment };

      if (imgFile.length > 0) {
        const imgUrl = await getPresignedURL(imgFile[0]);
        updatedRecruitment.poster = imgUrl;
      }
      if (applyFile) {
        const fileUrl = await getPresignedURL(applyFile);
        updatedRecruitment.doc = fileUrl;
      }

      if (
        !allFieldsFilled(updatedRecruitment) ||
        updatedRecruitment.poster ||
        updatedRecruitment.doc
      ) {
        alert('모든 항목을 입력해주세요.');
        return;
      }

      const res = await putRecruitment(updatedRecruitment);
      if (res.status === 200) {
        alert('저장되었습니다.');
        setIsUpdated(false);
      } else {
        alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (err) {
      console.error(err);
      alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.Layout>
      <S.Container>
        <S.UploadContainer>
          <S.Title>지원서</S.Title>
          <FileUploadComponent
            doc={recruitment.doc}
            setApplyFile={setApplyFile}
            setIsChanged={setIsUpdated}
          />
        </S.UploadContainer>
        <S.UploadContainer>
          <S.Title>포스터</S.Title>
          <UploadComponent
            imageNum={1}
            imgFile={imgFile}
            setImgFile={setImgFile}
            imgPreview={imgPreview}
            setImgPreview={setImgPreview}
            setImageUrlList={setImageUrlList}
            setIsChanged={setIsUpdated}
          />
        </S.UploadContainer>
        <S.UploadContainer>
          <S.Title>메인페이지 공지 문구</S.Title>
          <S.NoticeInput
            type='text'
            name='notice'
            placeholder='리크루팅 공지 문구'
            value={recruitment.notice}
            onChange={handleChangeText}
          />
        </S.UploadContainer>
        <S.TimelineContainer>
          <S.Title>Timeline</S.Title>
          <S.ProcessContainer>
            <S.Process>지원서 접수</S.Process>
            <S.ProcessInput
              type='text'
              name='deadline'
              placeholder={`0월 0일 00시\n접수마감`}
              value={recruitment.deadline}
              onChange={handleChangeText}
            />
          </S.ProcessContainer>
          <S.ProcessContainer>
            <S.Process>면접</S.Process>
            <S.ProcessInput
              type='text'
              name='interview'
              placeholder={`00월 0일 ~ 0일\n대면 면접`}
              value={recruitment.interview}
              onChange={handleChangeText}
            />
          </S.ProcessContainer>
          <S.ProcessContainer>
            <S.Process>합격자 발표</S.Process>
            <S.ProcessInput
              type='text'
              name='announcement'
              placeholder={`0월 0일\n합격자 개별 통보`}
              value={recruitment.announcement}
              onChange={handleChangeText}
            />
          </S.ProcessContainer>
          <S.ProcessContainer>
            <S.Process>오리엔테이션</S.Process>
            <S.ProcessInput
              type='text'
              name='orientation'
              placeholder={`0월 0일 00시\n필수 참석`}
              value={recruitment.orientation}
              onChange={handleChangeText}
            />
          </S.ProcessContainer>
        </S.TimelineContainer>
        <TextButton
          text='저장'
          isActive={isUpdated}
          disabled={!isUpdated}
          onClick={handleSaveButton}
        />
      </S.Container>
    </S.Layout>
  );
};

export default RecruitmentPage;
