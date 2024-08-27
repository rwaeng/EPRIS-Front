import { S } from './UploadComponent.style';
import { useEffect } from 'react';
import { useEffect } from 'react';

import PlusIcon from '../../../assets/commonComponents/plus.svg';
import xBoxIcon from '../../../assets/commonComponents/xbox.svg';

export const UploadComponent = ({
  ratio = null,
  imageNum = null,
  imgFile,
  setImgFile,
  imgPreview,
  setImgPreview,
  setImageUrlList,
  setIsChanged,
  index = null,
}) => {
  // ratio : 정해진 사진의 비율을 텍스트로 전달
  // imageNum : 첨부해야하는 사진의 개수를 숫자로 전달
  // imgFile & setImgFile : 원본 이미지 파일을 저장할 배열 state
  // imgPreview & setImgPreview : 프리뷰로 보여줄 이미지들의 url 배열 state
  // setImageUrlList : 이미지가 저장된 presigned url의 배열 state
  // setIsChanged : 이미지 업로드 or 삭제 시 변경되어 저장 버튼 활성화시키는 state

  // 고유한 Input ID를 생성하기 위해 index를 사용
  const inputId = index !== null ? `file-input-${index}` : 'file-input';
  useEffect(() => {
    // src가 비어있는 img 태그의 테두리 선을 안보이게 막음
    const imageClass = index !== null ? `.image-${index}` : '.image';
    document.querySelectorAll(imageClass).forEach(img => {
      if (!img.src) {
        img.style.visibility = 'hidden';
      } else {
        img.style.visibility = 'visible';
      }
    });
  }, [imgPreview, index]);

  const handleImgUpload = e => {
    //사진 업로드 시 실행
    const currentImage = e.target.files; //선택한 이미지
  const handleImgUpload = e => {
    //사진 업로드 시 실행
    const currentImage = e.target.files; //선택한 이미지
    let previewUrl = [...imgPreview];
    let files = [...imgFile];
    let files = [...imgFile];

    if (currentImage.length > 0) {
      const currentUrl = URL.createObjectURL(currentImage[0]);
      previewUrl.push(currentUrl); //프리뷰 배열에 저장
      files.push(currentImage[0]); //파일 배열에 저장
      previewUrl.push(currentUrl); //프리뷰 배열에 저장
      files.push(currentImage[0]); //파일 배열에 저장

      if (imageNum && previewUrl.length > imageNum) {
        //imageNum보다 많은 수의 사진 업로드를 막음
        //imageNum보다 많은 수의 사진 업로드를 막음
        previewUrl = previewUrl.slice(0, imageNum);
        files = files.slice(0, imageNum);
        files = files.slice(0, imageNum);
      }

      setImgPreview(previewUrl);
      setImgFile(files);
      setIsChanged(true);
      setImgFile(files);
      setIsChanged(true);
    }
  };

  const handleDeleteImage = id => {
    //이미지 삭제 버튼 클릭 시 실행
    setImgPreview(prevState => prevState.filter((_, idx) => idx !== id));
    setImgFile(prevState => prevState.filter((_, idx) => idx !== id));
    setImageUrlList(prevState => prevState.filter((_, idx) => idx !== id));
    setIsChanged(true);
  };

  return (
    <S.Container>
      <S.Header>
        <S.PlusArea htmlFor={inputId}>
          <S.Icon src={PlusIcon} />
        </S.PlusArea>

        <input
          type='file'
          id={inputId}
          onChange={handleImgUpload}
          style={{ display: 'none' }}
        />
        <S.Title>사진 업로드</S.Title>
        <S.Ratio>{imageNum ? `(${ratio}, ${imageNum}장)` : ratio}</S.Ratio>
        <S.FileName>
          {imgFile.length > 0 && imgFile[imgFile.length - 1].name}
        </S.FileName>
        <S.Ratio>{imageNum ? `(${ratio}, ${imageNum}장)` : ratio}</S.Ratio>
        <S.FileName>
          {imgFile.length > 0 && imgFile[imgFile.length - 1].name}
        </S.FileName>
      </S.Header>
      <S.ImageContainer>
        {imageNum
          ? Array.from({ length: imageNum }).map((_, i) => (
              <S.ImagePreview key={i}>
                <S.XboxIcon
                  src={xBoxIcon}
                  onClick={() => handleDeleteImage(i)}
                />
                <S.ImageBox
                  className={index !== null ? `image-${index}` : 'image'}
                  src={imgPreview[i] || null}
                />
              </S.ImagePreview>
            ))
          : imgPreview.map((previewUrl, i) => (
              <S.ImagePreview key={i}>
                <S.XboxIcon
                  src={xBoxIcon}
                  onClick={() => handleDeleteImage(i)}
                />
                <S.ImageBox
                  className={index !== null ? `image-${index}` : 'image'}
                  src={previewUrl || null}
                />
              </S.ImagePreview>
            ))}
      </S.ImageContainer>
    </S.Container>
  );
};
