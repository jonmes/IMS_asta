import React, { Fragment } from "react";
import styled from "styled-components";
import  './homelist.css';
import MetaData from "./layouts/MetaData";

const Home = () => {
  return (   <Fragment>
   <MetaData title={'Home'}/>
      <a href="/" class="list-group-item list-group-item-action list-group-item-dark">
        <span className="number">No</span>
        <span className="unit">Unit</span>
        <span className="category">Category</span>
        <span className="total">Total</span>
        <span className="condition">Condition</span>
        <span className="last-movment">Last Data of Movement</span>
      </a>
      <a href="/" class="list-group-item list-group-item-action list-group-item-dark">
        <span className="number">No</span>
        <span className="unit">Unit</span>
        <span className="category">Category</span>
        <span className="total">Total</span>
        <span className="condition">Condition</span>
        <span className="last-movment">Last Data of Movement</span>
      </a>
      <a href="/" class="list-group-item list-group-item-action list-group-item-dark">
        <span className="number">No</span>
        <span className="unit">Unit</span>
        <span className="category">Category</span>
        <span className="total">Total</span>
        <span className="condition">Condition</span>
        <span className="last-movment">Last Data of Movement</span>
      </a>
</Fragment>
  );
};

export default Home;

