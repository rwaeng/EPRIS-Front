import { S } from './CardComponent.style.js';
import deleteImg from '../../assets/Admin/ps.svg';
import { UploadComponent } from '../common/UploadComponent/UploadComponent.jsx';
import { TextButton } from '../common/CommonButtons/CommonButtons.jsx';

const CardComponent = () => {
  return (
    <S.CardLayout>
      <S.CardText>Card 1</S.CardText>
      <S.InfoInput placeholder='이름' />
      <S.InfoInput placeholder='직위' />
      <S.InfoInput placeholder='텍스트 입력' />
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
