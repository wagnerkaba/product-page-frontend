import { Card, CardContent, CardHeader, Checkbox, Typography } from "@mui/material";

const Product = ({ sku, name, price, size, weight, height, width, length }) => {

    return (
        <Card variant="outlined" sx={{height:'100%'}}>
            <CardHeader
                sx={{pb:0}}
                action={
                    <Checkbox />
                }
            />

            <CardContent sx={{pt:0}}>
                <Typography variant="h5">{name}</Typography>
                <p>SKU: {sku}</p>
                <p>Price: {price} $</p>
                {size && <p>Size: {size} MB</p>}
                {height && <p>Dimension: {height}x{width}x{length} </p>}
                {weight && <p>Weight: {weight} KG</p>}

            </CardContent>

        </Card>

    );

}

export default Product;