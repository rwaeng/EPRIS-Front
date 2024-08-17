import { S } from './CustomCheckbox.style';

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <S.Container>
      <S.HiddenCheckbox id='checkbox' checked={checked} onChange={onChange} />
      <S.StyledCheckbox htmlFor='checkbox' checked={checked} />
    </S.Container>
  );
};

export default CustomCheckbox;
