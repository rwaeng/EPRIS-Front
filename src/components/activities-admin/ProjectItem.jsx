import { S } from './AdminActivityItem.style';
import { useEffect, useRef, useState } from 'react';
import useResizeTextarea from '../../hooks/useResizeTextarea';
import Delete from '../../assets/admin_activity/Delete';
import { TextButton } from '../common/CommonButtons/CommonButtons';

const ProjectItem = ({ num = 1, it, onClick }) => {
  const [item, setItem] = useState(it);
  const prevItemValue = useRef(it);
  const { ref, onInput } = useResizeTextarea();

  // 프로젝트 묶음 저장
  const handleSaveItem = () => {
    // post 혹은 patch item
  };

  useEffect(() => {
    if (prevItemValue.current !== it) {
      setItem(it);
      prevItemValue.current = it;
    }
  }, [it]);

  return (
    <S.Form>
      <S.H2>프로젝트 {num}</S.H2>
      <S.Input
        placeholder='프로젝트 연도'
        value={item.year}
        onChange={e => setItem({ ...item, year: e.target.value })}
      />
      <S.Textarea
        ref={ref}
        placeholder='프로젝트명'
        value={item.info}
        onChange={e => setItem({ ...item, info: e.target.value })}
        onInput={onInput}
      />
      <S.Button id={num - 1} type='button' onClick={onClick}>
        삭제 <Delete onClick={onClick} id={num - 1} />
      </S.Button>
      <TextButton
        type='submit'
        text='저장'
        onClick={handleSaveItem}
        isActive={item.year && item.info}
      />
    </S.Form>
  );
};

export default ProjectItem;
