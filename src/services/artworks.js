const API_URL = 'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,description,image_id'

export function getArtworks_fetch() {

    return fetch(API_URL)
        .then(res => res.json())
        .then(data => data.data)
        .catch(error => console.error('Error fetching artwork' + error))

}

export const getArtworks = async () => {
    try {
        const response = await fetch(API_URL)
        const data = await response.json()
        const { data: artworks } = data
        return artworks
    } catch (error) {
        console.error('Error fetching artwork' + error)
    }
}