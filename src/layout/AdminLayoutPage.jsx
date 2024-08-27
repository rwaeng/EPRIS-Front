import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/common/NavigatonBar';

const AdminLayoutPage = () => {
  return (
    <>
      <NavigationBar type='admin' />
      <Outlet />
    </>
  );
};

export default AdminLayoutPage;
