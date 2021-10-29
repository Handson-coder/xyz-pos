// import logo from './logo.svg';
import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/navbar';
import LandingPage from './pages/LandingPage';
import Footer from './components/footer';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/">
          <Navbar></Navbar>
          <LandingPage></LandingPage>
          <Footer />
        </Route>
      </Switch>
    </>
  );
}
