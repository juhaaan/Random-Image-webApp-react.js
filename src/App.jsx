import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from './components/Image/Image'

function App() {
  const [apiData,setApiData] = useState(null)
  const [change, setChange] = useState(false)

   useEffect(()=>{
    const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API_KEY
    const url = 'https://api.unsplash.com/photos/random' + `?client_id=${UNSPLASH_KEY}`
    axios.get(url).then(res=> {
      setApiData(res.data)
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[change])
  
  return (
    <>
    <div className="Page-header"><h1>Random Image App</h1></div>
    <Image data={apiData}></Image>
    <footer className='MainContainer' >
      <button onClick={()=> setChange(!change)}>Get new image</button>
      <h1>{apiData?.alt_description}</h1>
      {apiData?.location.name && <div><h3>{apiData?.location.name}</h3></div>}
    </footer>
    </>
  )
}

export default App
