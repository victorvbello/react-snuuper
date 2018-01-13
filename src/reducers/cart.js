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
      newList.push(product);
      newTotalPrice+=product.price;
      return { ...state, ...{ list: newList,totalPrice:newTotalPrice} };
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
      return {...state,...{list:newList,totalPrice:newTotalPrice,send:action.payload}}
    break;
    case CART.SUCCESS_CLEAR_CART:
      return {...state,...initialState}
    break;
    default:
      return state;
    break;
  }
};