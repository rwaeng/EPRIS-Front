import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './pages/Admin/Login/LoginPage';
import AdminActivityPage from './pages/Admin/Activity/ActivityPage';
import ClassInfoPage from './pages/Admin/ClassInfo/ClassInfoPage';
import AdminEPRiansPage from './pages/Admin/Eprians/EPRiansPage';
import RecruitmentPage from './pages/Admin/Recruitment/RecruitmentPage';

import PrivateRouter from './router/PrivateRouter';

const LayoutPage = lazy(() => import('./layout/LayoutPage'));
const MainPage = lazy(() => import('./pages/Main/MainPage'));
const AboutPage = lazy(() => import('./pages/About/AboutPage'));
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'));
const EPRiansPage = lazy(() => import('./pages/EPRians/EPRiansPage'));
const JoinusPage = lazy(() => import('./pages/Joinus/JoinusPage'));
const ActivityPage = lazy(() => import('./pages/Activity/ActivityPage'));

const App = () => {
  const adminUrl = process.env.REACT_APP_ADMIN_URL;

  return (
    <Suspense fallback={<></>}>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/activities' element={<ActivityPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/eprians' element={<EPRiansPage />} />
          <Route path='/joinus' element={<JoinusPage />} />
        </Route>

        {/* 관리자 페이지 */}
        <Route path={adminUrl} element={<LoginPage />} />
        <Route element={<PrivateRouter />}>
          <Route path={`${adminUrl}/info`} element={<ClassInfoPage />} />
          <Route path={`${adminUrl}/eprians`} element={<AdminEPRiansPage />} />
          <Route
            path={`${adminUrl}/activities`}
            element={<AdminActivityPage />}
          />
          <Route
            path={`${adminUrl}/recruitment`}
            element={<RecruitmentPage />}
          />
        </Route>

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Suspense>
  );
};

export default App;
