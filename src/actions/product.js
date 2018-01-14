import {PRODUCT,PRODUCT_CATEGORIES} from '../constans';
import {ProductApi} from '../api';


const errorOnGetProducts = (error) => {
  return {
    type: PRODUCT.ERROR_GET_PRODUCT,
    payload:error
  };
}

const loadingProducts = (bool) => {
  return {
    type: PRODUCT.LOADING_PRODUCT,
    payload: bool
  };
}

const successProducts = (products) => {
  return {
    type: PRODUCT.SUCCESS_GET_PRODUCT,
    payload:products
  };
}

//wizard

const successNextCategory = (currentCategory) => {
  return {
    type: PRODUCT.SUCCESS_GET_NEXT_CATEGORY,
    payload:currentCategory
  };
}

const successPrevCategory = (currentCategory) => {
  return {
    type: PRODUCT.SUCCESS_GET_PREV_CATEGORY,
    payload:currentCategory
  };
}

export const getProducts=(categoryName)=>{
 return (dispatch, getState)=>{
  dispatch(loadingProducts(true));
  return ProductApi.list(categoryName)
    .then(product => {
      dispatch(successProducts(product.items));
      dispatch(successNextCategory(categoryName));
      dispatch(successPrevCategory(categoryName));
      dispatch(loadingProducts(false));
    })
    .catch(error=>{
      dispatch(errorOnGetProducts(error));
      dispatch(loadingProducts(false));
    })
  }
};