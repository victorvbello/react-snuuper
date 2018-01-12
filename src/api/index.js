import {PRODUCT_CATEGORIES} from '../constans';

class ProductApi {
  static list(category) {
      let url="";
      switch(category){
        case PRODUCT_CATEGORIES.VIDEO_GAMES:
          url="/dummy/videogames.json";
        break;
        case PRODUCT_CATEGORIES.MOVIES:
          url="/dummy/movies.json";
        break;
        case PRODUCT_CATEGORIES.ELECTRONICS:
          url="/dummy/electronic.json";
        break;
      }
      return fetch(url).then(response => {
      return response.json();
    }).then(listPayload => {
      return listPayload;
    });
  }
}

export default ProductApi;