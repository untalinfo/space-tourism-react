import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const initialState = {
	destinations: [],
	crew: [],
	technology: [],
	error: null,
	loading: false,
};

export const fetchDataSpace = createAsyncThunk('data/fetchData', async () => {
	const response = await fetch('/data.json');
	const data = await response.json();
	return data;
});

const DataSpace = createSlice({
	name: 'dataSpace',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchDataSpace.fulfilled]: (state, action) => {
			state.destinations = action.payload.destinations;
			state.crew = action.payload.crew;
			state.technology = action.payload.technology;
			state.loading = false;
		},
		[fetchDataSpace.pending]: (state) => {
			state.loading = true;
		},
		[fetchDataSpace.rejected]: (state, action) => {
			state.error = action.error.message;
			state.loading = false;
		},
	},
});

export default DataSpace.reducer;
