import { type } from "os";
import { combineReducers } from "redux";
import productsReducer from "./productsReducer";

export const rootReducer = combineReducers(
    {
        allProducts: productsReducer,
    }
);

export type AppState = ReturnType<typeof rootReducer>