import React, { useState } from 'react'
import DescriptionBox from './DescriptionBox'

import SearchInput from './SearchInput'
import SearchResults from './SearchResults'

import { Container } from '@material-ui/core'
import { Stack } from '@mui/material'

const Layout = () => {
    const resultsState = useState([])
    const detailedResultsState = useState([])

    const selectedState = useState()

    return (
        <Container>
            <Stack spacing={2}>
                <div>
                    <SearchInput resultsState={resultsState} detailedResultsState={detailedResultsState} />
                </div>
                <div>
                    <SearchResults resultsState={resultsState} selectedState={selectedState}/>
                    <DescriptionBox detailedResultsState={detailedResultsState} selectedState={selectedState}/>
                </div>
            </Stack>
        </Container>
    )
}

export default Layout
