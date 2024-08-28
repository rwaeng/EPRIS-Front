import { S } from './AdminActivityItem.style';
import { useState, useEffect } from 'react';
import { deleteProject, getProject } from '../../api/project';
import { TextIconButton } from '../common/CommonButtons/CommonButtons';
import ProjectItem from './ProjectItem';
import Plus from '../../assets/admin_activity/plus.svg';

const ProjectList = () => {
  const sessionStorageList = sessionStorage.getItem('list')
    ? JSON.parse(sessionStorage.getItem('list'))
    : [];
  const [projectList, setProjectList] = useState([]);
  const [maxYear, setMaxYear] = useState(null);

  // 프로젝트 묶음 삭제
  const handleDeleteItem = e => {
    const { id } = e.target;

    // id 확인 후 new이면 그냥 삭제
    // 아니면 delete 요청
    if (id && projectList[id].projectId === 'new') {
      const newList = projectList.filter(
        (it, idx) => it.projectId === 'new' && parseInt(id) !== idx,
      );
      sessionStorage.setItem('list', JSON.stringify(newList));
    } else {
      deleteProjectItem(Number(projectList[id].projectId));
    }
  };

  // 프로젝트 아이템 delete
  const deleteProjectItem = async projectId => {
    try {
      const res = await deleteProject(projectId);
      if (res) {
        alert('삭제되었습니다.');
        const newList = projectList.filter(it => it.projectId === 'new');
        sessionStorage.setItem('list', JSON.stringify(newList));
      }
    } catch (e) {
      alert('삭제하는 동안 오류가 발생했습니다. 다시 시도해주세요.');
      console.error(e);
    }
  };

  // 프로젝트 묶음 추가
  const handleClickButton = () => {
    setProjectList([...projectList, { projectId: 'new', year: '', info: '' }]);
  };

  // 데이터 fetching
  const readProject = async () => {
    try {
      const res = await getProject();
      const sortedList = res.sort((a, b) => a.year - b.year);
      setProjectList([...sortedList, ...sessionStorageList]);
      setMaxYear(sortedList[sortedList.length - 1].year);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    readProject();
  }, []);

  return (
    <S.Layout>
      {projectList.length > 0 &&
        projectList.map((it, idx) => (
          <ProjectItem
            key={idx}
            it={it}
            num={idx + 1}
            projectList={projectList}
            setProjectList={setProjectList}
            length={projectList.length}
            onClick={handleDeleteItem}
            maxYear={maxYear}
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
