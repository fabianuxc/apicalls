
const IMG_BASE_URL = 'https://www.artic.edu/iiif/2/'
function Artwork({ artwork }) {
    return (
        <li className="artwork" key={artwork.id}>
            <h4>{artwork.title}</h4>
            
            <p>Autor: {artwork.artist_display}</p>
            <p>Fecha: {artwork.date_display}</p>
            { artwork.description === null ? 
                <p>No hay descripción</p> : 
                <p>{artwork.description}</p>
            }
            <img src={`${IMG_BASE_URL}/${artwork.image_id}/full/843,/0/default.jpg`}></img>
        </li>
    )
}

export function Artworks({ artworks }) {
    return (
        <ul className="artworks">
            {
                artworks.map(a => (
                    <Artwork artwork={a}></Artwork>
                ))
            }
        </ul>
    )
}