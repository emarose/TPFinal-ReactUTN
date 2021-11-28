import React,{useState,useEffect} from "react"
import { useParams } from "react-router"
import firebase from '../../Config/firebase'
import Button from 'react-bootstrap/Button'
import FormGroup from "../../Components/FormGroup";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import Loading from "../../Components/Loading";

function ModificarProducto (){
    //Modificar producto
    const { register, handleSubmit,setValue } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        console.log("data",data);
        try{
            const document = await firebase.db.doc("productos/"+id)
            .set(data)
            console.log("modificar",document)
            navigate("/")
        }catch(e){
            console.log("error",e.code)
            if(e.code==="auth/email-already-in-use"){
                alert("El email esta registrado")
            }
        }
    }
    
    const [loading,setLoading] = useState(true)
    const {id}=useParams()
    console.log(id)
    useEffect(
        ()=>{
            async function request(){
                try{
                    const response = await firebase.db.doc("productos/"+id)
                    .get()
                    if(response){
                        
                        setLoading(false)

                        setValue("title",response.data().title)
                        setValue("price",response.data().price)
                        setValue("description",response.data().description)
                        setValue("sku",response.data().sku)
               
                    }
                }catch(e){
                }
            }
            request()
        },[id, setValue]
    )
    const handleDelete = async ()=>{
        try{
            const document = await firebase.db.doc("productos/"+id)
            .delete()
            console.log(document)
            navigate("/")
        }catch(e){  
        }
    }
    
    return(
        <Loading active={loading}>
        <>
            <Button variant="danger" onClick={handleDelete}>Eliminar</Button>

            <h1>Modificar</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("title",{required:true})}}  />
                <FormGroup label="Precio" register={{...register("price",{required:true})}}  />
                <FormGroup label="Descripcion" type="text" register={{...register("description",{required:true})}}  />
                <FormGroup label="SKU" type="text" register={{...register("sku",{required:true})}}  />


                <Button type="submit" variant="primary">Guardar</Button>
            </form>
        </>
        </Loading>
        
    )

    
}
export default ModificarProducto