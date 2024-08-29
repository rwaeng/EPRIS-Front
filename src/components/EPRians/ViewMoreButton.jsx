import { S } from './ViewMoreButton.style';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const ViewMoreButton = ({ className, onClick, text, icon }) => {
  const aniButton = useScrollFadeIn({ threshold: 0.7, initialOffset: '70%' });
  return (
    <S.Container className={className} onClick={onClick} {...aniButton}>
      <S.Text>{text}</S.Text>
      <S.Icon src={icon} alt='icon' />
    </S.Container>
  );
};

export default ViewMoreButton;
