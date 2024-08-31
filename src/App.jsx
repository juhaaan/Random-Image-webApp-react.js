import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from './components/Image/Image'
import Description from './components/Description/Description'
import Location from './components/Location/Location'

function App() {
  const [apiData,setApiData] = useState(null)

   useEffect(()=>{
    const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_API_KEY
    const url = 'https://api.unsplash.com/photos/random' + `?client_id=${UNSPLASH_KEY}`
    axios.get(url).then(res=> {
      setApiData(res.data)
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  //scale the picture, delete default margin 
  
  return (
    <>
    <div className='MainContainer' >
      <Description data={apiData}></Description>
      <button>New Image</button>
      {apiData?.location.name && <Location data={apiData}></Location>}
    </div>
    <Image data={apiData}></Image>
    </>
  )
}

export default App
