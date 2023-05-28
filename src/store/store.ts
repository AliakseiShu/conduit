import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { configureStore } from "@reduxjs/toolkit";
import { feedApi } from "../modules/feed/api/repository";
import { setupListeners } from "@reduxjs/toolkit/query";


const store = configureStore({
  reducer: {
    [feedApi.reducerPath]:feedApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(feedApi.middleware),
})

setupListeners(store.dispatch)
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector