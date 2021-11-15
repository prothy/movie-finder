export const fetchArticleTitle = async (name, year) => {
    const response = await fetch('https://en.wikipedia.org/w/api.php?' + new URLSearchParams({
        action: 'query',
        list: 'search',
        srsearch: `"${name + '" film ' + year}`,
        format: 'json',
        origin: '*'
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        mode: 'cors'
    })
    
    const foundArticles = await response.json()

    return foundArticles.query.search[0].title
}

export const fetchArticleExcerpt = async (title) => {
    const response = await fetch('https://en.wikipedia.org/w/api.php?' + new URLSearchParams({
        action: 'query',
        prop: 'extracts',
        exlimit: 1,
        exintro: true,
        exchars: 800,
        titles: title,
        explaintext: true,
        format: 'json',
        origin: '*'
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        mode: 'cors'
    })

    const articleData = await response.json()

    const page = Object.keys(articleData.query.pages)[0]

    return articleData.query.pages[page]?.extract
}

export const fetchImdbId = async (name, year) => {
    // normally i would store an api key in an environment variable, but left it in so you don't have to get one separately
    const response = await fetch('https://imdb-api.com/en/API/SearchMovie/k_7dlewn2s/' + name + ' ' + year)

    const foundMovies = await response.json()

    return foundMovies.results ? foundMovies.results[0].id : undefined
}

export const fetchMoviesByQuery = async (searchVal) => {
    const query = `
    query SearchMovies {
        searchMovies(query: "${searchVal}") {
          id
          name
          releaseDate
          similar {
              id
              name
          }
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
    return responseObj.data.searchMovies
}
