import { Navigate, Outlet } from 'react-router-dom';
import NavigationBar from '../components/common/NavigatonBar';

const PrivateRouter = () => {
  const adminUrl = process.env.REACT_APP_ADMIN_URL;
  const token = !!localStorage.getItem('token');

  if (token) {
    return (
      <>
        <NavigationBar type='admin' />
        <Outlet />
      </>
    );
  }

  return <Navigate to={adminUrl} />;
};

export default PrivateRouter;
