import { S } from './CardComponent.style.js';
import { useState, useEffect } from 'react';
import useResizeTextarea from '../../hooks/useResizeTextarea.js';
import deleteImg from '../../assets/Admin/ps.svg';
import { UploadComponent } from '../common/UploadComponent/UploadComponent.jsx';
import { TextButton } from '../common/CommonButtons/CommonButtons.jsx';
import { uploadImages } from '../../api/fileUpload.js';

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
    const hasChanges =
      name !== card.name ||
      position !== card.position ||
      text !== card.introduce ||
      imgPreview[0] !== card.cardImg;

    const isFormValid =
      name.trim() !== '' &&
      position.trim() !== '' &&
      text.trim() !== '' &&
      imgPreview.length > 0;

    setIsSaveEnabled(hasChanges && isFormValid);
  }, [name, position, text, imgPreview, card]);

  const handleSave = async () => {
    try {
      if (imgPreview.length === 0) {
        alert('업로드된 사진이 없습니다.');
        return;
      }

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
      alert('저장되었습니다.');

      card.name = name;
      card.position = position;
      card.introduce = text;
      card.cardImg = imageUrl;

      setIsSaveEnabled(false);
    } catch (error) {
      alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Error saving card:', error);
    }
  };
  const handleDelete = () => {
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');

    if (confirmDelete) {
      try {
        handleDeleteCard(card.cardId, isNew); // 카드 삭제 요청
        alert('삭제되었습니다.');
      } catch (error) {
        alert('삭제하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
        console.error('Error deleting card:', error);
      }
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
        index={index}
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
