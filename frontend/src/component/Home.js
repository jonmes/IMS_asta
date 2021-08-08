import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./homelist.css";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product";
import Loader from './layouts/Loader'

const Home = () => {
  const dispatch = useDispatch();

  const { loading, products, error, productsCount } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Fragment>
      {loading? <Loader/>: (
        <Fragment>

          <MetaData title={"Home"} />
          <a href="/" class="list list-group-item-dark">
            <span className="number"> No </span>
            <span className="unit"> Unit </span>
            <span className="name"> Name </span>
            <span className="category"> Category </span>
            <span className="total"> Stock </span>
            <span className="condition"> Condition </span>
            <span className="last-movment"> Last Data of Movement </span>
            <span className="request">Request</span>
          </a>
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
