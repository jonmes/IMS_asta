import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from 'react-redux';

import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";

import Home from "./component/Home";
import ProductDetails from "./component/product/ProductDetails";
import Cart from "./component/cart/Cart";
import Shipping from "./component/cart/Shipping";
import ConfirmOrder from "./component/cart/ConfirmOrder";
import Payment from "./component/cart/Payment";
import OrderSuccess from "./component/cart/OrderSuccess";
import ListOrders from "./component/order/ListOrder";
import OrderDetails from "./component/order/OrderDetails";





// Auth or User Imports
import Login from "./component/login/Login";
import Logins from "./component/user/Logins";
import Register from "./component/user/Register";
import Profile from "./component/user/Profile";
import UpdateProfile from "./component/user/UpdateProfile";
import UpdatePassword from "./component/user/UpdatePassword";
import ForgotPassword from "./component/user/ForgotPassword";
import NewPassword from "./component/user/NewPassword";

// Admin Imports
import Dashboard from "./component/admin/Dashboard";
import ProductsList from "./component/admin/ProductsList";
import NewProduct from "./component/admin/NewProduct";
import UpdateProduct from "./component/admin/UpdateProduct";
import UsersList from "./component/admin/UsersList";
import UpdateUser from "./component/admin/UpdateUser";
import OrdersList from "./component/admin/OrdersList";
import ProcessOrder from "./component/admin/ProcessOrder";

import ProtectedRoute from "./component/route/ProtectedRoute";
import { loadUser, updatePassword } from "./actions/userActions";
import store from "./store";
import { updateProduct } from "./actions/productActions";



function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const { user, isAuthenticated, loading} = useSelector(state => state.auth);
  
  return (
    <Router>
        <Header />
      <div className="App">
        
          <div className="container container-fluid home-list">
            <Route path="/" component={Home} exact />
            <Route path="/product/:id" component={ProductDetails} exact />
            <Route path="/request" component={Cart} exact/>
            <Route path="/search/:keyword" component={Home} />
            <Route path="/login" component={Logins} />
            <Route path="/register" component={Register} />
            <Route path="/password/forgot" component={ForgotPassword} exact />
            <Route path="/password/reset/:token" component={NewPassword} exact />

            
            {/* Protected Routes */}
            <ProtectedRoute path="/me" component={Profile} exact />
            <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
            <ProtectedRoute path="/password/update" component={UpdatePassword} exact/>
            <ProtectedRoute path="/shipping" component={Shipping}/>
            <ProtectedRoute path="/order/confirm" component={ConfirmOrder}/>
            <ProtectedRoute path="/payment" component={Payment}/>
            <ProtectedRoute path="/success" component={OrderSuccess}/>
            <ProtectedRoute path="/orders/me" component={ListOrders}/>
            <ProtectedRoute path="/order/:id" component={OrderDetails}/>
            




            

          </div>
            <ProtectedRoute path="/dashboard" isAdmin={true} component={Dashboard} exact />
            <ProtectedRoute path="/admin/products" isAdmin={true} component={ProductsList} exact />
            <ProtectedRoute path="/admin/product" isAdmin={true} component={NewProduct} exact/>
            <ProtectedRoute path="/admin/product/:id" isAdmin={true} component={UpdateProduct} exact/>
            <ProtectedRoute path="/admin/users" isAdmin={true} component={UsersList} exact/>
            <ProtectedRoute path="/admin/user/:id" isAdmin={true} component={UpdateUser} exact/>
            <ProtectedRoute path="/admin/orders" isAdmin={true} component={OrdersList} exact/>
            <ProtectedRoute path="/admin/order/:id" isAdmin={true} component={ProcessOrder} exact/>





           {!loading && (!isAuthenticated || user.role !== 'admin') && (
            <Footer />
          )} 
        
      </div>
    </Router>
  );
}

export default App;
