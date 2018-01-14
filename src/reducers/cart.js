import {CART} from '../constans';

const initialState={
  list:[],
  totalPrice:0,
  send:false
};

export function cart(state=initialState,action){
  let newList = [...state.list];
  let newTotalPrice = state.totalPrice;
  switch(action.type){
    case CART.SUCCESS_ADD_PRODUCT_CART:
      const product=action.payload
      if(newList.find((e)=>{return e.id==product.id})==undefined){
        newList.push(product);
        newTotalPrice+=product.price;
      }
      return { ...state, ...{ list: newList,totalPrice:newTotalPrice,send:initialState.send} };
    break;
    case CART.SUCCESS_GET_CART:
      return {...state,...{list:newList,totalPrice:newTotalPrice}}
    break;
    case CART.SUCCESS_DELETE_PRODUCT_CART:
      const productId= action.payload;
      newList = newList.filter((currentProduct) => {
        let filter=currentProduct.id !== productId;
        if(!filter){
          newTotalPrice=newTotalPrice-currentProduct.price;
        }
        return filter;
      });
      return {...state,...{list:newList,totalPrice:newTotalPrice}}
    break;
    case CART.SUCCESS_SEND_CART:
      console.log("Compra Realizada");
      console.log(newList);
      return {...state,...{list:newList,totalPrice:newTotalPrice,send:action.payload}}
    break;
    case CART.SUCCESS_CLEAR_CART:
      return {...state,...{list:initialState.list,totalPrice:initialState.totalPrice}}
    break;
    default:
      return state;
    break;
  }
};