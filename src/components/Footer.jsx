import { Divider, Link } from "@mui/material";
import { Box } from "@mui/system";

function Footer() {
    return (
        <>
            <Divider />
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{py:3}}
            >

                <Link
                    href="https://www.linkedin.com/in/wagnerk-profile/"
                    target="_blank"
                    rel="noreferrer"
                    underline="hover"
                    
                >
                    Created by Wagner Kaba
                </Link>
            </Box>
        </>

    );

}

export default Footer;