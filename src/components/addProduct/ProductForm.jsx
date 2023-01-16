import { FormControl, Grid, InputLabel, Select, TextField } from "@mui/material";
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

    const productData = ()=>{
        const mainAttributes = {
            "type": selectedOption,
            "sku": sku,
            "name": name,
            "price": price,
        };

        const specificAttributes = {
            'dvd': { 'size': size },
            'book': { 'weight': weight },
            'furniture': { 'height': height, 'width': width, 'length': length }
        }

        return {...mainAttributes,...specificAttributes[selectedOption]};
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

                <FormControl>
                    <InputLabel htmlFor="select-option">Select an option</InputLabel>
                    <Select
                        native
                        value={selectedOption}
                        onChange={handleSelectChange}
                        inputProps={{
                            name: 'option',
                            id: 'select-option',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value="book">Book</option>
                        <option value="furniture">Furniture</option>
                        <option value="dvd">DVD</option>
                    </Select>

                </FormControl>

                {selectedOption === 'dvd' && (
                    <TextField
                        label="Size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                    />
                )}
                {selectedOption === 'book' && (
                    <TextField
                        label="Weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                )}
                {selectedOption === 'furniture' && (
                    <>
                        <TextField
                            label="Height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                        <TextField
                            label="Width"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                        />
                        <TextField
                            label="Length"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                        />
                    </>


                )}

            </Grid>
        </form >


    );
}









export default ProductForm;