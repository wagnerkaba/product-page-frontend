import { Button, Grid, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HeaderProductList() {
    const navigate = useNavigate();
    const handleClickAddButton = () => {
        navigate('add-product', { replace: true });
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
                    >
                        MASS DELETE
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1 }} />
        </>


    );
}

export default HeaderProductList;