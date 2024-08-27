import { S } from './ActivityPage.style';
import { useState } from 'react';
import InbAdmin from '../../../components/common/Inb/InbAdmin';
import ProjectList from '../../../components/Activities-admin/ProjectList';
import AwardStatistics from '../../../components/Activities-admin/AwardStatistics';
import SessionList from '../../../components/Activities-admin/SessionList';
import CorporateProject from '../../../components/Activities-admin/CorporateProject';
import Network from '../../../components/Activities-admin/Network';

const ActivityPage = () => {
  const menuList = [
    'Project List',
    'Award & Statistics',
    'Session',
    'Corporate Project',
    'Network',
  ];
  const [clicked, setClicked] = useState(menuList[0]);

  const SubPage = () => {
    return (
      {
        'Project List': <ProjectList />,
        'Award & Statistics': <AwardStatistics />,
        Session: <SessionList />,
        'Corporate Project': <CorporateProject />,
        Network: <Network />,
      }[clicked] ?? ''
    );
  };

  return (
    <S.Layout>
      <InbAdmin menuList={menuList} clicked={clicked} setClicked={setClicked} />
      <S.Container>
        <SubPage/>
      </S.Container>
    </S.Layout>
  );
};

export default ActivityPage;
