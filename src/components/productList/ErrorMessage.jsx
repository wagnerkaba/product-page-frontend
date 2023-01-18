import { Box, Typography } from "@mui/material";



function ErrorMessage({message}) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ py: 10 }}
        >

                    <Typography variant="h4">
                        {message}
                    </Typography>


        </Box>
    );
}

export default ErrorMessage;