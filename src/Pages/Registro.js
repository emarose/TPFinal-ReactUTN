import React,{useState} from "react"
import { useForm } from "react-hook-form";
import FormGroup from "../Components/FormGroup";
import firebase from '../Config/firebase'
import ButtonWithLoading from "../Components/ButtonWithLoading";
import AlertCustom from "../Components/AlertCustom";

function Registro (){
    //console.log(firebase.db)
    const { register, handleSubmit,formState:{errors} } = useForm();
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""})
    const onSubmit = async (data) => {
        setLoading(true)
        console.log("data",data);
        try{
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password)
            console.log("user",responseUser.user.uid)
            if(responseUser.user.uid){
                const document = await firebase.db.collection("usuarios")
                .add({
                    nombre:data.nombre,
                    apellido:data.apellido,
                    userId:responseUser.user.uid
                })
                console.log("document",document)
                setLoading(false)
                setAlert({variant:"success",text:"Registro exitoso"})
            }
        }catch(e){
            console.log("error",e.code)
            setLoading(false)
            if(e.code==="auth/email-already-in-use"){
                setAlert({variant:"danger",text:"El email se encuentra registrado"})
            }
        }
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("nombre",{required:true})}}  />
                {errors.nombre && <span>El campo es obligatorio</span>}
                <FormGroup label="Apellido" register={{...register("apellido",{required:true})}}  />
                <FormGroup label="Email" type="email" register={{...register("email",{required:true})}}  />
                <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:2})}}  />
                {errors.password?.type==="required" && <span>El campo es obligatorio</span>}
                {errors.password?.type==="minLength" && <span>Debe completar al menos 6 caracteres</span>}
        
                <ButtonWithLoading loading={loading} type="submit" >Registrarme</ButtonWithLoading>
                <AlertCustom variant={alert.variant} text={alert.text}  />
            </form>
        </div>
    )
      
    
    
    
}
export default Registro