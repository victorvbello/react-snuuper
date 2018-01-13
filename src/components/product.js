import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getProducts} from '../actions/product';
import {addProductToCart} from '../actions/cart';
import ProductItem from './productItem';

class Product extends Component {

  constructor(){
    super();

    this.state={
      category:""
    };
  }

  init(category){
    const categoryParsed = category.replace('-', '_').toUpperCase();
    this.setState({
      category:category.replace('-', ' ').toLowerCase()
    });
    this.props.getProducts(categoryParsed);
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
                        category:this.state.category,
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

  render() {
    return (
      <div>
        <h2>Lista de Productos de la Categoria: {this.state.category}</h2>
        <ul>
          {this.renderProductList()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products:state.product.list
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts:(category)=>dispatch(getProducts(category)),
    addProductToCart:(productCart)=>dispatch(addProductToCart(productCart))
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Product);
