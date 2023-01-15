
import { CssBaseline } from '@mui/material';
import Home from './components/productList/Home';
import AddProduct from './components/addProduct/AddProduct';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {



  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='add-product' element={<AddProduct/>}/>
        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
