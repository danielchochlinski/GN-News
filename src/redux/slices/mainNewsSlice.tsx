// import {
//   createSlice,
//   createAsyncThunk,
//   isRejectedWithValue,
// } from "@reduxjs/toolkit";
// import axios from "axios";
// const GET_NEWS_URL =
//   "GET https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8686a640e65141598288803867bef959";
// const getNews = createAsyncThunk("news/getNews", async () => {
//   try {
//     const response = await axios.get(GET_NEWS_URL);
//     return [...response.data];
//   } catch (err: any) {
//     return err.message;
//   }
// });
// const mainNewsSlice = createSlice({
//   name: "mainNews",
//   initialState: {
//     data: [],
//     isSuccess: false,
//     message: "",
//     loading: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {},
// });
export const test = {};
