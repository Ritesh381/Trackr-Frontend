import api from "../assets/axios"
import React, { useEffect } from 'react'
import DeadlineWindow from "./DeadlineWindow"

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
        Trackr home page
        <DeadlineWindow/>
    </div>
  )
}

export default Home