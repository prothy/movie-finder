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
    const [ selected, ] = selectedState

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
                <Stack direction='row' height={'40rem'}>
                    <SearchResults 
                        resultsState={resultsState} 
                        selectedState={selectedState}
                        resultsLoadingState={resultsLoadingState}
                    />
                    {
                        selected ? 
                            <DescriptionBox 
                                detailedResultsState={detailedResultsState} 
                                selectedState={selectedState}
                                resultsState={resultsState}
                            /> : <span>Select an item</span>
                    }
                </Stack>
            </Stack>
        </Container>
    )
}

export default Layout
