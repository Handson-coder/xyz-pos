// import logo from './logo.svg';
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/footer';

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        {/* <Route path="/create-user">
          <FormCreateUser></FormCreateUser>
        </Route>
        <Route path="/create-product">
          <FormCreateProduct></FormCreateProduct>
        </Route>
        <Route path="/formedit/:id">
          <FormEdit></FormEdit>
        </Route>
        <Route path="/signin">
          <FormLogin></FormLogin>
        </Route> */}
        <Route path="/">
          <LandingPage></LandingPage>
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
