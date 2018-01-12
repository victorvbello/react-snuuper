import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions/product';
import {addProductToCart} from '../actions/cart';

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

  renderUsersList(){
    return this.props.products.map((product)=>{
      let productCart={ id:product.id,
                        category:this.state.category,
                        name:product.name,
                        price:product.price
                      };
      return(
        <li key={product.id}>{product.name} 
          <button onClick={() => this.props.addProductToCart(productCart)}>
            add
          </button>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Lista de Productos de la Categoria: {this.state.category}</h2>
        <ul>
          {this.renderUsersList()}
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
