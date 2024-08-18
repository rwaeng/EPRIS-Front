import { S } from './ProcessBox.style';

const ProcessBox = ({ title, desc, isLast = false }) => {
  return (
    <S.Container>
      <S.Box>
        <S.Title>{title}</S.Title>
        <S.Desc>{desc}</S.Desc>
      </S.Box>
      {!isLast && <S.Arrow />}
    </S.Container>
  );
};

export default ProcessBox;
