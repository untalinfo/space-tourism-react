import { combineReducers } from 'redux';
import example, { initialState as exampleInitial } from '../../../domains/exampleDomain/application/slices/example';
import data_space, { initialState as data_spaceInitial } from '../slices/app';

export const initialStates = {
	example: exampleInitial,
	data_space: data_spaceInitial,
};

export default combineReducers({
	example,
	data_space,
});
