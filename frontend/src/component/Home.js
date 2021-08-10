import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

import "./homelist.css";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product";
import Loader from "./layouts/Loader";

const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();

  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(getProducts(currentPage));
  }, [dispatch, currentPage]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber)
  }

  return (
    <Fragment>
      
      {loading ? (
        <Loader />
      ) : (
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
            <span className="request"> Request </span>
          </a>
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}

            {resPerPage <= productsCount && (

            <div className="d-flex justify-content-center mt-5">
              <Pagination
              activePage={currentPage}
              itemsCountPerPage={resPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText={'>'}
              prevPageText={'<'}
              firstPageText={'First'}
              lastPageText={'Last'}
              itemClass="page-item"
              linkClass="page-link"
              
              />
            </div>

            )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
