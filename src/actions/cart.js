import {CART} from '../constans';

//LIST

const errorOnGetCart = (error) => {
  return {
    type: CART.ERROR_GET_CART,
    payload:error
  };
}

const loadingCart = (bool) => {
  return {
    type: CART.LOADING_CART,
    payload: bool
  };
}

const successCart = (listProduct) => {
  return {
    type: CART.SUCCESS_GET_CART,
    payload:listProduct
  };
}

//ADD

const errorOnAddProductCart = (error) => {
  return {
    type: CART.ERROR_ADD_PRODUCT_CART,
    payload:error
  };
}

const loadingAddProductCart = (bool) => {
  return {
    type: CART.LOADING_ADD_PRODUCT_CART,
    payload: bool
  };
}

const successAddProductCart = (productCart) => {
  return {
    type: CART.SUCCESS_ADD_PRODUCT_CART,
    payload:productCart
  };
}

//DELETE

const errorOnDeleteProductCart = (error) => {
  return {
    type: CART.ERROR_DELETE_PRODUCT_CART,
    payload:error
  };
}

const loadingDeleteProductCart = (bool) => {
  return {
    type: CART.LOADING_DELETE_PRODUCT_CART,
    payload: bool
  };
}

const successDeleteProductCart = (bool) => {
  return {
    type: CART.SUCCESS_DELETE_PRODUCT_CART,
    payload:bool
  };
}


export const addProductToCart=(product)=>{
  
  return (dispatch, getState)=>{ 
    dispatch(loadingAddProductCart(true));
    if(getState().cart.list.indexOf(product)==-1){
      dispatch(successAddProductCart(product));
      dispatch(loadingAddProductCart(false));
    }
  }
}

export const getProductCart=()=>{
  
  return (dispatch, getState)=>{ 
    dispatch(loadingCart(true));
    if(getState().cart.list.length>0){
      dispatch(successCart(getState().cart.list));
      dispatch(loadingCart(false));
    }
  }
}

export const deleteProductCart=(itemIndex)=>{
  
  return (dispatch, getState)=>{ 
    dispatch(loadingDeleteProductCart(true));
    if(getState().cart.list.length>0){
      if(getState().cart.list[itemIndex]!==undefined){
        getState().cart.list.splice(itemIndex, 1);
        dispatch(successDeleteProductCart(true));
        dispatch(loadingDeleteProductCart(false));
      }
    }
  }
}