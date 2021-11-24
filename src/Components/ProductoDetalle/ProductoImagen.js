import React from "react"

const styles = {
    imagen:{
        maxWidth:"50px"
    }
}
function ProductoImagen (props){
    const {datos} = props
    console.log(props.datos)
    
    return(
        <img style={styles.imagen} src={datos.url} alt="imagen Producto"></img>
    )

}
export default ProductoImagen