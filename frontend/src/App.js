import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";

import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";

import Home from "./component/Home";

import Login from "./component/login/Login";
import Logins from "./component/user/Logins";
import Register from "./component/user/Register";
import Profile from "./component/user/Profile";
import UpdateProfile from "./component/user/UpdateProfile";
import UpdatePassword from "./component/user/UpdatePassword";


import ProtectedRoute from "./component/route/ProtectedRoute";
import { loadUser, updatePassword } from "./actions/userActions";
import store from "./store";

const List = styled.div`
  margin-top: 50px;
`;

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <List>
          <div className="container container-fluid home-list">
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Logins} />
            <Route path="/register" component={Register} />
            <ProtectedRoute path="/me" component={Profile} exact/>
            <ProtectedRoute path="/me/update" component={UpdateProfile} exact/>
            <ProtectedRoute path="/password/update" component={UpdatePassword} exact/>
          </div>
        </List>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
