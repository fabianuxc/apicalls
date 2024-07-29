import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useArtworks } from './hooks/useArtworks'
import { Artworks } from './components/Artworks'
import { getArtworks } from './services/artworks.js'

function App() {

  const [artworks, setArtworks] = useState([])
  useEffect(() => {
    getArtworks().then(res => setArtworks(res)).catch(error => console.error("Error ", error))
  }, [])
  
  //const artworks = useArtworks()

  //const aux = getArtworks().then(res => console.log(res))

  console.log('artworks: ', artworks)
  return (
    <div className='page'>
      <main>


        <Artworks artworks={artworks}></Artworks>


      </main>
    </div>
  )
}

export default App
