import { S } from './ViewMoreButton.style';

const ViewMoreButton = ({ className, onClick, text, icon }) => {
  return (
    <S.Container className={className} onClick={onClick}>
      <S.Text>{text}</S.Text>
      <S.Icon src={icon} />
    </S.Container>
  );
};

export default ViewMoreButton;
