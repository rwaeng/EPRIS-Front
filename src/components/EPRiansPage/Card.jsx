import { S } from './Card.style';

export const ActingCard = ({ profImg, role, name, info, ...props }) => {
  return (
    <S.Card>
      <S.CardImage src={profImg} />
      <S.CardRole {...props}>{role}</S.CardRole>
      <S.CardName>{name}</S.CardName>
      <S.CardInfo>{info}</S.CardInfo>
    </S.Card>
  );
};

export const AlumniCard = ({ profImg, role, name, info }) => {
  return (
    <S.Card $bgColor='var(--white)' $shadow={true}>
      <S.CardImage src={profImg} />
      <S.CardRole>{role}</S.CardRole>
      <S.CardName $color='var(--black)'>{name}</S.CardName>
      <S.CardInfo>{info}</S.CardInfo>
    </S.Card>
  );
};
