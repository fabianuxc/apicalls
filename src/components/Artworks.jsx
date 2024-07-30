import Artwork from "./Artwork"

function Artworks({ artworks }) {
    return (
        <ul className="artworks">
            {  console.log("dentro de Artworks.jsx:", artworks) }
            {
               
                artworks?.map((a, index) => (
                    <Artwork artwork={a} key={index}></Artwork>
                ))
            }
        </ul>
        
    )
}

export default Artworks