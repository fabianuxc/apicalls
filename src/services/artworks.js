import { API_SEARCH_URL, API_URL } from "../utils/constants"

export function getArtworks_fetch() {

    return fetch(API_URL)
        .then(res => res.json())
        .then(data => data.data)
        .catch(error => console.error('Error fetching artwork' + error))

}

export const getArtworks = async ({ query }) => {

    console.log(query)
    if (query === '') {
        try {
            console.log("aqui")
            const response = await fetch(API_URL)
            const data = await response.json()
            const { data: artworks } = data
            return artworks
        } catch (error) {
            console.error('Error fetching artwork' + error)
        }
    } else {
        try {
            const url = `${API_SEARCH_URL}q=${query}&fields=api_link`
            console.log(url)
            const response = await fetch(url)
            const data = await response.json()
            const { data: urls } = data
            let artworks = []
            for (const { api_link: url} of urls) {
                try {
                    const response = await fetch(`${url}?fields=id,title,artist_display,date_display,description,image_id`)
                    const data = await response.json()
                    const { data: artwork } = data
                    artworks.push(artwork)
                } catch (error) {
                    console.error('Error fetching artworks' + error)
                }
            }
            console.log("artworks: ", artworks)
            return artworks
        } catch (error) {
            console.error('Error fetching artworks' + error)
        }
    }

    console.log("fuera del if")
    return null
    
}