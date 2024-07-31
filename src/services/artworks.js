import { API_SEARCH_URL, API_URL } from "../utils/constants"

export function getArtworks_fetch() {

    return fetch(API_URL)
        .then(res => res.json())
        .then(data => data.data)
        .catch(error => console.error('Error fetching artwork' + error))

}

export const getSingleArtwork = async (url) => {
    try {
        const response = await fetch(`${url}?fields=id,title,artist_display,date_display,description,image_id`)
        const data = await response.json()
        const { data: artwork } = data
        return artwork
    } catch (error) {
        console.error('Error fetching artworks' + error)
    }
}

const search = async (query) => {
    try {
        const url = `${API_SEARCH_URL}q=${query}&fields=api_link`
        console.log(url)
        const response = await fetch(url)
        const data = await response.json()
        const { data: urls } = data
        let artworks = []
        for (const { api_link: url } of urls) {
            const artwork = await getSingleArtwork(url)
            artworks.push(artwork)
        }
        console.log("artworks: ", artworks)
        return artworks
    } catch (error) {
        console.error('Error fetching artworks' + error)
    }
}

export const getArtworks = async ({ query }) => {

    if (query === '') {
        try {
            const response = await fetch(API_URL)
            const data = await response.json()
            const { data: artworks } = data
            return artworks
        } catch (error) {
            console.error('Error fetching artwork' + error)
        }
    } else {
        const results = await search(query)
        return results
    }

    return null

}