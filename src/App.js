import './App.css';

import { CssBaseline } from '@mui/material';
import HomeLayout from './layouts/HomeLayout';
import NotFoundLayout from './layouts/NotFoundLayout';
import ProductDetailListLayer from './layouts/ProductDetailListLayer';
import CartLayout from './layouts/CartLayout';
import TemLayout from './layouts/TemLayout';
import { Route, Routes } from 'react-router-dom';
import { linkPath } from './util/MetaData';

function App() {
  return (
    <div >
      <CssBaseline />
      <Routes>
        <Route path={linkPath.homePage} element={<HomeLayout/>}/>
        <Route path={linkPath.details} element={ <ProductDetailListLayer/>}/>
        <Route path={linkPath.cart} element={<CartLayout/>}/>
        <Route path={linkPath.temp} element={<TemLayout/>}/>
        <Route path={linkPath.allItems} element={<HomeLayout />}/>
        <Route path='/*' element={<NotFoundLayout/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
