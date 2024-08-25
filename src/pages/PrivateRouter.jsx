import { Navigate, Outlet } from 'react-router-dom';
import NavigationBar from '../components/common/NavigatonBar';

const PrivateRouter = () => {
  const token = !!localStorage.getItem('token');
  
  if (token) {
    return (
      <>
        <NavigationBar type='admin' />
        <Outlet />
      </>
    );
  }

  return <Navigate to='/admin' />;
};

export default PrivateRouter;
