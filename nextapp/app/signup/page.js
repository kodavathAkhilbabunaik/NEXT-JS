"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
export default function Signup(){
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    return(
        <div>
            <input type="username" placeholder="USERNAME" onChange={(e)=>{
                setUsername(e.target.value);
            }}></input>
            <br/>
            <input type="password" placeholder="PASSWORD" onChange={(e)=>{
                setPassword(e.target.value);
            }}></input>
            {console.log(username,password)}
            <br/>
            <button onClick={async()=>{
                await axios.post("http://localhost:3000/api/user",{username,password})

            }}>SIGNUP</button>

        </div>
    )
}