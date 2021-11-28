import React,{useState,useEffect} from "react"
import Producto from "../Components/Producto"
import {Col, Row, CardGroup} from 'react-bootstrap'
import firebase from '../Config/firebase'
import './Home.css'
import Loading from "../Components/Loading"
import Slide from '../Components/MarcasSlideshow/MarcasSlideshow'

function Home (){
    const [productos,setProductos] = useState([])
    const [loading,setLoading] = useState(true)
    const [reload,setReload]=useState(true)   
    async function request(){
        try{
            const querySnapshot = await firebase.db.collection("productos")
            .get()
            if(querySnapshot.docs){
                setProductos(querySnapshot.docs)
                setLoading(false)
                setReload(false)
            }
        }catch(e){
        }
    }
    
    useEffect(
        ()=>{
            if(reload)request()
        },[reload]
    )
    const handleDelete = async (id)=>{
        try{
            console.log("Eliminar",id)
            const document = await firebase.db.doc("productos/"+id)
            .delete()
            console.log(document)
            setReload(true)
        }catch(e){
        }
    }
   
    return(
        <Loading active={loading}>
            <>
                <section className="heroBG">
                    <h1 className="text-center">Rose eCommerce</h1>
                </section>

                <h1 className="titulo">ULTIMOS INGRESOS</h1>

                <div className="cardsContainer">
                    {productos.map(producto=>
                    <Col className="cardCol" md={3}>
                        <Producto key={producto.id} datos={{...producto.data(),id:producto.id}} handleDelete={handleDelete} />
                    </Col>
                    )}
                </div>
 
                <Slide/>
 
            </>
        </Loading>
        
    )
        
    
    
    
}
export default Home