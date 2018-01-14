import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Header from './header';
import Content from './content';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container-fluid">
           <Header/>
           <Content/>
        </div>
     </Router>
    );
  }
}

export default App;
