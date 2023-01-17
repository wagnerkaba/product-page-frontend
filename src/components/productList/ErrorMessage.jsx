import { Box, Card, CardContent, CardHeader, Checkbox, Typography } from "@mui/material";



function ErrorMessage() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ py: 10 }}
        >
            <Card variant="outlined" sx={{ height: '100%' }}>
                <CardHeader
                    action={
                        <Checkbox inputProps={{ className: ".delete-checkbox" }} />
                    }

                />

                <CardContent sx={{ py: 10 }}>
                    <Typography variant="h4">
                        Sorry, there was an error fetching data.
                    </Typography>

                </CardContent>

            </Card>



        </Box>
    );
}

export default ErrorMessage;