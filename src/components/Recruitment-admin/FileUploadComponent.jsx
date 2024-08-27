import { S } from './FileUploadComponent.style';
import plusIcon from '../../assets/commonComponents/plus.svg';
import { useEffect, useState } from 'react';

const FileUploadComponent = ({ doc, setApplyFile, setIsChanged }) => {
  const [fileName, setFileName] = useState('');
  useEffect(() => {
    setFileName(doc);
  }, [doc]);

  const handleFileUpload = e => {
    const currentFile = e.target.files[0];
    if (currentFile) {
      setFileName(currentFile.name);
      setApplyFile(currentFile);
    }
    setIsChanged(true);
  };

  return (
    <S.FileUpload>
      <S.UploadHeader>
        <S.InputLabel htmlFor='file-upload'>
          <S.Icon src={plusIcon} />
        </S.InputLabel>
        <input
          type='file'
          id='file-upload'
          onChange={handleFileUpload}
          style={{ display: 'none' }}
        />
        <S.UploadText>문서 업로드</S.UploadText>
      </S.UploadHeader>
      <S.FileName>{fileName}</S.FileName>
    </S.FileUpload>
  );
};

export default FileUploadComponent;
