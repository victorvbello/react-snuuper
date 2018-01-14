import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import {getProductCart} from '../actions/cart';

class Header extends Component {

  componentWillMount(){
    this.props.getProductCart();
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            SnuuperCart
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/products/electronicos'}>
              <NavItem> 
                Electrónicos
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/products/peliculas'}>
              <NavItem> 
                Películas
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/products/video-juegos'}>
              <NavItem> 
                Video Juegos
              </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to={'/shoppingCart'}>
              <NavItem>
                Total Productos <Badge>{this.props.totalProductCart}</Badge>
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    totalProductCart:state.cart.list.length,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductCart:()=>dispatch(getProductCart())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);