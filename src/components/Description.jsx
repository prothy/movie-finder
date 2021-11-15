import React from 'react'

const Description = ({ info }) => {
    return (
        <article>
            <h2>{info.name}</h2>
            <div>
                { info.imdb ? <a href={info.imdb} target="_blank" rel="noreferrer">IMDB</a> : 'IMDB Link unavailable ' }
                { info.wikipedia ? <a href={info.wikipedia} target="_blank" rel="noreferrer">Wikipedia</a> : 'Wikipedia Link unavailable ' }
            </div>
            <p>{info.excerpt} {info.excerpt.length >= 800 ? <a href={info.wikipedia} target="_blank" rel="noreferrer">Read more</a> : ''}</p>
            <div>
                <h3>Cast</h3>
                {info.cast.slice(0, 8).map(member => member.person.name).join('; ') }
            </div>
            <div>
                <h3>Similar movies</h3>
                { info.similar.slice(0, 10).map(similar => similar.name).join('; ') }
            </div>
        </article>
    )
}

export default Description
