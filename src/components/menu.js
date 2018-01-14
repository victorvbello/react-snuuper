import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem, Badge } from 'react-bootstrap';

const Menu = ({ totalProductCart }) => {
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
              Total Productos <Badge>{totalProductCart}</Badge>
            </NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>  
  );
};

export default Menu;