import { S } from './Greetings.style.js';
// import img from '../../assets/Main/img.svg';
import useScrollFadeIn from '../../hooks/useScrollFadeIn.js';

const Greetings = ({ greetingCard }) => {
  const animation = useScrollFadeIn();
  const { name, position, introduce, cardImg } = greetingCard;
  return (
    <S.GreetingsLayout {...animation}>
      <S.PhotoWrapper src={cardImg} />
      <S.MemberContainer>
        <S.NameText>{name}</S.NameText>
        <S.RoleText>{position}</S.RoleText>
        <S.InfoText>{introduce}</S.InfoText>
      </S.MemberContainer>
    </S.GreetingsLayout>
  );
};

export default Greetings;
