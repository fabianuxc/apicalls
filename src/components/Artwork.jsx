import { IMG_BASE_URL } from "../utils/constants"

function Artwork({ artwork }) {
    return (
        <a href={`/${artwork.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <li className="artwork" key={artwork.id}>
                <h4>{artwork.title}</h4>

                <p>Autor: {artwork.artist_display}</p>

                <img src={`${IMG_BASE_URL}/${artwork.image_id}/full/843,/0/default.jpg`}></img>
            </li>
        </a>
    )
}

export default Artwork