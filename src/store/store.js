import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
  // add other slices here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
