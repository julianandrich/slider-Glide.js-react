import React from 'react';
// import './ProductoPopular.css';

function ProductoPopular(props) {
  const {imagen, nombre, precio} = props;

  return(
    <div className="prod_popu_container">
      <a href="#">
        <div className="prod_popu_img">
          <img src={imagen} alt="" />
        </div>
        <div className="prod_popu_detalles">
          <p>{nombre}</p>
          <p>${precio}</p>
        </div>
      </a>
    </div>
  )
}
export default ProductoPopular;