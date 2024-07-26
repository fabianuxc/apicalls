import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import data from './data.json'
import { getData } from './services/movies'


const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`

function App() {
  const [count, setCount] = useState(0)
  const [fact, setFact] = useState()

  // imprime Promise pending
  console.log(getData())


  // imprime los datos al resolver la promesa
  getData()
    .then(response => console.log(response))

  
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        console.log(fact)
      })
  }, [])

  



  return (
    <>
      <div>
        {fact}
        
      </div>
    
    </>
  )
}

export default App
