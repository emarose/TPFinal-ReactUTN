import React from "react"
import './ProductoDetalle.css'

function ProductoDetalle (props){
        const {datos} = props
        console.log(props.datos)
       
        return(
            <>
            <section className="detalleProductoWrap">
                <h1>Detalle del producto</h1>
                <hr/>
                <h2>{datos.title}</h2>
                <p>$ {datos.price}</p>
                <p>{datos.description}</p>
            </section>
            </>
        )

}
export default ProductoDetalle