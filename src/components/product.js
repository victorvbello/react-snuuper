import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showProducts} from '../actions';
import {PRODUCT_CATEGORIES} from '../constans';

class Product extends Component {

  componentWillMount(){
    this.props.showProducts();
  }

  renderUsersList(){
    return this.props.products.map((product)=>{
      return(
        <li key={product.id}>{product.name}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>User Listt</h2>
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
        showProducts:()=>dispatch(showProducts(PRODUCT_CATEGORIES.MOVIES))
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Product);
