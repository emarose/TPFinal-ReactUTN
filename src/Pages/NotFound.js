import React from "react";
function NotFound() {
  const NotFoundWrapper = {
    minHeight: "68vh",
    display: "grid",
    placeItems: "center",
  };

  return (
    <>
      <div style={NotFoundWrapper}>
        <h1>SITIO NO ENCONTRADO</h1>
      </div>
    </>
  );
}
export default NotFound;
