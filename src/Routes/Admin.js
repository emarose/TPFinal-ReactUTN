import React,{useState,useEffect} from "react"
import {
    Switch,
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
            <Switch>
            <Redirect path="/home" to="/"/>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
            </Switch>
            <Footer />
        </>
    )

}
export default Admin