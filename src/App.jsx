import { ThemeProvider, createTheme } from '@mui/material/styles'

import Layout from './components/Layout'

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                'Roboto',
                'sans-serif'
            ]
        }
    })
  
    return (
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    )
}

export default App
