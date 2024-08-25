import { S } from './CardComponent.style.js';
import { useState, useEffect } from 'react';
import useResizeTextarea from '../../hooks/useResizeTextarea';
import deleteImg from '../../assets/Admin/ps.svg';
import { UploadComponent } from '../common/UploadComponent/UploadComponent.jsx';
import { TextButton } from '../common/CommonButtons/CommonButtons.jsx';
import { uploadImages } from '../../api/fileUpload';

const CardComponent = ({
  card,
  index,
  isNew,
  handleSaveCard,
  handleDeleteCard,
}) => {
  const [name, setName] = useState(card.name);
  const [position, setPosition] = useState(card.position);
  const [text, setText] = useState(card.introduce);
  const textResize = useResizeTextarea(text);

  //사진 업로드 state
  const [isLogoChanged, setIsLogoChanged] = useState(false);
  const [imgFile, setImgFile] = useState([]); //실제 이미지 파일
  const [imgPreview, setImgPreview] = useState(
    card.cardImg ? [card.cardImg] : [],
  ); //프리뷰로 띄울 이미지 url
  const [imageUrlList, setImageUrlList] = useState([]); //백엔드에 보낼 presigned url
  const [isSaveEnabled, setIsSaveEnabled] = useState(false); // 저장 버튼 활성화 여부 상태
  useEffect(() => {
    // 이미지가 없거나 삭제된 경우 저장 버튼 비활성화
    if (imgPreview.length === 0) {
      setIsSaveEnabled(false);
    } else {
      setIsSaveEnabled(true);
    }
  }, [imgPreview]);
  const handleSave = async () => {
    try {
      let imageUrl = imgPreview[0] || '';
      // 이미지가 변경되었을 때만 업로드 진행
      if (isLogoChanged && imgFile.length > 0) {
        const uploadedImages = await uploadImages(imgFile); // 이미지 업로드 후 URL 리스트 받음
        imageUrl = uploadedImages[0].imageUrl; // 하나의 이미지만 업로드하므로 첫 번째 URL 사용
      }

      if (isNew) {
        await handleSaveCard(null, name, position, text, imageUrl); // 카드 생성
      } else {
        await handleSaveCard(card.cardId, name, position, text, imageUrl); // 카드 수정
      }

      console.log('Card saved successfully');
    } catch (error) {
      console.error('Error saving card:', error);
    }
  };
  const handleDelete = () => {
    try {
      handleDeleteCard(card.cardId, isNew); // 카드 삭제 요청
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  return (
    <S.CardLayout>
      <S.CardText>Card {index + 1}</S.CardText>
      <S.InfoInput
        placeholder='이름'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <S.InfoInput
        placeholder='직위'
        value={position}
        onChange={e => setPosition(e.target.value)}
      />
      <S.InfoTextarea
        placeholder='텍스트 입력'
        ref={textResize.ref}
        value={text}
        onInput={textResize.onInput}
        onChange={e => setText(e.target.value)}
      />

      <UploadComponent
        ratio='3:4'
        imageNum={1}
        imgFile={imgFile}
        setImgFile={setImgFile}
        imgPreview={imgPreview}
        setImgPreview={setImgPreview}
        setImageUrlList={setImageUrlList}
        setIsChanged={setIsLogoChanged}
      />
      <S.DeleteContainer onClick={handleDelete}>
        <S.DeleteText>삭제</S.DeleteText>
        <S.DeleteImg src={deleteImg} />
      </S.DeleteContainer>
      <S.BtnWrapper>
        <TextButton isActive={isSaveEnabled} text='저장' onClick={handleSave} />
      </S.BtnWrapper>
    </S.CardLayout>
  );
};

export default CardComponent;
