"use client";
import { useEffect } from "react"

export default function Error({error,reset}){
    useEffect(()=>{
        console.log("error");

    },[error])
  return (
    <div>
        <h1>SOMETHING WENT WRONG </h1>
        <button onClick={reset}>TRY AGAIN</button>
      
    </div>
  )
}
