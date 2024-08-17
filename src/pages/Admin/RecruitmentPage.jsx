import NavigationBar from '../../components/common/NavigatonBar';
import { UploadComponent } from '../../components/common/UploadComponent/UploadComponent';
import { S } from './RecruitmentPage.style';

import plusIcon from '../../assets/commonComponents/plus.svg';
import { TextButton } from '../../components/common/CommonButtons/CommonButtons';
import { useState } from 'react';

const RecruitmentPage = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <S.Layout>
      <NavigationBar type='admin' />
      <S.Container>
        <S.UploadContainer>
          <S.Title>지원서</S.Title>
          <S.FileUpload>
            <S.UploadHeader>
              <S.InputLabel htmlFor='file-input'>
                <S.Icon src={plusIcon} />
              </S.InputLabel>
              <input
                type='file'
                id='file-input'
                //onChange={handleImgPreview}
                style={{ display: 'none' }}
              />
              <S.UploadText>문서 업로드</S.UploadText>
            </S.UploadHeader>
            <S.FileName>file names</S.FileName>
          </S.FileUpload>
        </S.UploadContainer>
        <S.UploadContainer>
          <S.Title>포스터</S.Title>
          <UploadComponent imageNum={1} />
        </S.UploadContainer>
        <S.UploadContainer>
          <S.Title>메인페이지 공지 문구</S.Title>
          <S.NoticeInput type='text' placeholder='리크루팅 공지 문구' />
        </S.UploadContainer>
        <S.TimelineContainer>
          <S.Title>Timeline</S.Title>
          <S.ProcessContainer>
            <S.Process>지원서 접수</S.Process>
            <S.ProcessInput
              type='text'
              placeholder={`0월 0일 00시\n접수마감`}
            />
          </S.ProcessContainer>
          <S.ProcessContainer>
            <S.Process>면접</S.Process>
            <S.ProcessInput
              type='text'
              placeholder={`00월 0일 ~ 0일\n대면 면접`}
            />
          </S.ProcessContainer>
          <S.ProcessContainer>
            <S.Process>합격자 발표</S.Process>
            <S.ProcessInput
              type='text'
              placeholder={`0월 0일\n합격자 개별 통보`}
            />
          </S.ProcessContainer>
          <S.ProcessContainer>
            <S.Process>오리엔테이션</S.Process>
            <S.ProcessInput
              type='text'
              placeholder={`0월 0일 00시\n필수 참석`}
            />
          </S.ProcessContainer>
        </S.TimelineContainer>
        <TextButton text='저장' isActive={isUpdated} disabled={!isUpdated} />
      </S.Container>
    </S.Layout>
  );
};

export default RecruitmentPage;
