import React from "react";
import styled from 'styled-components';


const Request = styled.a`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 10px;
    overflow: hidden;
    transition: 0.2s;
    border-radius: 10px;
    justify-content: center;
    &:hover{
        color: #00570e;
        background: #21f344 !important;
        box-shadow: 0 0 10px #21f344, 0 0 40px #21f344, 0 0 80px #21f344;
        cursor: pointer;
    }

`

const Product = ({ product }) => {
  return <a
  href="/"
  class="list-group-item list-group-item-action list-group-item-dark"
  key={product._id}
>
  <span className="number"> {product.id} </span>
  <span className="unit"> {product.unitOfItem} </span>
  <span className="name"> {product.name} </span>
  <span className="category"> {product.categoryOfAsset} </span>
  <span className="total"> {product.count} </span>
  <span className="condition"> {product.conditiontoGoods} </span>
  <span className="last-movment"> {product.LastDateOfMovment} </span>
  <Request href={`/product/${product._id}`}>Request</Request>
</a>;
};

export default Product;
