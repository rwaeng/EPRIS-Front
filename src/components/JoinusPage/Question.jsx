import { S } from './Question.style';

const Question = ({ Qnum, Q, A }) => {
  return (
    <S.Container>
      <S.Qnum>{Qnum}</S.Qnum>
      <S.QnA>
        <S.Q>{Q}</S.Q>
        <S.A>{A}</S.A>
      </S.QnA>
    </S.Container>
  );
};

export default Question;
