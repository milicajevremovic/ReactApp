import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers/index";
import thunk from "redux-thunk";


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || (window as any).compose;

export const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(thunk)));
