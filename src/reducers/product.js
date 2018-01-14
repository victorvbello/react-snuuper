import { PRODUCT, PRODUCT_CATEGORIES } from '../constans';

const initialState={
  list:[],
  nextCategory:"",
  prevCategory:""
};

const arrayCategory=Object.keys(PRODUCT_CATEGORIES);

export function product(state=initialState,action){
  let newState = [...state.list];
  let currentCategory="";
  let index=0;
  switch(action.type){
    case PRODUCT.SUCCESS_GET_PRODUCT:
      return  {...state,...{list:action.payload}}
    break;
    case PRODUCT.SUCCESS_GET_NEXT_CATEGORY:
      currentCategory=action.payload;
      index=arrayCategory.indexOf(currentCategory);
      let nextCategory="";
      if(index!=-1 && index<arrayCategory.length-1){
        nextCategory=arrayCategory[index+1];
      }
      return  {...state,...{nextCategory:nextCategory.replace('_', '-').toLowerCase()}}
    break;
    case PRODUCT.SUCCESS_GET_PREV_CATEGORY:
      currentCategory=action.payload;
      index=arrayCategory.indexOf(currentCategory);
      let prevCategory="";
      if(index!=-1 && index>0){
        prevCategory=arrayCategory[index-1];
      }
      return  {...state,...{prevCategory:prevCategory.replace('_', '-').toLowerCase()}}
    break;
    default:
      return state;
    break;
  }
};