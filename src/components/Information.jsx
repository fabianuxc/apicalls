import { API_INFORMATION_URL, IMG_BASE_URL } from "../utils/constants"
import '../App.css' 
import { useEffect, useState } from "react"
import { getSingleArtwork } from "../services/artworks"


function Information() {

    const [apiUrl, setApiUrl] = useState('')
    const [artwork, setArtwork] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        const url = window.location.href;
        const id = url.split('/').pop();
        const apiUrl = `${API_INFORMATION_URL}${id}`
        setApiUrl(apiUrl)
        getSingleArtwork(apiUrl)
            .then(res => { setArtwork(res) 
                console.log(apiUrl)
                console.log(artwork)
                setLoading(false)
            })
            .catch(error => console.error("Error: ", error))
    }, [])

    return (
       loading ? 
       <span className="loader"></span> :
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