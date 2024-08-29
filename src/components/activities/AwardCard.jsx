import useScrollFadeIn from '../../hooks/useScrollFadeIn';
import { S } from './AchievementCard.style';

const AwardCard = ({ info }) => {
  const animation = useScrollFadeIn();

  return (
    <S.AwardContainer {...animation}>
      <S.InfoWrapper>{info}</S.InfoWrapper>
    </S.AwardContainer>
  );
};

export default AwardCard;
