import { S } from './ClassInfo2Page.style.js';
import CardComponent from '../../components/Admin/CardComponent';
import AddIcon from '../../assets/Admin/plus.svg';
const ClassInfo2Page = () => {
  return (
    <S.ClassInfoLayout>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <S.AddCardBtn>
        <S.BtnText>카드 추가하기</S.BtnText>
        <S.BtnIcon src={AddIcon} />
      </S.AddCardBtn>
    </S.ClassInfoLayout>
  );
};

export default ClassInfo2Page;
