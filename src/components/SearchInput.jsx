import React from 'react'
import { TextField } from '@mui/material'

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
        <TextField 
            label="Search for movie" 
            margin="dense"
            placeholder="Begin typing..."
            variant="outlined"
            onChange={ev => {if (ev.target.value.length > 2) searchDatabase(ev)}} 
        />
    )
}

export default SearchInput
