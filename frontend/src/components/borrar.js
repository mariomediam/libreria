const movies = [
    {
        "id": 1,
        "title": "The Shawshank Redemption",
        "year": 1994,
        "director": "Frank Darabont",
        "duration": "2h 22min",
    },
    {
        "id": 2,
        "title": "The Godfather",
        "year": 1972,
        "director": "Francis Ford Coppola",
        "duration": "2h 55min",
    },
    {
        "id": 3,
        "title": "The Godfather: Part II",
        "year": 1974,
        "director": "Francis Ford Coppola",
        "duration": "3h 22min",
    }
]

const inputUdapte = {
    "id": 2,
    "year": 1977,
}

const movieIndex = movies.findIndex(movie => movie.id === inputUdapte.id)

const updateMovie = { ...movies[movieIndex], ...inputUdapte}

movies[movieIndex] = updateMovie

console.log(movies)

