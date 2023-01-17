import { 
    FormControl, 
    Box, 
    InputLabel, 
    Select, 
    TextField,
    Typography,
    Grid,
    Button,
    Divider
} from "@mui/material";
import React, { useState } from 'react';
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
    const [error, setError] = useState({ valid: true, text: "" });

    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = async (e) => {

        const jsonData = productData();
        console.log(jsonData);

        try {
            await axios.post('http://localhost:8080/add-product', jsonData);
            navigate('/', { replace: true });
        } catch (error) {
            console.error(error);
        }

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

    const onCancel = ()=>{
        navigate('/', {replace: true});
    }
    return (

        <Box
            component="form"
            id="product_form"
            onSubmit={(event) => {
                console.log("teste");
                event.preventDefault();
                handleSubmit();
                console.log("teste2")

            }}
        >
            <Grid container display="flex">
                <Grid item xs={12} sm="auto">
                    <Typography variant="h2">
                        Product Add
                    </Typography>
                </Grid>
                <Grid item container xs={12} sm justifyContent="flex-end" alignItems="center">

                    <Button
                        variant="outlined"
                        sx={{ mr: 2 }}
                        onClick={handleSubmit}
                    >Save
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1 }} />

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
                    required
                    type="text"
                />
                <TextField
                    label="Name"
                    value={name}
                    margin="normal"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    required
                    type="text"
                />
                <TextField
                    label="Price"
                    value={price}
                    margin="normal"
                    onChange={(e) => setPrice(e.target.value)}
                    id="price"
                    required
                    type="number"
                />

                <FormControl margin="normal">
                    <InputLabel htmlFor="select-option">Select an option</InputLabel>
                    <Select
                        native
                        value={selectedOption}
                        onChange={handleSelectChange}
                        inputProps={{
                            name: 'option',
                            id: 'productType',
                        }}
                        id="productType"
                        required
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
                        type="number"
                    />
                )}
                {selectedOption === 'book' && (
                    <TextField
                        label="Weight (KG)"
                        value={weight}
                        margin="normal"
                        onChange={(e) => setWeight(e.target.value)}
                        id="weight"
                        type="number"
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
                            type="number"
                        />
                        <TextField
                            label="Width (CM)"
                            value={width}
                            margin="normal"
                            onChange={(e) => setWidth(e.target.value)}
                            id="width"
                            type="number"
                        />
                        <TextField
                            label="Length (CM)"
                            value={length}
                            margin="normal"
                            onChange={(e) => setLength(e.target.value)}
                            id="length"
                            type="number"
                        />
                    </>


                )}

            </Box>
        </Box >


    );
}

export default ProductForm;