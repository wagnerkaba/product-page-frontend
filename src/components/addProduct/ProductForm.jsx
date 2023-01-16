import { Grid, TextField } from "@mui/material";
import React, { useState } from 'react';
import HeaderProductAdd from "./HeaderProductAdd";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ProductForm() {
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        const jsonData = {
            "sku": sku,
            "name": name,
            "price": price,
            "size": size
        };

        try {
            const response = await axios.post('http://localhost:8080/add-product', jsonData);
        } catch (error) {
            console.error(error);
        }

        navigate('/', { replace: true });


    }
    return (

        <form>
            <HeaderProductAdd onSubmit={handleSubmit} />
            <Grid container spacing={3} sx={{ py: 3 }}>
                <TextField
                    label="SKU"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                />
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                    label="Size"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                />
            </Grid>
        </form >


    );
}

export default ProductForm;