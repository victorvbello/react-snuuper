export const transformCategory=(category)=>{
    let result="";
    if(category!=undefined){
      result=category.replace('-', ' ').toLowerCase();
    }
    return result;
  }