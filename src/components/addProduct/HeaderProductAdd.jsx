import { Button, Grid, Typography, Divider } from "@mui/material";

const HeaderProductAdd = ({onSubmit}) => {


    return (
        <>
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
                        onClick={onSubmit}
                    >Save
                    </Button>
                    <Button variant="outlined">Cancel</Button>
                </Grid>
            </Grid>
            <Divider sx={{ mt: 1 }} />
        </>


    );
}

export default HeaderProductAdd;