import { GET_STAR,GET_STAR_SUCCESS,GET_STAR_FAIL,GET_STAR_LOADMORE } from './action'

const initialState = { stars: [] ,loading:false};
export function getListStar(state = initialState, action){
    switch (action.type) {
        case GET_STAR:
          return { ...state, loading: true };
        case GET_STAR_SUCCESS:
          return{...state,loading:false,stars:action.payload.data}
        case GET_STAR_LOADMORE:
          return{...state,loading:false,stars: state.stars.concat(action.payload.data)}
        case GET_STAR_FAIL:
          return { ...state, loading: false, error: 'Error getting star info' };
        default:
          return state;

    }
}

export function listStar(full_name) {
    return {
      type: GET_STAR,
      payload: {
        request: {
          url: `/repos/${full_name}/stargazers`
        }
      }
    };
  }
  export function listStarPage(full_name,page) {
    return {
      type: GET_STAR,
      payload: {
        request: {
          url: `/repos/${full_name}/stargazers?page=${page}`
        }
      }
    };
  }