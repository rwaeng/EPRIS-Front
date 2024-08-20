import useScrollFadeIn from '../../hooks/useScrollFadeIn.js';
import { S } from './AchievementCard.style.js';

const ProjectCardComponent = ({ info, year, isRed }) => {
  const animation = useScrollFadeIn();

  return (
    <S.ProjectContainer {...animation}>
      <S.YearWrapper $isRed={isRed}>{year}</S.YearWrapper>
      <S.InfoWrapper>{info}</S.InfoWrapper>
    </S.ProjectContainer>
  );
};

export default ProjectCardComponent;
