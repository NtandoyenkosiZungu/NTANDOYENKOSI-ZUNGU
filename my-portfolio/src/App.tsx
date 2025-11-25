
import './App.css'
import {Box, Container} from '@mui/material'
import NavigationBar from './components/NavigationBar'
import { createTheme, ThemeProvider } from '@mui/material/styles'


import HomePage from './components/pages/HomePage'
import HeroSection from './components/pages/Hero'


import image from "./assets/image_six.png"

const classes = {
  background: {
    backgroundColor: '#FAF8F6',
    color: 'black',
    p: 10,
    height: '100vh',
  },

  imageBox: {
    height: "100vh",
    width: "100%",
    marginRight:20,
    p:10,
    zIndex:100,
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }
}
const theme = createTheme ({
  palette: {
    primary: {
      main: '#0D0D0D'
    }, 
    secondary: {
      main: "#121212"
    }
  }
})

//Desktop Looking portfolio

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Box component="section" sx={classes.background}>
          <Container maxWidth="xl">
            <NavigationBar/>
            <Box sx={{paddingTop:"120px", paddingBottom:0}}>
              <HeroSection/>
              <HomePage/>
            </Box>
          </Container>
        </Box>
    </ThemeProvider>

  )
}

export default App
