
import { HomePageLazy } from '@/routes/lazies';
import { ErrorPage } from '@/routes/pages/not-found';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AppPages } from './types';

const pages: AppPages[] = [
  {
    path: '/',
    element: <HomePageLazy />,
  },
  
];

export const AppRoutes = () => {
  return   <Router>
  <Routes>
    {pages.map(({ path, element }) => (
      <Route key={path} path={path} element={element} errorElement={<ErrorPage />} />
    ))}
  </Routes>
</Router>
}