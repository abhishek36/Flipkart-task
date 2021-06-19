import React from "react";
import "../styles.css";
function Product(props) {
  return (
    <div className="product">
      <img src={props.children.imageURL} alt={props.children.Product} />
      <h5>Name : {props.children.name}</h5>
      <h5>Price : {props.children.price}</h5>
      <h5>gender : {props.children.gender}</h5>
      <h5>size : {props.children.size}</h5>
    </div>
  );
}

export default Product;
