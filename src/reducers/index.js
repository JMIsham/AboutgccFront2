import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({

  form : formReducer,
  fuelSavings,
  routing: routerReducer
});

export default rootReducer;
