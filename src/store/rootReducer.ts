import { combineReducers } from '@reduxjs/toolkit';
import ripos from './riposSlice';

/**
 * @description Aggregate all reducers into a root reducer
 */
const rootReducer = combineReducers({
  ripos
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
