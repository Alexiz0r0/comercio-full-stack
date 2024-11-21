import { Navigate, Route, Routes } from 'react-router-dom';
import CatalogoPage from '../pages/CatalogoPage';
import FactoryPage from '../pages/FactoryPage';
import UserPage from '../pages/UserPage';

const ComercioRoutes = () => {
  return (
    <Routes>
      <Route path='catalogo' element={<CatalogoPage />}></Route>
      <Route path='factory' element={<FactoryPage />}></Route>
      <Route path='user' element={<UserPage />}></Route>
      <Route path='/*' element={<Navigate to={'/catalogo'} />}></Route>
    </Routes>
  );
};

export default ComercioRoutes;
