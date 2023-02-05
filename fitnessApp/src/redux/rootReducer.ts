import {combineReducers} from 'redux';
import authentication from './authentication';

const rootReducer = combineReducers({
  // Add your reducers here
  authentication: authentication,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
