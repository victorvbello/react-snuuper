import {PRODUCT,PRODUCT_CATEGORIES} from '../constans';
import {ProductApi} from '../api';
import {transformCategory} from '../util';


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
  let arrayCategory=Object.keys(PRODUCT_CATEGORIES);
  let index=arrayCategory.indexOf(currentCategory);
  let nextCategory="";
  if(index!=-1 && index<arrayCategory.length-1){
    nextCategory=arrayCategory[index+1];
  }
  return {
    type: PRODUCT.SUCCESS_GET_NEXT_CATEGORY,
    payload:transformCategory(nextCategory)
  };
}

const successPrevCategory = (currentCategory) => {
  let arrayCategory=Object.keys(PRODUCT_CATEGORIES);
  let index=arrayCategory.indexOf(currentCategory);
  let prevCategory="";
  if(index!=-1 && index>0){
    prevCategory=arrayCategory[index-1];
  }
  return {
    type: PRODUCT.SUCCESS_GET_PREV_CATEGORY,
    payload:transformCategory(prevCategory)
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