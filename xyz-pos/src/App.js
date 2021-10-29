// import logo from './logo.svg';
import React from 'react';
import Navbar from './components/navbar';
import LandingPage from './pages/LandingPage';
import {
  Switch,
  Route
} from "react-router-dom";

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
    </>
  );
}
