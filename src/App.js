import { Route, Routes, Navigate } from 'react-router-dom';

import MainPage from './pages/Main/MainPage';
import AboutPage from './pages/About/AboutPage';
import ActivityPage from './pages/Activity/ActivityPage';
import ContactPage from './pages/Contact/ContactPage';
import EPRiansPage from './pages/EPRians/EPRiansPage';
import JoinusPage from './pages/Joinus/JoinusPage';

import LoginPage from './pages/Admin/LoginPage';
import AdminActivityPage from './pages/Admin/ActivityPage';
import ClassInfoPage from './pages/Admin/ClassInfoPage';
import AdminEPRiansPage from './pages/Admin/EPRiansPage';
import RecruitmentPage from './pages/Admin/RecruitmentPage';

import LayoutPage from './pages/LayoutPage';

const App = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/activities' element={<ActivityPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/eprians' element={<EPRiansPage />} />
        <Route path='/joinus' element={<JoinusPage />} />
      </Route>

      <Route path='/admin' element={<LoginPage />} />

      {/* private route */}
      <Route path='/admin/activity' element={<AdminActivityPage />} />
      <Route path='/admin/info' element={<ClassInfoPage />} />
      <Route path='/admin/eprians' element={<AdminEPRiansPage />} />
      <Route path='/admin/recruit' element={<RecruitmentPage />} />

      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
};

export default App;
