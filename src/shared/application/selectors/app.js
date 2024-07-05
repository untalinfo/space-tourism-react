import { createSelector } from '@reduxjs/toolkit';

export const spaceState = (state) => {
	return state?.dataSpace;
};

export const getDestinations = createSelector(spaceState, (dataSpace) => {
	const { destinations } = dataSpace;
	return destinations;
});

export const getDestination = (destinationName) =>
	createSelector(spaceState, (dataSpace) => {
		const { destinations } = dataSpace;
		if (!destinationName) return null;
		return destinations.find((destination) => destination.name === destinationName);
	});

export const getCrew = createSelector(spaceState, (dataSpace) => {
	const { crew } = dataSpace;
	return crew;
});
export const getTechnology = createSelector(spaceState, (dataSpace) => {
	const { technology } = dataSpace;
	return technology;
});
