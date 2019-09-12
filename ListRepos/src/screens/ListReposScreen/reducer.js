import {GET_REPOS,GET_REPOS_SUCCESS,GET_REPOS_FAIL} from './action';



const initialState = { repos: [],loading:false};
export function getListRepos(state = initialState, action){
    switch (action.type) {
      case GET_REPOS:
        return { ...state, loading: true };
      case GET_REPOS_SUCCESS:
        return {  loading: false, repos: state.repos.concat(action.payload.data) };
      case GET_REPOS_FAIL:
         return { ...state, loading: false, error: 'Error getting repos info' };
      default:
        return state;
    }
}

  export function listRepos(username) {
    return {
      type: GET_REPOS,
      payload: {
        request: {
          url: `/users/${username}/repos`
        }
      }
    };
  }
  export function listReposPage(username,page) {
    return {
      type: GET_REPOS,
      payload: {
        request: {
          url: `/users/${username}/repos?page=${page}`
        }
      }
    };
  }
