
import { Box } from '@mui/material';
import ProductList from './ProductList';
import Footer from '../Footer';
import { useState } from "react";

function Home() {
    const [refresh, setRefresh] = useState(false);
    const refreshCallback = () => {
        setRefresh(prevRefresh => !prevRefresh)
    }

    return (
        <Box sx={{ p: 3 }}>
            <ProductList refreshCallback={refreshCallback} refresh={refresh}/>
            <Footer />
        </Box>
    );
}

export default Home;