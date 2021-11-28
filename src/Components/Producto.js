import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import AuthContext from "../Context/AuthContext";
import "./Producto.css";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiDetail } from "react-icons/bi";
import { RiExchangeBoxLine } from "react-icons/ri";

const styles = {
  button: {
    margin: "10px 0",
    fontSize: "0.9rem",
    display: "block",
    width: "100%"
  },
};

function Producto(props) {
  const { datos, handleDelete } = props;
  console.log(props.datos);

  return (
    <AuthContext.Consumer>
      {(context) => (
        <Card style={{ width: "16rem" }} className="card">
          <Card.Body>
            <Card.Title>{datos.title}</Card.Title>
            <hr />
            <ListGroup className="list-group-flush">
              <ListGroupItem><strong>Precio: </strong> ${datos.price}</ListGroupItem>
              <ListGroupItem><strong>Descripcion: </strong> {datos.description}</ListGroupItem>
              <ListGroupItem><strong>SKU: </strong>{datos.sku}</ListGroupItem>
            </ListGroup>
            <Card.Text
            >
           
            </Card.Text>
            <Button
              style={styles.button}
              variant="primary"
              as={Link}
              to={"/producto/" + datos.id}
            >
              <BiDetail /> Ver detalle
            </Button>
            {context.userLogin && (
              <>
                <Button
                  style={styles.button}
                  variant="danger"
                  onClick={(event) => handleDelete(datos.id)}
                >
                  <RiDeleteBinLine /> Eliminar
                </Button>
                <Button
                  style={styles.button}
                  variant="outline-info"
                  as={Link}
                  to={"/producto/modificar/" + datos.id}
                >
                  <RiExchangeBoxLine /> Modificar
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      )}
    </AuthContext.Consumer>
  );
}
export default Producto;
