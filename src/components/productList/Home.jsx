
import { Box } from '@mui/material';
import ProductList from './ProductList';
import Footer from '../Footer';

function Home() {


    return (
        <Box sx={{p:3}}>
            <ProductList/>
            <Footer/>
        </Box>
    );
}

export default Home;