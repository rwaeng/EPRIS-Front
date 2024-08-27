import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import NavigationBar from '../components/common/NavigatonBar';

const LayoutPage = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPage;
