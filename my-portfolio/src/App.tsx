
import './App.css'
import {Box, Container} from '@mui/material'
import NavigationBar from './components/NavigationBar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import HomePage from './components/pages/HomePage'


const classes = {
  background: {
    backgroundColor: '#FAF8F6',
    color: 'black',
    p: 10,
    height: '100vh'
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
        <Box  sx={classes.background}>
          <Container maxWidth="lg">
            <NavigationBar/>
            <HomePage/>
          </Container>
        </Box>
    </ThemeProvider>

  )
}

export default App
