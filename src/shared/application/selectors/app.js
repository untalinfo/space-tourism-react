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

export const getCrewMember = (crewMember) =>
	createSelector(spaceState, (dataSpace) => {
		const { crew } = dataSpace;
		if (!crew) return null;
		return crew.find((destination) => destination.name === crewMember);
	});

export const getTechnologies = createSelector(spaceState, (dataSpace) => {
	const { technology } = dataSpace;
	return technology;
});

export const getTechnology = (techName) =>
	createSelector(spaceState, (dataSpace) => {
		const { technology } = dataSpace;
		if (!technology) return null;
		return technology.find((tech) => tech.name === techName);
	});
