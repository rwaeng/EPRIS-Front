import { S } from './Card.style';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import { useMediaQuery } from 'react-responsive';

export const ActingCard = ({ profImg, role, name, info, ...props }) => {
  const animation = useScrollFadeIn();
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' });

  return (
    <S.Card {...(isMobile && animation)}>
      <S.CardImage src={profImg} alt='profile' />
      <S.CardRole {...props}>{role}</S.CardRole>
      <S.InfoContainer>
        <S.CardName>{name}</S.CardName>
        <S.CardInfo>{info}</S.CardInfo>
      </S.InfoContainer>
    </S.Card>
  );
};

export const AlumniCard = ({ profImg, role, name, info }) => {
  const animation = useScrollFadeIn();
  const isMobile = useMediaQuery({ query: '(max-width: 1279px)' });
  return (
    <S.Card $bgColor='var(--white)' $shadow={true} {...(isMobile && animation)}>
      <S.CardImage src={profImg} alt='profile' />
      <S.CardRole>{role}</S.CardRole>
      <S.InfoContainer>
        <S.CardName $color='var(--black)'>{name}</S.CardName>
        <S.CardInfo>{info}</S.CardInfo>
      </S.InfoContainer>
    </S.Card>
  );
};
