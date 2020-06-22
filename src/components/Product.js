import React from "react";


const Product = (props) => (
  <div>
    <div id="box">
      <img
        src={props.imagesrc}
        alt="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-red-select-2020_GEO_EMEA?wid=470&hei=556&fmt=png-alpha&.v=1586574260374"
      ></img>
      <h2>{props.title}</h2>
      <p>{props.price}</p>
    </div>
  </div>
);


export default Product;
