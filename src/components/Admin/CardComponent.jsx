import { S } from './CardComponent.style.js';
import { useState } from 'react';
import useResizeTextarea from '../../hooks/useResizeTextarea';
import deleteImg from '../../assets/Admin/ps.svg';
import { UploadComponent } from '../common/UploadComponent/UploadComponent.jsx';
import { TextButton } from '../common/CommonButtons/CommonButtons.jsx';

const CardComponent = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [text, setText] = useState('');

  const nameResize = useResizeTextarea(name);
  const positionResize = useResizeTextarea(position);
  const textResize = useResizeTextarea(text);
  return (
    <S.CardLayout>
      <S.CardText>Card 1</S.CardText>
      <S.InfoTextarea
        placeholder='이름'
        ref={nameResize.ref}
        value={name}
        onInput={nameResize.onInput}
        onChange={e => setName(e.target.value)}
      />
      <S.InfoTextarea
        placeholder='직위'
        ref={positionResize.ref}
        value={position}
        onInput={positionResize.onInput}
        onChange={e => setPosition(e.target.value)}
      />
      <S.InfoTextarea
        placeholder='텍스트 입력'
        ref={textResize.ref}
        value={text}
        onInput={textResize.onInput}
        onChange={e => setText(e.target.value)}
      />
      {/* <S.InfoInput
        placeholder='텍스트 입력'

      /> */}

      <UploadComponent ratio='3:4' imageNum={1} />
      <S.DeleteContainer>
        <S.DeleteText>삭제</S.DeleteText>
        <S.DeleteImg src={deleteImg} />
      </S.DeleteContainer>
      <S.BtnWrapper>
        <TextButton isActive={true} text='저장' />
      </S.BtnWrapper>
    </S.CardLayout>
  );
};

export default CardComponent;
