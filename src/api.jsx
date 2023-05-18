import axios from "axios"
// import App from "./App"
// import { useState } from "react"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const movieList = async () => {
    const movie = await axios.get(`
        ${baseUrl}/movie/popular?page=1&api_key=${apiKey}
    `)
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`
        ${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}
    `)
    return search.data
}

export const genreList = async () => {
    const genre = await axios.get(`
        ${baseUrl}/genre/movie/list?api_key=${apiKey}
    `)
    return genre.data
}

export const searchGenre = async (q) => {
    const sGenre = await axios.get(`
    ${baseUrl}/search/movie?${apiKey}&genre_ids=${99}
    `)

    return sGenre.data
}