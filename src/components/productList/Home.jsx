
import { Box } from '@mui/material';
import ProductList from './ProductList';
import HeaderProductList from './HeaderProductList';
import Footer from '../Footer';

function Home() {


    return (
        <Box sx={{p:3}}>
            <HeaderProductList/>
            <ProductList/>
            <Footer/>
        </Box>
    );
}

export default Home;