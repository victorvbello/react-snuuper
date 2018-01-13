import {PRODUCT} from '../constans';

const initialState={
  list:[],
  nextCategory:"",
  prevCategory:""
};

export function product(state=initialState,action){
  let newState = [...state.list];
  switch(action.type){
    case PRODUCT.SUCCESS_GET_PRODUCT:
      return  {...state,...{list:action.payload}}
    break;
    case PRODUCT.SUCCESS_GET_NEXT_CATEGORY:
      return  {...state,...{nextCategory:action.payload}}
    break;
    case PRODUCT.SUCCESS_GET_PREV_CATEGORY:
      return  {...state,...{prevCategory:action.payload}}
    break;
    default:
      return state;
    break;
  }
};