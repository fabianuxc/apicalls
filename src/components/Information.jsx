import { IMG_BASE_URL } from "../utils/constants"
import '../App.css' 

function Information({ artwork }) {
    return (
       
        <li className="artwork" style={{listStyle:'none'}}>
            <h4>{artwork?.title}</h4>

            <p>Autor: {artwork?.artist_display}</p>
            <p>Fecha: {artwork?.date_display}</p>
            {artwork?.description === null ?
                <p>No hay descripción</p> :
                <p>{artwork?.description.replace(/<\/?[^>]+>/gi, '')}</p>
            }
            <img src={`${IMG_BASE_URL}/${artwork?.image_id}/full/843,/0/default.jpg`}></img>
        </li>
    

       
    )
}

export default Information