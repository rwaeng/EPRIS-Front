import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from './pages/Admin/LoginPage';
import AdminActivityPage from './pages/Admin/ActivityPage';
import ClassInfoPage from './pages/Admin/ClassInfoPage';
import AdminEPRiansPage from './pages/Admin/EPRiansPage';
import RecruitmentPage from './pages/Admin/RecruitmentPage';

import PrivateRouter from './pages/PrivateRouter';

const LayoutPage = lazy(() => import('./pages/LayoutPage'));
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
