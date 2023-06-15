import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { productsReducer } from "./slices/productsSlice";
import { cartReducer } from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import {
    persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const reducer = combineReducers({
    cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({
//     reducer: persistedReducer,
// })

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})