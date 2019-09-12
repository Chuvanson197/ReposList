import { combineReducers } from 'redux';

import { getListRepos } from './screens/ListReposScreen/reducer';
import { getListStar } from './screens/ListStarScreen/reducer'

const rootReducers = combineReducers({
    getListRepos,getListStar
});
export default rootReducers;