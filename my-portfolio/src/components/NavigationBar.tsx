import { Container, AppBar, Toolbar, Typography, Box, Button, MenuItem, Menu, IconButton, colors} from '@mui/material'
import { MenuOutlined } from '@mui/icons-material'
import { useState } from 'react'


const pages = ["Home", "About Me", "Projects", "Contact"]

const NavigationBar = () => {
    const [anchor, setAnchor] = useState<any>(null)    //Holds the current element that the Menu is anchored to

    const handleOpenMenu = (event: any) => ( setAnchor(event.currentTarget))

    const handleCloseMenu = () => (setAnchor(null))     //Close the Menu

    return (
        <Container maxWidth="md">
        <AppBar
            position="fixed"
            elevation={0}
            sx={
                {
                    top: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "90%",
                    borderRadius: "20px",
                    backdropFilter: "blur(20px)",
                    background: "rgba(255, 255, 255, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.5)",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
                    color: "#000",
                }
            }
        >
            <Toolbar >
            <Typography variant="h6" fontWeight='600' 
                sx={
                    {
                        flexGrow: 1,
                        letterSpacing: 1,
                    }
                }
            >
                NTANDOYENKOSI ZUNGU
            </Typography>
            
            {/* This Box component only shows when the display is small, for axample: in mobile phones */}
            <Box sx={{display: {xs:'flex', md: 'none'}}}>
                <IconButton color='inherit' onClick={handleOpenMenu}>
                    <MenuOutlined/>
                </IconButton>
                <Menu anchorEl={anchor} open={anchor != null} onClose={handleCloseMenu} keepMounted>
                    {
                        pages.map(page => (
                                <MenuItem key={page} onClick={handleCloseMenu}>
                                    {page}
                                </MenuItem>
                            )
                        )
                    }
                </Menu>
            </Box>

            {/* This Box componet  */}
            <Box sx={{display: {xs: 'none', md: 'flex'}, gap: 2}}>
                {
                    pages.map((page) => (
                            <Button 
                                key={page} 
                                variant="contained"
                                sx={
                                    {
                                        backgroundColor: "inherit", 
                                        color: "black", 
                                        fontWeight: "bold",
                                        border: '2px solid black'
                                    }
                                }
                            >
                                {page}
                            </Button>
                        )
                    )
                }
            </Box>
            </Toolbar>
        </AppBar>
        </Container>
    )
}


export default NavigationBar;