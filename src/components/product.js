import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {getProducts} from '../actions/product';
import {addProductToCart} from '../actions/cart';
import ProductItem from './productItem';
import {transformCategory} from '../util';

class Product extends Component {

  constructor(){
    super();

    this.state={
      currentCategory:""
    };
  }

  init(category){
    const categoryParsed = category.replace('-', '_').toUpperCase();
    this.props.getProducts(categoryParsed);
    this.setState({
      currentCategory:transformCategory(category)
    });
  }

  componentWillReceiveProps(nextProps) {
    const { match } = nextProps;
    const { category } = match.params;
    if (category !== this.props.match.params.category) {
      this.init(category);
    }
  }

  componentWillMount(){
    const { match } = this.props;
    const { category } = match.params;
    this.init(category);
  }

  renderProductList(){
    return this.props.products.map((product)=>{
      let productCart={ id:product.id,
                        category:this.state.currentCategory,
                        name:product.name,
                        price:product.price
                      };
      return(
        <ProductItem 
          key={product.id}
          name={product.name}
          excerpt={product.excerpt}
          price={product.price}
          imgUrl={product.url}
          additemToCart={() => this.props.addProductToCart(productCart)}/>
      );
    });
  }

  renderNavButtons(){
    let prev=null;
    let next=null;
    if(this.props.prevCategory!=""){
      prev=<Link to={'/products/'+this.props.prevCategory}>prev</Link>;
    }
    if(this.props.nextCategory!=""){
      next=<Link to={'/products/'+this.props.nextCategory}>next</Link>;
    }else{
      next=<Link to={'/shoppingCart'}>buy</Link>;
    }
    return (
      <div>
        {prev} -----
        {next}
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Lista de Productos de la Categoria: {this.state.currentCategory}</h2>
        <ul>
          {this.renderProductList()}
        </ul>
        {this.renderNavButtons()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products:state.product.list,
    nextCategory:state.product.nextCategory,
    prevCategory:state.product.prevCategory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts:(category)=>dispatch(getProducts(category)),
    addProductToCart:(productCart)=>dispatch(addProductToCart(productCart))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Product);
