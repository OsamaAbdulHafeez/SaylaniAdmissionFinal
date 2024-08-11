import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from './UserReducers.js'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const rootReducer = combineReducers({ user: userSlice})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store=configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),

})
let persistor = persistStore(store)
export { store,persistor }