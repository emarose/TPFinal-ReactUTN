import React from "react"
function ProductoDetalle (props){
        const {datos} = props
        console.log(props.datos)
    
        return(
            <>
            <h1>{datos.title}</h1>
            <p>$ {datos.price}</p>
            <p>{datos.description}</p>
            </>
        )

}
export default ProductoDetalle