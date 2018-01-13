import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
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
            <LinkContainer to={'/products/electronics'}>
              <NavItem> 
                Tecnología
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/products/movies'}>
              <NavItem> 
                Peliculas
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/products/video-games'}>
              <NavItem> 
                Video Juegos
              </NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            <LinkContainer to={'/shoppingCart'}>
              <NavItem>
                Total Productos ({this.props.totalProductCart})
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