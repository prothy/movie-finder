import React, { useState } from 'react'
import DescriptionBox from './DescriptionBox'

import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

import { Container, Typography } from '@material-ui/core'
import { Stack } from '@mui/material'

const Layout = () => {
    const detailedResultsState = useState([])
    const resultsLoadingState = useState(false)

    const selectedState = useState()
    const modalOpenState = useState(false)

    return (
        <Container style={{
            padding: '3rem'
        }}>
            <Stack spacing={2}>
                <Typography variant="h2">Movie finder</Typography>
                <div>
                    <SearchInput 
                        detailedResultsState={detailedResultsState} 
                        resultsLoadingState={resultsLoadingState}
                    />
                </div>
                <div>
                    <SearchResults 
                        detailedResultsState={detailedResultsState} 
                        selectedState={selectedState}
                        resultsLoadingState={resultsLoadingState}
                        modalOpenState={modalOpenState}
                    />
                    <DescriptionBox 
                        detailedResultsState={detailedResultsState} 
                        selectedState={selectedState}
                        modalOpenState={modalOpenState}
                    />
                </div>
            </Stack>
        </Container>
    )
}

export default Layout
