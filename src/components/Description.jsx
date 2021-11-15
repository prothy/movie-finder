import { Divider, Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import React from 'react'

const Description = ({ info }) => {
    return (
        <article>
            <Typography variant="h2">{info.name}</Typography>
            <Box sx={{ m: 2 }}>
                <Typography variant="button">{ info.imdb ? <a href={info.imdb} target="_blank" rel="noreferrer">IMDB</a> : 'No IMDB Link (Rate limit exceeded) ' }</Typography>
                <Typography variant="button">{ info.wikipedia ? <a href={info.wikipedia} target="_blank" rel="noreferrer">Wikipedia</a> : 'Wikipedia Link unavailable ' }</Typography>
            </Box>
            <Box sx={{ m: 2 }}>
                <Typography variant="h4">Description</Typography>
                <Typography variant="body1">{info.excerpt} {info.excerpt.length >= 800 ? <a href={info.wikipedia} target="_blank" rel="noreferrer">Read more</a> : ''}</Typography>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
                <Typography variant="h4">Cast</Typography>
                <Typography variant="body1">{info.cast.slice(0, 8).map(member => member.person.name).join('; ') }</Typography>
                
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
                <Typography variant="h4">Similar movies</Typography>
                <Typography variant="body1">{ info.similar.slice(0, 10).map(similar => similar.name).join('; ') }</Typography>

            </Box>
        </article>
    )
}

export default Description
