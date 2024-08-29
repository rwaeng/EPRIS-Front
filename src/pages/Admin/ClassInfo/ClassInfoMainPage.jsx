import { useState } from 'react';
import ClassInfo2Page from './ClassInfo2Page';
import ClassInfoPage from './ClassInfoPage';
import InbAdmin from '../../../components/common/Inb/InbAdmin';

const ClassInfoMainPage = () => {
  const menuList = ['기수 정보', 'Greeting Card'];
  const [clicked, setClicked] = useState(menuList[0]);

  return (
    <>
      <InbAdmin menuList={menuList} clicked={clicked} setClicked={setClicked} />
      {clicked === 'Greeting Card' ? <ClassInfo2Page /> : <ClassInfoPage />}
    </>
  );
};

export default ClassInfoMainPage;
