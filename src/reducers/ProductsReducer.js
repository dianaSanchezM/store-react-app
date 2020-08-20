import { pathsData ,fetchData} from '../const';

function ProductsReducer(state, action) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return fetchData({ data: pathsData.LOAD_PRODUCTS });
    case 'LOAD_HISTORY':
      return fetchData({ data: pathsData.LOAD_HISTORY});
    /* case 'REDEEM':

        return state; */
    default:
      return [];
  }
}

export default ProductsReducer;
