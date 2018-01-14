import {PRODUCT_CATEGORIES} from '../constans';

export class ProductApi {
  static list(category) {
    let url="";
    switch(category){
      case PRODUCT_CATEGORIES.VIDEO_JUEGOS:
        url="/dummy/videogames.json";
      break;
      case PRODUCT_CATEGORIES.PELICULAS:
        url="/dummy/movies.json";
      break;
      case PRODUCT_CATEGORIES.ELECTRONICOS:
        url="/dummy/electronics.json";
      break;
    }
    return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(listPayload => {
      return listPayload;
    });
  }
};

export class CartApi{
  static save(items){
    return new Promise((resolve, reject) => {
      setTimeout(function(){
        resolve(items);
      }, 250);
    })
    .then(response => {
      return response;
    })
    .then(error => {
      return error;
    });
  }
};