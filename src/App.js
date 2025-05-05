import './App.css';

import { CssBaseline } from '@mui/material';
import HomeLayout from './layouts/HomeLayout';
import NotFoundLayout from './layouts/NotFoundLayout';
import ProductDetailListLayer from './layouts/ProductDetailListLayer';
import CartLayout from './layouts/CartLayout';
import TemLayout from './layouts/TemLayout';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <CssBaseline />
      <Routes>
        <Route path='/' element={<HomeLayout/>}/>
        <Route path='/details' element={ <ProductDetailListLayer/>}/>
        <Route path='/cart' element={<CartLayout/>}/>
        <Route path='/temp/*' element={<TemLayout/>}/>
        <Route path='/all-items' element={<HomeLayout />}/>
        <Route path='/*' element={<NotFoundLayout/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
