import { Box, Typography, Button, IconButton, Tooltip } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import image from "../../assets/image_six.png"

import tsImage from '../../assets/programming-assests/typescript-icon.svg'
import javaImage from '../../assets/programming-assests/java-icon.svg'
import pyImage from '../../assets/programming-assests/python-icon.svg'


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
        fontWeight: 500
    },
    image: {
        width: {xs: 250 , md: 800},
        height: {xs: 250, md: 800},
        borderRadius: {xs:"50%", md:0},
        border: {xs:"3px solid black", md:"none"},
        backgroundColor: {xs:"white", md:"inherit"},
        backgroundImage:`url(${image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    }
}

export default function HomePage () {
    return (
        <Box component={'section'} id="About Me" sx={classes.homePageBox}>
            <Box sx={{flexGrow: 1}}>
                <Box>
                    {/* <Typography variant="h4" sx={classes.largeTypography} fontWeight={700}>
                        Hi,
                    </Typography>
                    <Typography variant="h4" sx={classes.largeTypography} fontWeight={700}>
                        I am Ntandoyenkosi Zungu
                    </Typography> */}
                    <Typography variant="h6" sx={classes.mediumTypography}>
                        I am a third year student at the university of KwaZulu-Natal <br />
                        currently majoring in Computer Science & I.T
                    </Typography>
                    <br />
                    <Typography variant="h6" sx={classes.mediumTypography}>
                        I am <strong>Proficient</strong> in the following programming languages and tools
                    </Typography>
                    <Box pt={2} pb={0} display={"flex"} gap={2}>
                        <Tooltip title="Typescript">
                            <img className="size-15 hover:cursor-pointer xs:size-5" src={tsImage}/>
                        </Tooltip>
                        <Tooltip title="Java">
                            <img className="size-15 hover:cursor-pointer xs:size-5" src={javaImage}/>
                        </Tooltip>
                        <Tooltip title="Python">
                            <img className="size-15 hover:cursor-pointer xs:size-5" src={pyImage}/>
                        </Tooltip>
                    </Box>
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

            {/* My Image on the About Me Page */}    
            <Box sx={classes.image}/>
        </Box>
    )
}