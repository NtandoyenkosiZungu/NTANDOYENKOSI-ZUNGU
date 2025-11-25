import { Box, Typography, Button, IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import image from "../../assets/image_six.png"


const classes = {
    homePageBox: {
        backgroundColor: "inherit",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        flexDirection: {
            xs:"column-reverse",
            md:"row"
        }
    },
    largeTypography: {
        color: 'inherit',
        lineHeight: 1.3,
        fontWeight: 700,
        fontSize: {
            xs: 25,
            md: 50
        }
    },
    mediumTypography: { 
        color: "inherit", 
        lineHeight: 1.3,
        fontWeight: 300
    },
    image: {
        width: {xs: 250 , md: 350},
        height: {xs: 250, md: 350},
        borderRadius: "50%",
        border: "3px solid black",
        backgroundColor: "white",
        backgroundImage:`url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
}

export default function HomePage () {
    return (
        <Box component={'section'} sx={classes.homePageBox}>
            <Box sx={{flexGrow: 1}}>
                <Box>
                    <Typography variant="h4" sx={classes.largeTypography} fontWeight={700}>
                        Hi,
                    </Typography>
                    <Typography variant="h4" sx={classes.largeTypography} fontWeight={700}>
                        I am Ntandoyenkosi Zungu
                    </Typography>
                    <Typography variant="h6" sx={classes.mediumTypography}>
                        I am a second year student at the university of KwaZulu-Natal <br />
                        majoring in Computer Science & I.T
                    </Typography>
                </Box>

                {/* Contact Details and resume */}
                <Box mt={5}>
                    <Button 
                        variant="contained" 
                        color="inherit" 
                        sx={
                            {
                                backgroundColor:'black',
                                fontWeight: 600, 
                                color: "white",
                                padding: 1,
                            }
                        }
                        >
                            Downlaod Resume
                    </Button>
                    <IconButton  color="inherit" onClick={()=> window.open("https://www.linkedin.com/in/ntandoyenkosi-zungu-1b1b0b30b/")}>
                        <LinkedInIcon sx={{fontSize:50}}/>
                    </IconButton>
                </Box>
            </Box>
            <Box sx={classes.image}>

            </Box>
        </Box>
    )
}