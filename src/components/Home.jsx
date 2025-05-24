import api from "../assets/axios"
import React, { useEffect } from 'react'

function Home() {
  useEffect(()=>{
    api.get("/healthcheck")
    .then((response)=>{
      console.log(response)
    }).catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
    </div>
  )
}

export default Home