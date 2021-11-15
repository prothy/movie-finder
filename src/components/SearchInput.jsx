import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Button } from '@material-ui/core'
import _ from 'lodash'

import './SearchInput.css'

const SearchInput = ({ resultsState, detailedResultsState }) => {    
    const [, setResults] = resultsState
    const [, setDetailedResults] = detailedResultsState
    const [searchVal, setSearchVal] = useState('')

    const searchDatabase = async (ev) => {
        ev.preventDefault()

        try {
            const query = `
            query SearchMovies {
                searchMovies(query: "${searchVal}") {
                  id
                  name
                  overview
                  releaseDate
                  cast {
                    id
                    person {
                      name
                    }
                    role {
                      ... on Cast {
                        character
                      }
                    }
                  }
                }
              }
            `

            const response = await fetch('https://tmdb.sandbox.zoosh.ie/dev/graphql', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query
                })
            })

            const responseObj = await response.json()
            const moviesArr = responseObj.data.searchMovies

            setDetailedResults(moviesArr)
            // below is used for overview when listing results
            setResults(moviesArr.map(movie => {
                movie.year = new Date(movie.releaseDate).getFullYear()
                return _.pick(movie, ['id', 'name', 'year'])
            }))

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
            <Button variant='outlined' size="large" type="submit">Search</Button>
        </form>
    )
}

export default SearchInput
