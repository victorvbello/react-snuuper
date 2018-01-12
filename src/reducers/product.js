import {PRODUCT} from '../constans';

const initialState={
  list:[]
};

export function product(state=initialState,action){
  switch(action.type){
    case PRODUCT.SUCCESS_GET_PRODUCT:
      return Object.assign({},state,{list:action.payload});
    break;
    default:
      return state;
    break;
  }
};