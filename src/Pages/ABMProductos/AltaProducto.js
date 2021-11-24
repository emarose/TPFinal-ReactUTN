import React from "react"
import { useForm } from "react-hook-form";
import FormGroup from "../../Components/FormGroup";
import Button from 'react-bootstrap/Button'
import firebase from '../../Config/firebase'
import {useNavigate} from "react-router-dom"
function AltaProducto (){
    //console.log(firebase.db)
    const { register, handleSubmit,formState:{errors} } = useForm();
    const navigate = useNavigate()
    const onSubmit = async (data) => {
        console.log("data",data);
        try{
            const document = await firebase.db.collection("productos")
            .add(data)
            console.log(document)
            navigate("/")
        }catch(e){
            console.log("error",e)  
        }    
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("title",{required:true})}}  />
                {errors.nombre && <span>El campo es obligatorio</span>}
                <FormGroup label="Precio" register={{...register("price",{required:true})}}  />
                <FormGroup label="Descripcion" type="text" register={{...register("description",{required:true})}}  />
                <FormGroup label="Sku" type="text" register={{...register("sku",{required:true})}}  />

                <Button type="submit" variant="primary">Guardar</Button>
            </form>
        </div>
    )
      
    
    
    
}
export default AltaProducto