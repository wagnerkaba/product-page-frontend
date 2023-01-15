import { useEffect, useState } from "react";
import axios from 'axios';
import { Grid } from "@mui/material";
import Product from "./Product";

function ProductList() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080')
            .then(function (res) {
                setPosts(res.data);
            })
            .catch(function(error){
                console.log(error);
            })
    }, []);
    return (
      

            <Grid container spacing={3} sx={{ py: 3 }}>

                {
                    posts.map(function (product) {
                        return (
                            <Grid item xs={12} sm={6} md={3} lg={2} key={product.sku}>
                                <Product
                                    sku={product.sku}
                                    name={product.name}
                                    price={product.price}
                                    size={product.size}
                                    weight={product.weight}
                                    height={product.height}
                                    width={product.width}
                                    length={product.length}
                                />
                            </Grid>

                        )
                    })
                }

            </Grid>

    );
}

export default ProductList;