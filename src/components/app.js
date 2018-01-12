import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Product from './product';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
           <h2>Mi Carrito de Compras</h2>
           <ul>
              <li><Link to={'/video-games'}>Video Juegos</Link></li>
              <li><Link to={'/user'}>Peliculas</Link></li>
              <li><Link to={'/user'}>Tecnología</Link></li>
           </ul>
           <hr />
           
           <Switch>
              <Route exact path='/video-games' component={Product} />
           </Switch>
        </div>
     </Router>
    );
  }
}

export default App;
