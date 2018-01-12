import {CART} from '../constans';

const initialState={
  list:[]
};

export function cart(state=initialState,action){
  switch(action.type){
    case CART.SUCCESS_ADD_PRODUCT_CART:
      let finalList=state.list;
      finalList.push(action.payload);
      return Object.assign({},state,{list:finalList});
    break;
    case CART.SUCCESS_GET_CART:
      return Object.assign({},state,{list:action.payload});
    default:
      return state;
    break;
  }
};