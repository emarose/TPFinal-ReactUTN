import React from "react"
import Spinner from 'react-bootstrap/Spinner'
function Loading (props){
  const styles = {
    loadingWrapper: {
        display: "flex",
        flexDirection:"column",
        height:"68vh",
        alignItems:"center",
        justifyContent:"center"
    }
  };
    const {active} = props
    if(active){
      return(
          <>
            <div style={styles.loadingWrapper}>
              <h3>Cargando contenido</h3>
              <div className="spinners">
                <Spinner animation="grow" />
                <Spinner animation="grow" />
                <Spinner animation="grow" />
              </div>
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