
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FeaturedProducts from './FeaturedProducts';
import Product from './Product';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={FeaturedProducts} />
          <Route exact path='/product/:id' component={Product} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;