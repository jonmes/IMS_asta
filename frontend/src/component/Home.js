import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";
import styled from "styled-components";

import "./homelist.css";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productActions";
import Product from "./product/Product";
import Loader from "./layouts/Loader";

const MarginTop = styled.div`
  margin-top: 50px;
`;

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryOfAsset, setcategoryOfAsset] = useState("");

  const categories = ["Electronics", "Furniture", "Stationary"];

  const dispatch = useDispatch();

  const { loading, products, error, productsCount, resPerPage } = useSelector(
    (state) => state.product
  );

  const keyword = match.params.keyword;

  useEffect(() => {
    dispatch(getProducts(keyword, currentPage, categoryOfAsset));
  }, [dispatch, keyword, currentPage, categoryOfAsset]);

  function setCurrentPageNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <MarginTop>
      <Fragment style={{ marginTop: "50px" }}>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <MetaData title={"Home"} />
            {keyword ? <></>: (
            <a href="#!" class="list list-group-item-dark">
              <span className="number"> No </span>
              <span className="unit"> Unit </span>
              <span className="name"> Name </span>
              <span className="category"> Category </span>
              <span className="total"> Stock </span>
              <span className="condition"> Condition </span>
              <span className="last-movment"> Last Data of Movement </span>
              <span className="request"> Detail </span>
            </a>)
}

          {keyword ? (
            <Fragment>
              

{/*     ======================  Filter By Category   ======================= */}
                  <div className="mt-5">
                    <h4 className="mb-3">Categories</h4>

                    <ul className="pl-0">
                      {categories.map((categoryOfAsset) => (
                        <li
                          style={{
                            cursor: "pointer",
                            listStyleType: "none",
                          }}
                          key={categoryOfAsset}
                          onClick={() => setcategoryOfAsset(categoryOfAsset)}
                        >
                          {categoryOfAsset}
                        </li>
                      ))}
                    </ul>
                  </div>

     

              <a href="#!" class="list list-group-item-dark">
              <span className="number"> No </span>
              <span className="unit"> Unit </span>
              <span className="name"> Name </span>
              <span className="category"> Category </span>
              <span className="total"> Stock </span>
              <span className="condition"> Condition </span>
              <span className="last-movment"> Last Data of Movement </span>
              <span className="request"> Detail </span>
            </a>


              <div className="col-10 col-md-12">
                <div className="row">
                  {products.map(product => (
                    <Product key={product._id} product={product} col={4}/>
                  ))}
                </div>
              </div>


            </Fragment>
          ): (
            products.map(product => (
              <Product key={product._id} product={product} col={4}/>
            ))
          )}



{/*  =============== Working Part  */}
            {/* {products &&
              products.map((product) => (
                  <Product key={product._id} product={product} />
              ))} */}

              {/*  ======== Ends Here ======================================== */}

            {resPerPage <= productsCount && (
              <div className="d-flex justify-content-center mt-5">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText={">"}
                  prevPageText={"<"}
                  firstPageText={"First"}
                  lastPageText={"Last"}
                  itemClass="page-item"
                  linkClass="page-link"
                />
              </div>
            )}
          </Fragment>
        )}
      </Fragment>
    </MarginTop>
  );
};

export default Home;
