import './App.css';

import { CssBaseline } from '@mui/material';
//import HomeLayout from './layouts/HomeLayout';
//import ProductDetailListLayer from './layouts/ProductDetailListLayer';
import CartLayout from './layouts/CartLayout';

function App() {
  return (
    <div >
      <CssBaseline />
      {/* <HomeLayout /> */}
      {/* <ProductDetailListLayer/> */}
      <CartLayout/>
    </div>
  );
}

export default App;
