import { S } from './AdminActivityItem.style';
import { useEffect, useRef, useState } from 'react';
import { postProject, putProject } from '../../api/project';
import useResizeTextarea from '../../hooks/useResizeTextarea';
import Delete from '../../assets/admin_activity/Delete';
import { TextButton } from '../common/CommonButtons/CommonButtons';

const ProjectItem = ({
  num = 1,
  it,
  projectList,
  setProjectList,
  onClick,
  maxYear,
}) => {
  const prevItemValue = useRef(it);
  const { ref, onInput } = useResizeTextarea();
  const [item, setItem] = useState(it);
  const [isActive, setIsActive] = useState(false);

  // 저장 클릭 시 실행
  const handleSaveItem = async () => {
    try {
      let res;
      if (item.projectId === 'new') {
        res = await postProject(item.year, item.info);
      } else {
        res = await putProject(item.projectId, item.year, item.info);
      }

      // if (res) {
      const newList = projectList.filter(
        it => it.projectId === 'new' && it.info !== item.info,
      );
      sessionStorage.setItem('list', JSON.stringify(newList));
      prevItemValue.current = item;
      setIsActive(false);
      alert('저장되었습니다.');
      // }
    } catch (e) {
      alert('저장하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(e);
    }
  };

  // 버튼 활성화 여부
  useEffect(() => {
    const isDifferent =
      prevItemValue.current.year !== item.year ||
      prevItemValue.current.info !== item.info;

    setIsActive(
      item.year && item.info && (item.projectId === 'new' || isDifferent),
    );
  }, [item]);

  // projectList에 새로운 item 내용 저장
  useEffect(() => {
    const newList = projectList.map((it, idx) => (idx === num - 1 ? item : it));
    setProjectList(newList);
  }, [item]);

  return (
    <S.Form>
      <S.H2 $color={item.year === maxYear && 'var(--red)'}>프로젝트 {num}</S.H2>
      <S.Input
        id={num - 1}
        placeholder='프로젝트 연도'
        value={item.year}
        onChange={e => setItem({ ...item, year: e.target.value })}
      />
      <S.Textarea
        id={num - 1}
        ref={ref}
        placeholder='프로젝트명'
        value={item.info}
        onChange={e => setItem({ ...item, info: e.target.value })}
        onInput={onInput}
      />
      <S.Button id={num - 1} type='submit' onClick={onClick}>
        삭제 <Delete onClick={onClick} id={num - 1} />
      </S.Button>
      <TextButton
        type='submit'
        text='저장'
        onClick={handleSaveItem}
        isActive={isActive}
        disabled={!isActive}
      />
    </S.Form>
  );
};

export default ProjectItem;
