import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import request from "../api";
import { ILaunchData, ISearchData } from '../types/launch'

const initialState: ILaunchData = {
    isLoading: false,
    error: '',
    searchData: { startDate: '', endDate: '' },
    docs: [],
    totalDocs: 0,
    offset: 0,
    limit: 10,
    totalPages: 0,
    page: 0,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: false,
    nextPage: false,
};

export const fetchLaunches = createAsyncThunk("fetchLaunches", async (searchData: ISearchData) => {
    const response = await request<ILaunchData>('POST', '/launches/query', {
        "query": {
          "date_utc": {
            "$gte": "2022-03-01T00:00:00.000Z",
            "$lte": "2022-03-31T00:00:00.000Z"
          }
       }
      })
    return response.data;
})

const launchSlice = createSlice({
    name: "launch",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchLaunches.pending, (state, action) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchLaunches.fulfilled, (state, action: PayloadAction<ILaunchData>) => {
            console.log(action.payload)
            state.isLoading = false;
            state.docs = action.payload.docs
        });
        builder.addCase(fetchLaunches.rejected, (state, action) => {
            state.error = 'Error'
        })
    },
})

export default launchSlice.reducer;
