import {PRODUCT} from '../constans';

const initialState={
  list:[]
};

export function product(state=initialState,action){
  let newState = [...state.list];
  switch(action.type){
    case PRODUCT.SUCCESS_GET_PRODUCT:
      return  {...state,...{list:action.payload}}
    break;
    default:
      return state;
    break;
  }
};