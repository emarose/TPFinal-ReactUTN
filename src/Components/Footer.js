import React from "react"
import { Link } from "react-router-dom"
import'./Footer.css'
import logo from '../logo.png'

function Footer (){
     return(
            <footer>
               <ul>
                  <li><Link to="/">Inicio</Link></li>
                  <li><Link to="/ingresar">Ingresar</Link></li>
                  <li><img src={logo} alt="logo" /></li>
               </ul> 
            </footer>
        )
    
}
export default Footer