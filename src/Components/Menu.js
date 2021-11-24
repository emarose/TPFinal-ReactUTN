import React from "react"
import {Link, NavLink} from "react-router-dom"
import logo from '../logo.png'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext"
import './Menu.css'
function Menu (){
    return(
        <>
            <AuthContext.Consumer>
                {
                    context=>
                    <>
                        <Navbar bg="light" sticky="top" className="bgnav" expand="lg">
                            <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                                {
                                    !context.userLogin &&
                                    <>
                                    <Nav.Link as={Link} to={{pathname:"/registro",state:{facebook:false}}}>Registro</Nav.Link>
                                    <Nav.Link as={Link} to="/ingresar">Ingresar</Nav.Link>
                                    </>
                                }
                                {
                                    context.userLogin &&
                                    <>
                                        <NavDropdown title="Producto" id="basic-nav-dropdown">
                                            <NavDropdown.Item as={Link} to="/producto/alta">Alta</NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link id="salir" onClick={context.logoutUser}>Salir</Nav.Link>
                                        {
                                        context.userInfo &&
                                        <Nav.Link className="hola">Bienvenid@ {context.userInfo.nombre}!  </Nav.Link>
                                    }
                                    </>
                                }

                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        
                    </>
                }
                
            </AuthContext.Consumer>
        </>
    )
    
    
}
export default Menu