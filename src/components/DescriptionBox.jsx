import React, { useEffect, useState } from 'react'
import { Skeleton } from '@mui/material'
import { Container, Modal } from '@material-ui/core'

import Description from './Description'
import { fetchArticleExcerpt, fetchArticleTitle, fetchImdbId } from '../util/Queries'

const DescriptionBox = ({ selectedState, resultsState, modalOpenState }) => {
    const [selected, ] = selectedState
    const [results, ] = resultsState
    const [modalOpen, setModalOpen] = modalOpenState

    const [info, setInfo] = useState({})

    const [loading, setLoading] = useState(false)

    const fetchMovie = async () => {
        setLoading(true)

        const selectedMovie = results.filter(movie => movie.id === selected)[0]

        try {
            const wpTitle = await fetchArticleTitle(selectedMovie.name, selectedMovie.year)
            const imdbId = await fetchImdbId(selectedMovie.name, selectedMovie.year)

            const excerpt = await fetchArticleExcerpt(wpTitle)

            setInfo(prevState => ({
                ...prevState,
                wikipedia: 'https://en.wikipedia.org/wiki/' + wpTitle,
                imdb: 'https://imdb.com/title/' + imdbId,
                excerpt
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
        <Modal 
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            <Container style={{
                background: 'white',
                border: '1px solid #ccc',
                borderRadius: '5px',
                height: '30rem',
                overflow: 'hidden'
            }}>
                { 
                    loading ? (
                        <>
                            <Skeleton />
                            <Skeleton height='20rem'/>
                        </>
                    ) : <Description info={info}/>
                }
            </Container>
        </Modal>
    )
}

export default DescriptionBox
