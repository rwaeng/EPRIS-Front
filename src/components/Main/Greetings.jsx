import { S } from './Greetings.style.js';
// import img from '../../assets/Main/img.svg';

const Greetings = ({ greetingCard }) => {
  const { name, position, introduce, cardImg } = greetingCard;
  console.log(greetingCard);
  return (
    <S.GreetingsLayout>
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
