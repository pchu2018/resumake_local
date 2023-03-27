import { combineReducers } from 'redux';
import resumeReducer from './resumeReducer';
// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  initialState: resumeReducer,
});

// make the combined reducers available for import
export default reducers;