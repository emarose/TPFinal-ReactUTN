import React from "react"
import Spinner from 'react-bootstrap/Spinner'
function Loading (props){
        const {active} = props
        if(active){
          return(
              <>
                <div className="d-flex justify-content-center align-items-center">
                  <h3>Cargando contenido</h3>
                  <Spinner animation="grow" />
                  <Spinner animation="grow" />
                  <Spinner animation="grow" />
                </div>
              </>
          )
        }else{
          return (
            <>
              {props.children}
            </>
          )
        }
      
    
}
export default Loading