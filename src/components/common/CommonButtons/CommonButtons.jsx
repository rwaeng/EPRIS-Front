import { S } from './CommonButtons.style';
import { useLocation } from 'react-router-dom';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

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

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/epris-admin');
  const animation = useScrollFadeIn();

  return (
    <S.JoinUsContainer
      $bgColor={bgColor}
      $border={border}
      {...props}
      {...(!isAdminRoute && animation)}
    >
      <S.Span $color={color}>{text}</S.Span>
      <S.Icon src={icon} alt='버튼 아이콘' />
    </S.JoinUsContainer>
  );
};

export const TextButton = ({ isActive, text, ...props }) => {
  // text : 버튼에 들어갈 문구를 텍스트로 전달
  // inActive : 버튼의 활성화 여부를 boolean으로 전달

  return (
    <S.UpdateContainer
      isActive={isActive}
      disabled={props.disabled ? props.disabled : !isActive}
      {...props}
    >
      <S.Text>{text}</S.Text>
    </S.UpdateContainer>
  );
};
