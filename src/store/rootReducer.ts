import { combineReducers } from '@reduxjs/toolkit';
import matchesReducer from './reducers/matchesSlice';
import errorReducer from './reducers/errorSlice';
import loadingReducer from './reducers/loadingSlice';

const rootReducer = combineReducers({
    matches: matchesReducer,
    error: errorReducer,
    loading: loadingReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>; 