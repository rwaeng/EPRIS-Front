import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer/Footer';

const LayoutPage = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutPage;
