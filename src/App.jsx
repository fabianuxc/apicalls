import { useEffect, useState, useRef } from 'react'
import './App.css'
import Artworks from './components/Artworks'
import { getArtworks } from './services/artworks.js'
import Information from './components/Information.jsx'

function App() {

  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const [artworks, setArtworks] = useState([])
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    getArtworks({ query })
      .then(res => setArtworks(res))
      .catch(error => console.error("Error ", error))
  }, [])

  const handleSubmit = (event) => {
    setArtworks([])
    setLoading(true)
    event.preventDefault()
    getArtworks({ query })
      .then(res => {
        setLoading(false)
        setArtworks(res)
      })
      .catch(error => console.error("Error ", error))
  }

  return (
    
    <div className='page'>
      <header>
        <h1 style={{ textAlign: 'center' }}>Arte</h1>
        <form onSubmit={handleSubmit}>
          <input value={query}
            placeholder='Starry Night, The Bath, The Praying Jew...'
            onChange={event => setQuery(event.target.value)}>

          </input>
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>

        { currentPath === '/' && (loading ?
          <span className="loader"></span> :
          <Artworks artworks={artworks}></Artworks>) }
        
        { currentPath !== '/' && <Information artwork={artworks[0]}></Information>

        }



      </main>
    </div>
  )
}

export default App
