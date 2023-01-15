import { Box, Typography } from "@mui/material";



function ErrorMessage() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ py: 10 }}
        >
               <Typography variant="h4">
                    Sorry, there was an error fetching data.
                </Typography>
        </Box>
    );
}

export default ErrorMessage;