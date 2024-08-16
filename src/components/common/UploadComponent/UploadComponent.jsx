import { S } from './UploadComponent.style';
import { useState, useEffect } from 'react';

import PlusIcon from '../../../assets/commonComponents/plus.svg';
import xBoxIcon from '../../../assets/commonComponents/xbox.svg';

export const UploadComponent = ({ ratio = null, imageNum = null }) => {
  // ratio : 정해진 사진의 비율을 텍스트로 전달
  // imageNum : 첨부해야하는 사진의 개수를 숫자로 전달
  // 현재 사진 업로드 시 미리보기 이미지만 배열에 저장하고 있기 때문에 실제 파일을 post 할 때는 추가적인 작업이 필요합니다.

  const [imgPreview, setImgPreview] = useState([]);
  const [fileName, setFileName] = useState('Recently Uploaded file name');

  useEffect(() => {
    document.querySelectorAll('.image').forEach(img => {
      if (!img.src) {
        img.style.visibility = 'hidden';
      } else {
        img.style.visibility = 'visible';
      }
    });
  }, [imgPreview]);

  const handleImgPreview = e => {
    const currentImage = e.target.files;
    let previewUrl = [...imgPreview];

    if (currentImage.length > 0) {
      const currentUrl = URL.createObjectURL(currentImage[0]);
      previewUrl.push(currentUrl);

      if (imageNum && previewUrl.length > imageNum) {
        previewUrl = previewUrl.slice(0, imageNum);
      } else {
        setFileName(currentImage[0].name);
      }

      setImgPreview(previewUrl);
    }
  };

  const handleDeletePreview = id => {
    setImgPreview(imgPreview.filter((_, index) => index !== id));
  };

  return (
    <S.Container>
      <S.Header>
        <S.PlusArea htmlFor='file-input'>
          <S.Icon src={PlusIcon} />
        </S.PlusArea>

        <input
          type='file'
          id='file-input'
          onChange={handleImgPreview}
          style={{ display: 'none' }}
        />
        <S.Title>사진 업로드</S.Title>
        <S.Ratio>{ratio}</S.Ratio>
        <S.FileName>{fileName}</S.FileName>
      </S.Header>
      <S.ImageContainer>
        {imageNum
          ? Array.from({ length: imageNum }).map((_, index) => (
              <S.ImagePreview key={index}>
                <S.XboxIcon
                  src={xBoxIcon}
                  onClick={() => handleDeletePreview(index)}
                />
                <S.ImageBox className='image' src={imgPreview[index] || null} />
              </S.ImagePreview>
            ))
          : imgPreview.map((previewUrl, index) => (
              <S.ImagePreview key={index}>
                <S.XboxIcon
                  src={xBoxIcon}
                  onClick={() => handleDeletePreview(index)}
                />
                <S.ImageBox className='image' src={previewUrl || null} />
              </S.ImagePreview>
            ))}
      </S.ImageContainer>
    </S.Container>
  );
};
