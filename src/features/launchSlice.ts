import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import moment from "moment";
import request from "../api";
import { ILaunch, ILaunchData, ISearchData } from '../types/launch'

const initialState: ILaunchData = {
    isLoading: false,
    error: '',
    searchData: { startDate: moment().toISOString(), endDate: moment().add(1, 'days').toISOString() },
    docs: [],
    totalDocs: 0,
    offset: 0,
    limit: 12,
    totalPages: 0,
    page: 1,
    pagingCounter: 1,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: false,
    nextPage: false,
};

export const fetchLaunches = createAsyncThunk("fetchLaunches", async (args, { getState }) => {
    const state: any = getState();
    const response = await request.post<ILaunchData>('/v4/launches/query', {
        "query": {
            "date_utc": {
                "$gte": state.launch.searchData.startDate,
                "$lte": state.launch.searchData.endDate
            }
        },
        "options":{
            "limit":state.launch.limit,
            "sort":{
               "flight_number":"asc"
            },
            "page": state.launch.page
         }
    })
    return response.data;
})

const launchSlice = createSlice({
    name: "launch",
    initialState,
    reducers: {
        setSearchData(state, action: PayloadAction<ISearchData>) {
            state.searchData = { ...action.payload, startDate: new Date(action.payload.startDate).toISOString(), endDate: new Date(action.payload.endDate).toISOString() }
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchLaunches.pending, (state, action) => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(fetchLaunches.fulfilled, (state, action: PayloadAction<ILaunchData>) => {
            state.docs = state.docs.concat(...action.payload.docs)
            state.totalDocs = action.payload.totalDocs
            state.totalPages = action.payload.totalPages
            state.nextPage = action.payload.nextPage
            state.hasNextPage = action.payload.hasNextPage
            state.page = action.payload.page
            state.pagingCounter = action.payload.pagingCounter
            state.isLoading = false;
            
        });
        builder.addCase(fetchLaunches.rejected, (state, action) => {
            state.error = 'Error'
            state.isLoading = false;
        })
    },
})
export const { setSearchData } = launchSlice.actions;

export default launchSlice.reducer;
