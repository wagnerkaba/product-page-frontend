import { FormControl, Box, InputLabel, Select, TextField } from "@mui/material";
import React, { useState } from 'react';
import HeaderProductAdd from "./HeaderProductAdd";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function ProductForm() {
    const [selectedOption, setSelectedOption] = useState('');
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');

    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (e) => {

        const jsonData = productData();

        console.log(jsonData);

        try {
            await axios.post('http://localhost:8080/add-product', jsonData);
        } catch (error) {
            console.error(error);
        }

        navigate('/', { replace: true });


    }

    const productData = () => {

        const attributes = {
            'dvd': {
                "productSKU": sku,
                "name": name,
                "price": price,
                'size': size
            },
            'book': {
                "productSKU": sku,
                "name": name,
                "price": price,
                'weight': weight
            },
            'furniture': {
                "productSKU": sku,
                "name": name,
                "price": price,
                'height': height,
                'width': width,
                'length': length
            }
        }

        const typeAndAttributes = {
            "type": selectedOption,
            "attributes": attributes[selectedOption]
        };

        return typeAndAttributes;
    }

    return (

        <form id="product_form">
            <HeaderProductAdd onSubmit={handleSubmit} />
            <Box
                sx={{
                    p: 3,
                    maxWidth: 'sm',
                    height: "100vh",
                    display: "flex",
                    flexDirection: 'column',
                    mx: "auto",
                }}
            >
                <TextField
                    label="SKU"
                    value={sku}
                    margin="normal"
                    onChange={(e) => setSku(e.target.value)}
                    id="sku"
                />
                <TextField
                    label="Name"
                    value={name}
                    margin="normal"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                />
                <TextField
                    label="Price"
                    value={price}
                    margin="normal"
                    onChange={(e) => setPrice(e.target.value)}
                    id="price"
                />

                <FormControl margin="normal">
                    <InputLabel htmlFor="select-option">Select an option</InputLabel>
                    <Select
                        native
                        value={selectedOption}                        
                        onChange={handleSelectChange}
                        inputProps={{
                            name: 'option',
                            id: 'select-option',
                        }}
                        id="productType"
                    >
                        <option aria-label="None" value="" />
                        <option value="book">Book</option>
                        <option value="furniture">Furniture</option>
                        <option value="dvd">DVD</option>
                    </Select>

                </FormControl>

                {selectedOption === 'dvd' && (
                    <TextField
                        label="Size (MB)"
                        value={size}
                        margin="normal"
                        onChange={(e) => setSize(e.target.value)}
                        id="size"
                    />
                )}
                {selectedOption === 'book' && (
                    <TextField
                        label="Weight (KG)"
                        value={weight}
                        margin="normal"
                        onChange={(e) => setWeight(e.target.value)}
                        id="weight"
                    />
                )}
                {selectedOption === 'furniture' && (
                    <>
                        <TextField
                            label="Height (CM)"
                            value={height}
                            margin="normal"
                            onChange={(e) => setHeight(e.target.value)}
                            id="height"
                        />
                        <TextField
                            label="Width (CM)"
                            value={width}
                            margin="normal"
                            onChange={(e) => setWidth(e.target.value)}
                            id="width"
                        />
                        <TextField
                            label="Length (CM)"
                            value={length}
                            margin="normal"
                            onChange={(e) => setLength(e.target.value)}
                            id="lenght"
                        />
                    </>


                )}

            </Box>
        </form >


    );
}









export default ProductForm;