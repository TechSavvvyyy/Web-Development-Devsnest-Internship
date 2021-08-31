
import './App.css';
import Header from './containers/header';
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/productListing";
import ProductDetails from './containers/productDetails';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Anime from 'react-animejs';

class App extends React.Component{
  componentDidMount()
  {
    let {animeProps}={
      rotate : 1080,
      easing : 'easeInOutCubic',
  
    };
    function fu(){
      <Anime
         {...animeProps}
        >
        </Anime>
        console.log('hi')
      }
 console.log(document.getElementsByClassName('.card'))

 
  }

render() 
{
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={ProductListing} />
            <Route
              path="/product/:productId"
              exact
              component={ProductDetails}
            />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </div>
    );
}
}
export default App;