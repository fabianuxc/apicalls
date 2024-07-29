const API_URL = 'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,description,image_id'

export function getArtworks() {

    return fetch(API_URL)
    .then(res => res.json())
    .then(data => data.data)
    .catch(error => console.error('Error fetching artwork' + error))

}