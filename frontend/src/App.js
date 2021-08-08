import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import Home from "./component/Home";

const List = styled.div`
  margin-top: 50px;
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <List>
        <div className="container container-fluid home-list">
          <Route path="/" component={Home} exact/>
          </div>
        </List>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
