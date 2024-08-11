import { S } from './UploadComponent.style';
import { useState } from 'react';

import PlusIcon from '../../../assets/plus.svg';
import xBoxIcon from '../../../assets/xbox.svg';

export const UploadComponent = ({ ratio = null, imageNum = 1 }) => {
  const [imgPreview, setImgPreview] = useState([]);
  const [fileName, setFileName] = useState('Recently Uploaded file name');

  const imageBox = Array(4)
    .fill(false)
    .map((_, index) => index < imageNum);

  const handleImgPreview = e => {
    const currnetImage = e.target.files;
    let previewUrl = [...imgPreview];

    console.log(currnetImage);
    if (currnetImage.length > 0) {
      setFileName(currnetImage[0].name);
    }
    const currentUrl = URL.createObjectURL(currnetImage[0]);
    previewUrl.push(currentUrl);

    if (previewUrl.length > imageNum) {
      previewUrl = previewUrl.slice(0, imageNum);
    }

    setImgPreview(previewUrl);
  };

  const handleDeletePreview = id => {
    setImgPreview(imgPreview.filter((_, index) => index !== id));
  };

  return (
    <S.Container>
      <S.Header>
        <label htmlFor='file-input'>
          <img className='plus' src={PlusIcon} />
        </label>

        <input
          type='file'
          id='file-input'
          onChange={handleImgPreview}
          style={{ display: 'none' }}
        />
        <div className='upload-text'>사진 업로드</div>
        <div className='ratio'>{ratio}</div>
        <div className='file-name'>{fileName}</div>
      </S.Header>
      <S.ImageContainer>
        {imageBox.map((isVisible, index) => (
          <S.ImagePreview key={index} isVisible={isVisible}>
            <img
              className='xbox'
              src={xBoxIcon}
              onClick={() => handleDeletePreview(index)}
            />
            <img className='image' src={imgPreview[index] || ''} />
          </S.ImagePreview>
        ))}
      </S.ImageContainer>
    </S.Container>
  );
};
