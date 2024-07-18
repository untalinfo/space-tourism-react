import { combineReducers } from 'redux';
import example from '../../../domains/exampleDomain/application/slices/example';
import dataSpace from '../slices/app';

export default combineReducers({
	example,
	dataSpace,
});
