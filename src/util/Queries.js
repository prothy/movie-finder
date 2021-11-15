export const fetchArticleTitle = async (name, year) => {
    const response = await fetch('https://en.wikipedia.org/w/api.php?' + new URLSearchParams({
        action: 'query',
        list: 'search',
        srsearch: `intitle: "${name + ' ' + year + ' incategory:English-language_films'}"`,
        format: 'json'
    }), {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
    const foundArticles = await response.json()

    return foundArticles.query.search[0].title
}

export const fetchMoviesByQuery = async (searchVal) => {
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
    return responseObj.data.searchMovies
}