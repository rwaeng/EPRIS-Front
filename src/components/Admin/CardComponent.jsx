import { S } from './CardComponent.style.js';
import { useState } from 'react';
import useResizeTextarea from '../../hooks/useResizeTextarea';
import deleteImg from '../../assets/Admin/ps.svg';
import { UploadComponent } from '../common/UploadComponent/UploadComponent.jsx';
import { TextButton } from '../common/CommonButtons/CommonButtons.jsx';

const CardComponent = ({ card, index, isNew, handleSaveCard }) => {
  const [name, setName] = useState(card.name);
  const [position, setPosition] = useState(card.position);
  const [text, setText] = useState(card.introduce);
  const [cardImg, setCardImg] = useState(card.cardImg);
  const textResize = useResizeTextarea(text);

  const handleSave = async () => {
    try {
      if (isNew) {
        await handleSaveCard(isNew, name, position, text, cardImg); // 카드 생성
      } else {
        await handleSaveCard(card.cardId, name, position, text, cardImg); // 카드 수정
      }
      console.log('Card saved successfully');
    } catch (error) {
      console.error('Error saving card:', error);
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

      <UploadComponent ratio='3:4' imageNum={1} />
      <S.DeleteContainer>
        <S.DeleteText>삭제</S.DeleteText>
        <S.DeleteImg src={deleteImg} />
      </S.DeleteContainer>
      <S.BtnWrapper>
        <TextButton isActive={true} text='저장' onClick={handleSave} />
      </S.BtnWrapper>
    </S.CardLayout>
  );
};

export default CardComponent;
