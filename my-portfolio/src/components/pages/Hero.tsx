
import { Box, Typography } from "@mui/material"

import image from "../../assets/image_six.png"

const classes = {
    HeroBox: {
        backgroundColor:"inherit",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign:"center"
    },
    typoOne:{
        fontFamily:"Impact",
        fontSize:150,
        fontWeight: 300,
    },
    typoTwo: {
        fontFamily:"Impact",
        fontSize:140,
        fontWeight: 300,
        color: "transparent",
        WebkitTextStroke:"2px black"
    },

    typoThree:{
        fontFamily: "Impact",
        fontSize: 20,
    },

    imageBox: {
        zIndex: 1000,
        width: "100%",
        height: "calc(100vh-10%)",
        backgroundImage: `url(${image})`,
        backgroundSize: "contained",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }
}


export default function HeroSection() {
    return (
        <Box sx={classes.HeroBox}>
            <Box>
                <Typography variant="caption" sx={classes.typoThree}>
                    Hello👋, Welcome to My Portfolio. My Name Is 👇
                </Typography>

                <Typography variant="h1" color="initial" sx={classes.typoOne}>
                    Ntandoyenkosi Zungu
                </Typography>
                <Typography variant="caption" sx={classes.typoThree}>
                    I'm an Aspiring
                </Typography>
                <Typography variant="h2" color="initial" sx={classes.typoTwo}>
                    Software Developer
                </Typography>
            </Box>
        </Box>
    )
}