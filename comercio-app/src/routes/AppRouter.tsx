import { Navigate, Route, Routes } from 'react-router-dom';
import AuthRoutes from '../auth/routes/AuthRoutes';
import ComercioRoutes from '../comercio/routes/ComercioRoutes';

const AppRouter = () => {
  const status = 'not-authenticate';

  return (
    <Routes>
      {status === 'not-authenticated' ? (
        <>
          <Route path='auth'>
            <Route path='*' element={<AuthRoutes />} />
          </Route>
          <Route path='*'>
            <Route path='*' element={<Navigate to={'/auth/login'} />} />
          </Route>
        </>
      ) : (
        <>
          <Route path='*'>
            <Route path='*' element={<ComercioRoutes />} />
          </Route>
          <Route path='*'>
            <Route path='*' element={<Navigate to='/catalogo' />} />
          </Route>
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
