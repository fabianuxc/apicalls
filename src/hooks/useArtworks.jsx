import data from '../mocks/results.json'
import { getArtworks } from '../services/artworks'


export function useArtworks() {
    const data = getArtworks()
    setTimeout(() => {
        
    }, 6000);
    console.log("datos " + data)
    return data
}