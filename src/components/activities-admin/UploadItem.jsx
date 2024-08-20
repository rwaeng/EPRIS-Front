import { S } from './AdminActivityItem.style';
import useResizeTextarea from '../../hooks/useResizeTextarea';
import { TextButton } from '../common/CommonButtons/CommonButtons';
import { UploadComponent } from '../common/UploadComponent/UploadComponent';

const UploadItem = ({ type, title, value, setValue, ratio, imageNum }) => {
  const { ref, onInput } = useResizeTextarea();

  return (
    <S.Form>
      <S.H2>{title}</S.H2>
      {type !== 'imgOnly' && (
        <S.Textarea
          ref={ref}
          value={value}
          onChange={e => setValue(e.target.value)}
          onInput={onInput}
        />
      )}
      <UploadComponent ratio={ratio} imageNum={imageNum} />
      <TextButton type='button' text='저장' isActive={value} />
    </S.Form>
  );
};

export default UploadItem;
