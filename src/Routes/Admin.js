import React,{useState,useEffect} from "react"
import {
    Routes,
    Route,
    Redirect
  } from "react-router-dom"
import Registro from '../Pages/Registro';
import Login from '../Pages/Login';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Detalle from '../Pages/Detalle';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
function Admin (){
    return(
        <>
            <Menu />
                <Routes>
                    <Redirect path="/home" to="/"/>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Routes>
            <Footer />
        </>
    )

}
export default Admin