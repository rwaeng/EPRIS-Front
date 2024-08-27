import { S } from './ViewMoreButton.style';
import useScrollFadeIn from '../../hooks/useScrollFadeIn';

const ViewMoreButton = ({ className, onClick, text, icon }) => {
  const animation = useScrollFadeIn();
  return (
    <S.Container className={className} onClick={onClick} {...animation}>
      <S.Text>{text}</S.Text>
      <S.Icon src={icon} />
    </S.Container>
  );
};

export default ViewMoreButton;
