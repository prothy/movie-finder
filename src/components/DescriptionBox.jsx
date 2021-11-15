import React, { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material'
import { Container } from '@material-ui/core'

const DescriptionBox = ({ selectedState }) => {
    const [selected, ] = selectedState

    const [, setOverview] = useState({})

    const [loading, setLoading] = useState(false)

    const fetchMovie = async (id) => {
        setLoading(true)

        const query = `
        query getMovie {
            movie(id: ${id}) {
              id
              name
              overview
              cast(limit: 5) {
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
              crew(limit: 5) {
                id
                person {
                  name
                }
                role {
                  ... on Crew {
                    job
                    department
                  }
                }
              }
            }
          }
        `

        try {
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
            const movieObj = await response.json()

            setOverview(movieObj.data.movie)

            setLoading(false)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        fetchMovie(selected)
    }, [selected])

    return (
        <Container style={{ height: '100%' }}>
            { 
                loading ? (
                    <>
                        <Skeleton />
                        <Skeleton height='20rem'/>
                    </>
                ) : 'some data'
            }
        </Container>
    )
}

export default DescriptionBox
