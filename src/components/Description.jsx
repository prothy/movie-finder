import React from 'react'

const Description = ({ info }) => {
    return (
        <article>
            <h2>{info.name}</h2>
            <div>
                <a href={info.imdb} target="_blank" rel="noreferrer">IMDB</a>
                <a href={info.wikipedia} target="_blank" rel="noreferrer">Wikipedia</a>
            </div>
            <p>{info.overview}</p>
            <div>
                <h3>Cast</h3>
                {/* {info.cast.map(member => (
                    <span key={member.id}>
                        <h4>{member.person.name}</h4>
                        <p>as {member.role}</p>
                    </span>
                ))} */}
            </div>
            <div>
                <h3>Crew</h3>
            </div>
        </article>
    )
}

export default Description
