import { Button, Grid, Typography } from "@mui/material";

function HeaderProductList(){
    return (
        <Grid container display="flex">
            <Grid item xs={12} sm="auto">
                <Typography variant="h2">
                    Product List
                </Typography>
            </Grid>
            <Grid item container xs={12} sm justifyContent="flex-end" alignItems="center">
                
                <Button variant="outlined" sx={{mr:2}}>Add</Button>
                <Button variant="outlined">Mass Delete</Button>
            </Grid>
        </Grid>

    );
}

export default HeaderProductList;