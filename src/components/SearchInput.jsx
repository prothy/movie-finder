import React from 'react'
import { TextField } from '@mui/material'
import { Button } from '@material-ui/core'

import './SearchInput.css'

const SearchInput = ({ resultsState }) => {    
    const [, setResults] = resultsState

    const searchDatabase = async (ev) => {
        const searchVal = ev.target.value

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

            setResults(moviesArr)

        } catch (e) {
            console.error(e)
        }
    }

    return (
        <span className="search-input">
            <TextField 
                label="Movie name" 
                margin="dense"
                variant="outlined"
                onChange={ev => {if (ev.target.value.length > 2) searchDatabase(ev)}} 
            />
            <Button variant='outlined' size="large">Search</Button>
        </span>
    )
}

export default SearchInput
