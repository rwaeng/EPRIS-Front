import { S } from './CommonButtons.style';

export const TextIconButton = ({ text, icon }) => {
  return (
    <S.JoinUsContainer>
      <div className='btn-text'>{text}</div>
      <img className='image' src={icon} />
    </S.JoinUsContainer>
  );
};

export const TextButton = ({ isActive, text }) => {
  return (
    <S.UpdateContainer isActive={isActive}>
      <div className='btn-text'>{text}</div>
    </S.UpdateContainer>
  );
};
