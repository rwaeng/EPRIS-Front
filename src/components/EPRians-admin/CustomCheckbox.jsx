import { S } from './CustomCheckbox.style';

const CustomCheckbox = ({ id, checked, onChange }) => {
  return (
    <S.Container>
      <S.HiddenCheckbox
        id={`checkbox_${id}`}
        checked={checked}
        onChange={onChange}
      />
      <S.StyledCheckbox htmlFor={`checkbox_${id}`} checked={checked} />
    </S.Container>
  );
};

export default CustomCheckbox;
