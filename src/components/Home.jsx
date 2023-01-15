
import { Box, Divider } from '@mui/material';
import Products from './Products';
import HeaderProductList from './HeaderProductList';

function Home() {


    return (
        <Box sx={{p:3}}>
            <HeaderProductList/>
            <Divider sx={{mt:1}}/>
            <Products />
        </Box>
    );
}

export default Home;