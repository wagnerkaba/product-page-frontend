import { Box } from "@mui/material";
import Footer from "../Footer";
import ProductForm from "./ProductForm";

function ProductAdd() {
    return (
        <>
            <Box sx={{ p: 3 }}>
                <ProductForm />
                <Footer />
            </Box>


        </>
    );
}

export default ProductAdd;