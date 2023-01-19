import { useEffect, useState } from "react";
import axios from 'axios';
import { Grid, CardHeader, Checkbox, CardContent, Typography, Card, Button, Divider } from "@mui/material";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";

function ProductList({ refreshCallback, refresh }) {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACKEND_SERVER)
            .then(function (apiData) {
                setProducts(apiData.data);
            })
            .catch(function (error) {
                console.log(error.message);
                setError(error.message);
            });
    }, [refresh]);
    console.log(products);


    const navigate = useNavigate();
    const handleClickAddButton = () => {
        navigate('add-product', { replace: true });
    }

    const handleCheckboxChange = (productSKU) => {
        if (selectedProducts.includes(productSKU)) {
            setSelectedProducts(selectedProducts.filter((id) => id !== productSKU));

        } else {
            setSelectedProducts([...selectedProducts, productSKU]);
        }

    }

    const handleClickDeleteButton = async () => {
        const deleteEndpoint = process.env.REACT_APP_BACKEND_SERVER + '/mass-delete';
        try {
            await axios.delete(deleteEndpoint, { data: { skus: selectedProducts } });
            setSelectedProducts([]);
            refreshCallback();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <Grid container display="flex">
                <Grid item xs={12} sm="auto">
                    <Typography variant="h2">
                        Product List
                    </Typography>
                </Grid>
                <Grid item container xs={12} sm justifyContent="flex-end" alignItems="center">

                    <Button
                        variant="outlined"
                        sx={{ mr: 2 }}
                        onClick={handleClickAddButton}
                    >ADD
                    </Button>
                    <Button
                        variant="outlined"
                        id="delete-product-bin"
                        onClick={handleClickDeleteButton}
                    >
                        MASS DELETE
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1 }} />
            {/* Show an error message if there is an error when fetching data */}
            {(!Array.isArray(products) || error) && <ErrorMessage message={"Sorry, there was an error fetching data."} type={"error"} />}
            {(products.length === 0 && !error) && <ErrorMessage message={"Please, add a new product."} type={"info"} />}
            
            <Grid container spacing={3} sx={{ py: 3 }}>
                {
                    Array.isArray(products) && products.map(function (product) {
                        return (
                            <Grid item xs={12} sm={6} md={3} lg={2} key={product.sku}>
                                <Card variant="outlined" sx={{ height: '100%' }}>
                                    <CardHeader
                                        sx={{ pb: 0 }}
                                        action={
                                            <Checkbox
                                                onChange={() => handleCheckboxChange(product.sku)}
                                                inputProps={{ className: "delete-checkbox" }}
                                            />
                                        }

                                    />

                                    <CardContent sx={{ pt: 0 }}>
                                        <Typography variant="h5">{product.name}</Typography>
                                        <p>SKU: {product.sku}</p>
                                        <p>Price: {product.price} $</p>
                                        {product.size && <p>Size: {product.size} MB</p>}
                                        {product.height && <p>Dimension: {product.height}x{product.width}x{product.length} </p>}
                                        {product.weight && <p>Weight: {product.weight} KG</p>}

                                    </CardContent>

                                </Card>

                            </Grid>

                        )
                    })
                }


            </Grid>
        </>



    );
}

export default ProductList;