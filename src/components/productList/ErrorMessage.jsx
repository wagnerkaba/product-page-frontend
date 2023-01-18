import { Box, Alert } from "@mui/material";



function ErrorMessage({ message, type }) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ py: 10 }}
        >

            <Alert severity={type} variant="filled">
                {message}
            </Alert>
        </Box>
    );
}

export default ErrorMessage;