import { useEffect, useState } from 'react'
import './App.css'
import Artworks from './components/Artworks'
import { getArtworks } from './services/artworks.js'

function App() {

  const [artworks, setArtworks] = useState([])
  useEffect(() => {
    getArtworks().then(res => setArtworks(res)).catch(error => console.error("Error ", error))
  }, [])
  


  return (
    <div className='page'>
      <main>


        <Artworks artworks={artworks}></Artworks>


      </main>
    </div>
  )
}

export default App
