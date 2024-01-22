import { useEffect,useState } from "react"
import { NavLink } from "react-router-dom"
export function Header (){
    return(
        <div> 
         <ul>
            <NavLink to="/characters">Герои</NavLink>
            <NavLink to='/location' style={{marginLeft:'10px'}}>Локации</NavLink>
            <NavLink to='/episode' style={{marginLeft:'10px'}}>Эпизоды</NavLink>
        </ul>
        </div>
    )
}