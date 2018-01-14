import {CART} from '../constans';
import {CartApi} from '../api';

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

const successCart = (bool) => {
  return {
    type: CART.SUCCESS_GET_CART,
    payload:bool
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


const successDeleteProductCart = (productId) => {
  return {
    type: CART.SUCCESS_DELETE_PRODUCT_CART,
    payload:productId
  };
}

//SEND

const errorSendCart=(error)=>{
  return {
    type:CART.ERROR_SEND_CART,
    payload:error
  }
}

const loadingSendCart=(bool)=>{
  return {
    type:CART.LOADING_SEND_CART,
    payload:bool
  }
}

const succesSendCart=(bool)=>{
  return {
    type:CART.SUCCESS_SEND_CART,
    payload:bool
  }
}

const successClearCart=(bool)=>{
  return {
    type:CART.SUCCESS_CLEAR_CART,
    payload:bool
  }
}

export const addProductToCart=(product)=>{
  
  return (dispatch, getState)=>{ 
    dispatch(loadingAddProductCart(true));
    dispatch(successAddProductCart(product));
    dispatch(loadingAddProductCart(false));
  }
}

export const getProductCart=()=>{
  
  return (dispatch, getState)=>{ 
    dispatch(loadingCart(true));
    dispatch(successCart(true));
    dispatch(loadingCart(false));
  }
}

export const deleteProductCart=(productId)=>{
  
  return (dispatch, getState)=>{
    dispatch(loadingDeleteProductCart(true));
    dispatch(successDeleteProductCart(productId));
    dispatch(loadingDeleteProductCart(false));
  }
}

export const sendCart=(listProducts)=>{

 return (dispatch, getState)=>{
  dispatch(loadingSendCart(true));
  return CartApi.save(listProducts)
    .then(result => {
      dispatch(succesSendCart(true));
      dispatch(successClearCart(true));
      dispatch(loadingSendCart(false));
    })
    .catch(error=>{
      dispatch(errorSendCart(error));
      dispatch(loadingSendCart(false));
    })
  }
}