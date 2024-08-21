import { S } from './AdminActivityItem.style';
import { useState } from 'react';
import { TextIconButton } from '../common/CommonButtons/CommonButtons';
import ProjectItem from './ProjectItem';
import Plus from '../../assets/admin_activity/plus.svg';

const ProjectList = () => {
  const [projectList, setProjectList] = useState([
    {
      projectId: 1,
      year: '~2022',
      info: '00캠페인 기획',
    },
    {
      projectId: 2,
      year: '2023',
      info: '00캠페인 기획',
    },
    {
      projectId: 3,
      year: '2024',
      info: '00캠페인 기획',
    },
  ]);

  // 프로젝트 묶음 삭제
  const handleDeleteItem = e => {
    // id 확인 후 new이면 그냥 삭제
    // 아니면 delete 요청
    const newList = projectList.filter(
      (_, idx) => parseInt(e.target.id) !== idx,
    );
    setProjectList(newList);
  };

  // 프로젝트 묶음 추가
  const handleClickButton = () => {
    setProjectList([...projectList, { id: 'new', year: '', info: '' }]);
  };

  return (
    <S.Layout>
      {projectList.map((it, idx) => (
        <ProjectItem
          key={idx}
          it={it}
          num={idx + 1}
          onClick={handleDeleteItem}
        />
      ))}
      <TextIconButton
        text='프로젝트 묶음 추가하기'
        icon={Plus}
        bgColor='transparent'
        border='0.15rem solid var(--grey300)'
        color='var(--grey300)'
        onClick={handleClickButton}
      />
    </S.Layout>
  );
};

export default ProjectList;
