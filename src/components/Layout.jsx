import React, { useState } from 'react'
import DescriptionBox from './DescriptionBox'

import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

import { Container } from '@material-ui/core'
import { Stack } from '@mui/material'

const Layout = () => {
    const resultsState = useState([]) //used for basic overview of search results in list
    const detailedResultsState = useState([])  //used when clicking on a result to display full information
    const resultsLoadingState = useState(false)

    const selectedState = useState()
    // const [ selected, ] = selectedState

    const modalOpenState = useState(false)

    return (
        <Container>
            <Stack spacing={2}>
                <div>
                    <SearchInput 
                        resultsState={resultsState} 
                        detailedResultsState={detailedResultsState} 
                        resultsLoadingState={resultsLoadingState}
                    />
                </div>
                <div>
                    <SearchResults 
                        resultsState={resultsState} 
                        selectedState={selectedState}
                        resultsLoadingState={resultsLoadingState}
                        modalOpenState={modalOpenState}
                    />
                    <DescriptionBox 
                        detailedResultsState={detailedResultsState} 
                        selectedState={selectedState}
                        resultsState={resultsState}
                        modalOpenState={modalOpenState}
                    />
                </div>
            </Stack>
        </Container>
    )
}

export default Layout
