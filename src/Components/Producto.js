import React from "react"
import {Link} from "react-router-dom"
import {Card,Button} from 'react-bootstrap'
import AuthContext from "../Context/AuthContext"
const styles = {
  button:{
    marginRight:"5px"
  }
}
function Producto (props){
        const {datos,handleDelete} = props
        console.log(props.datos)
    
        return(
            <AuthContext.Consumer>
              {
                context=>
                <Card style={{ width: '15rem' }} className="card">
                  <Card.Body>
                    <Card.Title>{datos.title}</Card.Title>
                    <Card.Text style={styles.cardText}>
                     <p>$ {datos.price}</p>
                     <p>Descripcion: {datos.description}</p>
                     <p>SKU: {datos.sku}</p>
                    </Card.Text>
                  
                    <Button style={styles.button} variant="primary" as={Link} to={"/producto/"+datos.id}>Ver detalle</Button>
                    {
                      context.userLogin &&
                      <div>
                      <Button style={styles.button} variant="primary" as={Link} to={"/producto/modificar/"+datos.id}>Modificar</Button>
                      <Button variant="danger" onClick={(event)=>handleDelete(datos.id)}>X</Button>
                      </div>
                    }
                
                  
                  </Card.Body>
                </Card>
              }
            
            </AuthContext.Consumer>
        )
      
    
    
    
}
export default Producto