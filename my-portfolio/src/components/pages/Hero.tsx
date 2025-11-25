
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
        fontSize:150,
        fontWeight: 700,
        lineHeight: 1.5
    },
    typoTwo: {
        fontSize:125,
        fontWeight: 900,
        lineHeight:1.5,
        color: "transparent",
        WebkitTextStroke:"2px black"
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
                <Typography variant="caption" color="initial" fontSize={20}>
                    Hello👋, My Name Is Ntandoyenkosi Zungu
                </Typography>

                <Typography variant="h1" color="initial" sx={classes.typoOne}>
                    C.S & I.T Student
                </Typography>
                <Typography variant="h1" color="initial" sx={classes.typoTwo}>
                    Software Developer
                </Typography>
            </Box>
        </Box>
    )
}