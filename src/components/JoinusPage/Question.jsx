import { S } from './Question.style';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const Question = ({ Qnum, Q, A }) => {
  const animation = useScrollFadeIn();

  return (
    <S.Container {...animation}>
      <S.Qnum>{Qnum}</S.Qnum>
      <S.QnA>
        <S.Q>{Q}</S.Q>
        <S.A>{A}</S.A>
      </S.QnA>
    </S.Container>
  );
};

export default Question;
