import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  viewToggle: true,
  headerModal: false,
  articleModal: false,
  loading: false,
  newsLenght: 0,
  newsOutlet: "bbc",
};

export const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setViewToggle: (state, action: PayloadAction<boolean>) => {
      state.viewToggle = action.payload;
    },
    toggleHeaderModal: (state, action: PayloadAction<boolean>) => {
      state.headerModal = action.payload;
    },
    toggleArticleModal: (state, action: PayloadAction<boolean>) => {
      state.articleModal = action.payload;
    },
    setLoadingTrue: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setLoadingFalse: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setNewsLenght: (state, action: PayloadAction<number>) => {
      state.newsLenght = action.payload;
    },
    setNewsOutlet: (state, action: PayloadAction<string>) => {
      state.newsOutlet = action.payload;
    },
  },
});
export const {
  setViewToggle,
  toggleHeaderModal,
  toggleArticleModal,
  setLoadingTrue,
  setLoadingFalse,
  setNewsLenght,
  setNewsOutlet,
} = appSlice.actions;

export default appSlice.reducer;
