import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@material-ui/core'

import '../style/SearchInput.css'
import { fetchMoviesByQuery } from '../util/Queries'

const SearchInput = ({ detailedResultsState, resultsLoadingState }) => { 
    const [, setResults] = detailedResultsState
    const [resultsLoading, setResultsLoading] = resultsLoadingState

    const [searchVal, setSearchVal] = useState('')

    const searchDatabase = async (ev) => {
        ev.preventDefault()
        setResultsLoading(true)

        try {
            const moviesArr = await fetchMoviesByQuery(searchVal)
            console.log(moviesArr)

            setResults(moviesArr)

            setResultsLoading(false)

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <form className="search-input" onSubmit={searchDatabase}>
            <TextField 
                label="Movie name" 
                margin="dense"
                variant="outlined"
                onChange={ev => setSearchVal(ev.target.value)} 
            />
            <Button variant='outlined' size="large" type="submit">{resultsLoading ? 'Searching...' : 'Search'}</Button>
        </form>
    )
}

export default SearchInput
