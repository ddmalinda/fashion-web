import './App.css';

import HomeLayout from './layouts/HomeLayout';
import NotFoundLayout from './layouts/NotFoundLayout';
import ProductDetailListLayer from './layouts/ProductDetailListLayer';
import CartLayout from './layouts/CartLayout';
import TemLayout from './layouts/TemLayout';
import AllItemLayout from './layouts/AllItemLayout';
import { Route, Routes } from 'react-router-dom';
import { linkPath } from './util/MetaData';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div >
      <CssBaseline />
      <Routes>
        <Route path={linkPath.homePage} element={<HomeLayout/>}/>
        <Route path={linkPath.details} element={ <ProductDetailListLayer/>}/>
        <Route path={linkPath.cart} element={<CartLayout/>}/>
        <Route path={linkPath.temp} element={<TemLayout/>}/>
        <Route path={linkPath.allItems} element={<AllItemLayout />}/>
        <Route path='/*' element={<NotFoundLayout/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
