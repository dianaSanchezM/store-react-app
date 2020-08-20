import { pathsData ,fetchData} from '../const';

async function UserReducer(state, action) {
    switch (action.type) {
      case 'LOAD_USER':
        const data = await fetchData({ data: pathsData.LOAD_USER});
        console.log('data',data);
        console.log(data.name);
        console.log(data.points)
        return state;
     /*  case 'POINTS':
        return fetchData({ data: pathsData.POINTS, body:{ amount: action.payload}}); */
      default:
        return {};
    }
  }
  
  export default UserReducer;