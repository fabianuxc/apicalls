import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useArtworks } from './hooks/useArtworks'
import { Artworks } from './components/Artworks'

function App() {


  const artworks = useArtworks()


  return (
    <div className='page'>
      <main>


        <Artworks artworks={artworks}></Artworks>


      </main>
    </div>
  )
}

export default App
