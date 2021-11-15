import { ThemeProvider, createTheme } from '@mui/material/styles'
import './App.css'

import Layout from './components/Layout'

function App() {
    const theme = createTheme()
  
    return (
        <ThemeProvider theme={theme}>
            <Layout />
        </ThemeProvider>
    )
}

export default App
