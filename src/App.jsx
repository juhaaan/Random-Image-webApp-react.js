import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from './components/Image/Image'
import Description from './components/Description/Description'
import Location from './components/Location/Location'

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
  //scale the picture, delete default margin
  //app name random image
  return (
    <>
    <div className="Page-header"><h1>Random Image App</h1></div>
    <Image data={apiData}></Image>
    <footer className='MainContainer' >
      <button onClick={()=> setChange(!change)}>New Image</button>
      <Description data={apiData}></Description>
      {apiData?.location.name && <Location data={apiData}></Location>}
    </footer>
    </>
  )
}

export default App
