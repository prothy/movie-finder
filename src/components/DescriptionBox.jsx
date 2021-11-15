import React, { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material'
import { Container } from '@material-ui/core'

import Description from './Description'
import { fetchArticleTitle, fetchImdbId } from '../util/Queries'

const DescriptionBox = ({ selectedState, resultsState }) => {
    const [selected, ] = selectedState
    const [results, ] = resultsState

    const [info, setInfo] = useState({})

    const [loading, setLoading] = useState(false)

    const fetchMovie = async () => {
        setLoading(true)

        const selectedMovie = results.filter(movie => movie.id === selected)[0]

        try {
            const wpTitle = await fetchArticleTitle(selectedMovie.name, selectedMovie.year)
            const imdbId = await fetchImdbId(selectedMovie.name, selectedMovie.year)

            console.log(wpTitle)

            setInfo(prevState => ({
                ...prevState,
                title: wpTitle,
                wikipedia: 'https://en.wikipedia.org/wiki/' + wpTitle,
                imdb: 'https://imdb.com/title/' + imdbId
            }))

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
                ) : <Description info={info}/>
            }
        </Container>
    )
}

export default DescriptionBox
