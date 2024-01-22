import { Outlet, useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import { Details } from "./details";
export function Main(){
    const params=useParams()
    console.log('params', params);
    useEffect(()=>{
        console.log(params);
    },[params])
 const [data, setData]=useState([])
useEffect(()=>{
    fetch(`http://localhost:3000/data/${params.id}.json`)
      .then(response =>response.json())
      .then(json =>{setData(json)
      }
      )},[params])

    return(
  <div>
       {data.map((number) =><Link state={number} to={number.name}>{number.name}</Link>)}
       <Outlet/>
      </div>          
        
    )   
}