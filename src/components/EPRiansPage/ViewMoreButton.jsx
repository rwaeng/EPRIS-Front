import { S } from './ViewMoreButton.style';

const ViewMoreButton = ({ className, onClick, text, icon }) => {
  return (
    <S.Container className={className} onClick={onClick}>
      <div className='text'>{text}</div>
      <img className='icon' src={icon} />
    </S.Container>
  );
};

export default ViewMoreButton;
