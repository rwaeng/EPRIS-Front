import { S } from './CommonButtons.style';

export const TextIconButton = ({
  text,
  icon,
  bgColor,
  border,
  color,
  ...props
}) => {
  // text : 버튼에 들어갈 문구를 텍스트로 전달
  // icon : 버튼에 들어갈 아이콘의 소스 경로를 전달
  // bgColor : 버튼의 배경색을 텍스트로 전달
  // border : 버튼의 border를 텍스트로 전달

  return (
    <S.JoinUsContainer $bgColor={bgColor} $border={border} {...props}>
      <S.Span $color={color}>{text}</S.Span>
      <S.Icon src={icon} />
    </S.JoinUsContainer>
  );
};

export const TextButton = ({ isActive, text, ...props }) => {
  // text : 버튼에 들어갈 문구를 텍스트로 전달
  // inActive : 버튼의 활성화 여부를 boolean으로 전달

  return (
    <S.UpdateContainer isActive={isActive} {...props}>
      <S.Text>{text}</S.Text>
    </S.UpdateContainer>
  );
};
